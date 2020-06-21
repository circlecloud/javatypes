declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace netty {
                // @ts-ignore
                class ChannelWrapper extends java.lang.Object {
                    // @ts-ignore
                    constructor(ctx: ChannelHandlerContext)
                    // @ts-ignore
                    public setProtocol(protocol: Protocol): void
                    // @ts-ignore
                    public setVersion(protocol: number /*int*/): void
                    // @ts-ignore
                    public write(packet: java.lang.Object | any): void
                    // @ts-ignore
                    public markClosed(): void
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public close(packet: java.lang.Object | any): void
                    // @ts-ignore
                    public delayedClose(kick: Kick): void
                    // @ts-ignore
                    public addBefore(baseName: java.lang.String | string, name: java.lang.String | string, handler: ChannelHandler): void
                    // @ts-ignore
                    public getHandle(): Channel
                    // @ts-ignore
                    public setCompressionThreshold(compressionThreshold: number /*int*/): void
                    // @ts-ignore
                    public getRemoteAddress(): java.net.InetSocketAddress
                    // @ts-ignore
                    public setRemoteAddress(remoteAddress: java.net.InetSocketAddress): void
                    // @ts-ignore
                    public isClosed(): boolean
                    // @ts-ignore
                    public isClosing(): boolean
                }
            }
        }
    }
}
