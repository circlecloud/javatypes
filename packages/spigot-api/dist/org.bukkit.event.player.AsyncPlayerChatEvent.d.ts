declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event will sometimes fire synchronously, depending on how it was
                 * triggered.
                 * <p>
                 * The constructor provides a boolean to indicate if the event was fired
                 * synchronously or asynchronously. When asynchronous, this event can be
                 * called from any thread, sans the main thread, and has limited access to the
                 * API.
                 * <p>
                 * If a player is the direct cause of this event by an incoming packet, this
                 * event will be asynchronous. If a plugin triggers this event by compelling a
                 * player to chat, this event will be synchronous.
                 * <p>
                 * Care should be taken to check {@link #isAsynchronous()} and treat the event
                 * appropriately.
                 */
                // @ts-ignore
                class AsyncPlayerChatEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    /**
                     * @param async This changes the event to a synchronous state.
                     * @param who the chat sender
                     * @param message the message sent
                     * @param players the players to receive the message. This may be a lazy
                     *      or unmodifiable collection.
                     */
                    // @ts-ignore
                    constructor(async: boolean, who: org.bukkit.entity.Player, message: string, players: Array<org.bukkit.entity.Player>)
                    /**
                     * Gets the message that the player is attempting to send. This message
                     * will be used with {@link #getFormat()}.
                     * @return Message the player is attempting to send
                     */
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Sets the message that the player will send. This message will be used
                     * with {@link #getFormat()}.
                     * @param message New message that the player will send
                     */
                    // @ts-ignore
                    setMessage(message: string): void
                    /**
                     * Gets the format to use to display this chat message.
                     * <p>
                     * When this event finishes execution, the first format parameter is the
                     * {@link Player#getDisplayName()} and the second parameter is {@link
                     * #getMessage()}
                     * @return {#link String#format(String, Object...)} compatible format
                     *      string
                     */
                    // @ts-ignore
                    getFormat(): java.lang.String
                    /**
                     * Sets the format to use to display this chat message.
                     * <p>
                     * When this event finishes execution, the first format parameter is the
                     * {@link Player#getDisplayName()} and the second parameter is {@link
                     * #getMessage()}
                     * @param format {#link String#format(String, Object...)} compatible
                     *      format string
                     * @throws IllegalFormatException if the underlying API throws the
                     *      exception
                     * @throws NullPointerException if format is null
                     * @see String#format(String, Object...)
                     */
                    // @ts-ignore
                    setFormat(format: string): void
                    /**
                     * Gets a set of recipients that this chat message will be displayed to.
                     * <p>
                     * The set returned is not guaranteed to be mutable and may auto-populate
                     * on access. Any listener accessing the returned set should be aware that
                     * it may reduce performance for a lazy set implementation.
                     * <p>
                     * Listeners should be aware that modifying the list may throw {@link
                     * UnsupportedOperationException} if the event caller provides an
                     * unmodifiable set.
                     * @return All Players who will see this chat message
                     */
                    // @ts-ignore
                    getRecipients(): java.util.Set<org.bukkit.entity.Player>
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
