declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * Represents a class which can suggest tab completions for commands.
             */
            // @ts-ignore
            interface TabCompleter {
                /**
                 * Requests a list of possible completions for a command argument.
                 * @param sender Source of the command.  For players tab-completing a
                 *      command inside of a command block, this will be the player, not
                 *      the command block.
                 * @param command Command which was executed
                 * @param alias The alias used
                 * @param args The arguments passed to the command, including final
                 *      partial argument to be completed and command label
                 * @return A List of possible completions for the final argument, or null
                 *      to default to the command executor
                 */
                // @ts-ignore
                onTabComplete(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, alias: string, args: string[]): java.util.List<java.lang.String>
            }
        }
    }
}
