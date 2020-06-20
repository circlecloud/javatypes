declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player switches to another world.
                 */
                // @ts-ignore
                class PlayerChangedWorldEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.World)
                    /**
                     * Gets the world the player is switching from.
                     * @return player's previous world
                     */
                    // @ts-ignore
                    getFrom(): org.bukkit.World
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
