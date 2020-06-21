declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when the recipe of an Item is completed inside a crafting matrix.
                 */
                // @ts-ignore
                class CraftItemEvent extends org.bukkit.event.inventory.InventoryClickEvent {
                    // @ts-ignore
                    constructor(recipe: org.bukkit.inventory.Recipe, what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number /*int*/, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction)
                    // @ts-ignore
                    constructor(recipe: org.bukkit.inventory.Recipe, what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number /*int*/, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction, key: number /*int*/)
                    /**
                     * @return A copy of the current recipe on the crafting matrix.
                     */
                    // @ts-ignore
                    public getRecipe(): org.bukkit.inventory.Recipe
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.CraftingInventory
                }
            }
        }
    }
}
