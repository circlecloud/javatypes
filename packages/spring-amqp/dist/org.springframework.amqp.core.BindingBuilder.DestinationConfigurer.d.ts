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
                        readonly name: java.lang.String | string
                        // @ts-ignore
                        readonly type: org.springframework.amqp.core.Binding.DestinationType
                        // @ts-ignore
                        public to(exchange: org.springframework.amqp.core.FanoutExchange): org.springframework.amqp.core.Binding
                        // @ts-ignore
                        public to(exchange: org.springframework.amqp.core.HeadersExchange): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer
                        // @ts-ignore
                        public to(exchange: org.springframework.amqp.core.DirectExchange): org.springframework.amqp.core.BindingBuilder.DirectExchangeRoutingKeyConfigurer
                        // @ts-ignore
                        public to(exchange: org.springframework.amqp.core.TopicExchange): org.springframework.amqp.core.BindingBuilder.TopicExchangeRoutingKeyConfigurer
                        // @ts-ignore
                        public to(exchange: org.springframework.amqp.core.Exchange): org.springframework.amqp.core.BindingBuilder.GenericExchangeRoutingKeyConfigurer
                    }
                }
            }
        }
    }
}
