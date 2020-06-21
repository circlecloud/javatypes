declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class UpdateBlockPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly FLAG_NONE: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_NEIGHBORS: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_NETWORK: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_NOGRAPHIC: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_PRIORITY: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_ALL: number /*int*/
                    // @ts-ignore
                    public static readonly FLAG_ALL_PRIORITY: number /*int*/
                    // @ts-ignore
                    public x: number /*int*/
                    // @ts-ignore
                    public z: number /*int*/
                    // @ts-ignore
                    public y: number /*int*/
                    // @ts-ignore
                    public blockRuntimeId: number /*int*/
                    // @ts-ignore
                    public flags: number /*int*/
                    // @ts-ignore
                    public dataLayer: number /*int*/
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
