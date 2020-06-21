declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Strategy interface for parsing known caching annotation types.
                 * {@link AnnotationCacheOperationSource} delegates to such parsers
                 * for supporting specific annotation types such as Spring's own
                 * {@link Cacheable}, {@link CachePut} and{@link CacheEvict}.
                 * @author Costin Leau
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see AnnotationCacheOperationSource
                 * @see SpringCacheAnnotationParser
                 */
                // @ts-ignore
                interface CacheAnnotationParser {
                    /**
                     * Determine whether the given class is a candidate for cache operations
                     * in the annotation format of this {@code CacheAnnotationParser}.
                     * <p>If this method returns {@code false}, the methods on the given class
                     * will not get traversed for {@code #parseCacheAnnotations} introspection.
                     * Returning {@code false} is therefore an optimization for non-affected
                     * classes, whereas {@code true} simply means that the class needs to get
                     * fully introspected for each method on the given class individually.
                     * @param targetClass the class to introspect
                     * @return {#code false} if the class is known to have no cache operation
                     *  annotations at class or method level; {@code true} otherwise. The default
                     *  implementation returns {@code true}, leading to regular introspection.
                     * @since 5.2
                     */
                    // @ts-ignore
                    isCandidateClass(targetClass: java.lang.Class<any>): boolean
                    /**
                     * Parse the cache definition for the given class,
                     * based on an annotation type understood by this parser.
                     * <p>This essentially parses a known cache annotation into Spring's metadata
                     * attribute class. Returns {@code null} if the class is not cacheable.
                     * @param type the annotated class
                     * @return the configured caching operation, or {#code null} if none found
                     * @see AnnotationCacheOperationSource#findCacheOperations(Class)
                     */
                    // @ts-ignore
                    parseCacheAnnotations(type: java.lang.Class<any>): Array<org.springframework.cache.interceptor.CacheOperation>
                    /**
                     * Parse the cache definition for the given method,
                     * based on an annotation type understood by this parser.
                     * <p>This essentially parses a known cache annotation into Spring's metadata
                     * attribute class. Returns {@code null} if the method is not cacheable.
                     * @param method the annotated method
                     * @return the configured caching operation, or {#code null} if none found
                     * @see AnnotationCacheOperationSource#findCacheOperations(Method)
                     */
                    // @ts-ignore
                    parseCacheAnnotations(method: java.lang.reflect.Method): Array<org.springframework.cache.interceptor.CacheOperation>
                }
            }
        }
    }
}
