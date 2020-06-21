declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class ResourcePackDataInfoPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_INVALID: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_ADDON: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_CACHED: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_COPY_PROTECTED: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_BEHAVIOR: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_PERSONA_PIECE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_RESOURCE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SKINS: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_WORLD_TEMPLATE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_COUNT: number /*int*/
                    // @ts-ignore
                    public packId: java.util.UUID
                    // @ts-ignore
                    public maxChunkSize: number /*int*/
                    // @ts-ignore
                    public chunkCount: number /*int*/
                    // @ts-ignore
                    public compressedPackSize: number /*long*/
                    // @ts-ignore
                    public sha256: number /*byte*/[]
                    // @ts-ignore
                    public premium: boolean
                    // @ts-ignore
                    public type: number /*int*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public pid(): number /*byte*/
                }
            }
        }
    }
}
