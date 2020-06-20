declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Abstract implementation of {@link CacheOperation} that caches attributes
                 * for methods and implements a fallback policy: 1. specific target method;
                 * 2. target class; 3. declaring method; 4. declaring class/interface.
                 * <p>Defaults to using the target class's caching attribute if none is
                 * associated with the target method. Any caching attribute associated with
                 * the target method completely overrides a class caching attribute.
                 * If none found on the target class, the interface that the invoked method
                 * has been called through (in case of a JDK proxy) will be checked.
                 * <p>This implementation caches attributes by method after they are first
                 * used. If it is ever desirable to allow dynamic changing of cacheable
                 * attributes (which is very unlikely), caching could be made configurable.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class AbstractFallbackCacheOperationSource extends java.lang.Object implements org.springframework.cache.interceptor.CacheOperationSource {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     * <p>As this base class is not marked Serializable, the logger will be recreated
                     * after serialization - provided that the concrete subclass is Serializable.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Determine the caching attribute for this method invocation.
                     * <p>Defaults to the class's caching attribute if no method attribute is found.
                     * @param method the method for the current invocation (never {#code null})
                     * @param targetClass the target class for this invocation (may be {#code null})
                     * @return {#link CacheOperation} for this method, or {@code null} if the method
                     *  is not cacheable
                     */
                    // @ts-ignore
                    getCacheOperations(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    /**
                     * Determine a cache key for the given method and target class.
                     * <p>Must not produce same key for overloaded methods.
                     * Must produce same key for different instances of the same method.
                     * @param method the method (never {#code null})
                     * @param targetClass the target class (may be {#code null})
                     * @return the cache key (never {#code null})
                     */
                    // @ts-ignore
                    getCacheKey(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): java.lang.Object
                    /**
                     * Subclasses need to implement this to return the caching attribute for the
                     * given class, if any.
                     * @param clazz the class to retrieve the attribute for
                     * @return all caching attribute associated with this class, or {#code null} if none
                     */
                    // @ts-ignore
                    abstract findCacheOperations(clazz: java.lang.Class<any>): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    /**
                     * Subclasses need to implement this to return the caching attribute for the
                     * given method, if any.
                     * @param method the method to retrieve the attribute for
                     * @return all caching attribute associated with this method, or {#code null} if none
                     */
                    // @ts-ignore
                    abstract findCacheOperations(method: java.lang.reflect.Method): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    /**
                     * Should only public methods be allowed to have caching semantics?
                     * <p>The default implementation returns {@code false}.
                     */
                    // @ts-ignore
                    allowPublicMethodsOnly(): boolean
                }
            }
        }
    }
}
