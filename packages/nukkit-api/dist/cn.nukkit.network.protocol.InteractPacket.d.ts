declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 15-10-15.
                 */
                // @ts-ignore
                class InteractPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly ACTION_VEHICLE_EXIT: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_MOUSEOVER: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_OPEN_INVENTORY: number /*int*/
                    // @ts-ignore
                    public action: number /*int*/
                    // @ts-ignore
                    public target: number /*long*/
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
