declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player attempts to tab-complete a chat message.
                 * @deprecated This event is no longer fired due to client changes
                 */
                // @ts-ignore
                class PlayerChatTabCompleteEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, message: java.lang.String | string, completions: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
                    /**
                     * Gets the chat message being tab-completed.
                     * @return the chat message
                     */
                    // @ts-ignore
                    public getChatMessage(): string
                    /**
                     * Gets the last 'token' of the message being tab-completed.
                     * <p>
                     * The token is the substring starting with the character after the last
                     * space in the message.
                     * @return The last token for the chat message
                     */
                    // @ts-ignore
                    public getLastToken(): string
                    /**
                     * This is the collection of completions for this event.
                     * @return the current completions
                     */
                    // @ts-ignore
                    public getTabCompletions(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
