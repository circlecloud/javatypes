declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * Represents a class which contains a single method for executing commands
             */
            // @ts-ignore
            interface CommandExecutor {
                /**
                 * Executes the given command, returning its success.
                 * <br>
                 * If false is returned, then the "usage" plugin.yml entry for this command
                 * (if defined) will be sent to the player.
                 * @param sender Source of the command
                 * @param command Command which was executed
                 * @param label Alias of the command which was used
                 * @param args Passed command arguments
                 * @return true if a valid command, otherwise false
                 */
                // @ts-ignore
                onCommand(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, label: java.lang.String | string, args: java.lang.String[] | string[]): boolean
            }
        }
    }
}
