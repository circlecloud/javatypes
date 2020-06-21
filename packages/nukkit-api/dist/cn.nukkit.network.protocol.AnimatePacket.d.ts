declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class AnimatePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public action: cn.nukkit.network.protocol.AnimatePacket.Action
                    // @ts-ignore
                    public rowingTime: number /*float*/
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
