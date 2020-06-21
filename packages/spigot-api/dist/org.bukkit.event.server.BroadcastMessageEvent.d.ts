declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * Event triggered for server broadcast messages such as from
                 * {@link org.bukkit.Server#broadcast(String, String)}.
                 * <b>This event behaves similarly to {@link AsyncPlayerChatEvent} in that it
                 * should be async if fired from an async thread. Please see that event for
                 * further information.</b>
                 */
                // @ts-ignore
                class BroadcastMessageEvent extends org.bukkit.event.server.ServerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(message: java.lang.String | string, recipients: java.util.Set<org.bukkit.command.CommandSender> | Array<org.bukkit.command.CommandSender>)
                    // @ts-ignore
                    constructor(isAsync: boolean, message: java.lang.String | string, recipients: java.util.Set<org.bukkit.command.CommandSender> | Array<org.bukkit.command.CommandSender>)
                    /**
                     * Get the message to broadcast.
                     * @return Message to broadcast
                     */
                    // @ts-ignore
                    public getMessage(): string
                    /**
                     * Set the message to broadcast.
                     * @param message New message to broadcast
                     */
                    // @ts-ignore
                    public setMessage(message: java.lang.String | string): void
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
                     * @return All CommandSenders who will see this chat message
                     */
                    // @ts-ignore
                    public getRecipients(): Array<org.bukkit.command.CommandSender>
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
