declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace codec {
                        // @ts-ignore
                        interface Codec<M> {
                            // @ts-ignore
                            encode(p0: M): number /*byte*/[]
                            // @ts-ignore
                            decode(p0: number /*byte*/[]): M
                        }
                    }
                }
            }
        }
    }
}
