declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            interface ConversationAbandonedListener extends java.util.EventListener {
                /**
                 * Called whenever a {@link Conversation} is abandoned.
                 * @param abandonedEvent Contains details about the abandoned
                 *      conversation.
                 */
                // @ts-ignore
                conversationAbandoned(abandonedEvent: org.bukkit.conversations.ConversationAbandonedEvent): void
            }
        }
    }
}
