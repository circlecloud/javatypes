declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Queue {
                    // @ts-ignore
                    interface Purge extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getQueue(): string
                        // @ts-ignore
                        getNowait(): boolean
                    }
                }
            }
        }
    }
}
