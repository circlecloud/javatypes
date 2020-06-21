declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class MobEffectPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly EVENT_ADD: number /*byte*/
                    // @ts-ignore
                    public static readonly EVENT_MODIFY: number /*byte*/
                    // @ts-ignore
                    public static readonly EVENT_REMOVE: number /*byte*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public eventId: number /*int*/
                    // @ts-ignore
                    public effectId: number /*int*/
                    // @ts-ignore
                    public amplifier: number /*int*/
                    // @ts-ignore
                    public particles: boolean
                    // @ts-ignore
                    public duration: number /*int*/
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
