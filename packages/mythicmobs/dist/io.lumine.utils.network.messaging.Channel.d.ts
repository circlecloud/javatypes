declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    // @ts-ignore
                    interface Channel<T> extends io.lumine.utils.interfaces.TypeAware<T> {
                        // @ts-ignore
                        getName(): string
                        // @ts-ignore
                        getType(): object
                        // @ts-ignore
                        getCodec(): io.lumine.utils.network.messaging.codec.Codec<T>
                        // @ts-ignore
                        newAgent(): io.lumine.utils.network.messaging.ChannelAgent<T>
                        // @ts-ignore
                        newAgent(listener: io.lumine.utils.network.messaging.ChannelListener<T>): io.lumine.utils.network.messaging.ChannelAgent<T>
                        // @ts-ignore
                        sendMessage(p0: T): io.lumine.utils.promise.Promise<java.lang.Void>
                        // @ts-ignore
                        sendMessage(p0: java.lang.String | string, p1: T): io.lumine.utils.promise.Promise<java.lang.Void>
                    }
                }
            }
        }
    }
}
