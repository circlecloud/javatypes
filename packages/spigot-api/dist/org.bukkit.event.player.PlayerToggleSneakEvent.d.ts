declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player toggles their sneaking state
                 */
                // @ts-ignore
                class PlayerToggleSneakEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, isSneaking: boolean)
                    /**
                     * Returns whether the player is now sneaking or not.
                     * @return sneaking state
                     */
                    // @ts-ignore
                    isSneaking(): boolean
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
