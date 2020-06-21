declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class ScoreboardObjective extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(name: java.lang.String | string, value: java.lang.String | string, type: net.md_5.bungee.protocol.packet.ScoreboardObjective.HealthDisplay, action: number /*byte*/)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public getValue(): string
                        // @ts-ignore
                        public getType(): net.md_5.bungee.protocol.packet.ScoreboardObjective.HealthDisplay
                        /**
                         * 0 to create, 1 to remove, 2 to update display text.
                         */
                        // @ts-ignore
                        public getAction(): number /*byte*/
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        // @ts-ignore
                        public setValue(value: java.lang.String | string): void
                        // @ts-ignore
                        public setType(type: net.md_5.bungee.protocol.packet.ScoreboardObjective.HealthDisplay): void
                        /**
                         * 0 to create, 1 to remove, 2 to update display text.
                         */
                        // @ts-ignore
                        public setAction(action: number /*byte*/): void
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
