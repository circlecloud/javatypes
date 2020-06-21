declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Queue {
                    // @ts-ignore
                    interface Declare extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getTicket(): number /*int*/
                        // @ts-ignore
                        getQueue(): string
                        // @ts-ignore
                        getPassive(): boolean
                        // @ts-ignore
                        getDurable(): boolean
                        // @ts-ignore
                        getExclusive(): boolean
                        // @ts-ignore
                        getAutoDelete(): boolean
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
