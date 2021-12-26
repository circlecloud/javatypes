declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace network {
                // @ts-ignore
                class PluginMessageSender extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static sendPluginMessage(packetID: number /*int*/, iPacket: eos.moe.dragoncore.network.PluginMessageSender.IPacket): void
                    // @ts-ignore
                    static sendPluginMessage(players: java.util.List<Player> | Array<Player>, packetID: number /*int*/, iPacket: eos.moe.dragoncore.network.PluginMessageSender.IPacket): void
                    // @ts-ignore
                    static sendPluginMessage(player: Player, packetID: number /*int*/, iPacket: eos.moe.dragoncore.network.PluginMessageSender.IPacket): void
                    // @ts-ignore
                    static generatePackets(packetID: number /*int*/, iPacket: eos.moe.dragoncore.network.PluginMessageSender.IPacket): Array<number /*byte*/[]>
                    // @ts-ignore
                    static sendPluginMessage(bytes: number /*byte*/[]): void
                    // @ts-ignore
                    static sendPluginMessage(players: java.util.List<Player> | Array<Player>, bytes: number /*byte*/[]): void
                    // @ts-ignore
                    static sendPluginMessage(player: Player, bytes: number /*byte*/[]): void
                    // @ts-ignore
                    static compressedByteArray(data: number /*byte*/[]): number /*byte*/[]
                    // @ts-ignore
                    static closeQuietly(closeable: java.io.Closeable): void
                    // @ts-ignore
                    static readBytes(buf: ByteBuf): number /*byte*/[]
                    // @ts-ignore
                    static readBytes(buf: ByteBuf, length: number /*int*/): number /*byte*/[]
                    // @ts-ignore
                    static intToBytes(i: number /*int*/): number /*byte*/[]
                }
            }
        }
    }
}
