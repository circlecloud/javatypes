declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class EntityStatus extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(entityId: number /*int*/, status: number /*byte*/)
                        // @ts-ignore
                        public static readonly DEBUG_INFO_REDUCED: number /*byte*/
                        // @ts-ignore
                        public static readonly DEBUG_INFO_NORMAL: number /*byte*/
                        // @ts-ignore
                        public read(buf: ByteBuf): void
                        // @ts-ignore
                        public write(buf: ByteBuf): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getEntityId(): number /*int*/
                        // @ts-ignore
                        public getStatus(): number /*byte*/
                        // @ts-ignore
                        public setEntityId(entityId: number /*int*/): void
                        // @ts-ignore
                        public setStatus(status: number /*byte*/): void
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
