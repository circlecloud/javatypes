declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 15-10-14.
                 */
                // @ts-ignore
                class MovePlayerPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly MODE_NORMAL: number /*int*/
                    // @ts-ignore
                    public static readonly MODE_RESET: number /*int*/
                    // @ts-ignore
                    public static readonly MODE_TELEPORT: number /*int*/
                    // @ts-ignore
                    public static readonly MODE_PITCH: number /*int*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public yaw: number /*float*/
                    // @ts-ignore
                    public headYaw: number /*float*/
                    // @ts-ignore
                    public pitch: number /*float*/
                    // @ts-ignore
                    public mode: number /*int*/
                    // @ts-ignore
                    public onGround: boolean
                    // @ts-ignore
                    public ridingEid: number /*long*/
                    // @ts-ignore
                    public int1: number /*int*/
                    // @ts-ignore
                    public int2: number /*int*/
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
