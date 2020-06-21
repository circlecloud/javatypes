declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Nack extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getDeliveryTag(): number /*long*/
                        // @ts-ignore
                        getMultiple(): boolean
                        // @ts-ignore
                        getRequeue(): boolean
                    }
                }
            }
        }
    }
}
