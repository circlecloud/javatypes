declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * MessagePrompt is the base class for any prompt that only displays a message
             * to the user and requires no input.
             */
            // @ts-ignore
            abstract class MessagePrompt extends java.lang.Object implements org.bukkit.conversations.Prompt {
                // @ts-ignore
                constructor()
                /**
                 * Message prompts never wait for user input before continuing.
                 * @param context Context information about the conversation.
                 * @return Always false.
                 */
                // @ts-ignore
                public blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean
                /**
                 * Accepts and ignores any user input, returning the next prompt in the
                 * prompt graph instead.
                 * @param context Context information about the conversation.
                 * @param input Ignored.
                 * @return The next prompt in the prompt graph.
                 */
                // @ts-ignore
                public acceptInput(context: org.bukkit.conversations.ConversationContext, input: java.lang.String | string): org.bukkit.conversations.Prompt
                /**
                 * Override this method to return the next prompt in the prompt graph.
                 * @param context Context information about the conversation.
                 * @return The next prompt in the prompt graph.
                 */
                // @ts-ignore
                abstract getNextPrompt(context: org.bukkit.conversations.ConversationContext): org.bukkit.conversations.Prompt
            }
        }
    }
}
