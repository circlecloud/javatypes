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
                    abstract class AbstractExchangeParser extends AbstractSingleBeanDefinitionParser {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly BINDING_QUEUE_ATTR: java.lang.String | string
                        // @ts-ignore
                        static readonly BINDING_EXCHANGE_ATTR: java.lang.String | string
                        // @ts-ignore
                        static readonly BINDING_ARGUMENTS: java.lang.String | string
                        // @ts-ignore
                        shouldGenerateIdAsFallback(): boolean
                        // @ts-ignore
                        shouldParseNameAsAliases(): boolean
                        // @ts-ignore
                        doParse(element: org.w3c.dom.Element, parserContext: ParserContext, builder: BeanDefinitionBuilder): void
                        // @ts-ignore
                        parseBindings(element: org.w3c.dom.Element, parserContext: ParserContext, builder: BeanDefinitionBuilder, exchangeName: java.lang.String | string): void
                        // @ts-ignore
                        doParseBindings(element: org.w3c.dom.Element, parserContext: ParserContext, exchangeName: java.lang.String | string, bindings: org.w3c.dom.Element, parser: org.springframework.amqp.rabbit.config.AbstractExchangeParser): void
                        // @ts-ignore
                        abstract parseBinding(exchangeName: java.lang.String | string, binding: org.w3c.dom.Element, parserContext: ParserContext): BeanDefinitionBuilder
                        // @ts-ignore
                        parseDestination(binding: org.w3c.dom.Element, parserContext: ParserContext, builder: BeanDefinitionBuilder): void
                    }
                }
            }
        }
    }
}
