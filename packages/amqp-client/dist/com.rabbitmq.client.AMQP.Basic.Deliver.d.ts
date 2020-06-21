declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Deliver extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getConsumerTag(): string
                        // @ts-ignore
                        getDeliveryTag(): number /*long*/
                        // @ts-ignore
                        getRedelivered(): boolean
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
