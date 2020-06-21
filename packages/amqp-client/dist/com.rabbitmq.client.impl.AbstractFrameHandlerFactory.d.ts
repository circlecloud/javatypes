declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                abstract class AbstractFrameHandlerFactory extends java.lang.Object implements com.rabbitmq.client.impl.FrameHandlerFactory {
                    // @ts-ignore
                    constructor(connectionTimeout: number /*int*/, configurator: com.rabbitmq.client.SocketConfigurator, ssl: boolean)
                    // @ts-ignore
                    readonly connectionTimeout: number /*int*/
                    // @ts-ignore
                    readonly configurator: com.rabbitmq.client.SocketConfigurator
                    // @ts-ignore
                    readonly ssl: boolean
                }
            }
        }
    }
}
