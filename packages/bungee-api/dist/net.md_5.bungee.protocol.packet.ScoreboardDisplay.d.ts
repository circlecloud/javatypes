declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class ScoreboardDisplay extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(position: number /*byte*/, name: java.lang.String | string)
                        // @ts-ignore
                        public read(buf: ByteBuf): void
                        // @ts-ignore
                        public write(buf: ByteBuf): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        /**
                         * 0 = list, 1 = side, 2 = below.
                         */
                        // @ts-ignore
                        public getPosition(): number /*byte*/
                        // @ts-ignore
                        public getName(): string
                        /**
                         * 0 = list, 1 = side, 2 = below.
                         */
                        // @ts-ignore
                        public setPosition(position: number /*byte*/): void
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
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
