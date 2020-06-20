declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Holds information for player chat and commands
                 * @deprecated This event will fire from the main thread and allows the use of
                 *      all of the Bukkit API, unlike the {#link AsyncPlayerChatEvent}.
                 *      <p>
                 *      Listening to this event forces chat to wait for the main thread which
                 *      causes delays for chat. {@link AsyncPlayerChatEvent} is the encouraged
                 *      alternative for thread safe implementations.
                 */
                // @ts-ignore
                class PlayerChatEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, message: string)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, message: string, format: string, recipients: Array<org.bukkit.entity.Player>)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the message that the player is attempting to send
                     * @return Message the player is attempting to send
                     */
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Sets the message that the player will send
                     * @param message New message that the player will send
                     */
                    // @ts-ignore
                    setMessage(message: string): void
                    /**
                     * Sets the player that this message will display as, or command will be
                     * executed as
                     * @param player New player which this event will execute as
                     */
                    // @ts-ignore
                    setPlayer(player: org.bukkit.entity.Player): void
                    /**
                     * Gets the format to use to display this chat message
                     * @return String.Format compatible format string
                     */
                    // @ts-ignore
                    getFormat(): java.lang.String
                    /**
                     * Sets the format to use to display this chat message
                     * @param format String.Format compatible format string
                     */
                    // @ts-ignore
                    setFormat(format: string): void
                    /**
                     * Gets a set of recipients that this chat message will be displayed to
                     * @return All Players who will see this chat message
                     */
                    // @ts-ignore
                    getRecipients(): java.util.Set<org.bukkit.entity.Player>
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
