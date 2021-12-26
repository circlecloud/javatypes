declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace network {
                namespace receiver {
                    // @ts-ignore
                    interface IMessage {
                        // @ts-ignore
                        read(p0: eos.moe.dragoncore.network.PacketBuffer): void
                        // @ts-ignore
                        onMessage(p0: Player): void
                        // @ts-ignore
                        isAsync(): boolean
                    }
                }
            }
        }
    }
}
