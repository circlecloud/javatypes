declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecordedEntity extends java.lang.Object {
                        // @ts-ignore
                        constructor(channel: com.rabbitmq.client.impl.recovery.AutorecoveringChannel)
                        // @ts-ignore
                        readonly channel: com.rabbitmq.client.impl.recovery.AutorecoveringChannel
                        // @ts-ignore
                        public getChannel(): com.rabbitmq.client.impl.recovery.AutorecoveringChannel
                        // @ts-ignore
                        public getDelegateChannel(): com.rabbitmq.client.Channel
                    }
                }
            }
        }
    }
}
