declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * ConversationAbandonedEvent contains information about an abandoned
             * conversation.
             */
            // @ts-ignore
            class ConversationAbandonedEvent extends java.util.EventObject {
                // @ts-ignore
                constructor(conversation: org.bukkit.conversations.Conversation)
                // @ts-ignore
                constructor(conversation: org.bukkit.conversations.Conversation, canceller: org.bukkit.conversations.ConversationCanceller)
                /**
                 * Gets the object that caused the conversation to be abandoned.
                 * @return The object that abandoned the conversation.
                 */
                // @ts-ignore
                getCanceller(): org.bukkit.conversations.ConversationCanceller
                /**
                 * Gets the abandoned conversation's conversation context.
                 * @return The abandoned conversation's conversation context.
                 */
                // @ts-ignore
                getContext(): org.bukkit.conversations.ConversationContext
                /**
                 * Indicates how the conversation was abandoned - naturally as part of the
                 * prompt chain or prematurely via a {@link ConversationCanceller}.
                 * @return True if the conversation is abandoned gracefully by a {#link
                 *      Prompt} returning null or the next prompt. False of the
                 *      conversations is abandoned prematurely by a ConversationCanceller.
                 */
                // @ts-ignore
                gracefulExit(): boolean
            }
        }
    }
}
