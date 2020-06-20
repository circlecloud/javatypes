declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                namespace AbstractQueuedSynchronizer {
                    /**
                     * Condition implementation for a {@link
                     * AbstractQueuedSynchronizer} serving as the basis of a {@link
                     * Lock} implementation.
                     * <p>Method documentation for this class describes mechanics,
                     * not behavioral specifications from the point of view of Lock
                     * and Condition users. Exported versions of this class will in
                     * general need to be accompanied by documentation describing
                     * condition semantics that rely on those of the associated
                     * {@code AbstractQueuedSynchronizer}.
                     * <p>This class is Serializable, but all fields are transient,
                     * so deserialized conditions have no waiters.
                     */
                    // @ts-ignore
                    class ConditionObject extends java.lang.Object implements java.util.concurrent.locks.Condition, java.io.Serializable {
                        /**
                         * Creates a new {@code ConditionObject} instance.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Moves the longest-waiting thread, if one exists, from the
                         * wait queue for this condition to the wait queue for the
                         * owning lock.
                         * @throws IllegalMonitorStateException if {#link #isHeldExclusively}
                         *          returns {@code false}
                         */
                        // @ts-ignore
                        signal(): void
                        /**
                         * Moves all threads from the wait queue for this condition to
                         * the wait queue for the owning lock.
                         * @throws IllegalMonitorStateException if {#link #isHeldExclusively}
                         *          returns {@code false}
                         */
                        // @ts-ignore
                        signalAll(): void
                        /**
                         * Implements uninterruptible condition wait.
                         * <ol>
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * </ol>
                         */
                        // @ts-ignore
                        awaitUninterruptibly(): void
                        /**
                         * Implements interruptible condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled or interrupted.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * </ol>
                         */
                        // @ts-ignore
                        await(): void
                        /**
                         * Implements timed condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled, interrupted, or timed out.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * </ol>
                         */
                        // @ts-ignore
                        awaitNanos(nanosTimeout: number /*long*/): long
                        /**
                         * Implements absolute timed condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled, interrupted, or timed out.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * <li> If timed out while blocked in step 4, return false, else true.
                         * </ol>
                         */
                        // @ts-ignore
                        awaitUntil(deadline: java.util.Date): boolean
                        /**
                         * Implements timed condition wait.
                         * <ol>
                         * <li> If current thread is interrupted, throw InterruptedException.
                         * <li> Save lock state returned by {@link #getState}.
                         * <li> Invoke {@link #release} with saved state as argument,
                         * throwing IllegalMonitorStateException if it fails.
                         * <li> Block until signalled, interrupted, or timed out.
                         * <li> Reacquire by invoking specialized version of
                         * {@link #acquire} with saved state as argument.
                         * <li> If interrupted while blocked in step 4, throw InterruptedException.
                         * <li> If timed out while blocked in step 4, return false, else true.
                         * </ol>
                         */
                        // @ts-ignore
                        await(time: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                        /**
                         * Queries whether any threads are waiting on this condition.
                         * Implements {@link AbstractQueuedSynchronizer#hasWaiters(ConditionObject)}.
                         * @return {#code true} if there are any waiting threads
                         * @throws IllegalMonitorStateException if {#link #isHeldExclusively}
                         *          returns {@code false}
                         */
                        // @ts-ignore
                        hasWaiters(): boolean
                        /**
                         * Returns an estimate of the number of threads waiting on
                         * this condition.
                         * Implements {@link AbstractQueuedSynchronizer#getWaitQueueLength(ConditionObject)}.
                         * @return the estimated number of waiting threads
                         * @throws IllegalMonitorStateException if {#link #isHeldExclusively}
                         *          returns {@code false}
                         */
                        // @ts-ignore
                        getWaitQueueLength(): int
                        /**
                         * Returns a collection containing those threads that may be
                         * waiting on this Condition.
                         * Implements {@link AbstractQueuedSynchronizer#getWaitingThreads(ConditionObject)}.
                         * @return the collection of threads
                         * @throws IllegalMonitorStateException if {#link #isHeldExclusively}
                         *          returns {@code false}
                         */
                        // @ts-ignore
                        getWaitingThreads(): java.util.Collection<java.lang.Thread>
                    }
                }
            }
        }
    }
}
