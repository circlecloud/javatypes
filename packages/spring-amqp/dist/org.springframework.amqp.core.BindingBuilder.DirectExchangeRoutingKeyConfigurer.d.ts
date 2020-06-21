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
                        public with(routingKey: java.lang.String | string): org.springframework.amqp.core.Binding
                        // @ts-ignore
                        public with(routingKeyEnum: java.lang.Enum<any>): org.springframework.amqp.core.Binding
                        // @ts-ignore
                        public withQueueName(): org.springframework.amqp.core.Binding
                    }
                }
            }
        }
    }
}
