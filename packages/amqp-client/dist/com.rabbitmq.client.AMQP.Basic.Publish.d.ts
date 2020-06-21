declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Publish extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getExchange(): string
                        // @ts-ignore
                        getRoutingKey(): string
                        // @ts-ignore
                        getMandatory(): boolean
                        // @ts-ignore
                        getImmediate(): boolean
                    }
                }
            }
        }
    }
}
