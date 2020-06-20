declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                namespace BindingBuilder {
                    /**
                     * Direct exchange routing key configurer.
                     */
                    // @ts-ignore
                    class DirectExchangeRoutingKeyConfigurer extends org.springframework.amqp.core.BindingBuilder.AbstractRoutingKeyConfigurer<org.springframework.amqp.core.DirectExchange> {
                        // @ts-ignore
                        with(routingKey: string): org.springframework.amqp.core.Binding
                        // @ts-ignore
                        with(routingKeyEnum: java.lang.Enum<any>): org.springframework.amqp.core.Binding
                        // @ts-ignore
                        withQueueName(): org.springframework.amqp.core.Binding
                    }
                }
            }
        }
    }
}
