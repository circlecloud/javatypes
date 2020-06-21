declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class Team extends net.md_5.bungee.protocol.DefinedPacket {
                        /**
                         * Packet to destroy a team.
                         * @param name team name
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(name: java.lang.String | string, mode: number /*byte*/, displayName: java.lang.String | string, prefix: java.lang.String | string, suffix: java.lang.String | string, nameTagVisibility: java.lang.String | string, collisionRule: java.lang.String | string, color: number /*int*/, friendlyFire: number /*byte*/, players: java.lang.String[] | string[])
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getName(): string
                        /**
                         * 0 - create, 1 remove, 2 info update, 3 player add, 4 player remove.
                         */
                        // @ts-ignore
                        public getMode(): number /*byte*/
                        // @ts-ignore
                        public getDisplayName(): string
                        // @ts-ignore
                        public getPrefix(): string
                        // @ts-ignore
                        public getSuffix(): string
                        // @ts-ignore
                        public getNameTagVisibility(): string
                        // @ts-ignore
                        public getCollisionRule(): string
                        // @ts-ignore
                        public getColor(): number /*int*/
                        // @ts-ignore
                        public getFriendlyFire(): number /*byte*/
                        // @ts-ignore
                        public getPlayers(): string[]
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * 0 - create, 1 remove, 2 info update, 3 player add, 4 player remove.
                         */
                        // @ts-ignore
                        public setMode(mode: number /*byte*/): void
                        // @ts-ignore
                        public setDisplayName(displayName: java.lang.String | string): void
                        // @ts-ignore
                        public setPrefix(prefix: java.lang.String | string): void
                        // @ts-ignore
                        public setSuffix(suffix: java.lang.String | string): void
                        // @ts-ignore
                        public setNameTagVisibility(nameTagVisibility: java.lang.String | string): void
                        // @ts-ignore
                        public setCollisionRule(collisionRule: java.lang.String | string): void
                        // @ts-ignore
                        public setColor(color: number /*int*/): void
                        // @ts-ignore
                        public setFriendlyFire(friendlyFire: number /*byte*/): void
                        // @ts-ignore
                        public setPlayers(players: java.lang.String[] | string[]): void
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
