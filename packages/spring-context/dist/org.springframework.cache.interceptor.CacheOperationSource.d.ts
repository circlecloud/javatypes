declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Interface used by {@link CacheInterceptor}. Implementations know how to source
                 * cache operation attributes, whether from configuration, metadata attributes at
                 * source level, or elsewhere.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                interface CacheOperationSource {
                    /**
                     * Determine whether the given class is a candidate for cache operations
                     * in the metadata format of this {@code CacheOperationSource}.
                     * <p>If this method returns {@code false}, the methods on the given class
                     * will not get traversed for {@link #getCacheOperations} introspection.
                     * Returning {@code false} is therefore an optimization for non-affected
                     * classes, whereas {@code true} simply means that the class needs to get
                     * fully introspected for each method on the given class individually.
                     * @param targetClass the class to introspect
                     * @return {#code false} if the class is known to have no cache operation
                     *  metadata at class or method level; {@code true} otherwise. The default
                     *  implementation returns {@code true}, leading to regular introspection.
                     * @since 5.2
                     */
                    // @ts-ignore
                    isCandidateClass(targetClass: java.lang.Class<any>): boolean
                    /**
                     * Return the collection of cache operations for this method,
                     * or {@code null} if the method contains no <em>cacheable</em> annotations.
                     * @param method the method to introspect
                     * @param targetClass the target class (may be {#code null}, in which case
                     *  the declaring class of the method must be used)
                     * @return all cache operations for this method, or {#code null} if none found
                     */
                    // @ts-ignore
                    getCacheOperations(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                }
            }
        }
    }
}
