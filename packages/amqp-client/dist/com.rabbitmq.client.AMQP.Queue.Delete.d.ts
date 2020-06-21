declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Queue {
                    // @ts-ignore
                    interface Delete extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getQueue(): string
                        // @ts-ignore
                        getIfUnused(): boolean
                        // @ts-ignore
                        getIfEmpty(): boolean
                        // @ts-ignore
                        getNowait(): boolean
                    }
                }
            }
        }
    }
}
