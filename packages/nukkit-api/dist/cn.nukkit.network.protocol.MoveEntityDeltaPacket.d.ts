declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class MoveEntityDeltaPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly FLAG_HAS_X: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_HAS_Y: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_HAS_Z: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_HAS_YAW: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_HAS_HEAD_YAW: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_HAS_PITCH: number /*int*/
                    // @ts-ignore
                    public flags: number /*int*/
                    // @ts-ignore
                    public xDelta: number /*int*/
                    // @ts-ignore
                    public yDelta: number /*int*/
                    // @ts-ignore
                    public zDelta: number /*int*/
                    // @ts-ignore
                    public yawDelta: number /*double*/
                    // @ts-ignore
                    public headYawDelta: number /*double*/
                    // @ts-ignore
                    public pitchDelta: number /*double*/
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
