declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class SetEntityDataPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public metadata: cn.nukkit.entity.data.EntityMetadata
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
