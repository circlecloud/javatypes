declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Channel {
                    // @ts-ignore
                    interface OpenOk extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getChannelId(): com.rabbitmq.client.LongString
                    }
                }
            }
        }
    }
}
