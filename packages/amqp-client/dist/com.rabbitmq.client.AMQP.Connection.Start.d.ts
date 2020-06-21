declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface Start extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getVersionMajor(): number /*int*/
                        // @ts-ignore
                        getVersionMinor(): number /*int*/
                        // @ts-ignore
                        getServerProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        getMechanisms(): com.rabbitmq.client.LongString
                        // @ts-ignore
                        getLocales(): com.rabbitmq.client.LongString
                    }
                }
            }
        }
    }
}
