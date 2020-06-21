declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecordedQueueBinding extends com.rabbitmq.client.impl.recovery.RecordedBinding {
                        // @ts-ignore
                        constructor(channel: com.rabbitmq.client.impl.recovery.AutorecoveringChannel)
                        // @ts-ignore
                        public recover(): void
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
