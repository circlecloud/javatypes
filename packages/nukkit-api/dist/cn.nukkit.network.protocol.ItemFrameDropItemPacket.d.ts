declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created by Pub4Game on 03.07.2016.
                 */
                // @ts-ignore
                class ItemFrameDropItemPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public x: number /*int*/
                    // @ts-ignore
                    public y: number /*int*/
                    // @ts-ignore
                    public z: number /*int*/
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
