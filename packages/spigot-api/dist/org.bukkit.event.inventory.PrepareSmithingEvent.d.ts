declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when an item is put in a slot for upgrade by a Smithing Table.
                 */
                // @ts-ignore
                class PrepareSmithingEvent extends org.bukkit.event.inventory.InventoryEvent {
                    // @ts-ignore
                    constructor(inventory: org.bukkit.inventory.InventoryView, result: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.SmithingInventory
                    /**
                     * Get result item, may be null.
                     * @return result item
                     */
                    // @ts-ignore
                    public getResult(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    public setResult(result: org.bukkit.inventory.ItemStack): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
