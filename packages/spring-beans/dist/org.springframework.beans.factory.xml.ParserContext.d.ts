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
                        public getReaderContext(): org.springframework.beans.factory.xml.XmlReaderContext
                        // @ts-ignore
                        public getRegistry(): org.springframework.beans.factory.support.BeanDefinitionRegistry
                        // @ts-ignore
                        public getDelegate(): org.springframework.beans.factory.xml.BeanDefinitionParserDelegate
                        // @ts-ignore
                        public getContainingBeanDefinition(): org.springframework.beans.factory.config.BeanDefinition
                        // @ts-ignore
                        public isNested(): boolean
                        // @ts-ignore
                        public isDefaultLazyInit(): boolean
                        // @ts-ignore
                        public extractSource(sourceCandidate: java.lang.Object | any): any
                        // @ts-ignore
                        public getContainingComponent(): org.springframework.beans.factory.parsing.CompositeComponentDefinition
                        // @ts-ignore
                        public pushContainingComponent(containingComponent: org.springframework.beans.factory.parsing.CompositeComponentDefinition): void
                        // @ts-ignore
                        public popContainingComponent(): org.springframework.beans.factory.parsing.CompositeComponentDefinition
                        // @ts-ignore
                        public popAndRegisterContainingComponent(): void
                        // @ts-ignore
                        public registerComponent(component: org.springframework.beans.factory.parsing.ComponentDefinition): void
                        // @ts-ignore
                        public registerBeanComponent(component: org.springframework.beans.factory.parsing.BeanComponentDefinition): void
                    }
                }
            }
        }
    }
}
