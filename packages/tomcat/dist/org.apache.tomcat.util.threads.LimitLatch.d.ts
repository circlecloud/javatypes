declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    /**
                     * Shared latch that allows the latch to be acquired a limited number of times
                     * after which all subsequent requests to acquire the latch will be placed in a
                     * FIFO queue until one of the shares is returned.
                     */
                    // @ts-ignore
                    class LimitLatch extends java.lang.Object {
                        /**
                         * Instantiates a LimitLatch object with an initial limit.
                         * @param limit - maximum number of concurrent acquisitions of this latch
                         */
                        // @ts-ignore
                        constructor(limit: number /*long*/)
                        /**
                         * Returns the current count for the latch
                         * @return the current count for latch
                         */
                        // @ts-ignore
                        public getCount(): number /*long*/
                        /**
                         * Obtain the current limit.
                         * @return the limit
                         */
                        // @ts-ignore
                        public getLimit(): number /*long*/
                        /**
                         * Sets a new limit. If the limit is decreased there may be a period where
                         * more shares of the latch are acquired than the limit. In this case no
                         * more shares of the latch will be issued until sufficient shares have been
                         * returned to reduce the number of acquired shares of the latch to below
                         * the new limit. If the limit is increased, threads currently in the queue
                         * may not be issued one of the newly available shares until the next
                         * request is made for a latch.
                         * @param limit The new limit
                         */
                        // @ts-ignore
                        public setLimit(limit: number /*long*/): void
                        /**
                         * Acquires a shared latch if one is available or waits for one if no shared
                         * latch is current available.
                         * @throws InterruptedException If the current thread is interrupted
                         */
                        // @ts-ignore
                        public countUpOrAwait(): void
                        /**
                         * Releases a shared latch, making it available for another thread to use.
                         * @return the previous counter value
                         */
                        // @ts-ignore
                        public countDown(): number /*long*/
                        /**
                         * Releases all waiting threads and causes the {@link #limit} to be ignored
                         * until {@link #reset()} is called.
                         * @return <code>true</code> if release was done
                         */
                        // @ts-ignore
                        public releaseAll(): boolean
                        /**
                         * Resets the latch and initializes the shared acquisition counter to zero.
                         * @see #releaseAll()
                         */
                        // @ts-ignore
                        public reset(): void
                        /**
                         * Returns <code>true</code> if there is at least one thread waiting to
                         * acquire the shared lock, otherwise returns <code>false</code>.
                         * @return <code>true</code> if threads are waiting
                         */
                        // @ts-ignore
                        public hasQueuedThreads(): boolean
                        /**
                         * Provide access to the list of threads waiting to acquire this limited
                         * shared latch.
                         * @return a collection of threads
                         */
                        // @ts-ignore
                        public getQueuedThreads(): Array<java.lang.Thread>
                    }
                }
            }
        }
    }
}
