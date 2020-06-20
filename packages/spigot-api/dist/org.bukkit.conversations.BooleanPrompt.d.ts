declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * BooleanPrompt is the base class for any prompt that requires a boolean
             * response from the user.
             */
            // @ts-ignore
            class BooleanPrompt extends org.bukkit.conversations.ValidatingPrompt {
                // @ts-ignore
                constructor()
                // @ts-ignore
                isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean
                // @ts-ignore
                acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt
                /**
                 * Override this method to perform some action with the user's boolean
                 * response.
                 * @param context Context information about the conversation.
                 * @param input The user's boolean response.
                 * @return The next {#link Prompt} in the prompt graph.
                 */
                // @ts-ignore
                abstract acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: boolean): org.bukkit.conversations.Prompt
            }
        }
    }
}
