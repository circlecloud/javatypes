declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Used by the {@link org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader} to
                     * locate a {@link NamespaceHandler} implementation for a particular namespace URI.
                     * @author Rob Harrop
                     * @since 2.0
                     * @see NamespaceHandler
                     * @see org.springframework.beans.factory.xml.DefaultBeanDefinitionDocumentReader
                     */
                    // @ts-ignore
                    interface NamespaceHandlerResolver {
                        /**
                         * Resolve the namespace URI and return the located {@link NamespaceHandler}
                         * implementation.
                         * @param namespaceUri the relevant namespace URI
                         * @return the located {#link NamespaceHandler} (may be {@code null})
                         */
                        // @ts-ignore
                        resolve(namespaceUri: java.lang.String | string): org.springframework.beans.factory.xml.NamespaceHandler
                    }
                }
            }
        }
    }
}
