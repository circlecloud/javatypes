declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * ValidatingPrompt is the base class for any prompt that requires validation.
             * ValidatingPrompt will keep replaying the prompt text until the user enters
             * a valid response.
             */
            // @ts-ignore
            abstract class ValidatingPrompt extends java.lang.Object implements org.bukkit.conversations.Prompt {
                // @ts-ignore
                constructor()
                /**
                 * Accepts and processes input from the user and validates it. If
                 * validation fails, this prompt is returned for re-execution, otherwise
                 * the next Prompt in the prompt graph is returned.
                 * @param context Context information about the conversation.
                 * @param input The input text from the user.
                 * @return This prompt or the next Prompt in the prompt graph.
                 */
                // @ts-ignore
                public acceptInput(context: org.bukkit.conversations.ConversationContext, input: java.lang.String | string): org.bukkit.conversations.Prompt
                /**
                 * Ensures that the prompt waits for the user to provide input.
                 * @param context Context information about the conversation.
                 * @return True.
                 */
                // @ts-ignore
                public blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean
                /**
                 * Override this method to check the validity of the player's input.
                 * @param context Context information about the conversation.
                 * @param input The player's raw console input.
                 * @return True or false depending on the validity of the input.
                 */
                // @ts-ignore
                abstract isInputValid(context: org.bukkit.conversations.ConversationContext, input: java.lang.String | string): boolean
                /**
                 * Override this method to accept and processes the validated input from
                 * the user. Using the input, the next Prompt in the prompt graph should
                 * be returned.
                 * @param context Context information about the conversation.
                 * @param input The validated input text from the user.
                 * @return The next Prompt in the prompt graph.
                 */
                // @ts-ignore
                abstract acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: java.lang.String | string): org.bukkit.conversations.Prompt
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid input.
                 * @param context Context information about the conversation.
                 * @param invalidInput The invalid input provided by the user.
                 * @return A message explaining how to correct the input.
                 */
                // @ts-ignore
                getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: java.lang.String | string): string
            }
        }
    }
}
