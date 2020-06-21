declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class RespawnPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly STATE_SEARCHING_FOR_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly STATE_READY_TO_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly STATE_CLIENT_READY_TO_SPAWN: number /*int*/
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public respawnState: number /*int*/
                    // @ts-ignore
                    public runtimeEntityId: number /*long*/
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
