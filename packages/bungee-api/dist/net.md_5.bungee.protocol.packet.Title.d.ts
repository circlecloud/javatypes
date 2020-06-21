declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class Title extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getAction(): net.md_5.bungee.protocol.packet.Title.Action
                        // @ts-ignore
                        public getText(): string
                        // @ts-ignore
                        public getFadeIn(): number /*int*/
                        // @ts-ignore
                        public getStay(): number /*int*/
                        // @ts-ignore
                        public getFadeOut(): number /*int*/
                        // @ts-ignore
                        public setAction(action: net.md_5.bungee.protocol.packet.Title.Action): void
                        // @ts-ignore
                        public setText(text: java.lang.String | string): void
                        // @ts-ignore
                        public setFadeIn(fadeIn: number /*int*/): void
                        // @ts-ignore
                        public setStay(stay: number /*int*/): void
                        // @ts-ignore
                        public setFadeOut(fadeOut: number /*int*/): void
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
