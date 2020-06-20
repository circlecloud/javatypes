declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                class PrepareItemCraftEvent extends org.bukkit.event.inventory.InventoryEvent {
                    // @ts-ignore
                    constructor(what: org.bukkit.inventory.CraftingInventory, view: org.bukkit.inventory.InventoryView, isRepair: boolean)
                    /**
                     * Get the recipe that has been formed. If this event was triggered by a
                     * tool repair, this will be a temporary shapeless recipe representing the
                     * repair.
                     * @return The recipe being crafted.
                     */
                    // @ts-ignore
                    getRecipe(): org.bukkit.inventory.Recipe
                    /**
                     * @return The crafting inventory on which the recipe was formed.
                     */
                    // @ts-ignore
                    getInventory(): org.bukkit.inventory.CraftingInventory
                    /**
                     * Check if this event was triggered by a tool repair operation rather
                     * than a crafting recipe.
                     * @return True if this is a repair.
                     */
                    // @ts-ignore
                    isRepair(): boolean
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
