declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ForkJoinPool {
                /**
                 * Interface for extending managed parallelism for tasks running
                 * in {@link ForkJoinPool}s.
                 * <p>A {@code ManagedBlocker} provides two methods.  Method
                 * {@link #isReleasable} must return {@code true} if blocking is
                 * not necessary. Method {@link #block} blocks the current thread
                 * if necessary (perhaps internally invoking {@code isReleasable}
                 * before actually blocking). These actions are performed by any
                 * thread invoking {@link ForkJoinPool#managedBlock(ManagedBlocker)}.
                 * The unusual methods in this API accommodate synchronizers that
                 * may, but don't usually, block for long periods. Similarly, they
                 * allow more efficient internal handling of cases in which
                 * additional workers may be, but usually are not, needed to
                 * ensure sufficient parallelism.  Toward this end,
                 * implementations of method {@code isReleasable} must be amenable
                 * to repeated invocation.
                 * <p>For example, here is a ManagedBlocker based on a
                 * ReentrantLock:
                 * <pre> {@code
                 * class ManagedLocker implements ManagedBlocker {
                 * final ReentrantLock lock;
                 * boolean hasLock = false;
                 * ManagedLocker(ReentrantLock lock) { this.lock = lock; }
                 * public boolean block() {
                 * if (!hasLock)
                 * lock.lock();
                 * return true;
                 * }
                 * public boolean isReleasable() {
                 * return hasLock || (hasLock = lock.tryLock());
                 * }
                 * }}</pre>
                 * <p>Here is a class that possibly blocks waiting for an
                 * item on a given queue:
                 * <pre> {@code
                 * class QueueTaker<E> implements ManagedBlocker {
                 * final BlockingQueue<E> queue;
                 * volatile E item = null;
                 * QueueTaker(BlockingQueue<E> q) { this.queue = q; }
                 * public boolean block() throws InterruptedException {
                 * if (item == null)
                 * item = queue.take();
                 * return true;
                 * }
                 * public boolean isReleasable() {
                 * return item != null || (item = queue.poll()) != null;
                 * }
                 * public E getItem() { // call after pool.managedBlock completes
                 * return item;
                 * }
                 * }}</pre>
                 */
                // @ts-ignore
                interface ManagedBlocker {
                    /**
                     * Possibly blocks the current thread, for example waiting for
                     * a lock or condition.
                     * @return {#code true} if no additional blocking is necessary
                     *  (i.e., if isReleasable would return true)
                     * @throws InterruptedException if interrupted while waiting
                     *  (the method is not required to do so, but is allowed to)
                     */
                    // @ts-ignore
                    block(): boolean
                    /**
                     * Returns {@code true} if blocking is unnecessary.
                     * @return {#code true} if blocking is unnecessary
                     */
                    // @ts-ignore
                    isReleasable(): boolean
                }
            }
        }
    }
}
