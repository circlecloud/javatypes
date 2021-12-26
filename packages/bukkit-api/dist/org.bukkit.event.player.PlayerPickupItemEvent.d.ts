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
                    public getItem(): org.bukkit.entity.Item
                    /**
                     * Gets the amount remaining on the ground, if any
                     * @return amount remaining on the ground
                     */
                    // @ts-ignore
                    public getRemaining(): number /*int*/
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
