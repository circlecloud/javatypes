declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecordedConsumer extends com.rabbitmq.client.impl.recovery.RecordedEntity {
                        // @ts-ignore
                        constructor(channel: com.rabbitmq.client.impl.recovery.AutorecoveringChannel, queue: java.lang.String | string)
                        // @ts-ignore
                        public consumerTag(value: java.lang.String | string): com.rabbitmq.client.impl.recovery.RecordedConsumer
                        // @ts-ignore
                        public consumer(value: com.rabbitmq.client.Consumer): com.rabbitmq.client.impl.recovery.RecordedConsumer
                        // @ts-ignore
                        public exclusive(value: boolean): com.rabbitmq.client.impl.recovery.RecordedConsumer
                        // @ts-ignore
                        public autoAck(value: boolean): com.rabbitmq.client.impl.recovery.RecordedConsumer
                        // @ts-ignore
                        public recover(): string
                        // @ts-ignore
                        public arguments(value: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.recovery.RecordedConsumer
                        // @ts-ignore
                        public getQueue(): string
                        // @ts-ignore
                        public setQueue(queue: java.lang.String | string): void
                        // @ts-ignore
                        public getConsumerTag(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
