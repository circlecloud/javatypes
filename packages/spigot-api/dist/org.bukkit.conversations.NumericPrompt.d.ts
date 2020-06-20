declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * NumericPrompt is the base class for any prompt that requires a {@link
             * Number} response from the user.
             */
            // @ts-ignore
            class NumericPrompt extends org.bukkit.conversations.ValidatingPrompt {
                // @ts-ignore
                constructor()
                // @ts-ignore
                isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean
                /**
                 * Override this method to do further validation on the numeric player
                 * input after the input has been determined to actually be a number.
                 * @param context Context information about the conversation.
                 * @param input The number the player provided.
                 * @return The validity of the player's input.
                 */
                // @ts-ignore
                isNumberValid(context: org.bukkit.conversations.ConversationContext, input: java.lang.Number): boolean
                // @ts-ignore
                acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt
                /**
                 * Override this method to perform some action with the user's integer
                 * response.
                 * @param context Context information about the conversation.
                 * @param input The user's response as a {#link Number}.
                 * @return The next {#link Prompt} in the prompt graph.
                 */
                // @ts-ignore
                abstract acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: java.lang.Number): org.bukkit.conversations.Prompt
                // @ts-ignore
                getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: string): java.lang.String
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid number.
                 * @param context Context information about the conversation.
                 * @param invalidInput The invalid input provided by the user.
                 * @return A message explaining how to correct the input.
                 */
                // @ts-ignore
                getInputNotNumericText(context: org.bukkit.conversations.ConversationContext, invalidInput: string): java.lang.String
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid numeric input.
                 * @param context Context information about the conversation.
                 * @param invalidInput The invalid input provided by the user.
                 * @return A message explaining how to correct the input.
                 */
                // @ts-ignore
                getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: java.lang.Number): java.lang.String
            }
        }
    }
}
