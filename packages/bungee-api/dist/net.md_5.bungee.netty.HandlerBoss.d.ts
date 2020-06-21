declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace netty {
                /**
                 * This class is a primitive wrapper for {@link PacketHandler} instances tied to
                 * channels to maintain simple states, and only call the required, adapted
                 * methods when the channel is connected.
                 */
                // @ts-ignore
                class HandlerBoss extends ChannelInboundHandlerAdapter {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setHandler(handler: net.md_5.bungee.netty.PacketHandler): void
                    // @ts-ignore
                    public channelActive(ctx: ChannelHandlerContext): void
                    // @ts-ignore
                    public channelInactive(ctx: ChannelHandlerContext): void
                    // @ts-ignore
                    public channelWritabilityChanged(ctx: ChannelHandlerContext): void
                    // @ts-ignore
                    public channelRead(ctx: ChannelHandlerContext, msg: java.lang.Object | any): void
                    // @ts-ignore
                    public exceptionCaught(ctx: ChannelHandlerContext, cause: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
