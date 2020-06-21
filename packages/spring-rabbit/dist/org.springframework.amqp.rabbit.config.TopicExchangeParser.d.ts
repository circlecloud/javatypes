declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    class TopicExchangeParser extends org.springframework.amqp.rabbit.config.AbstractExchangeParser {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getBeanClass(element: org.w3c.dom.Element): java.lang.Class<any>
                        // @ts-ignore
                        parseBinding(exchangeName: java.lang.String | string, binding: org.w3c.dom.Element, parserContext: ParserContext): BeanDefinitionBuilder
                    }
                }
            }
        }
    }
}
