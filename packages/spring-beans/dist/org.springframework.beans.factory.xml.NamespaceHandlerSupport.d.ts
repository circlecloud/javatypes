declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Support class for implementing custom {@link NamespaceHandler NamespaceHandlers}.
                     * Parsing and decorating of individual {@link Node Nodes} is done via {@link BeanDefinitionParser}
                     * and {@link BeanDefinitionDecorator} strategy interfaces, respectively.
                     * <p>Provides the {@link #registerBeanDefinitionParser} and {@link #registerBeanDefinitionDecorator}
                     * methods for registering a {@link BeanDefinitionParser} or {@link BeanDefinitionDecorator}
                     * to handle a specific element.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see #registerBeanDefinitionParser(String, BeanDefinitionParser)
                     * @see #registerBeanDefinitionDecorator(String, BeanDefinitionDecorator)
                     */
                    // @ts-ignore
                    class NamespaceHandlerSupport extends java.lang.Object implements org.springframework.beans.factory.xml.NamespaceHandler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Parses the supplied {@link Element} by delegating to the {@link BeanDefinitionParser} that is
                         * registered for that {@link Element}.
                         */
                        // @ts-ignore
                        parse(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Decorates the supplied {@link Node} by delegating to the {@link BeanDefinitionDecorator} that
                         * is registered to handle that {@link Node}.
                         */
                        // @ts-ignore
                        decorate(node: org.w3c.dom.Node, definition: org.springframework.beans.factory.config.BeanDefinitionHolder, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.config.BeanDefinitionHolder
                        /**
                         * Subclasses can call this to register the supplied {@link BeanDefinitionParser} to
                         * handle the specified element. The element name is the local (non-namespace qualified)
                         * name.
                         */
                        // @ts-ignore
                        registerBeanDefinitionParser(elementName: string, parser: org.springframework.beans.factory.xml.BeanDefinitionParser): void
                        /**
                         * Subclasses can call this to register the supplied {@link BeanDefinitionDecorator} to
                         * handle the specified element. The element name is the local (non-namespace qualified)
                         * name.
                         */
                        // @ts-ignore
                        registerBeanDefinitionDecorator(elementName: string, dec: org.springframework.beans.factory.xml.BeanDefinitionDecorator): void
                        /**
                         * Subclasses can call this to register the supplied {@link BeanDefinitionDecorator} to
                         * handle the specified attribute. The attribute name is the local (non-namespace qualified)
                         * name.
                         */
                        // @ts-ignore
                        registerBeanDefinitionDecoratorForAttribute(attrName: string, dec: org.springframework.beans.factory.xml.BeanDefinitionDecorator): void
                    }
                }
            }
        }
    }
}
