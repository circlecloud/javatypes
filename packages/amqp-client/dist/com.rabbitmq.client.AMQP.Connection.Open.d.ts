declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface Open extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getVirtualHost(): string
                        // @ts-ignore
                        getCapabilities(): string
                        // @ts-ignore
                        getInsist(): boolean
                    }
                }
            }
        }
    }
}
