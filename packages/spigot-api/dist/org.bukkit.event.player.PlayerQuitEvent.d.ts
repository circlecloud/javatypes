declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player leaves a server
                 */
                // @ts-ignore
                class PlayerQuitEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, quitMessage: string)
                    /**
                     * Gets the quit message to send to all online players
                     * @return string quit message
                     */
                    // @ts-ignore
                    getQuitMessage(): java.lang.String
                    /**
                     * Sets the quit message to send to all online players
                     * @param quitMessage quit message
                     */
                    // @ts-ignore
                    setQuitMessage(quitMessage: string): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
