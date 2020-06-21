declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class ScoreboardScore extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(itemName: java.lang.String | string, action: number /*byte*/, scoreName: java.lang.String | string, value: number /*int*/)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getItemName(): string
                        /**
                         * 0 = create / update, 1 = remove.
                         */
                        // @ts-ignore
                        public getAction(): number /*byte*/
                        // @ts-ignore
                        public getScoreName(): string
                        // @ts-ignore
                        public getValue(): number /*int*/
                        // @ts-ignore
                        public setItemName(itemName: java.lang.String | string): void
                        /**
                         * 0 = create / update, 1 = remove.
                         */
                        // @ts-ignore
                        public setAction(action: number /*byte*/): void
                        // @ts-ignore
                        public setScoreName(scoreName: java.lang.String | string): void
                        // @ts-ignore
                        public setValue(value: number /*int*/): void
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
