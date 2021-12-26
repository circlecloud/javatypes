declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace codec {
                        // @ts-ignore
                        class ByteArrayCodec<M> extends java.lang.Object implements io.lumine.utils.network.messaging.codec.Codec<M> {
                            // @ts-ignore
                            constructor(delegate: io.lumine.utils.network.messaging.codec.Codec<M>)
                            // @ts-ignore
                            public encode(message: M): number /*byte*/[]
                            // @ts-ignore
                            public decode(buf: number /*byte*/[]): M
                        }
                    }
                }
            }
        }
    }
}
