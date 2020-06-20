declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Represents a player related inventory event
                 */
                // @ts-ignore
                class InventoryCloseEvent extends org.bukkit.event.inventory.InventoryEvent {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    /**
                     * Returns the player involved in this event
                     * @return Player who is involved in this event
                     */
                    // @ts-ignore
                    getPlayer(): org.bukkit.entity.HumanEntity
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
