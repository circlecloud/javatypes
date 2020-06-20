declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * MessagePrompt is the base class for any prompt that only displays a message
             * to the user and requires no input.
             */
            // @ts-ignore
            class MessagePrompt extends java.lang.Object implements org.bukkit.conversations.Prompt {
                // @ts-ignore
                constructor()
                /**
                 * Message prompts never wait for user input before continuing.
                 * @param context Context information about the conversation.
                 * @return Always false.
                 */
                // @ts-ignore
                blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean
                /**
                 * Accepts and ignores any user input, returning the next prompt in the
                 * prompt graph instead.
                 * @param context Context information about the conversation.
                 * @param input Ignored.
                 * @return The next prompt in the prompt graph.
                 */
                // @ts-ignore
                acceptInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt
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
