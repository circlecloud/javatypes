declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * {@link EntityResolver} implementation that attempts to resolve schema URLs into
                     * local {@link ClassPathResource classpath resources} using a set of mappings files.
                     * <p>By default, this class will look for mapping files in the classpath using the
                     * pattern: {@code META-INF/spring.schemas} allowing for multiple files to exist on
                     * the classpath at any one time.
                     * <p>The format of {@code META-INF/spring.schemas} is a properties file where each line
                     * should be of the form {@code systemId=schema-location} where {@code schema-location}
                     * should also be a schema file in the classpath. Since {@code systemId} is commonly a
                     * URL, one must be careful to escape any ':' characters which are treated as delimiters
                     * in properties files.
                     * <p>The pattern for the mapping files can be overridden using the
                     * {@link #PluggableSchemaResolver(ClassLoader, String)} constructor.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class PluggableSchemaResolver extends java.lang.Object implements org.xml.sax.EntityResolver {
                        /**
                         * Loads the schema URL -> schema file location mappings using the default
                         * mapping file pattern "META-INF/spring.schemas".
                         * @param classLoader the ClassLoader to use for loading
                         *  (can be {#code null}) to use the default ClassLoader)
                         * @see PropertiesLoaderUtils#loadAllProperties(String, ClassLoader)
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Loads the schema URL -> schema file location mappings using the given
                         * mapping file pattern.
                         * @param classLoader the ClassLoader to use for loading
                         *  (can be {#code null}) to use the default ClassLoader)
                         * @param schemaMappingsLocation the location of the file that defines schema mappings
                         *  (must not be empty)
                         * @see PropertiesLoaderUtils#loadAllProperties(String, ClassLoader)
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader, schemaMappingsLocation: string)
                        /**
                         * The location of the file that defines schema mappings.
                         * Can be present in multiple JAR files.
                         */
                        // @ts-ignore
                        readonly DEFAULT_SCHEMA_MAPPINGS_LOCATION: string
                        // @ts-ignore
                        resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
