declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class LoginPayloadRequest extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(id: number /*int*/, channel: java.lang.String | string, data: number /*byte*/[])
                        // @ts-ignore
                        public read(buf: ByteBuf): void
                        // @ts-ignore
                        public write(buf: ByteBuf): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getId(): number /*int*/
                        // @ts-ignore
                        public getChannel(): string
                        // @ts-ignore
                        public getData(): number /*byte*/[]
                        // @ts-ignore
                        public setId(id: number /*int*/): void
                        // @ts-ignore
                        public setChannel(channel: java.lang.String | string): void
                        // @ts-ignore
                        public setData(data: number /*byte*/[]): void
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
