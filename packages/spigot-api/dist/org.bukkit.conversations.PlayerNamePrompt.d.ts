declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * PlayerNamePrompt is the base class for any prompt that requires the player
             * to enter another player's name.
             */
            // @ts-ignore
            class PlayerNamePrompt extends org.bukkit.conversations.ValidatingPrompt {
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean
                // @ts-ignore
                acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt
                /**
                 * Override this method to perform some action with the user's player name
                 * response.
                 * @param context Context information about the conversation.
                 * @param input The user's player name response.
                 * @return The next {#link Prompt} in the prompt graph.
                 */
                // @ts-ignore
                abstract acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: org.bukkit.entity.Player): org.bukkit.conversations.Prompt
            }
        }
    }
}
