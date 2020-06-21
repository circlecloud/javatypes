declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * {@link EntityResolver} implementation that delegates to a {@link BeansDtdResolver}
                     * and a {@link PluggableSchemaResolver} for DTDs and XML schemas, respectively.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Rick Evans
                     * @since 2.0
                     * @see BeansDtdResolver
                     * @see PluggableSchemaResolver
                     */
                    // @ts-ignore
                    class DelegatingEntityResolver extends java.lang.Object implements org.xml.sax.EntityResolver {
                        /**
                         * Create a new DelegatingEntityResolver that delegates to
                         * a default {@link BeansDtdResolver} and a default {@link PluggableSchemaResolver}.
                         * <p>Configures the {@link PluggableSchemaResolver} with the supplied
                         * {@link ClassLoader}.
                         * @param classLoader the ClassLoader to use for loading
                         *  (can be {#code null}) to use the default ClassLoader)
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Create a new DelegatingEntityResolver that delegates to
                         * the given {@link EntityResolver EntityResolvers}.
                         * @param dtdResolver the EntityResolver to resolve DTDs with
                         * @param schemaResolver the EntityResolver to resolve XML schemas with
                         */
                        // @ts-ignore
                        constructor(dtdResolver: org.xml.sax.EntityResolver, schemaResolver: org.xml.sax.EntityResolver)
                        /**
                         * Suffix for DTD files.
                         */
                        // @ts-ignore
                        public static readonly DTD_SUFFIX: java.lang.String | string
                        /**
                         * Suffix for schema definition files.
                         */
                        // @ts-ignore
                        public static readonly XSD_SUFFIX: java.lang.String | string
                        // @ts-ignore
                        public resolveEntity(publicId: java.lang.String | string, systemId: java.lang.String | string): org.xml.sax.InputSource
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
