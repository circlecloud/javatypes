declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface Blocked extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getReason(): string
                    }
                }
            }
        }
    }
}
