declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface StartOk extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        getMechanism(): string
                        // @ts-ignore
                        getResponse(): com.rabbitmq.client.LongString
                        // @ts-ignore
                        getLocale(): string
                    }
                }
            }
        }
    }
}
