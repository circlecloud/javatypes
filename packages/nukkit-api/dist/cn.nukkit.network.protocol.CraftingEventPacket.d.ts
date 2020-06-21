declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class CraftingEventPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_SHAPELESS: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SHAPED: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FURNACE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_FURNACE_DATA: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_MULTI: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_SHULKER_BOX: number /*int*/
                    // @ts-ignore
                    public windowId: number /*int*/
                    // @ts-ignore
                    public type: number /*int*/
                    // @ts-ignore
                    public id: java.util.UUID
                    // @ts-ignore
                    public input: cn.nukkit.item.Item[]
                    // @ts-ignore
                    public output: cn.nukkit.item.Item[]
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
