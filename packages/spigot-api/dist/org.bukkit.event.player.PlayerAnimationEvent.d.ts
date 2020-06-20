declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Represents a player animation event
                 */
                // @ts-ignore
                class PlayerAnimationEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    /**
                     * Construct a new PlayerAnimation event
                     * @param player The player instance
                     */
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player)
                    /**
                     * Get the type of this animation event
                     * @return the animation type
                     */
                    // @ts-ignore
                    getAnimationType(): org.bukkit.event.player.PlayerAnimationType
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
