declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace collections {
                    /**
                     * This is intended as a (mostly) GC-free alternative to
                     * {@link java.util.concurrent.ConcurrentLinkedQueue} when the requirement is to
                     * create an unbounded queue with no requirement to shrink the queue. The aim is
                     * to provide the bare minimum of required functionality as quickly as possible
                     * with minimum garbage.
                     * @param <T> The type of object managed by this queue
                     */
                    // @ts-ignore
                    class SynchronizedQueue<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(initialSize: number /*int*/)
                        // @ts-ignore
                        public static readonly DEFAULT_SIZE: number /*int*/
                        // @ts-ignore
                        public offer(t: T): boolean
                        // @ts-ignore
                        public poll(): T
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public clear(): void
                    }
                }
            }
        }
    }
}
