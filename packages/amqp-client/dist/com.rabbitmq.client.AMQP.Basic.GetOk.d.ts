declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface GetOk extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getDeliveryTag(): number /*long*/
                        // @ts-ignore
                        getRedelivered(): boolean
                        // @ts-ignore
                        getExchange(): string
                        // @ts-ignore
                        getRoutingKey(): string
                        // @ts-ignore
                        getMessageCount(): number /*int*/
                    }
                }
            }
        }
    }
}
