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
                        public where(key: java.lang.String | string): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeSingleValueBindingCreator
                        // @ts-ignore
                        public whereAny(...headerKeys: java.lang.String[] | string[]): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeKeysBindingCreator
                        // @ts-ignore
                        public whereAny(headerValues: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeMapBindingCreator
                        // @ts-ignore
                        public whereAll(...headerKeys: java.lang.String[] | string[]): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeKeysBindingCreator
                        // @ts-ignore
                        public whereAll(headerValues: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.amqp.core.BindingBuilder.HeadersExchangeMapConfigurer.HeadersExchangeMapBindingCreator
                    }
                }
            }
        }
    }
}
