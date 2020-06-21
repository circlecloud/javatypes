declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * A ConversationCanceller is a class that cancels an active {@link
             * Conversation}. A Conversation can have more than one ConversationCanceller.
             */
            // @ts-ignore
            interface ConversationCanceller extends java.lang.Cloneable {
                /**
                 * Sets the conversation this ConversationCanceller can optionally cancel.
                 * @param conversation A conversation.
                 */
                // @ts-ignore
                setConversation(conversation: org.bukkit.conversations.Conversation): void
                /**
                 * Cancels a conversation based on user input.
                 * @param context Context information about the conversation.
                 * @param input The input text from the user.
                 * @return True to cancel the conversation, False otherwise.
                 */
                // @ts-ignore
                cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: java.lang.String | string): boolean
                /**
                 * Allows the {@link ConversationFactory} to duplicate this
                 * ConversationCanceller when creating a new {@link Conversation}.
                 * <p>
                 * Implementing this method should reset any internal object state.
                 * @return A clone.
                 */
                // @ts-ignore
                clone(): org.bukkit.conversations.ConversationCanceller
            }
        }
    }
}
