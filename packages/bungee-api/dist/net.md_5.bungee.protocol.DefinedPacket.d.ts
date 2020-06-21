declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                // @ts-ignore
                abstract class DefinedPacket extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static writeString(s: java.lang.String | string, buf: ByteBuf): void
                    // @ts-ignore
                    public static readString(buf: ByteBuf): string
                    // @ts-ignore
                    public static writeArray(b: number /*byte*/[], buf: ByteBuf): void
                    // @ts-ignore
                    public static toArray(buf: ByteBuf): number /*byte*/[]
                    // @ts-ignore
                    public static readArray(buf: ByteBuf): number /*byte*/[]
                    // @ts-ignore
                    public static readArray(buf: ByteBuf, limit: number /*int*/): number /*byte*/[]
                    // @ts-ignore
                    public static readVarIntArray(buf: ByteBuf): number /*int*/[]
                    // @ts-ignore
                    public static writeStringArray(s: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, buf: ByteBuf): void
                    // @ts-ignore
                    public static readStringArray(buf: ByteBuf): Array<java.lang.String | string>
                    // @ts-ignore
                    public static readVarInt(input: ByteBuf): number /*int*/
                    // @ts-ignore
                    public static readVarInt(input: ByteBuf, maxBytes: number /*int*/): number /*int*/
                    // @ts-ignore
                    public static writeVarInt(value: number /*int*/, output: ByteBuf): void
                    // @ts-ignore
                    public static readVarShort(buf: ByteBuf): number /*int*/
                    // @ts-ignore
                    public static writeVarShort(buf: ByteBuf, toWrite: number /*int*/): void
                    // @ts-ignore
                    public static writeUUID(value: java.util.UUID, output: ByteBuf): void
                    // @ts-ignore
                    public static readUUID(input: ByteBuf): java.util.UUID
                    // @ts-ignore
                    public read(buf: ByteBuf): void
                    // @ts-ignore
                    public read(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                    // @ts-ignore
                    public write(buf: ByteBuf): void
                    // @ts-ignore
                    public write(buf: ByteBuf, direction: net.md_5.bungee.protocol.ProtocolConstants.Direction, protocolVersion: number /*int*/): void
                    // @ts-ignore
                    public abstract handle(handler: net.md_5.bungee.protocol.AbstractPacketHandler): void
                    // @ts-ignore
                    public abstract equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public abstract hashCode(): number /*int*/
                    // @ts-ignore
                    public abstract toString(): string
                }
            }
        }
    }
}
