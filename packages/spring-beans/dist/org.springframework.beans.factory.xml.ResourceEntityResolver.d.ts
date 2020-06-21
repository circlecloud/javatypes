declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * {@code EntityResolver} implementation that tries to resolve entity references
                     * through a {@link org.springframework.core.io.ResourceLoader} (usually,
                     * relative to the resource base of an {@code ApplicationContext}), if applicable.
                     * Extends {@link DelegatingEntityResolver} to also provide DTD and XSD lookup.
                     * <p>Allows to use standard XML entities to include XML snippets into an
                     * application context definition, for example to split a large XML file
                     * into various modules. The include paths can be relative to the
                     * application context's resource base as usual, instead of relative
                     * to the JVM working directory (the XML parser's default).
                     * <p>Note: In addition to relative paths, every URL that specifies a
                     * file in the current system root, i.e. the JVM working directory,
                     * will be interpreted relative to the application context too.
                     * @author Juergen Hoeller
                     * @since 31.07.2003
                     * @see org.springframework.core.io.ResourceLoader
                     * @see org.springframework.context.ApplicationContext
                     */
                    // @ts-ignore
                    class ResourceEntityResolver extends org.springframework.beans.factory.xml.DelegatingEntityResolver {
                        /**
                         * Create a ResourceEntityResolver for the specified ResourceLoader
                         * (usually, an ApplicationContext).
                         * @param resourceLoader the ResourceLoader (or ApplicationContext)
                         *  to load XML entity includes with
                         */
                        // @ts-ignore
                        constructor(resourceLoader: ResourceLoader)
                        // @ts-ignore
                        public resolveEntity(publicId: java.lang.String | string, systemId: java.lang.String | string): org.xml.sax.InputSource
                    }
                }
            }
        }
    }
}
