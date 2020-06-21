declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a campfire.
             */
            // @ts-ignore
            interface Campfire extends org.bukkit.block.TileState {
                /**
                 * @return The size of the inventory
                 * @see Inventory#getSize()
                 */
                // @ts-ignore
                getSize(): number /*int*/
                /**
                 * @param index The index of the Slot's ItemStack to return
                 * @return The ItemStack in the slot
                 * @see Inventory#getItem(int)
                 */
                // @ts-ignore
                getItem(index: number /*int*/): org.bukkit.inventory.ItemStack
                /**
                 * @param index The index where to put the ItemStack
                 * @param item The ItemStack to set
                 * @see Inventory#setItem(int, org.bukkit.inventory.ItemStack)
                 */
                // @ts-ignore
                setItem(index: number /*int*/, item: org.bukkit.inventory.ItemStack): void
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 * @param index item slot index
                 * @return Cook time
                 */
                // @ts-ignore
                getCookTime(index: number /*int*/): number /*int*/
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 * @param index item slot index
                 * @param cookTime Cook time
                 */
                // @ts-ignore
                setCookTime(index: number /*int*/, cookTime: number /*int*/): void
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 * @param index item slot index
                 * @return Cook time total
                 */
                // @ts-ignore
                getCookTimeTotal(index: number /*int*/): number /*int*/
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 * @param index item slot index
                 * @param cookTimeTotal Cook time total
                 */
                // @ts-ignore
                setCookTimeTotal(index: number /*int*/, cookTimeTotal: number /*int*/): void
            }
        }
    }
}
