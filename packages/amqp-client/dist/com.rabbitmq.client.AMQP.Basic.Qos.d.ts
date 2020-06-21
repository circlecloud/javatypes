declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Basic {
                    // @ts-ignore
                    interface Qos extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getPrefetchSize(): number /*int*/
                        // @ts-ignore
                        getPrefetchCount(): number /*int*/
                        // @ts-ignore
                        getGlobal(): boolean
                    }
                }
            }
        }
    }
}
