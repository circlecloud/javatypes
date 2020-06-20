declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Annotation indicating that a method (or all methods on a class) triggers a
                 * {@link org.springframework.cache.Cache#evict(Object) cache evict} operation.
                 * <p>This annotation may be used as a <em>meta-annotation</em> to create custom
                 * <em>composed annotations</em> with attribute overrides.
                 * @author Costin Leau
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 3.1
                 * @see CacheConfig
                 */
                // @ts-ignore
                class CacheEvict implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
