declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class MobEquipmentPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public item: cn.nukkit.item.Item
                    // @ts-ignore
                    public inventorySlot: number /*int*/
                    // @ts-ignore
                    public hotbarSlot: number /*int*/
                    // @ts-ignore
                    public windowId: number /*int*/
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
