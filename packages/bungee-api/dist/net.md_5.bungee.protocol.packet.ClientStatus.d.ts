declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class ClientStatus extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(payload: number /*byte*/)
                        // @ts-ignore
                        public read(buf: ByteBuf): void
                        // @ts-ignore
                        public write(buf: ByteBuf): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getPayload(): number /*byte*/
                        // @ts-ignore
                        public setPayload(payload: number /*byte*/): void
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
