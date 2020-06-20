declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event will fire when a player is finishing consuming an item (food,
                 * potion, milk bucket).
                 * <br>
                 * If the ItemStack is modified the server will use the effects of the new
                 * item and not remove the original one from the player's inventory.
                 * <br>
                 * If the event is cancelled the effect will not be applied and the item will
                 * not be removed from the player's inventory.
                 */
                // @ts-ignore
                class PlayerItemConsumeEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    /**
                     * @param player the player consuming
                     * @param item the ItemStack being consumed
                     */
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, item: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item that is being consumed. Modifying the returned item will
                     * have no effect, you must use {@link
                     * #setItem(org.bukkit.inventory.ItemStack)} instead.
                     * @return an ItemStack for the item being consumed
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Set the item being consumed
                     * @param item the item being consumed
                     */
                    // @ts-ignore
                    setItem(item: org.bukkit.inventory.ItemStack): void
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
