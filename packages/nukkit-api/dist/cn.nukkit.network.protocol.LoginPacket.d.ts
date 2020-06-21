declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created by on 15-10-13.
                 */
                // @ts-ignore
                class LoginPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public username: java.lang.String | string
                    // @ts-ignore
                    public protocol: number /*int*/
                    // @ts-ignore
                    public clientUUID: java.util.UUID
                    // @ts-ignore
                    public clientId: number /*long*/
                    // @ts-ignore
                    public skin: cn.nukkit.entity.data.Skin
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public getProtocol(): number /*int*/
                }
            }
        }
    }
}
