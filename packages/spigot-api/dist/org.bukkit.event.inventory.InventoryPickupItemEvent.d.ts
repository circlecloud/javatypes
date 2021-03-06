declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when a hopper or hopper minecart picks up a dropped item.
                 */
                // @ts-ignore
                class InventoryPickupItemEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(inventory: org.bukkit.inventory.Inventory, item: org.bukkit.entity.Item)
                    /**
                     * Gets the Inventory that picked up the item
                     * @return Inventory
                     */
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.Inventory
                    /**
                     * Gets the Item entity that was picked up
                     * @return Item
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.entity.Item
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
