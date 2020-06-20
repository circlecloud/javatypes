declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * Represents a {@link Command} belonging to a plugin
             */
            // @ts-ignore
            class PluginCommand extends org.bukkit.command.Command implements org.bukkit.command.PluginIdentifiableCommand {
                // @ts-ignore
                constructor(name: string, owner: org.bukkit.plugin.Plugin)
                /**
                 * Executes the command, returning its success
                 * @param sender Source object which is executing this command
                 * @param commandLabel The alias of the command used
                 * @param args All arguments passed to the command, split via ' '
                 * @return true if the command was successful, otherwise false
                 */
                // @ts-ignore
                execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string[]): boolean
                /**
                 * Sets the {@link CommandExecutor} to run when parsing this command
                 * @param executor New executor to run
                 */
                // @ts-ignore
                setExecutor(executor: org.bukkit.command.CommandExecutor): void
                /**
                 * Gets the {@link CommandExecutor} associated with this command
                 * @return CommandExecutor object linked to this command
                 */
                // @ts-ignore
                getExecutor(): org.bukkit.command.CommandExecutor
                /**
                 * Sets the {@link TabCompleter} to run when tab-completing this command.
                 * <p>
                 * If no TabCompleter is specified, and the command's executor implements
                 * TabCompleter, then the executor will be used for tab completion.
                 * @param completer New tab completer
                 */
                // @ts-ignore
                setTabCompleter(completer: org.bukkit.command.TabCompleter): void
                /**
                 * Gets the {@link TabCompleter} associated with this command.
                 * @return TabCompleter object linked to this command
                 */
                // @ts-ignore
                getTabCompleter(): org.bukkit.command.TabCompleter
                /**
                 * Gets the owner of this PluginCommand
                 * @return Plugin that owns this command
                 */
                // @ts-ignore
                getPlugin(): org.bukkit.plugin.Plugin
                /**
                 * {@inheritDoc}
                 * <p>
                 * Delegates to the tab completer if present.
                 * <p>
                 * If it is not present or returns null, will delegate to the current
                 * command executor if it implements {@link TabCompleter}. If a non-null
                 * list has not been found, will default to standard player name
                 * completion in {@link
                 * Command#tabComplete(CommandSender, String, String[])}.
                 * <p>
                 * This method does not consider permissions.
                 * @throws CommandException if the completer or executor throw an
                 *      exception during the process of tab-completing.
                 * @throws IllegalArgumentException if sender, alias, or args is null
                 */
                // @ts-ignore
                tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string[]): java.util.List<java.lang.String>
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
