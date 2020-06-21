declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Return extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getReplyCode(): number /*int*/
                        // @ts-ignore
                        getReplyText(): string
                        // @ts-ignore
                        getExchange(): string
                        // @ts-ignore
                        getRoutingKey(): string
                    }
                }
            }
        }
    }
}
