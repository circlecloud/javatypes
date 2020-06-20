declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Strategy implementation for parsing Spring's {@link Caching}, {@link Cacheable},
                 * {@link CacheEvict}, and {@link CachePut} annotations.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 3.1
                 */
                // @ts-ignore
                class SpringCacheAnnotationParser extends java.lang.Object implements org.springframework.cache.annotation.CacheAnnotationParser, java.io.Serializable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    isCandidateClass(targetClass: java.lang.Class<any>): boolean
                    // @ts-ignore
                    parseCacheAnnotations(type: java.lang.Class<any>): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    // @ts-ignore
                    parseCacheAnnotations(method: java.lang.reflect.Method): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
