declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class AddEntityPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static LEGACY_IDS: object
                    // @ts-ignore
                    public entityUniqueId: number /*long*/
                    // @ts-ignore
                    public entityRuntimeId: number /*long*/
                    // @ts-ignore
                    public type: number /*int*/
                    // @ts-ignore
                    public id: java.lang.String | string
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public speedX: number /*float*/
                    // @ts-ignore
                    public speedY: number /*float*/
                    // @ts-ignore
                    public speedZ: number /*float*/
                    // @ts-ignore
                    public yaw: number /*float*/
                    // @ts-ignore
                    public pitch: number /*float*/
                    // @ts-ignore
                    public headYaw: number /*float*/
                    // @ts-ignore
                    public metadata: cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public attributes: cn.nukkit.entity.Attribute[]
                    // @ts-ignore
                    public links: cn.nukkit.network.protocol.types.EntityLink[]
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
