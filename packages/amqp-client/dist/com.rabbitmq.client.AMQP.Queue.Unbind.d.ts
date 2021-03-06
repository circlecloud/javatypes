declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Queue {
                    // @ts-ignore
                    interface Unbind extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getQueue(): string
                        // @ts-ignore
                        getExchange(): string
                        // @ts-ignore
                        getRoutingKey(): string
                        // @ts-ignore
                        getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
