declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * NullConversationPrefix is a {@link ConversationPrefix} implementation that
             * displays nothing in front of conversation output.
             */
            // @ts-ignore
            class NullConversationPrefix extends java.lang.Object implements org.bukkit.conversations.ConversationPrefix {
                // @ts-ignore
                constructor()
                /**
                 * Prepends each conversation message with an empty string.
                 * @param context Context information about the conversation.
                 * @return An empty string.
                 */
                // @ts-ignore
                public getPrefix(context: org.bukkit.conversations.ConversationContext): string
            }
        }
    }
}
