declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface Secure extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getChallenge(): com.rabbitmq.client.LongString
                    }
                }
            }
        }
    }
}
