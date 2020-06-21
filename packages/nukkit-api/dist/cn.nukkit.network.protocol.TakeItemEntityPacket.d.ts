declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 15-10-14.
                 */
                // @ts-ignore
                class TakeItemEntityPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public entityId: number /*long*/
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
