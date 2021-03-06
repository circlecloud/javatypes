declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class Handshake extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(protocolVersion: number /*int*/, host: java.lang.String | string, port: number /*int*/, requestedProtocol: number /*int*/)
                        // @ts-ignore
                        public read(buf: ByteBuf): void
                        // @ts-ignore
                        public write(buf: ByteBuf): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getProtocolVersion(): number /*int*/
                        // @ts-ignore
                        public getHost(): string
                        // @ts-ignore
                        public getPort(): number /*int*/
                        // @ts-ignore
                        public getRequestedProtocol(): number /*int*/
                        // @ts-ignore
                        public setProtocolVersion(protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public setHost(host: java.lang.String | string): void
                        // @ts-ignore
                        public setPort(port: number /*int*/): void
                        // @ts-ignore
                        public setRequestedProtocol(requestedProtocol: number /*int*/): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
