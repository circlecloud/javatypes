declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * A ConversationPrefix implementation prepends all output from the
             * conversation to the player. The ConversationPrefix can be used to display
             * the plugin name or conversation status as the conversation evolves.
             */
            // @ts-ignore
            interface ConversationPrefix {
                /**
                 * Gets the prefix to use before each message to the player.
                 * @param context Context information about the conversation.
                 * @return The prefix text.
                 */
                // @ts-ignore
                getPrefix(context: org.bukkit.conversations.ConversationContext): java.lang.String
            }
        }
    }
}
