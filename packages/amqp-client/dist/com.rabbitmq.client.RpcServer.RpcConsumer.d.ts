declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace RpcServer {
                // @ts-ignore
                interface RpcConsumer extends com.rabbitmq.client.Consumer {
                    // @ts-ignore
                    nextDelivery(): com.rabbitmq.client.Delivery
                    // @ts-ignore
                    getConsumerTag(): string
                }
            }
        }
    }
}
