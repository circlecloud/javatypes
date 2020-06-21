declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a view linking two inventories and a single player (whose
             * inventory may or may not be one of the two).
             * <p>
             * Note: If you implement this interface but fail to satisfy the expected
             * contracts of certain methods, there's no guarantee that the game will work
             * as it should.
             */
            // @ts-ignore
            abstract class InventoryView extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly OUTSIDE: number /*int*/
                /**
                 * Get the upper inventory involved in this transaction.
                 * @return the inventory
                 */
                // @ts-ignore
                public abstract getTopInventory(): org.bukkit.inventory.Inventory
                /**
                 * Get the lower inventory involved in this transaction.
                 * @return the inventory
                 */
                // @ts-ignore
                public abstract getBottomInventory(): org.bukkit.inventory.Inventory
                /**
                 * Get the player viewing.
                 * @return the player
                 */
                // @ts-ignore
                public abstract getPlayer(): org.bukkit.entity.HumanEntity
                /**
                 * Determine the type of inventory involved in the transaction. This
                 * indicates the window style being shown. It will never return PLAYER,
                 * since that is common to all windows.
                 * @return the inventory type
                 */
                // @ts-ignore
                public abstract getType(): org.bukkit.event.inventory.InventoryType
                /**
                 * Sets one item in this inventory view by its raw slot ID.
                 * <p>
                 * Note: If slot ID -999 is chosen, it may be expected that the item is
                 * dropped on the ground. This is not required behaviour, however.
                 * @param slot The ID as returned by InventoryClickEvent.getRawSlot()
                 * @param item The new item to put in the slot, or null to clear it.
                 */
                // @ts-ignore
                public setItem(slot: number /*int*/, item: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets one item in this inventory view by its raw slot ID.
                 * @param slot The ID as returned by InventoryClickEvent.getRawSlot()
                 * @return The item currently in the slot.
                 */
                // @ts-ignore
                public getItem(slot: number /*int*/): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item on the cursor of one of the viewing players.
                 * @param item The item to put on the cursor, or null to remove the item
                 *      on their cursor.
                 */
                // @ts-ignore
                public setCursor(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Get the item on the cursor of one of the viewing players.
                 * @return The item on the player's cursor, or null if they aren't holding
                 *      one.
                 */
                // @ts-ignore
                public getCursor(): org.bukkit.inventory.ItemStack
                /**
                 * Gets the inventory corresponding to the given raw slot ID.
                 * If the slot ID is {@link #OUTSIDE} null will be returned, otherwise
                 * behaviour for illegal and negative slot IDs is undefined.
                 * May be used with {@link #convertSlot(int)} to directly index an
                 * underlying inventory.
                 * @param rawSlot The raw slot ID.
                 * @return corresponding inventory, or null
                 */
                // @ts-ignore
                public getInventory(rawSlot: number /*int*/): org.bukkit.inventory.Inventory
                /**
                 * Converts a raw slot ID into its local slot ID into whichever of the two
                 * inventories the slot points to.
                 * <p>
                 * If the raw slot refers to the upper inventory, it will be returned
                 * unchanged and thus be suitable for getTopInventory().getItem(); if it
                 * refers to the lower inventory, the output will differ from the input
                 * and be suitable for getBottomInventory().getItem().
                 * @param rawSlot The raw slot ID.
                 * @return The converted slot ID.
                 */
                // @ts-ignore
                public convertSlot(rawSlot: number /*int*/): number /*int*/
                /**
                 * Determine the type of the slot by its raw slot ID.
                 * <p>
                 * If the type of the slot is unknown, then
                 * {@link InventoryType.SlotType#CONTAINER} will be returned.
                 * @param slot The raw slot ID
                 * @return the slot type
                 */
                // @ts-ignore
                public getSlotType(slot: number /*int*/): org.bukkit.event.inventory.InventoryType.SlotType
                /**
                 * Closes the inventory view.
                 */
                // @ts-ignore
                public close(): void
                /**
                 * Check the total number of slots in this view, combining the upper and
                 * lower inventories.
                 * <p>
                 * Note though that it's possible for this to be greater than the sum of
                 * the two inventories if for example some slots are not being used.
                 * @return The total size
                 */
                // @ts-ignore
                public countSlots(): number /*int*/
                /**
                 * Sets an extra property of this inventory if supported by that
                 * inventory, for example the state of a progress bar.
                 * @param prop the window property to update
                 * @param value the new value for the window property
                 * @return true if the property was updated successfully, false if the
                 *      property is not supported by that inventory
                 */
                // @ts-ignore
                public setProperty(prop: org.bukkit.inventory.InventoryView.Property, value: number /*int*/): boolean
                /**
                 * Get the title of this inventory window.
                 * @return The title.
                 */
                // @ts-ignore
                public abstract getTitle(): string
            }
        }
    }
}
