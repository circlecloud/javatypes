declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * The Conversation class is responsible for tracking the current state of a
             * conversation, displaying prompts to the user, and dispatching the user's
             * response to the appropriate place. Conversation objects are not typically
             * instantiated directly. Instead a {@link ConversationFactory} is used to
             * construct identical conversations on demand.
             * <p>
             * Conversation flow consists of a directed graph of {@link Prompt} objects.
             * Each time a prompt gets input from the user, it must return the next prompt
             * in the graph. Since each Prompt chooses the next Prompt, complex
             * conversation trees can be implemented where the nature of the player's
             * response directs the flow of the conversation.
             * <p>
             * Each conversation has a {@link ConversationPrefix} that prepends all output
             * from the conversation to the player. The ConversationPrefix can be used to
             * display the plugin name or conversation status as the conversation evolves.
             * <p>
             * Each conversation has a timeout measured in the number of inactive seconds
             * to wait before abandoning the conversation. If the inactivity timeout is
             * reached, the conversation is abandoned and the user's incoming and outgoing
             * chat is returned to normal.
             * <p>
             * You should not construct a conversation manually. Instead, use the {@link
             * ConversationFactory} for access to all available options.
             */
            // @ts-ignore
            class Conversation extends java.lang.Object {
                /**
                 * Initializes a new Conversation.
                 * @param plugin The plugin that owns this conversation.
                 * @param forWhom The entity for whom this conversation is mediating.
                 * @param firstPrompt The first prompt in the conversation graph.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, firstPrompt: org.bukkit.conversations.Prompt)
                /**
                 * Initializes a new Conversation.
                 * @param plugin The plugin that owns this conversation.
                 * @param forWhom The entity for whom this conversation is mediating.
                 * @param firstPrompt The first prompt in the conversation graph.
                 * @param initialSessionData Any initial values to put in the conversation
                 *      context sessionData map.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, firstPrompt: org.bukkit.conversations.Prompt, initialSessionData: java.util.Map<java.lang.Object | any, java.lang.Object | any>)
                // @ts-ignore
                currentPrompt: org.bukkit.conversations.Prompt
                // @ts-ignore
                context: org.bukkit.conversations.ConversationContext
                // @ts-ignore
                modal: boolean
                // @ts-ignore
                localEchoEnabled: boolean
                // @ts-ignore
                prefix: org.bukkit.conversations.ConversationPrefix
                // @ts-ignore
                cancellers: java.util.List<org.bukkit.conversations.ConversationCanceller> | Array<org.bukkit.conversations.ConversationCanceller>
                // @ts-ignore
                abandonedListeners: java.util.List<org.bukkit.conversations.ConversationAbandonedListener> | Array<org.bukkit.conversations.ConversationAbandonedListener>
                /**
                 * Gets the entity for whom this conversation is mediating.
                 * @return The entity.
                 */
                // @ts-ignore
                public getForWhom(): org.bukkit.conversations.Conversable
                /**
                 * Gets the modality of this conversation. If a conversation is modal, all
                 * messages directed to the player are suppressed for the duration of the
                 * conversation.
                 * @return The conversation modality.
                 */
                // @ts-ignore
                public isModal(): boolean
                /**
                 * Gets the status of local echo for this conversation. If local echo is
                 * enabled, any text submitted to a conversation gets echoed back into the
                 * submitter's chat window.
                 * @return The status of local echo.
                 */
                // @ts-ignore
                public isLocalEchoEnabled(): boolean
                /**
                 * Sets the status of local echo for this conversation. If local echo is
                 * enabled, any text submitted to a conversation gets echoed back into the
                 * submitter's chat window.
                 * @param localEchoEnabled The status of local echo.
                 */
                // @ts-ignore
                public setLocalEchoEnabled(localEchoEnabled: boolean): void
                /**
                 * Gets the {@link ConversationPrefix} that prepends all output from this
                 * conversation.
                 * @return The ConversationPrefix in use.
                 */
                // @ts-ignore
                public getPrefix(): org.bukkit.conversations.ConversationPrefix
                /**
                 * Gets the list of {@link ConversationCanceller}s
                 * @return The list.
                 */
                // @ts-ignore
                public getCancellers(): Array<org.bukkit.conversations.ConversationCanceller>
                /**
                 * Returns the Conversation's {@link ConversationContext}.
                 * @return The ConversationContext.
                 */
                // @ts-ignore
                public getContext(): org.bukkit.conversations.ConversationContext
                /**
                 * Displays the first prompt of this conversation and begins redirecting
                 * the user's chat responses.
                 */
                // @ts-ignore
                public begin(): void
                /**
                 * Returns Returns the current state of the conversation.
                 * @return The current state of the conversation.
                 */
                // @ts-ignore
                public getState(): org.bukkit.conversations.Conversation.ConversationState
                /**
                 * Passes player input into the current prompt. The next prompt (as
                 * determined by the current prompt) is then displayed to the user.
                 * @param input The user's chat text.
                 */
                // @ts-ignore
                public acceptInput(input: java.lang.String | string): void
                /**
                 * Adds a {@link ConversationAbandonedListener}.
                 * @param listener The listener to add.
                 */
                // @ts-ignore
                public addConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): void
                /**
                 * Removes a {@link ConversationAbandonedListener}.
                 * @param listener The listener to remove.
                 */
                // @ts-ignore
                public removeConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): void
                /**
                 * Abandons and resets the current conversation. Restores the user's
                 * normal chat behavior.
                 */
                // @ts-ignore
                public abandon(): void
                /**
                 * Abandons and resets the current conversation. Restores the user's
                 * normal chat behavior.
                 * @param details Details about why the conversation was abandoned
                 */
                // @ts-ignore
                public abandon(details: org.bukkit.conversations.ConversationAbandonedEvent): void
                /**
                 * Displays the next user prompt and abandons the conversation if the next
                 * prompt is null.
                 */
                // @ts-ignore
                public outputNextPrompt(): void
            }
        }
    }
}
