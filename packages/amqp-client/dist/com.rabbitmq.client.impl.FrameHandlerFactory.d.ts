declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                interface FrameHandlerFactory {
                    // @ts-ignore
                    create(addr: com.rabbitmq.client.Address, connectionName: java.lang.String | string): com.rabbitmq.client.impl.FrameHandler
                }
            }
        }
    }
}
