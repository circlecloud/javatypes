declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Implementation of the {@link org.springframework.cache.interceptor.CacheOperationSource
                 * CacheOperationSource} interface for working with caching metadata in annotation format.
                 * <p>This class reads Spring's {@link Cacheable}, {@link CachePut} and {@link CacheEvict}
                 * annotations and exposes corresponding caching operation definition to Spring's cache
                 * infrastructure. This class may also serve as base class for a custom
                 * {@code CacheOperationSource}.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.1
                 */
                // @ts-ignore
                class AnnotationCacheOperationSource extends org.springframework.cache.interceptor.AbstractFallbackCacheOperationSource implements java.io.Serializable {
                    /**
                     * Create a default AnnotationCacheOperationSource, supporting public methods
                     * that carry the {@code Cacheable} and {@code CacheEvict} annotations.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a default {@code AnnotationCacheOperationSource}, supporting public methods
                     * that carry the {@code Cacheable} and {@code CacheEvict} annotations.
                     * @param publicMethodsOnly whether to support only annotated public methods
                     *  typically for use with proxy-based AOP), or protected/private methods as well
                     *  (typically used with AspectJ class weaving)
                     */
                    // @ts-ignore
                    constructor(publicMethodsOnly: boolean)
                    /**
                     * Create a custom AnnotationCacheOperationSource.
                     * @param annotationParser the CacheAnnotationParser to use
                     */
                    // @ts-ignore
                    constructor(annotationParser: org.springframework.cache.annotation.CacheAnnotationParser)
                    /**
                     * Create a custom AnnotationCacheOperationSource.
                     * @param annotationParsers the CacheAnnotationParser to use
                     */
                    // @ts-ignore
                    constructor(...annotationParsers: org.springframework.cache.annotation.CacheAnnotationParser[])
                    /**
                     * Create a custom AnnotationCacheOperationSource.
                     * @param annotationParsers the CacheAnnotationParser to use
                     */
                    // @ts-ignore
                    constructor(annotationParsers: Array<org.springframework.cache.annotation.CacheAnnotationParser>)
                    // @ts-ignore
                    isCandidateClass(targetClass: java.lang.Class<any>): boolean
                    // @ts-ignore
                    findCacheOperations(clazz: java.lang.Class<any>): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    // @ts-ignore
                    findCacheOperations(method: java.lang.reflect.Method): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    /**
                     * Determine the cache operation(s) for the given {@link CacheOperationProvider}.
                     * <p>This implementation delegates to configured
                     * {@link CacheAnnotationParser CacheAnnotationParsers}
                     * for parsing known annotations into Spring's metadata attribute class.
                     * <p>Can be overridden to support custom annotations that carry caching metadata.
                     * @param provider the cache operation provider to use
                     * @return the configured caching operations, or {#code null} if none found
                     */
                    // @ts-ignore
                    determineCacheOperations(provider: org.springframework.cache.annotation.AnnotationCacheOperationSource.CacheOperationProvider): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    /**
                     * By default, only public methods can be made cacheable.
                     */
                    // @ts-ignore
                    allowPublicMethodsOnly(): boolean
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
