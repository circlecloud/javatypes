declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface UpdateSecret extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getNewSecret(): com.rabbitmq.client.LongString
                        // @ts-ignore
                        getReason(): string
                    }
                }
            }
        }
    }
}
