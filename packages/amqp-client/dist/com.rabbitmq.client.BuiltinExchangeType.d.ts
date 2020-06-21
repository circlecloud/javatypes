declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Enum for built-in exchange types.
             */
            // @ts-ignore
            class BuiltinExchangeType extends java.lang.Enum<com.rabbitmq.client.BuiltinExchangeType> {
                // @ts-ignore
                readonly DIRECT: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                readonly FANOUT: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                readonly TOPIC: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                readonly HEADERS: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                values(): com.rabbitmq.client.BuiltinExchangeType[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                getType(): string
            }
        }
    }
}
