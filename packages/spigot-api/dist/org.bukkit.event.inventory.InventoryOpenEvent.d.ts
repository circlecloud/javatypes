declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Represents a player related inventory event
                 */
                // @ts-ignore
                class InventoryOpenEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    /**
                     * Returns the player involved in this event
                     * @return Player who is involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.HumanEntity
                    /**
                     * Gets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins.
                     * <p>
                     * If an inventory open event is cancelled, the inventory screen will not
                     * show.
                     * @return true if this event is cancelled
                     */
                    // @ts-ignore
                    public isCancelled(): boolean
                    /**
                     * Sets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins.
                     * <p>
                     * If an inventory open event is cancelled, the inventory screen will not
                     * show.
                     * @param cancel true if you wish to cancel this event
                     */
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
