declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecordedExchange extends com.rabbitmq.client.impl.recovery.RecordedNamedEntity {
                        // @ts-ignore
                        constructor(channel: com.rabbitmq.client.impl.recovery.AutorecoveringChannel, name: java.lang.String | string)
                        // @ts-ignore
                        public recover(): void
                        // @ts-ignore
                        public durable(value: boolean): com.rabbitmq.client.impl.recovery.RecordedExchange
                        // @ts-ignore
                        public autoDelete(value: boolean): com.rabbitmq.client.impl.recovery.RecordedExchange
                        // @ts-ignore
                        public type(value: java.lang.String | string): com.rabbitmq.client.impl.recovery.RecordedExchange
                        // @ts-ignore
                        public arguments(value: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.recovery.RecordedExchange
                        // @ts-ignore
                        public isAutoDelete(): boolean
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
