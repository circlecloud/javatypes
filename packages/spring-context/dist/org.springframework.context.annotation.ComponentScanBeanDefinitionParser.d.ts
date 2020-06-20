declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Parser for the {@code <context:component-scan/>} element.
                 * @author Mark Fisher
                 * @author Ramnivas Laddad
                 * @author Juergen Hoeller
                 * @since 2.5
                 */
                // @ts-ignore
                class ComponentScanBeanDefinitionParser extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    parse(element: org.w3c.dom.Element, parserContext: ParserContext): BeanDefinition
                    // @ts-ignore
                    configureScanner(parserContext: ParserContext, element: org.w3c.dom.Element): org.springframework.context.annotation.ClassPathBeanDefinitionScanner
                    // @ts-ignore
                    createScanner(readerContext: XmlReaderContext, useDefaultFilters: boolean): org.springframework.context.annotation.ClassPathBeanDefinitionScanner
                    // @ts-ignore
                    registerComponents(readerContext: XmlReaderContext, beanDefinitions: Array<BeanDefinitionHolder>, element: org.w3c.dom.Element): void
                    // @ts-ignore
                    parseBeanNameGenerator(element: org.w3c.dom.Element, scanner: org.springframework.context.annotation.ClassPathBeanDefinitionScanner): void
                    // @ts-ignore
                    parseScope(element: org.w3c.dom.Element, scanner: org.springframework.context.annotation.ClassPathBeanDefinitionScanner): void
                    // @ts-ignore
                    parseTypeFilters(element: org.w3c.dom.Element, scanner: org.springframework.context.annotation.ClassPathBeanDefinitionScanner, parserContext: ParserContext): void
                    // @ts-ignore
                    createTypeFilter(element: org.w3c.dom.Element, classLoader: java.lang.ClassLoader, parserContext: ParserContext): TypeFilter
                }
            }
        }
    }
}
