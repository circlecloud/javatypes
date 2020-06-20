declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                /**
                 * An implementation of {@link ReadWriteLock} supporting similar
                 * semantics to {@link ReentrantLock}.
                 * <p>This class has the following properties:
                 * <ul>
                 * <li><b>Acquisition order</b>
                 * <p>This class does not impose a reader or writer preference
                 * ordering for lock access.  However, it does support an optional
                 * <em>fairness</em> policy.
                 * <dl>
                 * <dt><b><i>Non-fair mode (default)</i></b>
                 * <dd>When constructed as non-fair (the default), the order of entry
                 * to the read and write lock is unspecified, subject to reentrancy
                 * constraints.  A nonfair lock that is continuously contended may
                 * indefinitely postpone one or more reader or writer threads, but
                 * will normally have higher throughput than a fair lock.
                 * <dt><b><i>Fair mode</i></b>
                 * <dd>When constructed as fair, threads contend for entry using an
                 * approximately arrival-order policy. When the currently held lock
                 * is released, either the longest-waiting single writer thread will
                 * be assigned the write lock, or if there is a group of reader threads
                 * waiting longer than all waiting writer threads, that group will be
                 * assigned the read lock.
                 * <p>A thread that tries to acquire a fair read lock (non-reentrantly)
                 * will block if either the write lock is held, or there is a waiting
                 * writer thread. The thread will not acquire the read lock until
                 * after the oldest currently waiting writer thread has acquired and
                 * released the write lock. Of course, if a waiting writer abandons
                 * its wait, leaving one or more reader threads as the longest waiters
                 * in the queue with the write lock free, then those readers will be
                 * assigned the read lock.
                 * <p>A thread that tries to acquire a fair write lock (non-reentrantly)
                 * will block unless both the read lock and write lock are free (which
                 * implies there are no waiting threads).  (Note that the non-blocking
                 * {@link ReadLock#tryLock()} and {@link WriteLock#tryLock()} methods
                 * do not honor this fair setting and will immediately acquire the lock
                 * if it is possible, regardless of waiting threads.)
                 * <p>
                 * </dl>
                 * <li><b>Reentrancy</b>
                 * <p>This lock allows both readers and writers to reacquire read or
                 * write locks in the style of a {@link ReentrantLock}. Non-reentrant
                 * readers are not allowed until all write locks held by the writing
                 * thread have been released.
                 * <p>Additionally, a writer can acquire the read lock, but not
                 * vice-versa.  Among other applications, reentrancy can be useful
                 * when write locks are held during calls or callbacks to methods that
                 * perform reads under read locks.  If a reader tries to acquire the
                 * write lock it will never succeed.
                 * <li><b>Lock downgrading</b>
                 * <p>Reentrancy also allows downgrading from the write lock to a read lock,
                 * by acquiring the write lock, then the read lock and then releasing the
                 * write lock. However, upgrading from a read lock to the write lock is
                 * <b>not</b> possible.
                 * <li><b>Interruption of lock acquisition</b>
                 * <p>The read lock and write lock both support interruption during lock
                 * acquisition.
                 * <li><b>{@link Condition} support</b>
                 * <p>The write lock provides a {@link Condition} implementation that
                 * behaves in the same way, with respect to the write lock, as the
                 * {@link Condition} implementation provided by
                 * {@link ReentrantLock#newCondition} does for {@link ReentrantLock}.
                 * This {@link Condition} can, of course, only be used with the write lock.
                 * <p>The read lock does not support a {@link Condition} and
                 * {@code readLock().newCondition()} throws
                 * {@code UnsupportedOperationException}.
                 * <li><b>Instrumentation</b>
                 * <p>This class supports methods to determine whether locks
                 * are held or contended. These methods are designed for monitoring
                 * system state, not for synchronization control.
                 * </ul>
                 * <p>Serialization of this class behaves in the same way as built-in
                 * locks: a deserialized lock is in the unlocked state, regardless of
                 * its state when serialized.
                 * <p><b>Sample usages</b>. Here is a code sketch showing how to perform
                 * lock downgrading after updating a cache (exception handling is
                 * particularly tricky when handling multiple locks in a non-nested
                 * fashion):
                 * <pre> {@code
                 * class CachedData {
                 * Object data;
                 * volatile boolean cacheValid;
                 * final ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();
                 * void processCachedData() {
                 * rwl.readLock().lock();
                 * if (!cacheValid) {
                 * // Must release read lock before acquiring write lock
                 * rwl.readLock().unlock();
                 * rwl.writeLock().lock();
                 * try {
                 * // Recheck state because another thread might have
                 * // acquired write lock and changed state before we did.
                 * if (!cacheValid) {
                 * data = ...
                 * cacheValid = true;
                 * }
                 * // Downgrade by acquiring read lock before releasing write lock
                 * rwl.readLock().lock();
                 * } finally {
                 * rwl.writeLock().unlock(); // Unlock write, still hold read
                 * }
                 * }
                 * try {
                 * use(data);
                 * } finally {
                 * rwl.readLock().unlock();
                 * }
                 * }
                 * }}</pre>
                 * ReentrantReadWriteLocks can be used to improve concurrency in some
                 * uses of some kinds of Collections. This is typically worthwhile
                 * only when the collections are expected to be large, accessed by
                 * more reader threads than writer threads, and entail operations with
                 * overhead that outweighs synchronization overhead. For example, here
                 * is a class using a TreeMap that is expected to be large and
                 * concurrently accessed.
                 * <pre> {@code
                 * class RWDictionary {
                 * private final Map<String, Data> m = new TreeMap<String, Data>();
                 * private final ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();
                 * private final Lock r = rwl.readLock();
                 * private final Lock w = rwl.writeLock();
                 * public Data get(String key) {
                 * r.lock();
                 * try { return m.get(key); }
                 * finally { r.unlock(); }
                 * }
                 * public String[] allKeys() {
                 * r.lock();
                 * try { return m.keySet().toArray(); }
                 * finally { r.unlock(); }
                 * }
                 * public Data put(String key, Data value) {
                 * w.lock();
                 * try { return m.put(key, value); }
                 * finally { w.unlock(); }
                 * }
                 * public void clear() {
                 * w.lock();
                 * try { m.clear(); }
                 * finally { w.unlock(); }
                 * }
                 * }}</pre>
                 * <h3>Implementation Notes</h3>
                 * <p>This lock supports a maximum of 65535 recursive write locks
                 * and 65535 read locks. Attempts to exceed these limits result in
                 * {@link Error} throws from locking methods.
                 * @since 1.5
                 * @author Doug Lea
                 */
                // @ts-ignore
                class ReentrantReadWriteLock extends java.lang.Object implements java.util.concurrent.locks.ReadWriteLock, java.io.Serializable {
                    /**
                     * Creates a new {@code ReentrantReadWriteLock} with
                     * default (nonfair) ordering properties.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new {@code ReentrantReadWriteLock} with
                     * the given fairness policy.
                     * @param fair {#code true} if this lock should use a fair ordering policy
                     */
                    // @ts-ignore
                    constructor(fair: boolean)
                    // @ts-ignore
                    writeLock(): java.util.concurrent.locks.ReentrantReadWriteLock.WriteLock
                    // @ts-ignore
                    readLock(): java.util.concurrent.locks.ReentrantReadWriteLock.ReadLock
                    /**
                     * Returns {@code true} if this lock has fairness set true.
                     * @return {#code true} if this lock has fairness set true
                     */
                    // @ts-ignore
                    isFair(): boolean
                    /**
                     * Returns the thread that currently owns the write lock, or
                     * {@code null} if not owned. When this method is called by a
                     * thread that is not the owner, the return value reflects a
                     * best-effort approximation of current lock status. For example,
                     * the owner may be momentarily {@code null} even if there are
                     * threads trying to acquire the lock but have not yet done so.
                     * This method is designed to facilitate construction of
                     * subclasses that provide more extensive lock monitoring
                     * facilities.
                     * @return the owner, or {#code null} if not owned
                     */
                    // @ts-ignore
                    getOwner(): java.lang.Thread
                    /**
                     * Queries the number of read locks held for this lock. This
                     * method is designed for use in monitoring system state, not for
                     * synchronization control.
                     * @return the number of read locks held
                     */
                    // @ts-ignore
                    getReadLockCount(): int
                    /**
                     * Queries if the write lock is held by any thread. This method is
                     * designed for use in monitoring system state, not for
                     * synchronization control.
                     * @return {#code true} if any thread holds the write lock and
                     *          {@code false} otherwise
                     */
                    // @ts-ignore
                    isWriteLocked(): boolean
                    /**
                     * Queries if the write lock is held by the current thread.
                     * @return {#code true} if the current thread holds the write lock and
                     *          {@code false} otherwise
                     */
                    // @ts-ignore
                    isWriteLockedByCurrentThread(): boolean
                    /**
                     * Queries the number of reentrant write holds on this lock by the
                     * current thread.  A writer thread has a hold on a lock for
                     * each lock action that is not matched by an unlock action.
                     * @return the number of holds on the write lock by the current thread,
                     *          or zero if the write lock is not held by the current thread
                     */
                    // @ts-ignore
                    getWriteHoldCount(): int
                    /**
                     * Queries the number of reentrant read holds on this lock by the
                     * current thread.  A reader thread has a hold on a lock for
                     * each lock action that is not matched by an unlock action.
                     * @return the number of holds on the read lock by the current thread,
                     *          or zero if the read lock is not held by the current thread
                     * @since 1.6
                     */
                    // @ts-ignore
                    getReadHoldCount(): int
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire the write lock.  Because the actual set of threads may
                     * change dynamically while constructing this result, the returned
                     * collection is only a best-effort estimate.  The elements of the
                     * returned collection are in no particular order.  This method is
                     * designed to facilitate construction of subclasses that provide
                     * more extensive lock monitoring facilities.
                     * @return the collection of threads
                     */
                    // @ts-ignore
                    getQueuedWriterThreads(): java.util.Collection<java.lang.Thread>
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire the read lock.  Because the actual set of threads may
                     * change dynamically while constructing this result, the returned
                     * collection is only a best-effort estimate.  The elements of the
                     * returned collection are in no particular order.  This method is
                     * designed to facilitate construction of subclasses that provide
                     * more extensive lock monitoring facilities.
                     * @return the collection of threads
                     */
                    // @ts-ignore
                    getQueuedReaderThreads(): java.util.Collection<java.lang.Thread>
                    /**
                     * Queries whether any threads are waiting to acquire the read or
                     * write lock. Note that because cancellations may occur at any
                     * time, a {@code true} return does not guarantee that any other
                     * thread will ever acquire a lock.  This method is designed
                     * primarily for use in monitoring of the system state.
                     * @return {#code true} if there may be other threads waiting to
                     *          acquire the lock
                     */
                    // @ts-ignore
                    hasQueuedThreads(): boolean
                    /**
                     * Queries whether the given thread is waiting to acquire either
                     * the read or write lock. Note that because cancellations may
                     * occur at any time, a {@code true} return does not guarantee
                     * that this thread will ever acquire a lock.  This method is
                     * designed primarily for use in monitoring of the system state.
                     * @param thread the thread
                     * @return {#code true} if the given thread is queued waiting for this lock
                     * @throws NullPointerException if the thread is null
                     */
                    // @ts-ignore
                    hasQueuedThread(thread: java.lang.Thread): boolean
                    /**
                     * Returns an estimate of the number of threads waiting to acquire
                     * either the read or write lock.  The value is only an estimate
                     * because the number of threads may change dynamically while this
                     * method traverses internal data structures.  This method is
                     * designed for use in monitoring of the system state, not for
                     * synchronization control.
                     * @return the estimated number of threads waiting for this lock
                     */
                    // @ts-ignore
                    getQueueLength(): int
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire either the read or write lock.  Because the actual set
                     * of threads may change dynamically while constructing this
                     * result, the returned collection is only a best-effort estimate.
                     * The elements of the returned collection are in no particular
                     * order.  This method is designed to facilitate construction of
                     * subclasses that provide more extensive monitoring facilities.
                     * @return the collection of threads
                     */
                    // @ts-ignore
                    getQueuedThreads(): java.util.Collection<java.lang.Thread>
                    /**
                     * Queries whether any threads are waiting on the given condition
                     * associated with the write lock. Note that because timeouts and
                     * interrupts may occur at any time, a {@code true} return does
                     * not guarantee that a future {@code signal} will awaken any
                     * threads.  This method is designed primarily for use in
                     * monitoring of the system state.
                     * @param condition the condition
                     * @return {#code true} if there are any waiting threads
                     * @throws IllegalMonitorStateException if this lock is not held
                     * @throws IllegalArgumentException if the given condition is
                     *          not associated with this lock
                     * @throws NullPointerException if the condition is null
                     */
                    // @ts-ignore
                    hasWaiters(condition: java.util.concurrent.locks.Condition): boolean
                    /**
                     * Returns an estimate of the number of threads waiting on the
                     * given condition associated with the write lock. Note that because
                     * timeouts and interrupts may occur at any time, the estimate
                     * serves only as an upper bound on the actual number of waiters.
                     * This method is designed for use in monitoring of the system
                     * state, not for synchronization control.
                     * @param condition the condition
                     * @return the estimated number of waiting threads
                     * @throws IllegalMonitorStateException if this lock is not held
                     * @throws IllegalArgumentException if the given condition is
                     *          not associated with this lock
                     * @throws NullPointerException if the condition is null
                     */
                    // @ts-ignore
                    getWaitQueueLength(condition: java.util.concurrent.locks.Condition): int
                    /**
                     * Returns a collection containing those threads that may be
                     * waiting on the given condition associated with the write lock.
                     * Because the actual set of threads may change dynamically while
                     * constructing this result, the returned collection is only a
                     * best-effort estimate. The elements of the returned collection
                     * are in no particular order.  This method is designed to
                     * facilitate construction of subclasses that provide more
                     * extensive condition monitoring facilities.
                     * @param condition the condition
                     * @return the collection of threads
                     * @throws IllegalMonitorStateException if this lock is not held
                     * @throws IllegalArgumentException if the given condition is
                     *          not associated with this lock
                     * @throws NullPointerException if the condition is null
                     */
                    // @ts-ignore
                    getWaitingThreads(condition: java.util.concurrent.locks.Condition): java.util.Collection<java.lang.Thread>
                    /**
                     * Returns a string identifying this lock, as well as its lock state.
                     * The state, in brackets, includes the String {@code "Write locks ="}
                     * followed by the number of reentrantly held write locks, and the
                     * String {@code "Read locks ="} followed by the number of held
                     * read locks.
                     * @return a string identifying this lock, as well as its lock state
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
