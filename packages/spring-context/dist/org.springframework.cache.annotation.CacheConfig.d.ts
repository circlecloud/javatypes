declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * {@code @CacheConfig} provides a mechanism for sharing common cache-related
                 * settings at the class level.
                 * <p>When this annotation is present on a given class, it provides a set
                 * of default settings for any cache operation defined in that class.
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 4.1
                 */
                // @ts-ignore
                abstract class CacheConfig implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
