declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace entitymap {
                /**
                 * Class to rewrite integers within packets.
                 */
                // @ts-ignore
                abstract class EntityMap extends java.lang.Object {
                    // @ts-ignore
                    public static getEntityMap(version: number /*int*/): net.md_5.bungee.entitymap.EntityMap
                    // @ts-ignore
                    addRewrite(id: number /*int*/, direction: ProtocolConstants.Direction, varint: boolean): void
                    // @ts-ignore
                    public rewriteServerbound(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/): void
                    // @ts-ignore
                    public rewriteServerbound(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/, protocolVersion: number /*int*/): void
                    // @ts-ignore
                    public rewriteClientbound(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/): void
                    // @ts-ignore
                    public rewriteClientbound(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/, protocolVersion: number /*int*/): void
                    // @ts-ignore
                    static rewriteInt(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/, offset: number /*int*/): void
                    // @ts-ignore
                    static rewriteVarInt(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/, offset: number /*int*/): void
                    // @ts-ignore
                    static rewriteMetaVarInt(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/, metaIndex: number /*int*/): void
                    // @ts-ignore
                    static rewriteMetaVarInt(packet: ByteBuf, oldId: number /*int*/, newId: number /*int*/, metaIndex: number /*int*/, protocolVersion: number /*int*/): void
                }
            }
        }
    }
}
