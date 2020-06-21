declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface Close extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getReplyCode(): number /*int*/
                        // @ts-ignore
                        getReplyText(): string
                        // @ts-ignore
                        getClassId(): number /*int*/
                        // @ts-ignore
                        getMethodId(): number /*int*/
                    }
                }
            }
        }
    }
}
