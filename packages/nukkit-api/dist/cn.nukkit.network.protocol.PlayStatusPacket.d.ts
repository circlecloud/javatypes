declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 15-10-13.
                 */
                // @ts-ignore
                class PlayStatusPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly LOGIN_SUCCESS: number /*int*/
                    // @ts-ignore
                    public static readonly LOGIN_FAILED_CLIENT: number /*int*/
                    // @ts-ignore
                    public static readonly LOGIN_FAILED_SERVER: number /*int*/
                    // @ts-ignore
                    public static readonly PLAYER_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly LOGIN_FAILED_INVALID_TENANT: number /*int*/
                    // @ts-ignore
                    public static readonly LOGIN_FAILED_VANILLA_EDU: number /*int*/
                    // @ts-ignore
                    public static readonly LOGIN_FAILED_EDU_VANILLA: number /*int*/
                    // @ts-ignore
                    public static readonly LOGIN_FAILED_SERVER_FULL: number /*int*/
                    // @ts-ignore
                    public status: number /*int*/
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
