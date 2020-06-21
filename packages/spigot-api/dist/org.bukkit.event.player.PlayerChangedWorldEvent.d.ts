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
                    public getFrom(): org.bukkit.World
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
