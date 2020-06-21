declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Queue {
                    // @ts-ignore
                    interface DeclareOk extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getQueue(): string
                        // @ts-ignore
                        getMessageCount(): number /*int*/
                        // @ts-ignore
                        getConsumerCount(): number /*int*/
                    }
                }
            }
        }
    }
}
