declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace network {
                namespace receiver {
                    // @ts-ignore
                    class MessageInteract extends java.lang.Object implements eos.moe.dragoncore.network.receiver.IMessage {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public read(buffer: eos.moe.dragoncore.network.PacketBuffer): void
                        // @ts-ignore
                        public onMessage(player: Player): void
                        // @ts-ignore
                        public attack(p: Player, entityId: number /*int*/): void
                        // @ts-ignore
                        public interactAt(p: Player, entityId: number /*int*/, hand: EnumHand, vector: Vector): void
                    }
                }
            }
        }
    }
}
