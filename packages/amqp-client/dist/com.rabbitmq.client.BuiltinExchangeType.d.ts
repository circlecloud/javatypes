declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Enum for built-in exchange types.
             */
            // @ts-ignore
            class BuiltinExchangeType extends java.lang.Enum<com.rabbitmq.client.BuiltinExchangeType> {
                // @ts-ignore
                public static readonly DIRECT: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                public static readonly FANOUT: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                public static readonly TOPIC: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                public static readonly HEADERS: com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                public static values(): com.rabbitmq.client.BuiltinExchangeType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): com.rabbitmq.client.BuiltinExchangeType
                // @ts-ignore
                public getType(): string
            }
        }
    }
}
