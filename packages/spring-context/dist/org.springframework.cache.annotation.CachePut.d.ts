declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Annotation indicating that a method (or all methods on a class) triggers a
                 * {@link org.springframework.cache.Cache#put(Object, Object) cache put} operation.
                 * <p>In contrast to the {@link Cacheable @Cacheable} annotation, this annotation
                 * does not cause the advised method to be skipped. Rather, it always causes the
                 * method to be invoked and its result to be stored in the associated cache. Note
                 * that Java8's {@code Optional} return types are automatically handled and its
                 * content is stored in the cache if present.
                 * <p>This annotation may be used as a <em>meta-annotation</em> to create custom
                 * <em>composed annotations</em> with attribute overrides.
                 * @author Costin Leau
                 * @author Phillip Webb
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 3.1
                 * @see CacheConfig
                 */
                // @ts-ignore
                abstract class CachePut implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
