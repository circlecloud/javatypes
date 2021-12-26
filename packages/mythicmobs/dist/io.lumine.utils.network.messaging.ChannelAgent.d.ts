declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    // @ts-ignore
                    interface ChannelAgent<T> extends io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        getChannel(): io.lumine.utils.network.messaging.Channel<T>
                        // @ts-ignore
                        getListeners(): Array<io.lumine.utils.network.messaging.ChannelListener<T>>
                        // @ts-ignore
                        hasListeners(): boolean
                        // @ts-ignore
                        addListener(p0: io.lumine.utils.network.messaging.ChannelListener<T>): boolean
                        // @ts-ignore
                        removeListener(p0: io.lumine.utils.network.messaging.ChannelListener<T>): boolean
                        // @ts-ignore
                        terminate(): boolean
                    }
                }
            }
        }
    }
}
