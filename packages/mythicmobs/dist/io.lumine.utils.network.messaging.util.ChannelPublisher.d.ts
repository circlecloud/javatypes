declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace util {
                        // @ts-ignore
                        class ChannelPublisher<T> extends java.lang.Object implements io.lumine.utils.terminable.Terminable {
                            // @ts-ignore
                            public static create<T>(channel: io.lumine.utils.network.messaging.Channel<T>, duration: number /*long*/, unit: java.util.concurrent.TimeUnit, threadContext: io.lumine.utils.promise.ThreadContext, supplier: java.util.function$.Supplier<any>): io.lumine.utils.network.messaging.util.ChannelPublisher<T>
                            // @ts-ignore
                            public static create<T>(channel: io.lumine.utils.network.messaging.Channel<T>, duration: number /*long*/, unit: java.util.concurrent.TimeUnit, supplier: java.util.function$.Supplier<any>): io.lumine.utils.network.messaging.util.ChannelPublisher<T>
                            // @ts-ignore
                            public getChannel(): io.lumine.utils.network.messaging.Channel<T>
                            // @ts-ignore
                            public terminate(): boolean
                        }
                    }
                }
            }
        }
    }
}
