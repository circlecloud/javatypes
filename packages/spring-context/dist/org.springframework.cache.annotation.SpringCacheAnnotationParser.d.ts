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
                    public isCandidateClass(targetClass: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public parseCacheAnnotations(type: java.lang.Class<any>): Array<org.springframework.cache.interceptor.CacheOperation>
                    // @ts-ignore
                    public parseCacheAnnotations(method: java.lang.reflect.Method): Array<org.springframework.cache.interceptor.CacheOperation>
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
