declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Represents a player related inventory event
                 */
                // @ts-ignore
                class InventoryEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    // @ts-ignore
                    transaction: org.bukkit.inventory.InventoryView
                    /**
                     * Gets the primary Inventory involved in this transaction
                     * @return The upper inventory.
                     */
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.Inventory
                    /**
                     * Gets the list of players viewing the primary (upper) inventory involved
                     * in this event
                     * @return A list of people viewing.
                     */
                    // @ts-ignore
                    public getViewers(): Array<org.bukkit.entity.HumanEntity>
                    /**
                     * Gets the view object itself
                     * @return InventoryView
                     */
                    // @ts-ignore
                    public getView(): org.bukkit.inventory.InventoryView
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
