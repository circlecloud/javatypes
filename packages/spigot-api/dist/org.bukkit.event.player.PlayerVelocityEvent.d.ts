declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when the velocity of a player changes.
                 */
                // @ts-ignore
                class PlayerVelocityEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, velocity: org.bukkit.util.Vector)
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the velocity vector that will be sent to the player
                     * @return Vector the player will get
                     */
                    // @ts-ignore
                    public getVelocity(): org.bukkit.util.Vector
                    /**
                     * Sets the velocity vector that will be sent to the player
                     * @param velocity The velocity vector that will be sent to the player
                     */
                    // @ts-ignore
                    public setVelocity(velocity: org.bukkit.util.Vector): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
