declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Interface used by the {@link DefaultBeanDefinitionDocumentReader} to handle custom,
                     * top-level (directly under {@code <beans/>}) tags.
                     * <p>Implementations are free to turn the metadata in the custom tag into as many
                     * {@link BeanDefinition BeanDefinitions} as required.
                     * <p>The parser locates a {@link BeanDefinitionParser} from the associated
                     * {@link NamespaceHandler} for the namespace in which the custom tag resides.
                     * @author Rob Harrop
                     * @since 2.0
                     * @see NamespaceHandler
                     * @see AbstractBeanDefinitionParser
                     */
                    // @ts-ignore
                    interface BeanDefinitionParser {
                        /**
                         * Parse the specified {@link Element} and register the resulting
                         * {@link BeanDefinition BeanDefinition(s)} with the
                         * {@link org.springframework.beans.factory.xml.ParserContext#getRegistry() BeanDefinitionRegistry}
                         * embedded in the supplied {@link ParserContext}.
                         * <p>Implementations must return the primary {@link BeanDefinition} that results
                         * from the parse if they will ever be used in a nested fashion (for example as
                         * an inner tag in a {@code <property/>} tag). Implementations may return
                         * {@code null} if they will <strong>not</strong> be used in a nested fashion.
                         * @param element the element that is to be parsed into one or more {#link BeanDefinition BeanDefinitions}
                         * @param parserContext the object encapsulating the current state of the parsing process;
                         *  provides access to a {#link org.springframework.beans.factory.support.BeanDefinitionRegistry}
                         * @return the primary {#link BeanDefinition}
                         */
                        // @ts-ignore
                        parse(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.config.BeanDefinition
                    }
                }
            }
        }
    }
}
