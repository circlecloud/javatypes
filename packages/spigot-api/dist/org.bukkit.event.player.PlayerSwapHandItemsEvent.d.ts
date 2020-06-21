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
                    public getMainHandItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Sets the item in the main hand.
                     * @param mainHandItem new item in the main hand
                     */
                    // @ts-ignore
                    public setMainHandItem(mainHandItem: org.bukkit.inventory.ItemStack): void
                    /**
                     * Gets the item switched to the off hand.
                     * @return item in the off hand
                     */
                    // @ts-ignore
                    public getOffHandItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Sets the item in the off hand.
                     * @param offHandItem new item in the off hand
                     */
                    // @ts-ignore
                    public setOffHandItem(offHandItem: org.bukkit.inventory.ItemStack): void
                    // @ts-ignore
                    public isCancelled(): boolean
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
