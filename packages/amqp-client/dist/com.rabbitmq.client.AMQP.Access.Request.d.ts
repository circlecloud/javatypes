declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Access {
                    // @ts-ignore
                    interface Request extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getRealm(): string
                        // @ts-ignore
                        getExclusive(): boolean
                        // @ts-ignore
                        getPassive(): boolean
                        // @ts-ignore
                        getActive(): boolean
                        // @ts-ignore
                        getWrite(): boolean
                        // @ts-ignore
                        getRead(): boolean
                    }
                }
            }
        }
    }
}
