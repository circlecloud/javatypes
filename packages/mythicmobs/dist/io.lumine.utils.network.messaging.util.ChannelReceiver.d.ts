declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace util {
                        // @ts-ignore
                        class ChannelReceiver<T> extends java.lang.Object {
                            // @ts-ignore
                            constructor(expiryDuration: number /*long*/, unit: java.util.concurrent.TimeUnit)
                            // @ts-ignore
                            public set(value: T): void
                            // @ts-ignore
                            public getLastKnownValue(): java.util.Optional<T>
                            // @ts-ignore
                            public getValue(): java.util.Optional<T>
                            // @ts-ignore
                            public getLastReceivedTimestamp(): java.util.OptionalLong
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
