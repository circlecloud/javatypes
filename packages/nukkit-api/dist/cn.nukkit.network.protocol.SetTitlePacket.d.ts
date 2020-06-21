declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Tee7even
                 */
                // @ts-ignore
                class SetTitlePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_CLEAR: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_RESET: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_TITLE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SUBTITLE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_ACTION_BAR: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_ANIMATION_TIMES: number /*int*/
                    // @ts-ignore
                    public type: number /*int*/
                    // @ts-ignore
                    public text: java.lang.String | string
                    // @ts-ignore
                    public fadeInTime: number /*int*/
                    // @ts-ignore
                    public stayTime: number /*int*/
                    // @ts-ignore
                    public fadeOutTime: number /*int*/
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
