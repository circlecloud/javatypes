declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * The ManuallyAbandonedConversationCanceller is only used as part of a {@link
             * ConversationAbandonedEvent} to indicate that the conversation was manually
             * abandoned by programmatically calling the abandon() method on it.
             */
            // @ts-ignore
            class ManuallyAbandonedConversationCanceller extends java.lang.Object implements org.bukkit.conversations.ConversationCanceller {
                // @ts-ignore
                constructor()
                // @ts-ignore
                setConversation(conversation: org.bukkit.conversations.Conversation): void
                // @ts-ignore
                cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean
                // @ts-ignore
                clone(): org.bukkit.conversations.ConversationCanceller
            }
        }
    }
}
