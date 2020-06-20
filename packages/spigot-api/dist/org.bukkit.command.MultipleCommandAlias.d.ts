declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * Represents a command that delegates to one or more other commands
             */
            // @ts-ignore
            class MultipleCommandAlias extends org.bukkit.command.Command {
                // @ts-ignore
                constructor(name: string, commands: org.bukkit.command.Command[])
                /**
                 * Gets the commands associated with the multi-command alias.
                 * @return commands associated with alias
                 */
                // @ts-ignore
                getCommands(): org.bukkit.command.Command[]
                // @ts-ignore
                execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string[]): boolean
            }
        }
    }
}
