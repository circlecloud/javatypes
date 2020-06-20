declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Thrown when a player drops an item from their inventory
                 */
                // @ts-ignore
                class PlayerDropItemEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, drop: org.bukkit.entity.Item)
                    /**
                     * Gets the ItemDrop created by the player
                     * @return ItemDrop created by the player
                     */
                    // @ts-ignore
                    getItemDrop(): org.bukkit.entity.Item
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
