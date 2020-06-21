declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * A mechanism to keep track of active objects.
                     * @param <T> the object type.
                     * @author Dave Syer
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    class ActiveObjectCounter<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public add(object: T): void
                        // @ts-ignore
                        public release(object: T): void
                        // @ts-ignore
                        public await(timeout: number /*long*/, timeUnit: java.util.concurrent.TimeUnit): boolean
                        // @ts-ignore
                        public getCount(): number /*int*/
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        public deactivate(): void
                        // @ts-ignore
                        public isActive(): boolean
                    }
                }
            }
        }
    }
}
