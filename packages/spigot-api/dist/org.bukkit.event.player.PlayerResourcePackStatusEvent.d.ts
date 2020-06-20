declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player takes action on a resource pack request sent via
                 * {@link Player#setResourcePack(java.lang.String)}.
                 */
                // @ts-ignore
                class PlayerResourcePackStatusEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, resourcePackStatus: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status)
                    /**
                     * Gets the status of this pack.
                     * @return the current status
                     */
                    // @ts-ignore
                    getStatus(): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
