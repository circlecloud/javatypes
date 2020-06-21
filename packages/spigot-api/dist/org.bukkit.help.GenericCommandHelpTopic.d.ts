declare namespace org {
    namespace bukkit {
        namespace help {
            /**
             * Lacking an alternative, the help system will create instances of
             * GenericCommandHelpTopic for each command in the server's CommandMap. You
             * can use this class as a base class for custom help topics, or as an example
             * for how to write your own.
             */
            // @ts-ignore
            class GenericCommandHelpTopic extends org.bukkit.help.HelpTopic {
                // @ts-ignore
                constructor(command: org.bukkit.command.Command)
                // @ts-ignore
                command: org.bukkit.command.Command
                // @ts-ignore
                public canSee(sender: org.bukkit.command.CommandSender): boolean
            }
        }
    }
}
