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
                    constructor(who: org.bukkit.entity.Player, quitMessage: java.lang.String | string)
                    /**
                     * Gets the quit message to send to all online players
                     * @return string quit message
                     */
                    // @ts-ignore
                    public getQuitMessage(): string
                    /**
                     * Sets the quit message to send to all online players
                     * @param quitMessage quit message
                     */
                    // @ts-ignore
                    public setQuitMessage(quitMessage: java.lang.String | string): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
