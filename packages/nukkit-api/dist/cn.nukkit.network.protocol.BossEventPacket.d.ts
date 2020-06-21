declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created by CreeperFace on 30. 10. 2016.
                 */
                // @ts-ignore
                class BossEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_SHOW: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_REGISTER_PLAYER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_UPDATE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_HIDE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_UNREGISTER_PLAYER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_HEALTH_PERCENT: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_TITLE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_UNKNOWN_6: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_TEXTURE: number /*int*/
                    // @ts-ignore
                    public bossEid: number /*long*/
                    // @ts-ignore
                    public type: number /*int*/
                    // @ts-ignore
                    public playerEid: number /*long*/
                    // @ts-ignore
                    public healthPercent: number /*float*/
                    // @ts-ignore
                    public title: java.lang.String | string
                    // @ts-ignore
                    public unknown: number /*short*/
                    // @ts-ignore
                    public color: number /*int*/
                    // @ts-ignore
                    public overlay: number /*int*/
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
