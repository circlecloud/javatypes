declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * This event is called when a player in creative mode puts down or picks up
                 * an item in their inventory / hotbar and when they drop items from their
                 * Inventory while in creative mode.
                 */
                // @ts-ignore
                class InventoryCreativeEvent extends org.bukkit.event.inventory.InventoryClickEvent {
                    // @ts-ignore
                    constructor(what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number /*int*/, newItem: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    getCursor(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    setCursor(item: org.bukkit.inventory.ItemStack): void
                }
            }
        }
    }
}
