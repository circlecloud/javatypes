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
                constructor(name: java.lang.String | string, shortText: java.lang.String | string, permission: java.lang.String | string, topics: java.util.Collection<org.bukkit.help.HelpTopic> | Array<org.bukkit.help.HelpTopic>)
                // @ts-ignore
                constructor(name: java.lang.String | string, shortText: java.lang.String | string, permission: java.lang.String | string, topics: java.util.Collection<org.bukkit.help.HelpTopic> | Array<org.bukkit.help.HelpTopic>, preamble: java.lang.String | string)
                // @ts-ignore
                permission: java.lang.String | string
                // @ts-ignore
                preamble: java.lang.String | string
                // @ts-ignore
                allTopics: java.util.Collection<org.bukkit.help.HelpTopic> | Array<org.bukkit.help.HelpTopic>
                /**
                 * Sets the contents of the internal allTopics collection.
                 * @param topics The topics to set.
                 */
                // @ts-ignore
                setTopicsCollection(topics: java.util.Collection<org.bukkit.help.HelpTopic> | Array<org.bukkit.help.HelpTopic>): void
                // @ts-ignore
                public canSee(sender: org.bukkit.command.CommandSender): boolean
                // @ts-ignore
                public amendCanSee(amendedPermission: java.lang.String | string): void
                // @ts-ignore
                public getFullText(sender: org.bukkit.command.CommandSender): string
                /**
                 * Builds the topic preamble. Override this method to change how the index
                 * preamble looks.
                 * @param sender The command sender requesting the preamble.
                 * @return The topic preamble.
                 */
                // @ts-ignore
                buildPreamble(sender: org.bukkit.command.CommandSender): string
                /**
                 * Builds individual lines in the index topic. Override this method to
                 * change how index lines are rendered.
                 * @param sender The command sender requesting the index line.
                 * @param topic  The topic to render into an index line.
                 * @return The rendered index line.
                 */
                // @ts-ignore
                buildIndexLine(sender: org.bukkit.command.CommandSender, topic: org.bukkit.help.HelpTopic): string
            }
        }
    }
}
