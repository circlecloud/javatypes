declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * The base interface that all cache operations must implement.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                interface BasicOperation {
                    /**
                     * Return the cache name(s) associated with the operation.
                     */
                    // @ts-ignore
                    getCacheNames(): Array<java.lang.String | string>
                }
            }
        }
    }
}
