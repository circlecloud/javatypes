declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * PluginNameConversationPrefix is a {@link ConversationPrefix} implementation
             * that displays the plugin name in front of conversation output.
             */
            // @ts-ignore
            class PluginNameConversationPrefix extends java.lang.Object implements org.bukkit.conversations.ConversationPrefix {
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, separator: string, prefixColor: org.bukkit.ChatColor)
                // @ts-ignore
                separator: string
                // @ts-ignore
                prefixColor: org.bukkit.ChatColor
                // @ts-ignore
                plugin: org.bukkit.plugin.Plugin
                /**
                 * Prepends each conversation message with the plugin name.
                 * @param context Context information about the conversation.
                 * @return An empty string.
                 */
                // @ts-ignore
                getPrefix(context: org.bukkit.conversations.ConversationContext): java.lang.String
            }
        }
    }
}
