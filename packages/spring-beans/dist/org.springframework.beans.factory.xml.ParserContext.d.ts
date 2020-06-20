declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Context that gets passed along a bean definition parsing process,
                     * encapsulating all relevant configuration as well as state.
                     * Nested inside an {@link XmlReaderContext}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see XmlReaderContext
                     * @see BeanDefinitionParserDelegate
                     */
                    // @ts-ignore
                    class ParserContext extends java.lang.Object {
                        // @ts-ignore
                        constructor(readerContext: org.springframework.beans.factory.xml.XmlReaderContext, delegate: org.springframework.beans.factory.xml.BeanDefinitionParserDelegate)
                        // @ts-ignore
                        constructor(readerContext: org.springframework.beans.factory.xml.XmlReaderContext, delegate: org.springframework.beans.factory.xml.BeanDefinitionParserDelegate, containingBeanDefinition: org.springframework.beans.factory.config.BeanDefinition)
                        // @ts-ignore
                        getReaderContext(): org.springframework.beans.factory.xml.XmlReaderContext
                        // @ts-ignore
                        getRegistry(): org.springframework.beans.factory.support.BeanDefinitionRegistry
                        // @ts-ignore
                        getDelegate(): org.springframework.beans.factory.xml.BeanDefinitionParserDelegate
                        // @ts-ignore
                        getContainingBeanDefinition(): org.springframework.beans.factory.config.BeanDefinition
                        // @ts-ignore
                        isNested(): boolean
                        // @ts-ignore
                        isDefaultLazyInit(): boolean
                        // @ts-ignore
                        extractSource(sourceCandidate: any): java.lang.Object
                        // @ts-ignore
                        getContainingComponent(): org.springframework.beans.factory.parsing.CompositeComponentDefinition
                        // @ts-ignore
                        pushContainingComponent(containingComponent: org.springframework.beans.factory.parsing.CompositeComponentDefinition): void
                        // @ts-ignore
                        popContainingComponent(): org.springframework.beans.factory.parsing.CompositeComponentDefinition
                        // @ts-ignore
                        popAndRegisterContainingComponent(): void
                        // @ts-ignore
                        registerComponent(component: org.springframework.beans.factory.parsing.ComponentDefinition): void
                        // @ts-ignore
                        registerBeanComponent(component: org.springframework.beans.factory.parsing.BeanComponentDefinition): void
                    }
                }
            }
        }
    }
}
