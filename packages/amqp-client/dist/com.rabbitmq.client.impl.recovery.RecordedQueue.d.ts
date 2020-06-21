declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecordedQueue extends com.rabbitmq.client.impl.recovery.RecordedNamedEntity {
                        // @ts-ignore
                        constructor(channel: com.rabbitmq.client.impl.recovery.AutorecoveringChannel, name: java.lang.String | string)
                        // @ts-ignore
                        public static readonly EMPTY_STRING: java.lang.String | string
                        // @ts-ignore
                        public exclusive(value: boolean): com.rabbitmq.client.impl.recovery.RecordedQueue
                        // @ts-ignore
                        public serverNamed(value: boolean): com.rabbitmq.client.impl.recovery.RecordedQueue
                        // @ts-ignore
                        public isServerNamed(): boolean
                        // @ts-ignore
                        public isAutoDelete(): boolean
                        // @ts-ignore
                        public recover(): void
                        // @ts-ignore
                        public getNameToUseForRecovery(): string
                        // @ts-ignore
                        public durable(value: boolean): com.rabbitmq.client.impl.recovery.RecordedQueue
                        // @ts-ignore
                        public autoDelete(value: boolean): com.rabbitmq.client.impl.recovery.RecordedQueue
                        // @ts-ignore
                        public arguments(value: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.recovery.RecordedQueue
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
