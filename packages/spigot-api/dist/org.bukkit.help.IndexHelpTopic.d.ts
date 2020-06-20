declare namespace org {
    namespace bukkit {
        namespace help {
            /**
             * This help topic generates a list of other help topics. This class is useful
             * for adding your own index help topics. To enforce a particular order, use a
             * sorted collection.
             * <p>
             * If a preamble is provided to the constructor, that text will be displayed
             * before the first item in the index.
             */
            // @ts-ignore
            class IndexHelpTopic extends org.bukkit.help.HelpTopic {
                // @ts-ignore
                constructor(name: string, shortText: string, permission: string, topics: Array<org.bukkit.help.HelpTopic>)
                // @ts-ignore
                constructor(name: string, shortText: string, permission: string, topics: Array<org.bukkit.help.HelpTopic>, preamble: string)
                // @ts-ignore
                permission: string
                // @ts-ignore
                preamble: string
                // @ts-ignore
                allTopics: Array<org.bukkit.help.HelpTopic>
                /**
                 * Sets the contents of the internal allTopics collection.
                 * @param topics The topics to set.
                 */
                // @ts-ignore
                setTopicsCollection(topics: Array<org.bukkit.help.HelpTopic>): void
                // @ts-ignore
                canSee(sender: org.bukkit.command.CommandSender): boolean
                // @ts-ignore
                amendCanSee(amendedPermission: string): void
                // @ts-ignore
                getFullText(sender: org.bukkit.command.CommandSender): java.lang.String
                /**
                 * Builds the topic preamble. Override this method to change how the index
                 * preamble looks.
                 * @param sender The command sender requesting the preamble.
                 * @return The topic preamble.
                 */
                // @ts-ignore
                buildPreamble(sender: org.bukkit.command.CommandSender): java.lang.String
                /**
                 * Builds individual lines in the index topic. Override this method to
                 * change how index lines are rendered.
                 * @param sender The command sender requesting the index line.
                 * @param topic  The topic to render into an index line.
                 * @return The rendered index line.
                 */
                // @ts-ignore
                buildIndexLine(sender: org.bukkit.command.CommandSender, topic: org.bukkit.help.HelpTopic): java.lang.String
            }
        }
    }
}
