declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class AddPlayerPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public uuid: java.util.UUID
                    // @ts-ignore
                    public username: java.lang.String | string
                    // @ts-ignore
                    public entityUniqueId: number /*long*/
                    // @ts-ignore
                    public entityRuntimeId: number /*long*/
                    // @ts-ignore
                    public platformChatId: java.lang.String | string
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
                    public pitch: number /*float*/
                    // @ts-ignore
                    public yaw: number /*float*/
                    // @ts-ignore
                    public item: cn.nukkit.item.Item
                    // @ts-ignore
                    public metadata: cn.nukkit.entity.data.EntityMetadata
                    // @ts-ignore
                    public deviceId: java.lang.String | string
                    // @ts-ignore
                    public buildPlatform: number /*int*/
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
