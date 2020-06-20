declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player swap items between main hand and off hand using the
                 * hotkey.
                 */
                // @ts-ignore
                class PlayerSwapHandItemsEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, mainHandItem: org.bukkit.inventory.ItemStack, offHandItem: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item switched to the main hand.
                     * @return item in the main hand
                     */
                    // @ts-ignore
                    getMainHandItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Sets the item in the main hand.
                     * @param mainHandItem new item in the main hand
                     */
                    // @ts-ignore
                    setMainHandItem(mainHandItem: org.bukkit.inventory.ItemStack): void
                    /**
                     * Gets the item switched to the off hand.
                     * @return item in the off hand
                     */
                    // @ts-ignore
                    getOffHandItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Sets the item in the off hand.
                     * @param offHandItem new item in the off hand
                     */
                    // @ts-ignore
                    setOffHandItem(offHandItem: org.bukkit.inventory.ItemStack): void
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
