declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 15-10-22.
                 */
                // @ts-ignore
                class SetEntityLinkPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_REMOVE: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_RIDE: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_PASSENGER: number /*byte*/
                    // @ts-ignore
                    public vehicleUniqueId: number /*long*/
                    // @ts-ignore
                    public riderUniqueId: number /*long*/
                    // @ts-ignore
                    public type: number /*byte*/
                    // @ts-ignore
                    public immediate: number /*byte*/
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
