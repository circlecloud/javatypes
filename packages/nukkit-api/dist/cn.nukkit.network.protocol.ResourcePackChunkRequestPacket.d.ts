declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class ResourcePackChunkRequestPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public packId: java.util.UUID
                    // @ts-ignore
                    public chunkIndex: number /*int*/
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
