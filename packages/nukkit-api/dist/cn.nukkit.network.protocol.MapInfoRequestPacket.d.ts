declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created by CreeperFace on 5.3.2017.
                 */
                // @ts-ignore
                class MapInfoRequestPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public mapId: number /*long*/
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
