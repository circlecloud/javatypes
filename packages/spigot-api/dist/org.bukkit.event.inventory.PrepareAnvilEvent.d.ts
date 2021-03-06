declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when an item is put in a slot for repair by an anvil.
                 */
                // @ts-ignore
                class PrepareAnvilEvent extends org.bukkit.event.inventory.InventoryEvent {
                    // @ts-ignore
                    constructor(inventory: org.bukkit.inventory.InventoryView, result: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.AnvilInventory
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
