declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * An ExactMatchConversationCanceller cancels a conversation if the user
             * enters an exact input string
             */
            // @ts-ignore
            class ExactMatchConversationCanceller extends java.lang.Object implements org.bukkit.conversations.ConversationCanceller {
                /**
                 * Builds an ExactMatchConversationCanceller.
                 * @param escapeSequence The string that, if entered by the user, will
                 *      cancel the conversation.
                 */
                // @ts-ignore
                constructor(escapeSequence: string)
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
