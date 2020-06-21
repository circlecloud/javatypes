declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Consume extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getQueue(): string
                        // @ts-ignore
                        getConsumerTag(): string
                        // @ts-ignore
                        getNoLocal(): boolean
                        // @ts-ignore
                        getNoAck(): boolean
                        // @ts-ignore
                        getExclusive(): boolean
                        // @ts-ignore
                        getNowait(): boolean
                        // @ts-ignore
                        getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
