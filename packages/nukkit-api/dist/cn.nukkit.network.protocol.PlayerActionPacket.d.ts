declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class PlayerActionPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly ACTION_START_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_ABORT_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_STOP_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_GET_UPDATED_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_DROP_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_START_SLEEPING: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_STOP_SLEEPING: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_RESPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_JUMP: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_START_SPRINT: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_STOP_SPRINT: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_START_SNEAK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_STOP_SNEAK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_DIMENSION_CHANGE_REQUEST: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_DIMENSION_CHANGE_ACK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_START_GLIDE: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_STOP_GLIDE: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_BUILD_DENIED: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_CONTINUE_BREAK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_SET_ENCHANTMENT_SEED: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_START_SWIMMING: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_STOP_SWIMMING: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_START_SPIN_ATTACK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_STOP_SPIN_ATTACK: number /*int*/
                    // @ts-ignore
                    public entityId: number /*long*/
                    // @ts-ignore
                    public action: number /*int*/
                    // @ts-ignore
                    public x: number /*int*/
                    // @ts-ignore
                    public y: number /*int*/
                    // @ts-ignore
                    public z: number /*int*/
                    // @ts-ignore
                    public face: number /*int*/
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
