declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class EncryptionRequest extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(serverId: java.lang.String | string, publicKey: number /*byte*/[], verifyToken: number /*byte*/[])
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getServerId(): string
                        // @ts-ignore
                        public getPublicKey(): number /*byte*/[]
                        // @ts-ignore
                        public getVerifyToken(): number /*byte*/[]
                        // @ts-ignore
                        public setServerId(serverId: java.lang.String | string): void
                        // @ts-ignore
                        public setPublicKey(publicKey: number /*byte*/[]): void
                        // @ts-ignore
                        public setVerifyToken(verifyToken: number /*byte*/[]): void
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
