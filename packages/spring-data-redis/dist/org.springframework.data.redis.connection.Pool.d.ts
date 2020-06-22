declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Pool of resources
                     * @author Jennifer Hickey
                     */
                    // @ts-ignore
                    interface Pool<T> {
                        /**
                         * @return A resource, if available
                         */
                        // @ts-ignore
                        getResource(): T
                        /**
                         * @param resource A broken resource that should be invalidated
                         */
                        // @ts-ignore
                        returnBrokenResource(resource: T): void
                        /**
                         * @param resource A resource to return to the pool
                         */
                        // @ts-ignore
                        returnResource(resource: T): void
                        /**
                         * Destroys the pool
                         */
                        // @ts-ignore
                        destroy(): void
                    }
                }
            }
        }
    }
}
