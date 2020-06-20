declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called prior to an entity being unleashed due to a player's action.
                 */
                // @ts-ignore
                class PlayerUnleashEntityEvent extends org.bukkit.event.entity.EntityUnleashEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, player: org.bukkit.entity.Player)
                    /**
                     * Returns the player who is unleashing the entity.
                     * @return The player
                     */
                    // @ts-ignore
                    getPlayer(): org.bukkit.entity.Player
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                }
            }
        }
    }
}
