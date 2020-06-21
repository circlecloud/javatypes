declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class TabCompleteRequest extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(transactionId: number /*int*/, cursor: java.lang.String | string)
                        // @ts-ignore
                        constructor(cursor: java.lang.String | string, assumeCommand: boolean, hasPosition: boolean, position: number /*long*/)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getTransactionId(): number /*int*/
                        // @ts-ignore
                        public getCursor(): string
                        // @ts-ignore
                        public isAssumeCommand(): boolean
                        // @ts-ignore
                        public isHasPositon(): boolean
                        // @ts-ignore
                        public getPosition(): number /*long*/
                        // @ts-ignore
                        public setTransactionId(transactionId: number /*int*/): void
                        // @ts-ignore
                        public setCursor(cursor: java.lang.String | string): void
                        // @ts-ignore
                        public setAssumeCommand(assumeCommand: boolean): void
                        // @ts-ignore
                        public setHasPositon(hasPositon: boolean): void
                        // @ts-ignore
                        public setPosition(position: number /*long*/): void
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
