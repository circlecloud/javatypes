declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * AOP Alliance MethodInterceptor for declarative cache
                 * management using the common Spring caching infrastructure
                 * ({@link org.springframework.cache.Cache}).
                 * <p>Derives from the {@link CacheAspectSupport} class which
                 * contains the integration with Spring's underlying caching API.
                 * CacheInterceptor simply calls the relevant superclass methods
                 * in the correct order.
                 * <p>CacheInterceptors are thread-safe.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class CacheInterceptor extends org.springframework.cache.interceptor.CacheAspectSupport implements java.io.Serializable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                }
            }
        }
    }
}
