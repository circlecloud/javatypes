declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 2016/1/5 by xtypr.
                 * Package cn.nukkit.network.protocol in project nukkit .
                 */
                // @ts-ignore
                class ChangeDimensionPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public dimension: number /*int*/
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public respawn: boolean
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
