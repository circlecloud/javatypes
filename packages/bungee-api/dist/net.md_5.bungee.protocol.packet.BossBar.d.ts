declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class BossBar extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(uuid: java.util.UUID, action: number /*int*/)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getUuid(): java.util.UUID
                        // @ts-ignore
                        public getAction(): number /*int*/
                        // @ts-ignore
                        public getTitle(): string
                        // @ts-ignore
                        public getHealth(): number /*float*/
                        // @ts-ignore
                        public getColor(): number /*int*/
                        // @ts-ignore
                        public getDivision(): number /*int*/
                        // @ts-ignore
                        public getFlags(): number /*byte*/
                        // @ts-ignore
                        public setUuid(uuid: java.util.UUID): void
                        // @ts-ignore
                        public setAction(action: number /*int*/): void
                        // @ts-ignore
                        public setTitle(title: java.lang.String | string): void
                        // @ts-ignore
                        public setHealth(health: number /*float*/): void
                        // @ts-ignore
                        public setColor(color: number /*int*/): void
                        // @ts-ignore
                        public setDivision(division: number /*int*/): void
                        // @ts-ignore
                        public setFlags(flags: number /*byte*/): void
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
