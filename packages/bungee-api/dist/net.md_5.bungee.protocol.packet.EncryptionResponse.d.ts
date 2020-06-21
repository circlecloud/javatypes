declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class EncryptionResponse extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(sharedSecret: number /*byte*/[], verifyToken: number /*byte*/[])
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getSharedSecret(): number /*byte*/[]
                        // @ts-ignore
                        public getVerifyToken(): number /*byte*/[]
                        // @ts-ignore
                        public setSharedSecret(sharedSecret: number /*byte*/[]): void
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
