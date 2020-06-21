declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class LevelChunkPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public chunkX: number /*int*/
                    // @ts-ignore
                    public chunkZ: number /*int*/
                    // @ts-ignore
                    public subChunkCount: number /*int*/
                    // @ts-ignore
                    public cacheEnabled: boolean
                    // @ts-ignore
                    public blobIds: number /*long*/[]
                    // @ts-ignore
                    public data: number /*byte*/[]
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                }
            }
        }
    }
}
