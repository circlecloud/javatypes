declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * StringPrompt is the base class for any prompt that accepts an arbitrary
             * string from the user.
             */
            // @ts-ignore
            abstract class StringPrompt extends java.lang.Object implements org.bukkit.conversations.Prompt {
                // @ts-ignore
                constructor()
                /**
                 * Ensures that the prompt waits for the user to provide input.
                 * @param context Context information about the conversation.
                 * @return True.
                 */
                // @ts-ignore
                public blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean
            }
        }
    }
}
