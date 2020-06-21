declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player changes their main hand in the client settings.
                 */
                // @ts-ignore
                class PlayerChangedMainHandEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, mainHand: org.bukkit.inventory.MainHand)
                    /**
                     * Gets the new main hand of the player. The old hand is still momentarily
                     * available via {@link Player#getMainHand()}.
                     * @return the new {#link MainHand} of the player
                     */
                    // @ts-ignore
                    public getMainHand(): org.bukkit.inventory.MainHand
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
