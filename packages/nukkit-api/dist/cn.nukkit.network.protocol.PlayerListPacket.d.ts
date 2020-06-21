declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class PlayerListPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_ADD: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_REMOVE: number /*byte*/
                    // @ts-ignore
                    public type: number /*byte*/
                    // @ts-ignore
                    public entries: cn.nukkit.network.protocol.PlayerListPacket.Entry[]
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
