declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when some entity or block (e.g. hopper) tries to move items directly
                 * from one inventory to another.
                 * <p>
                 * When this event is called, the initiator may already have removed the item
                 * from the source inventory and is ready to move it into the destination
                 * inventory.
                 * <p>
                 * If this event is cancelled, the items will be returned to the source
                 * inventory, if needed.
                 * <p>
                 * If this event is not cancelled, the initiator will try to put the ItemStack
                 * into the destination inventory. If this is not possible and the ItemStack
                 * has not been modified, the source inventory slot will be restored to its
                 * former state. Otherwise any additional items will be discarded.
                 */
                // @ts-ignore
                class InventoryMoveItemEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sourceInventory: org.bukkit.inventory.Inventory, itemStack: org.bukkit.inventory.ItemStack, destinationInventory: org.bukkit.inventory.Inventory, didSourceInitiate: boolean)
                    /**
                     * Gets the Inventory that the ItemStack is being taken from
                     * @return Inventory that the ItemStack is being taken from
                     */
                    // @ts-ignore
                    getSource(): org.bukkit.inventory.Inventory
                    /**
                     * Gets the ItemStack being moved; if modified, the original item will not
                     * be removed from the source inventory.
                     * @return ItemStack
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Sets the ItemStack being moved; if this is different from the original
                     * ItemStack, the original item will not be removed from the source
                     * inventory.
                     * @param itemStack The ItemStack
                     */
                    // @ts-ignore
                    setItem(itemStack: org.bukkit.inventory.ItemStack): void
                    /**
                     * Gets the Inventory that the ItemStack is being put into
                     * @return Inventory that the ItemStack is being put into
                     */
                    // @ts-ignore
                    getDestination(): org.bukkit.inventory.Inventory
                    /**
                     * Gets the Inventory that initiated the transfer. This will always be
                     * either the destination or source Inventory.
                     * @return Inventory that initiated the transfer
                     */
                    // @ts-ignore
                    getInitiator(): org.bukkit.inventory.Inventory
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
