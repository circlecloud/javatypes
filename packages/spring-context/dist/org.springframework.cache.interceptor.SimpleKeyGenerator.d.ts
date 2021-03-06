declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Simple key generator. Returns the parameter itself if a single non-null
                 * value is given, otherwise returns a {@link SimpleKey} of the parameters.
                 * <p>No collisions will occur with the keys generated by this class.
                 * The returned {@link SimpleKey} object can be safely used with a
                 * {@link org.springframework.cache.concurrent.ConcurrentMapCache}, however,
                 * might not be suitable for all {@link org.springframework.cache.Cache}
                 * implementations.
                 * @author Phillip Webb
                 * @author Juergen Hoeller
                 * @since 4.0
                 * @see SimpleKey
                 * @see org.springframework.cache.annotation.CachingConfigurer
                 */
                // @ts-ignore
                class SimpleKeyGenerator extends java.lang.Object implements org.springframework.cache.interceptor.KeyGenerator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public generate(target: java.lang.Object | any, method: java.lang.reflect.Method, ...params: java.lang.Object[] | any[]): any
                    /**
                     * Generate a key based on the specified parameters.
                     */
                    // @ts-ignore
                    public static generateKey(...params: java.lang.Object[] | any[]): any
                }
            }
        }
    }
}
