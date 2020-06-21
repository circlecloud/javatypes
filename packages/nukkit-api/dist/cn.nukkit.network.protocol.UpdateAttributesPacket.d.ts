declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class UpdateAttributesPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public entries: cn.nukkit.entity.Attribute[]
                    // @ts-ignore
                    public entityId: number /*long*/
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
