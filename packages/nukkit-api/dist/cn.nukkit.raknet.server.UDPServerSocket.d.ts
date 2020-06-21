declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class UDPServerSocket extends ChannelInboundHandlerAdapter {
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger)
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number /*int*/)
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number /*int*/, interfaz: java.lang.String | string)
                    // @ts-ignore
                    readonly logger: cn.nukkit.utils.ThreadedLogger
                    // @ts-ignore
                    bootstrap: Bootstrap
                    // @ts-ignore
                    channel: Channel
                    // @ts-ignore
                    public static readonly EPOLL: boolean
                    // @ts-ignore
                    packets: java.util.concurrent.ConcurrentLinkedQueue<DatagramPacket>
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public clearPacketQueue(): void
                    // @ts-ignore
                    public readPacket(): DatagramPacket
                    // @ts-ignore
                    public writePacket(data: number /*byte*/[], dest: java.lang.String | string, port: number /*int*/): number /*int*/
                    // @ts-ignore
                    public writePacket(data: number /*byte*/[], dest: java.net.InetSocketAddress): number /*int*/
                    // @ts-ignore
                    public channelRead(ctx: ChannelHandlerContext, msg: java.lang.Object | any): void
                    // @ts-ignore
                    public exceptionCaught(ctx: ChannelHandlerContext, cause: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
