declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Felipe Gutierrez
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    class QueueParser extends AbstractSingleBeanDefinitionParser {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        shouldGenerateIdAsFallback(): boolean
                        // @ts-ignore
                        shouldParseNameAsAliases(): boolean
                        // @ts-ignore
                        getBeanClass(element: org.w3c.dom.Element): java.lang.Class<any>
                        // @ts-ignore
                        doParse(element: org.w3c.dom.Element, parserContext: ParserContext, builder: BeanDefinitionBuilder): void
                    }
                }
            }
        }
    }
}
