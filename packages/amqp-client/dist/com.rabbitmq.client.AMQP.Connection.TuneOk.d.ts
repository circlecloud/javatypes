declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace AMQP {
                namespace Connection {
                    // @ts-ignore
                    interface TuneOk extends com.rabbitmq.client.Method {
                        // @ts-ignore
                        getChannelMax(): number /*int*/
                        // @ts-ignore
                        getFrameMax(): number /*int*/
                        // @ts-ignore
                        getHeartbeat(): number /*int*/
                    }
                }
            }
        }
    }
}
