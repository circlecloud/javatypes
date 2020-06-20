declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Thrown when a player picks an item up from the ground
                 * @deprecated {#link EntityPickupItemEvent}
                 */
                // @ts-ignore
                class PlayerPickupItemEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, item: org.bukkit.entity.Item, remaining: number /*int*/)
                    /**
                     * Gets the Item picked up by the player.
                     * @return Item
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.entity.Item
                    /**
                     * Gets the amount remaining on the ground, if any
                     * @return amount remaining on the ground
                     */
                    // @ts-ignore
                    getRemaining(): int
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
