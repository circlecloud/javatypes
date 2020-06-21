declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class TabCompleteResponse extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor(transactionId: number /*int*/, suggestions: Suggestions)
                        // @ts-ignore
                        constructor(commands: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
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
                        public getSuggestions(): Suggestions
                        // @ts-ignore
                        public getCommands(): Array<java.lang.String | string>
                        // @ts-ignore
                        public setTransactionId(transactionId: number /*int*/): void
                        // @ts-ignore
                        public setSuggestions(suggestions: Suggestions): void
                        // @ts-ignore
                        public setCommands(commands: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
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
