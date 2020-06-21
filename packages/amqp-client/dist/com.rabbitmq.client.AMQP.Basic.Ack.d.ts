declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Ack extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getDeliveryTag(): number /*long*/
                        // @ts-ignore
                        getMultiple(): boolean
                    }
                }
            }
        }
    }
}
