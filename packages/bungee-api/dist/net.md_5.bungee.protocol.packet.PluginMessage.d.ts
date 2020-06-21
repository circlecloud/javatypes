declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                namespace packet {
                    // @ts-ignore
                    class PluginMessage extends net.md_5.bungee.protocol.DefinedPacket {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(tag: java.lang.String | string, data: number /*byte*/[], allowExtendedPacket: boolean)
                        // @ts-ignore
                        public static readonly MODERNISE: object
                        // @ts-ignore
                        public static readonly SHOULD_RELAY: object
                        // @ts-ignore
                        public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                        // @ts-ignore
                        public handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                        // @ts-ignore
                        public getStream(): java.io.DataInput
                        // @ts-ignore
                        public getTag(): string
                        // @ts-ignore
                        public getData(): number /*byte*/[]
                        /**
                         * Allow this packet to be sent as an "extended" packet.
                         */
                        // @ts-ignore
                        public isAllowExtendedPacket(): boolean
                        // @ts-ignore
                        public setTag(tag: java.lang.String | string): void
                        // @ts-ignore
                        public setData(data: number /*byte*/[]): void
                        /**
                         * Allow this packet to be sent as an "extended" packet.
                         */
                        // @ts-ignore
                        public setAllowExtendedPacket(allowExtendedPacket: boolean): void
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
