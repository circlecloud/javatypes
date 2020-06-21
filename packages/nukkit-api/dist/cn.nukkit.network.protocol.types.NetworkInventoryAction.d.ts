declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace types {
                    /**
                     * @author CreeperFace
                     */
                    // @ts-ignore
                    class NetworkInventoryAction extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly SOURCE_CONTAINER: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_WORLD: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_CREATIVE: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TODO: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_CRAFT_SLOT: number /*int*/
                        /**
                         * Fake window IDs for the SOURCE_TODO type (99999)
                         * <p>
                         * These identifiers are used for inventory source types which are not currently implemented server-side in MCPE.
                         * As a general rule of thumb, anything that doesn't have a permanent inventory is client-side. These types are
                         * to allow servers to track what is going on in client-side windows.
                         * <p>
                         * Expect these to change in the future.
                         */
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_CRAFTING_ADD_INGREDIENT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_CRAFTING_REMOVE_INGREDIENT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_CRAFTING_RESULT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_CRAFTING_USE_INGREDIENT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_ANVIL_INPUT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_ANVIL_MATERIAL: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_ANVIL_RESULT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_ANVIL_OUTPUT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_ENCHANT_INPUT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_ENCHANT_MATERIAL: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_ENCHANT_OUTPUT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_TRADING_INPUT_1: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_TRADING_INPUT_2: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_TRADING_USE_INPUTS: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_TRADING_OUTPUT: number /*int*/
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_BEACON: number /*int*/
                        /**
                         * Any client-side window dropping its contents when the player closes it
                         */
                        // @ts-ignore
                        public static readonly SOURCE_TYPE_CONTAINER_DROP_CONTENTS: number /*int*/
                        // @ts-ignore
                        public sourceType: number /*int*/
                        // @ts-ignore
                        public windowId: number /*int*/
                        // @ts-ignore
                        public unknown: number /*long*/
                        // @ts-ignore
                        public inventorySlot: number /*int*/
                        // @ts-ignore
                        public oldItem: cn.nukkit.item.Item
                        // @ts-ignore
                        public newItem: cn.nukkit.item.Item
                        // @ts-ignore
                        public read(packet: cn.nukkit.network.protocol.InventoryTransactionPacket): cn.nukkit.network.protocol.types.NetworkInventoryAction
                        // @ts-ignore
                        public write(packet: cn.nukkit.network.protocol.InventoryTransactionPacket): void
                        // @ts-ignore
                        public createInventoryAction(player: cn.nukkit.Player): cn.nukkit.inventory.transaction.action.InventoryAction
                    }
                }
            }
        }
    }
}
