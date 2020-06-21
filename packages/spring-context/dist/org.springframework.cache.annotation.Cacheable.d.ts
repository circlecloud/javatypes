declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Annotation indicating that the result of invoking a method (or all methods
                 * in a class) can be cached.
                 * <p>Each time an advised method is invoked, caching behavior will be applied,
                 * checking whether the method has been already invoked for the given arguments.
                 * A sensible default simply uses the method parameters to compute the key, but
                 * a SpEL expression can be provided via the {@link #key} attribute, or a custom
                 * {@link org.springframework.cache.interceptor.KeyGenerator} implementation can
                 * replace the default one (see {@link #keyGenerator}).
                 * <p>If no value is found in the cache for the computed key, the target method
                 * will be invoked and the returned value stored in the associated cache. Note
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
                abstract class Cacheable implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
