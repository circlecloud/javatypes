declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Cancel extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getConsumerTag(): string
                        // @ts-ignore
                        getNowait(): boolean
                    }
                }
            }
        }
    }
}
