declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Exchange {
                    // @ts-ignore
                    interface Bind extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getDestination(): string
                        // @ts-ignore
                        getSource(): string
                        // @ts-ignore
                        getRoutingKey(): string
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
