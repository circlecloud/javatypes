declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace netty {
                // @ts-ignore
                abstract class PacketHandler extends net.md_5.bungee.protocol.AbstractPacketHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public abstract toString(): string
                    // @ts-ignore
                    public shouldHandle(packet: PacketWrapper): boolean
                    // @ts-ignore
                    public exception(t: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handle(packet: PacketWrapper): void
                    // @ts-ignore
                    public connected(channel: net.md_5.bungee.netty.ChannelWrapper): void
                    // @ts-ignore
                    public disconnected(channel: net.md_5.bungee.netty.ChannelWrapper): void
                    // @ts-ignore
                    public writabilityChanged(channel: net.md_5.bungee.netty.ChannelWrapper): void
                }
            }
        }
    }
}
