declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                namespace BindingBuilder {
                    /**
                     * Topic exchange routing key configurer.
                     */
                    // @ts-ignore
                    class TopicExchangeRoutingKeyConfigurer extends org.springframework.amqp.core.BindingBuilder.AbstractRoutingKeyConfigurer<org.springframework.amqp.core.TopicExchange> {
                        // @ts-ignore
                        with(routingKey: string): org.springframework.amqp.core.Binding
                        // @ts-ignore
                        with(routingKeyEnum: java.lang.Enum<any>): org.springframework.amqp.core.Binding
                    }
                }
            }
        }
    }
}
