declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player joins a server
                 */
                // @ts-ignore
                class PlayerJoinEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(playerJoined: org.bukkit.entity.Player, joinMessage: string)
                    /**
                     * Gets the join message to send to all online players
                     * @return string join message. Can be null
                     */
                    // @ts-ignore
                    getJoinMessage(): java.lang.String
                    /**
                     * Sets the join message to send to all online players
                     * @param joinMessage join message. If null, no message will be sent
                     */
                    // @ts-ignore
                    setJoinMessage(joinMessage: string): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
