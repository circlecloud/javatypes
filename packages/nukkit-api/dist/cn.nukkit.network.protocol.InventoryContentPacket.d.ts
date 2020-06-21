declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class InventoryContentPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly SPECIAL_INVENTORY: number /*int*/
                    // @ts-ignore
                    public static readonly SPECIAL_OFFHAND: number /*int*/
                    // @ts-ignore
                    public static readonly SPECIAL_ARMOR: number /*int*/
                    // @ts-ignore
                    public static readonly SPECIAL_CREATIVE: number /*int*/
                    // @ts-ignore
                    public static readonly SPECIAL_HOTBAR: number /*int*/
                    // @ts-ignore
                    public static readonly SPECIAL_FIXED_INVENTORY: number /*int*/
                    // @ts-ignore
                    public inventoryId: number /*int*/
                    // @ts-ignore
                    public slots: cn.nukkit.item.Item[]
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public clean(): cn.nukkit.network.protocol.DataPacket
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public clone(): cn.nukkit.network.protocol.InventoryContentPacket
                }
            }
        }
    }
}
