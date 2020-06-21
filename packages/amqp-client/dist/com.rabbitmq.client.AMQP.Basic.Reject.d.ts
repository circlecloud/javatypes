declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Reject extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getDeliveryTag(): number /*long*/
                        // @ts-ignore
                        getRequeue(): boolean
                    }
                }
            }
        }
    }
}
