declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Fired when a player's item breaks (such as a shovel or flint and steel).
                 * <p>
                 * The item that's breaking will exist in the inventory with a stack size of
                 * 0. After the event, the item's durability will be reset to 0.
                 */
                // @ts-ignore
                class PlayerItemBreakEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, brokenItem: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item that broke
                     * @return The broken item
                     */
                    // @ts-ignore
                    getBrokenItem(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
