declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Default implementation of the {@link NamespaceHandlerResolver} interface.
                     * Resolves namespace URIs to implementation classes based on the mappings
                     * contained in mapping file.
                     * <p>By default, this implementation looks for the mapping file at
                     * {@code META-INF/spring.handlers}, but this can be changed using the
                     * {@link #DefaultNamespaceHandlerResolver(ClassLoader, String)} constructor.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see NamespaceHandler
                     * @see DefaultBeanDefinitionDocumentReader
                     */
                    // @ts-ignore
                    class DefaultNamespaceHandlerResolver extends java.lang.Object implements org.springframework.beans.factory.xml.NamespaceHandlerResolver {
                        /**
                         * Create a new {@code DefaultNamespaceHandlerResolver} using the
                         * default mapping file location.
                         * <p>This constructor will result in the thread context ClassLoader being used
                         * to load resources.
                         * @see #DEFAULT_HANDLER_MAPPINGS_LOCATION
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@code DefaultNamespaceHandlerResolver} using the
                         * default mapping file location.
                         * @param classLoader the {#link ClassLoader} instance used to load mapping resources
                         *  (may be {@code null}, in which case the thread context ClassLoader will be used)
                         * @see #DEFAULT_HANDLER_MAPPINGS_LOCATION
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Create a new {@code DefaultNamespaceHandlerResolver} using the
                         * supplied mapping file location.
                         * @param classLoader the {#link ClassLoader} instance used to load mapping resources
                         *  may be {@code null}, in which case the thread context ClassLoader will be used)
                         * @param handlerMappingsLocation the mapping file location
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader, handlerMappingsLocation: string)
                        /**
                         * The location to look for the mapping files. Can be present in multiple JAR files.
                         */
                        // @ts-ignore
                        readonly DEFAULT_HANDLER_MAPPINGS_LOCATION: string
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Locate the {@link NamespaceHandler} for the supplied namespace URI
                         * from the configured mappings.
                         * @param namespaceUri the relevant namespace URI
                         * @return the located {#link NamespaceHandler}, or {@code null} if none found
                         */
                        // @ts-ignore
                        resolve(namespaceUri: string): org.springframework.beans.factory.xml.NamespaceHandler
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
