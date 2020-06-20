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
                    constructor(who: org.bukkit.entity.Player, message: string, completions: Array<java.lang.String>)
                    /**
                     * Gets the chat message being tab-completed.
                     * @return the chat message
                     */
                    // @ts-ignore
                    getChatMessage(): java.lang.String
                    /**
                     * Gets the last 'token' of the message being tab-completed.
                     * <p>
                     * The token is the substring starting with the character after the last
                     * space in the message.
                     * @return The last token for the chat message
                     */
                    // @ts-ignore
                    getLastToken(): java.lang.String
                    /**
                     * This is the collection of completions for this event.
                     * @return the current completions
                     */
                    // @ts-ignore
                    getTabCompletions(): java.util.Collection<java.lang.String>
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
