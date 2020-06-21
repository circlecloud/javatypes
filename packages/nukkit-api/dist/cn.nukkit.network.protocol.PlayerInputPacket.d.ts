declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class PlayerInputPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public motionX: number /*float*/
                    // @ts-ignore
                    public motionY: number /*float*/
                    // @ts-ignore
                    public jumping: boolean
                    // @ts-ignore
                    public sneaking: boolean
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
