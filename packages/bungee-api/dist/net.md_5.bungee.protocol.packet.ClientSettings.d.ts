declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class ClientSettings extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(locale: java.lang.String | string, viewDistance: number /*byte*/, chatFlags: number /*int*/, chatColours: boolean, difficulty: number /*byte*/, skinParts: number /*byte*/, mainHand: number /*int*/)
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getLocale(): string
                        // @ts-ignore
                        public getViewDistance(): number /*byte*/
                        // @ts-ignore
                        public getChatFlags(): number /*int*/
                        // @ts-ignore
                        public isChatColours(): boolean
                        // @ts-ignore
                        public getDifficulty(): number /*byte*/
                        // @ts-ignore
                        public getSkinParts(): number /*byte*/
                        // @ts-ignore
                        public getMainHand(): number /*int*/
                        // @ts-ignore
                        public setLocale(locale: java.lang.String | string): void
                        // @ts-ignore
                        public setViewDistance(viewDistance: number /*byte*/): void
                        // @ts-ignore
                        public setChatFlags(chatFlags: number /*int*/): void
                        // @ts-ignore
                        public setChatColours(chatColours: boolean): void
                        // @ts-ignore
                        public setDifficulty(difficulty: number /*byte*/): void
                        // @ts-ignore
                        public setSkinParts(skinParts: number /*byte*/): void
                        // @ts-ignore
                        public setMainHand(mainHand: number /*int*/): void
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
