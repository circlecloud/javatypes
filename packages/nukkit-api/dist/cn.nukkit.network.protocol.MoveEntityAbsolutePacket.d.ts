declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class MoveEntityAbsolutePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public x: number /*double*/
                    // @ts-ignore
                    public y: number /*double*/
                    // @ts-ignore
                    public z: number /*double*/
                    // @ts-ignore
                    public yaw: number /*double*/
                    // @ts-ignore
                    public headYaw: number /*double*/
                    // @ts-ignore
                    public pitch: number /*double*/
                    // @ts-ignore
                    public onGround: boolean
                    // @ts-ignore
                    public teleport: boolean
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
