declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface ConsumeOk extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getConsumerTag(): string
                    }
                }
            }
        }
    }
}
