declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                /**
                 * A reentrant mutual exclusion {@link Lock} with the same basic
                 * behavior and semantics as the implicit monitor lock accessed using
                 * {@code synchronized} methods and statements, but with extended
                 * capabilities.
                 * <p>A {@code ReentrantLock} is <em>owned</em> by the thread last
                 * successfully locking, but not yet unlocking it. A thread invoking
                 * {@code lock} will return, successfully acquiring the lock, when
                 * the lock is not owned by another thread. The method will return
                 * immediately if the current thread already owns the lock. This can
                 * be checked using methods {@link #isHeldByCurrentThread}, and {@link
                 * #getHoldCount}.
                 * <p>The constructor for this class accepts an optional
                 * <em>fairness</em> parameter.  When set {@code true}, under
                 * contention, locks favor granting access to the longest-waiting
                 * thread.  Otherwise this lock does not guarantee any particular
                 * access order.  Programs using fair locks accessed by many threads
                 * may display lower overall throughput (i.e., are slower; often much
                 * slower) than those using the default setting, but have smaller
                 * variances in times to obtain locks and guarantee lack of
                 * starvation. Note however, that fairness of locks does not guarantee
                 * fairness of thread scheduling. Thus, one of many threads using a
                 * fair lock may obtain it multiple times in succession while other
                 * active threads are not progressing and not currently holding the
                 * lock.
                 * Also note that the untimed {@link #tryLock()} method does not
                 * honor the fairness setting. It will succeed if the lock
                 * is available even if other threads are waiting.
                 * <p>It is recommended practice to <em>always</em> immediately
                 * follow a call to {@code lock} with a {@code try} block, most
                 * typically in a before/after construction such as:
                 * <pre> {@code
                 * class X {
                 * private final ReentrantLock lock = new ReentrantLock();
                 * // ...
                 * public void m() {
                 * lock.lock();  // block until condition holds
                 * try {
                 * // ... method body
                 * } finally {
                 * lock.unlock()
                 * }
                 * }
                 * }}</pre>
                 * <p>In addition to implementing the {@link Lock} interface, this
                 * class defines a number of {@code public} and {@code protected}
                 * methods for inspecting the state of the lock.  Some of these
                 * methods are only useful for instrumentation and monitoring.
                 * <p>Serialization of this class behaves in the same way as built-in
                 * locks: a deserialized lock is in the unlocked state, regardless of
                 * its state when serialized.
                 * <p>This lock supports a maximum of 2147483647 recursive locks by
                 * the same thread. Attempts to exceed this limit result in
                 * {@link Error} throws from locking methods.
                 * @since 1.5
                 * @author Doug Lea
                 */
                // @ts-ignore
                class ReentrantLock extends java.lang.Object implements java.util.concurrent.locks.Lock, java.io.Serializable {
                    /**
                     * Creates an instance of {@code ReentrantLock}.
                     * This is equivalent to using {@code ReentrantLock(false)}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates an instance of {@code ReentrantLock} with the
                     * given fairness policy.
                     * @param fair {#code true} if this lock should use a fair ordering policy
                     */
                    // @ts-ignore
                    constructor(fair: boolean)
                    /**
                     * Acquires the lock.
                     * <p>Acquires the lock if it is not held by another thread and returns
                     * immediately, setting the lock hold count to one.
                     * <p>If the current thread already holds the lock then the hold
                     * count is incremented by one and the method returns immediately.
                     * <p>If the lock is held by another thread then the
                     * current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until the lock has been acquired,
                     * at which time the lock hold count is set to one.
                     */
                    // @ts-ignore
                    lock(): void
                    /**
                     * Acquires the lock unless the current thread is
                     * {@linkplain Thread#interrupt interrupted}.
                     * <p>Acquires the lock if it is not held by another thread and returns
                     * immediately, setting the lock hold count to one.
                     * <p>If the current thread already holds this lock then the hold count
                     * is incremented by one and the method returns immediately.
                     * <p>If the lock is held by another thread then the
                     * current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until one of two things happens:
                     * <ul>
                     * <li>The lock is acquired by the current thread; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts} the
                     * current thread.
                     * </ul>
                     * <p>If the lock is acquired by the current thread then the lock hold
                     * count is set to one.
                     * <p>If the current thread:
                     * <ul>
                     * <li>has its interrupted status set on entry to this method; or
                     * <li>is {@linkplain Thread#interrupt interrupted} while acquiring
                     * the lock,
                     * </ul>
                     * then {@link InterruptedException} is thrown and the current thread's
                     * interrupted status is cleared.
                     * <p>In this implementation, as this method is an explicit
                     * interruption point, preference is given to responding to the
                     * interrupt over normal or reentrant acquisition of the lock.
                     * @throws InterruptedException if the current thread is interrupted
                     */
                    // @ts-ignore
                    lockInterruptibly(): void
                    /**
                     * Acquires the lock only if it is not held by another thread at the time
                     * of invocation.
                     * <p>Acquires the lock if it is not held by another thread and
                     * returns immediately with the value {@code true}, setting the
                     * lock hold count to one. Even when this lock has been set to use a
                     * fair ordering policy, a call to {@code tryLock()} <em>will</em>
                     * immediately acquire the lock if it is available, whether or not
                     * other threads are currently waiting for the lock.
                     * This &quot;barging&quot; behavior can be useful in certain
                     * circumstances, even though it breaks fairness. If you want to honor
                     * the fairness setting for this lock, then use
                     * {@link #tryLock(long, TimeUnit) tryLock(0, TimeUnit.SECONDS) }
                     * which is almost equivalent (it also detects interruption).
                     * <p>If the current thread already holds this lock then the hold
                     * count is incremented by one and the method returns {@code true}.
                     * <p>If the lock is held by another thread then this method will return
                     * immediately with the value {@code false}.
                     * @return {#code true} if the lock was free and was acquired by the
                     *          current thread, or the lock was already held by the current
                     *          thread; and {@code false} otherwise
                     */
                    // @ts-ignore
                    tryLock(): boolean
                    /**
                     * Acquires the lock if it is not held by another thread within the given
                     * waiting time and the current thread has not been
                     * {@linkplain Thread#interrupt interrupted}.
                     * <p>Acquires the lock if it is not held by another thread and returns
                     * immediately with the value {@code true}, setting the lock hold count
                     * to one. If this lock has been set to use a fair ordering policy then
                     * an available lock <em>will not</em> be acquired if any other threads
                     * are waiting for the lock. This is in contrast to the {@link #tryLock()}
                     * method. If you want a timed {@code tryLock} that does permit barging on
                     * a fair lock then combine the timed and un-timed forms together:
                     * <pre> {@code
                     * if (lock.tryLock() ||
                     * lock.tryLock(timeout, unit)) {
                     * ...
                     * }}</pre>
                     * <p>If the current thread
                     * already holds this lock then the hold count is incremented by one and
                     * the method returns {@code true}.
                     * <p>If the lock is held by another thread then the
                     * current thread becomes disabled for thread scheduling
                     * purposes and lies dormant until one of three things happens:
                     * <ul>
                     * <li>The lock is acquired by the current thread; or
                     * <li>Some other thread {@linkplain Thread#interrupt interrupts}
                     * the current thread; or
                     * <li>The specified waiting time elapses
                     * </ul>
                     * <p>If the lock is acquired then the value {@code true} is returned and
                     * the lock hold count is set to one.
                     * <p>If the current thread:
                     * <ul>
                     * <li>has its interrupted status set on entry to this method; or
                     * <li>is {@linkplain Thread#interrupt interrupted} while
                     * acquiring the lock,
                     * </ul>
                     * then {@link InterruptedException} is thrown and the current thread's
                     * interrupted status is cleared.
                     * <p>If the specified waiting time elapses then the value {@code false}
                     * is returned.  If the time is less than or equal to zero, the method
                     * will not wait at all.
                     * <p>In this implementation, as this method is an explicit
                     * interruption point, preference is given to responding to the
                     * interrupt over normal or reentrant acquisition of the lock, and
                     * over reporting the elapse of the waiting time.
                     * @param timeout the time to wait for the lock
                     * @param unit the time unit of the timeout argument
                     * @return {#code true} if the lock was free and was acquired by the
                     *          current thread, or the lock was already held by the current
                     *          thread; and {@code false} if the waiting time elapsed before
                     *          the lock could be acquired
                     * @throws InterruptedException if the current thread is interrupted
                     * @throws NullPointerException if the time unit is null
                     */
                    // @ts-ignore
                    tryLock(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                    /**
                     * Attempts to release this lock.
                     * <p>If the current thread is the holder of this lock then the hold
                     * count is decremented.  If the hold count is now zero then the lock
                     * is released.  If the current thread is not the holder of this
                     * lock then {@link IllegalMonitorStateException} is thrown.
                     * @throws IllegalMonitorStateException if the current thread does not
                     *          hold this lock
                     */
                    // @ts-ignore
                    unlock(): void
                    /**
                     * Returns a {@link Condition} instance for use with this
                     * {@link Lock} instance.
                     * <p>The returned {@link Condition} instance supports the same
                     * usages as do the {@link Object} monitor methods ({@link
                     * Object#wait() wait}, {@link Object#notify notify}, and {@link
                     * Object#notifyAll notifyAll}) when used with the built-in
                     * monitor lock.
                     * <ul>
                     * <li>If this lock is not held when any of the {@link Condition}
                     * {@linkplain Condition#await() waiting} or {@linkplain
                     * Condition#signal signalling} methods are called, then an {@link
                     * IllegalMonitorStateException} is thrown.
                     * <li>When the condition {@linkplain Condition#await() waiting}
                     * methods are called the lock is released and, before they
                     * return, the lock is reacquired and the lock hold count restored
                     * to what it was when the method was called.
                     * <li>If a thread is {@linkplain Thread#interrupt interrupted}
                     * while waiting then the wait will terminate, an {@link
                     * InterruptedException} will be thrown, and the thread's
                     * interrupted status will be cleared.
                     * <li> Waiting threads are signalled in FIFO order.
                     * <li>The ordering of lock reacquisition for threads returning
                     * from waiting methods is the same as for threads initially
                     * acquiring the lock, which is in the default case not specified,
                     * but for <em>fair</em> locks favors those threads that have been
                     * waiting the longest.
                     * </ul>
                     * @return the Condition object
                     */
                    // @ts-ignore
                    newCondition(): java.util.concurrent.locks.Condition
                    /**
                     * Queries the number of holds on this lock by the current thread.
                     * <p>A thread has a hold on a lock for each lock action that is not
                     * matched by an unlock action.
                     * <p>The hold count information is typically only used for testing and
                     * debugging purposes. For example, if a certain section of code should
                     * not be entered with the lock already held then we can assert that
                     * fact:
                     * <pre> {@code
                     * class X {
                     * ReentrantLock lock = new ReentrantLock();
                     * // ...
                     * public void m() {
                     * assert lock.getHoldCount() == 0;
                     * lock.lock();
                     * try {
                     * // ... method body
                     * } finally {
                     * lock.unlock();
                     * }
                     * }
                     * }}</pre>
                     * @return the number of holds on this lock by the current thread,
                     *          or zero if this lock is not held by the current thread
                     */
                    // @ts-ignore
                    getHoldCount(): int
                    /**
                     * Queries if this lock is held by the current thread.
                     * <p>Analogous to the {@link Thread#holdsLock(Object)} method for
                     * built-in monitor locks, this method is typically used for
                     * debugging and testing. For example, a method that should only be
                     * called while a lock is held can assert that this is the case:
                     * <pre> {@code
                     * class X {
                     * ReentrantLock lock = new ReentrantLock();
                     * // ...
                     * public void m() {
                     * assert lock.isHeldByCurrentThread();
                     * // ... method body
                     * }
                     * }}</pre>
                     * <p>It can also be used to ensure that a reentrant lock is used
                     * in a non-reentrant manner, for example:
                     * <pre> {@code
                     * class X {
                     * ReentrantLock lock = new ReentrantLock();
                     * // ...
                     * public void m() {
                     * assert !lock.isHeldByCurrentThread();
                     * lock.lock();
                     * try {
                     * // ... method body
                     * } finally {
                     * lock.unlock();
                     * }
                     * }
                     * }}</pre>
                     * @return {#code true} if current thread holds this lock and
                     *          {@code false} otherwise
                     */
                    // @ts-ignore
                    isHeldByCurrentThread(): boolean
                    /**
                     * Queries if this lock is held by any thread. This method is
                     * designed for use in monitoring of the system state,
                     * not for synchronization control.
                     * @return {#code true} if any thread holds this lock and
                     *          {@code false} otherwise
                     */
                    // @ts-ignore
                    isLocked(): boolean
                    /**
                     * Returns {@code true} if this lock has fairness set true.
                     * @return {#code true} if this lock has fairness set true
                     */
                    // @ts-ignore
                    isFair(): boolean
                    /**
                     * Returns the thread that currently owns this lock, or
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
                     * Queries whether any threads are waiting to acquire this lock. Note that
                     * because cancellations may occur at any time, a {@code true}
                     * return does not guarantee that any other thread will ever
                     * acquire this lock.  This method is designed primarily for use in
                     * monitoring of the system state.
                     * @return {#code true} if there may be other threads waiting to
                     *          acquire the lock
                     */
                    // @ts-ignore
                    hasQueuedThreads(): boolean
                    /**
                     * Queries whether the given thread is waiting to acquire this
                     * lock. Note that because cancellations may occur at any time, a
                     * {@code true} return does not guarantee that this thread
                     * will ever acquire this lock.  This method is designed primarily for use
                     * in monitoring of the system state.
                     * @param thread the thread
                     * @return {#code true} if the given thread is queued waiting for this lock
                     * @throws NullPointerException if the thread is null
                     */
                    // @ts-ignore
                    hasQueuedThread(thread: java.lang.Thread): boolean
                    /**
                     * Returns an estimate of the number of threads waiting to
                     * acquire this lock.  The value is only an estimate because the number of
                     * threads may change dynamically while this method traverses
                     * internal data structures.  This method is designed for use in
                     * monitoring of the system state, not for synchronization
                     * control.
                     * @return the estimated number of threads waiting for this lock
                     */
                    // @ts-ignore
                    getQueueLength(): int
                    /**
                     * Returns a collection containing threads that may be waiting to
                     * acquire this lock.  Because the actual set of threads may change
                     * dynamically while constructing this result, the returned
                     * collection is only a best-effort estimate.  The elements of the
                     * returned collection are in no particular order.  This method is
                     * designed to facilitate construction of subclasses that provide
                     * more extensive monitoring facilities.
                     * @return the collection of threads
                     */
                    // @ts-ignore
                    getQueuedThreads(): java.util.Collection<java.lang.Thread>
                    /**
                     * Queries whether any threads are waiting on the given condition
                     * associated with this lock. Note that because timeouts and
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
                     * given condition associated with this lock. Note that because
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
                     * waiting on the given condition associated with this lock.
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
                     * The state, in brackets, includes either the String {@code "Unlocked"}
                     * or the String {@code "Locked by"} followed by the
                     * {@linkplain Thread#getName name} of the owning thread.
                     * @return a string identifying this lock, as well as its lock state
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
