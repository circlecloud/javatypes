declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace collections {
                    /**
                     * This is intended as a (mostly) GC-free alternative to
                     * {@link java.util.concurrent.ConcurrentLinkedQueue} when the requirement is to
                     * create a pool of re-usable objects with no requirement to shrink the pool.
                     * The aim is to provide the bare minimum of required functionality as quickly
                     * as possible with minimum garbage.
                     * @param <T> The type of object managed by this stack
                     */
                    // @ts-ignore
                    class SynchronizedStack<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(size: number /*int*/, limit: number /*int*/)
                        // @ts-ignore
                        public static readonly DEFAULT_SIZE: number /*int*/
                        // @ts-ignore
                        public push(obj: T): boolean
                        // @ts-ignore
                        public pop(): T
                        // @ts-ignore
                        public clear(): void
                    }
                }
            }
        }
    }
}
