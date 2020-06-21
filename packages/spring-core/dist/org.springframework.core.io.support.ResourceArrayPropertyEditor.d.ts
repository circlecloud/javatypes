declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Editor for {@link org.springframework.core.io.Resource} arrays, to
                     * automatically convert {@code String} location patterns
                     * (e.g. {@code "file:C:/my*.txt"} or {@code "classpath*:myfile.txt"})
                     * to {@code Resource} array properties. Can also translate a collection
                     * or array of location patterns into a merged Resource array.
                     * <p>A path may contain {@code ${...}} placeholders, to be
                     * resolved as {@link org.springframework.core.env.Environment} properties:
                     * e.g. {@code ${user.dir}}. Unresolvable placeholders are ignored by default.
                     * <p>Delegates to a {@link ResourcePatternResolver},
                     * by default using a {@link PathMatchingResourcePatternResolver}.
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 1.1.2
                     * @see org.springframework.core.io.Resource
                     * @see ResourcePatternResolver
                     * @see PathMatchingResourcePatternResolver
                     */
                    // @ts-ignore
                    class ResourceArrayPropertyEditor extends java.beans.PropertyEditorSupport {
                        /**
                         * Create a new ResourceArrayPropertyEditor with a default
                         * {@link PathMatchingResourcePatternResolver} and {@link StandardEnvironment}.
                         * @see PathMatchingResourcePatternResolver
                         * @see Environment
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new ResourceArrayPropertyEditor with the given {@link ResourcePatternResolver}
                         * and {@link PropertyResolver} (typically an {@link Environment}).
                         * @param resourcePatternResolver the ResourcePatternResolver to use
                         * @param propertyResolver the PropertyResolver to use
                         */
                        // @ts-ignore
                        constructor(resourcePatternResolver: org.springframework.core.io.support.ResourcePatternResolver, propertyResolver: org.springframework.core.env.PropertyResolver)
                        /**
                         * Create a new ResourceArrayPropertyEditor with the given {@link ResourcePatternResolver}
                         * and {@link PropertyResolver} (typically an {@link Environment}).
                         * @param resourcePatternResolver the ResourcePatternResolver to use
                         * @param propertyResolver the PropertyResolver to use
                         * @param ignoreUnresolvablePlaceholders whether to ignore unresolvable placeholders
                         *  if no corresponding system property could be found
                         */
                        // @ts-ignore
                        constructor(resourcePatternResolver: org.springframework.core.io.support.ResourcePatternResolver, propertyResolver: org.springframework.core.env.PropertyResolver, ignoreUnresolvablePlaceholders: boolean)
                        /**
                         * Treat the given text as a location pattern and convert it to a Resource array.
                         */
                        // @ts-ignore
                        public setAsText(text: java.lang.String | string): void
                        /**
                         * Treat the given value as a collection or array and convert it to a Resource array.
                         * Considers String elements as location patterns and takes Resource elements as-is.
                         */
                        // @ts-ignore
                        public setValue(value: java.lang.Object | any): void
                        /**
                         * Resolve the given path, replacing placeholders with
                         * corresponding system property values if necessary.
                         * @param path the original file path
                         * @return the resolved file path
                         * @see PropertyResolver#resolvePlaceholders
                         * @see PropertyResolver#resolveRequiredPlaceholders(String)
                         */
                        // @ts-ignore
                        resolvePath(path: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
