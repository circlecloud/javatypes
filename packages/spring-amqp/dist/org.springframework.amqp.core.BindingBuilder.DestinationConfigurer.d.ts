declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                namespace BindingBuilder {
                    /**
                     * General destination configurer.
                     */
                    // @ts-ignore
                    class DestinationConfigurer extends java.lang.Object {
                        // @ts-ignore
                        readonly name: string
                        // @ts-ignore
                        readonly type: org.springframework.amqp.core.Binding.DestinationType
                        // @ts-ignore
                        to(exchange: org.springframework.amqp.core.FanoutExchange): org.springframework.amqp.core.Binding
                        // @ts-ignore
                        to(exchange: org.springframework.amqp.core.HeadersExchange): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer
                        // @ts-ignore
                        to(exchange: org.springframework.amqp.core.DirectExchange): org.springframework.amqp.core.BindingBuilder.DirectExchangeRoutingKeyConfigurer
                        // @ts-ignore
                        to(exchange: org.springframework.amqp.core.TopicExchange): org.springframework.amqp.core.BindingBuilder.TopicExchangeRoutingKeyConfigurer
                        // @ts-ignore
                        to(exchange: org.springframework.amqp.core.Exchange): org.springframework.amqp.core.BindingBuilder.GenericExchangeRoutingKeyConfigurer
                    }
                }
            }
        }
    }
}
