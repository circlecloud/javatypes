declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Utility class for determining whether a given URL is a resource
                     * location that can be loaded via a {@link ResourcePatternResolver}.
                     * <p>Callers will usually assume that a location is a relative path
                     * if the {@link #isUrl(String)} method returns {@code false}.
                     * @author Juergen Hoeller
                     * @since 1.2.3
                     */
                    // @ts-ignore
                    abstract class ResourcePatternUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Return whether the given resource location is a URL: either a
                         * special "classpath" or "classpath*" pseudo URL or a standard URL.
                         * @param resourceLocation the location String to check
                         * @return whether the location qualifies as a URL
                         * @see ResourcePatternResolver#CLASSPATH_ALL_URL_PREFIX
                         * @see org.springframework.util.ResourceUtils#CLASSPATH_URL_PREFIX
                         * @see org.springframework.util.ResourceUtils#isUrl(String)
                         * @see java.net.URL
                         */
                        // @ts-ignore
                        public static isUrl(resourceLocation: java.lang.String | string): boolean
                        /**
                         * Return a default {@link ResourcePatternResolver} for the given {@link ResourceLoader}.
                         * <p>This might be the {@code ResourceLoader} itself, if it implements the
                         * {@code ResourcePatternResolver} extension, or a default
                         * {@link PathMatchingResourcePatternResolver} built on the given {@code ResourceLoader}.
                         * @param resourceLoader the ResourceLoader to build a pattern resolver for
                         *  (may be {#code null} to indicate a default ResourceLoader)
                         * @return the ResourcePatternResolver
                         * @see PathMatchingResourcePatternResolver
                         */
                        // @ts-ignore
                        public static getResourcePatternResolver(resourceLoader: org.springframework.core.io.ResourceLoader): org.springframework.core.io.support.ResourcePatternResolver
                    }
                }
            }
        }
    }
}
