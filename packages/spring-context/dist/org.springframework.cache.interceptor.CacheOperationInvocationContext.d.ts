declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Representation of the context of the invocation of a cache operation.
                 * <p>The cache operation is static and independent of a particular invocation;
                 * this interface gathers the operation and a particular invocation.
                 * @author Stephane Nicoll
                 * @since 4.1
                 * @param <O> the operation type
                 */
                // @ts-ignore
                interface CacheOperationInvocationContext<O extends org.springframework.cache.interceptor.BasicOperation> {
                    /**
                     * Return the cache operation.
                     */
                    // @ts-ignore
                    getOperation(): O
                    /**
                     * Return the target instance on which the method was invoked.
                     */
                    // @ts-ignore
                    getTarget(): java.lang.Object
                    /**
                     * Return the method which was invoked.
                     */
                    // @ts-ignore
                    getMethod(): java.lang.reflect.Method
                    /**
                     * Return the argument list used to invoke the method.
                     */
                    // @ts-ignore
                    getArgs(): java.lang.Object[]
                }
            }
        }
    }
}
