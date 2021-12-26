declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * A ConversationFactory is responsible for creating a {@link Conversation}
             * from a predefined template. A ConversationFactory is typically created when
             * a plugin is instantiated and builds a Conversation each time a user
             * initiates a conversation with the plugin. Each Conversation maintains its
             * own state and calls back as needed into the plugin.
             * <p>
             * The ConversationFactory implements a fluid API, allowing parameters to be
             * set as an extension to the constructor.
             */
            // @ts-ignore
            class ConversationFactory extends java.lang.Object {
                /**
                 * Constructs a ConversationFactory.
                 * @param plugin The plugin that owns the factory.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                plugin: org.bukkit.plugin.Plugin
                // @ts-ignore
                isModal: boolean
                // @ts-ignore
                localEchoEnabled: boolean
                // @ts-ignore
                prefix: org.bukkit.conversations.ConversationPrefix
                // @ts-ignore
                firstPrompt: org.bukkit.conversations.Prompt
                // @ts-ignore
                initialSessionData: java.util.Map<java.lang.Object | any, java.lang.Object | any>
                // @ts-ignore
                playerOnlyMessage: java.lang.String | string
                // @ts-ignore
                cancellers: java.util.List<org.bukkit.conversations.ConversationCanceller> | Array<org.bukkit.conversations.ConversationCanceller>
                // @ts-ignore
                abandonedListeners: java.util.List<org.bukkit.conversations.ConversationAbandonedListener> | Array<org.bukkit.conversations.ConversationAbandonedListener>
                /**
                 * Sets the modality of all {@link Conversation}s created by this factory.
                 * If a conversation is modal, all messages directed to the player are
                 * suppressed for the duration of the conversation.
                 * <p>
                 * The default is True.
                 * @param modal The modality of all conversations to be created.
                 * @return This object.
                 */
                // @ts-ignore
                public withModality(modal: boolean): org.bukkit.conversations.ConversationFactory
                /**
                 * Sets the local echo status for all {@link Conversation}s created by
                 * this factory. If local echo is enabled, any text submitted to a
                 * conversation gets echoed back into the submitter's chat window.
                 * @param localEchoEnabled The status of local echo.
                 * @return This object.
                 */
                // @ts-ignore
                public withLocalEcho(localEchoEnabled: boolean): org.bukkit.conversations.ConversationFactory
                /**
                 * Sets the {@link ConversationPrefix} that prepends all output from all
                 * generated conversations.
                 * <p>
                 * The default is a {@link NullConversationPrefix};
                 * @param prefix The ConversationPrefix to use.
                 * @return This object.
                 */
                // @ts-ignore
                public withPrefix(prefix: org.bukkit.conversations.ConversationPrefix): org.bukkit.conversations.ConversationFactory
                /**
                 * Sets the number of inactive seconds to wait before automatically
                 * abandoning all generated conversations.
                 * <p>
                 * The default is 600 seconds (5 minutes).
                 * @param timeoutSeconds The number of seconds to wait.
                 * @return This object.
                 */
                // @ts-ignore
                public withTimeout(timeoutSeconds: number /*int*/): org.bukkit.conversations.ConversationFactory
                /**
                 * Sets the first prompt to use in all generated conversations.
                 * <p>
                 * The default is Prompt.END_OF_CONVERSATION.
                 * @param firstPrompt The first prompt.
                 * @return This object.
                 */
                // @ts-ignore
                public withFirstPrompt(firstPrompt: org.bukkit.conversations.Prompt): org.bukkit.conversations.ConversationFactory
                /**
                 * Sets any initial data with which to populate the conversation context
                 * sessionData map.
                 * @param initialSessionData The conversation context's initial
                 *      sessionData.
                 * @return This object.
                 */
                // @ts-ignore
                public withInitialSessionData(initialSessionData: java.util.Map<java.lang.Object | any, java.lang.Object | any>): org.bukkit.conversations.ConversationFactory
                /**
                 * Sets the player input that, when received, will immediately terminate
                 * the conversation.
                 * @param escapeSequence Input to terminate the conversation.
                 * @return This object.
                 */
                // @ts-ignore
                public withEscapeSequence(escapeSequence: java.lang.String | string): org.bukkit.conversations.ConversationFactory
                /**
                 * Adds a {@link ConversationCanceller} to constructed conversations.
                 * @param canceller The {#link ConversationCanceller} to add.
                 * @return This object.
                 */
                // @ts-ignore
                public withConversationCanceller(canceller: org.bukkit.conversations.ConversationCanceller): org.bukkit.conversations.ConversationFactory
                /**
                 * Prevents this factory from creating a conversation for non-player
                 * {@link Conversable} objects.
                 * @param playerOnlyMessage The message to return to a non-play in lieu of
                 *      starting a conversation.
                 * @return This object.
                 */
                // @ts-ignore
                public thatExcludesNonPlayersWithMessage(playerOnlyMessage: java.lang.String | string): org.bukkit.conversations.ConversationFactory
                /**
                 * Adds a {@link ConversationAbandonedListener} to all conversations
                 * constructed by this factory.
                 * @param listener The listener to add.
                 * @return This object.
                 */
                // @ts-ignore
                public addConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): org.bukkit.conversations.ConversationFactory
                /**
                 * Constructs a {@link Conversation} in accordance with the defaults set
                 * for this factory.
                 * @param forWhom The entity for whom the new conversation is mediating.
                 * @return A new conversation.
                 */
                // @ts-ignore
                public buildConversation(forWhom: org.bukkit.conversations.Conversable): org.bukkit.conversations.Conversation
            }
        }
    }
}
