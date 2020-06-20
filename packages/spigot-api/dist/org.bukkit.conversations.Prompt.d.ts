declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * A Prompt is the main constituent of a {@link Conversation}. Each prompt
             * displays text to the user and optionally waits for a user's response.
             * Prompts are chained together into a directed graph that represents the
             * conversation flow. To halt a conversation, END_OF_CONVERSATION is returned
             * in liu of another Prompt object.
             */
            // @ts-ignore
            interface Prompt extends java.lang.Cloneable {
                /**
                 * A convenience constant for indicating the end of a conversation.
                 */
                // @ts-ignore
                
                /**
                 * Gets the text to display to the user when this prompt is first
                 * presented.
                 * @param context Context information about the conversation.
                 * @return The text to display.
                 */
                // @ts-ignore
                getPromptText(context: org.bukkit.conversations.ConversationContext): java.lang.String
                /**
                 * Checks to see if this prompt implementation should wait for user input
                 * or immediately display the next prompt.
                 * @param context Context information about the conversation.
                 * @return If true, the {#link Conversation} will wait for input before
                 *      continuing. If false, {@link #acceptInput(ConversationContext, String)} will be called immediately with {@code null} input.
                 */
                // @ts-ignore
                blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean
                /**
                 * Accepts and processes input from the user. Using the input, the next
                 * Prompt in the prompt graph is returned.
                 * @param context Context information about the conversation.
                 * @param input The input text from the user.
                 * @return The next Prompt in the prompt graph.
                 */
                // @ts-ignore
                acceptInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt
            }
        }
    }
}
