declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                namespace BindingBuilder {
                    /**
                     * Headers exchange configurer.
                     */
                    // @ts-ignore
                    class HeadersExchangeMapConfigurer extends java.lang.Object {
                        // @ts-ignore
                        readonly destination: org.springframework.amqp.core.BindingBuilder.DestinationConfigurer
                        // @ts-ignore
                        readonly exchange: org.springframework.amqp.core.HeadersExchange
                        // @ts-ignore
                        where(key: string): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeSingleValueBindingCreator
                        // @ts-ignore
                        whereAny(...headerKeys: string[]): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeKeysBindingCreator
                        // @ts-ignore
                        whereAny(headerValues: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeMapBindingCreator
                        // @ts-ignore
                        whereAll(...headerKeys: string[]): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeKeysBindingCreator
                        // @ts-ignore
                        whereAll(headerValues: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeMapBindingCreator
                    }
                }
            }
        }
    }
}
