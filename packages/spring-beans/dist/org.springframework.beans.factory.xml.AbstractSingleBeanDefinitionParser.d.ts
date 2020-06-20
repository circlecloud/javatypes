declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Base class for those {@link BeanDefinitionParser} implementations that
                     * need to parse and define just a <i>single</i> {@code BeanDefinition}.
                     * <p>Extend this parser class when you want to create a single bean definition
                     * from an arbitrarily complex XML element. You may wish to consider extending
                     * the {@link AbstractSimpleBeanDefinitionParser} when you want to create a
                     * single bean definition from a relatively simple custom XML element.
                     * <p>The resulting {@code BeanDefinition} will be automatically registered
                     * with the {@link org.springframework.beans.factory.support.BeanDefinitionRegistry}.
                     * Your job simply is to {@link #doParse parse} the custom XML {@link Element}
                     * into a single {@code BeanDefinition}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Rick Evans
                     * @since 2.0
                     * @see #getBeanClass
                     * @see #getBeanClassName
                     * @see #doParse
                     */
                    // @ts-ignore
                    class AbstractSingleBeanDefinitionParser extends org.springframework.beans.factory.xml.AbstractBeanDefinitionParser {
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a {@link BeanDefinitionBuilder} instance for the
                         * {@link #getBeanClass bean Class} and passes it to the
                         * {@link #doParse} strategy method.
                         * @param element the element that is to be parsed into a single BeanDefinition
                         * @param parserContext the object encapsulating the current state of the parsing process
                         * @return the BeanDefinition resulting from the parsing of the supplied {#link Element}
                         * @throws IllegalStateException if the bean {#link Class} returned from
                         *  {@link #getBeanClass(org.w3c.dom.Element)} is {@code null}
                         * @see #doParse
                         */
                        // @ts-ignore
                        parseInternal(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Determine the name for the parent of the currently parsed bean,
                         * in case of the current bean being defined as a child bean.
                         * <p>The default implementation returns {@code null},
                         * indicating a root bean definition.
                         * @param element the {#code Element} that is being parsed
                         * @return the name of the parent bean for the currently parsed bean,
                         *  or {#code null} if none
                         */
                        // @ts-ignore
                        getParentName(element: org.w3c.dom.Element): java.lang.String
                        /**
                         * Determine the bean class corresponding to the supplied {@link Element}.
                         * <p>Note that, for application classes, it is generally preferable to
                         * override {@link #getBeanClassName} instead, in order to avoid a direct
                         * dependence on the bean implementation class. The BeanDefinitionParser
                         * and its NamespaceHandler can be used within an IDE plugin then, even
                         * if the application classes are not available on the plugin's classpath.
                         * @param element the {#code Element} that is being parsed
                         * @return the {#link Class} of the bean that is being defined via parsing
                         *  the supplied {@code Element}, or {@code null} if none
                         * @see #getBeanClassName
                         */
                        // @ts-ignore
                        getBeanClass(element: org.w3c.dom.Element): java.lang.Class<?>
                        /**
                         * Determine the bean class name corresponding to the supplied {@link Element}.
                         * @param element the {#code Element} that is being parsed
                         * @return the class name of the bean that is being defined via parsing
                         *  the supplied {#code Element}, or {@code null} if none
                         * @see #getBeanClass
                         */
                        // @ts-ignore
                        getBeanClassName(element: org.w3c.dom.Element): java.lang.String
                        /**
                         * Parse the supplied {@link Element} and populate the supplied
                         * {@link BeanDefinitionBuilder} as required.
                         * <p>The default implementation delegates to the {@code doParse}
                         * version without ParserContext argument.
                         * @param element the XML element being parsed
                         * @param parserContext the object encapsulating the current state of the parsing process
                         * @param builder used to define the {#code BeanDefinition}
                         * @see #doParse(Element, BeanDefinitionBuilder)
                         */
                        // @ts-ignore
                        doParse(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext, builder: org.springframework.beans.factory.support.BeanDefinitionBuilder): void
                        /**
                         * Parse the supplied {@link Element} and populate the supplied
                         * {@link BeanDefinitionBuilder} as required.
                         * <p>The default implementation does nothing.
                         * @param element the XML element being parsed
                         * @param builder used to define the {#code BeanDefinition}
                         */
                        // @ts-ignore
                        doParse(element: org.w3c.dom.Element, builder: org.springframework.beans.factory.support.BeanDefinitionBuilder): void
                    }
                }
            }
        }
    }
}
