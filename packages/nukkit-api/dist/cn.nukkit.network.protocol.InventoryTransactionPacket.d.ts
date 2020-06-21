declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class InventoryTransactionPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly TYPE_NORMAL: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_MISMATCH: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_USE_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_USE_ITEM_ON_ENTITY: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_RELEASE_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly USE_ITEM_ACTION_CLICK_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly USE_ITEM_ACTION_CLICK_AIR: number /*int*/
                    // @ts-ignore
                    public static readonly USE_ITEM_ACTION_BREAK_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly RELEASE_ITEM_ACTION_RELEASE: number /*int*/
                    // @ts-ignore
                    public static readonly RELEASE_ITEM_ACTION_CONSUME: number /*int*/
                    // @ts-ignore
                    public static readonly USE_ITEM_ON_ENTITY_ACTION_INTERACT: number /*int*/
                    // @ts-ignore
                    public static readonly USE_ITEM_ON_ENTITY_ACTION_ATTACK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_MAGIC_SLOT_DROP_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_MAGIC_SLOT_PICKUP_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_MAGIC_SLOT_CREATIVE_DELETE_ITEM: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_MAGIC_SLOT_CREATIVE_CREATE_ITEM: number /*int*/
                    // @ts-ignore
                    public transactionType: number /*int*/
                    // @ts-ignore
                    public actions: cn.nukkit.network.protocol.types.NetworkInventoryAction[]
                    // @ts-ignore
                    public transactionData: cn.nukkit.inventory.transaction.data.TransactionData
                    /**
                     * NOTE: THIS FIELD DOES NOT EXIST IN THE PROTOCOL, it's merely used for convenience for PocketMine-MP to easily
                     * determine whether we're doing a crafting transaction.
                     */
                    // @ts-ignore
                    public isCraftingPart: boolean
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public decode(): void
                }
            }
        }
    }
}
