declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Exchange {
                    // @ts-ignore
                    interface Delete extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getExchange(): string
                        // @ts-ignore
                        getIfUnused(): boolean
                        // @ts-ignore
                        getNowait(): boolean
                    }
                }
            }
        }
    }
}
