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
                    constructor(playerJoined: org.bukkit.entity.Player, joinMessage: java.lang.String | string)
                    /**
                     * Gets the join message to send to all online players
                     * @return string join message. Can be null
                     */
                    // @ts-ignore
                    public getJoinMessage(): string
                    /**
                     * Sets the join message to send to all online players
                     * @param joinMessage join message. If null, no message will be sent
                     */
                    // @ts-ignore
                    public setJoinMessage(joinMessage: java.lang.String | string): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
