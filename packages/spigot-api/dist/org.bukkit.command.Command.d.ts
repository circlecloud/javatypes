declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * Represents a Command, which executes various tasks upon user input
             */
            // @ts-ignore
            abstract class Command extends java.lang.Object {
                // @ts-ignore
                constructor(name: java.lang.String | string)
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, usageMessage: java.lang.String | string, aliases: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                // @ts-ignore
                description: java.lang.String | string
                // @ts-ignore
                usageMessage: java.lang.String | string
                // @ts-ignore
                public timings: org.spigotmc.CustomTimingsHandler
                /**
                 * Executes the command, returning its success
                 * @param sender Source object which is executing this command
                 * @param commandLabel The alias of the command used
                 * @param args All arguments passed to the command, split via ' '
                 * @return true if the command was successful, otherwise false
                 */
                // @ts-ignore
                public abstract execute(sender: org.bukkit.command.CommandSender, commandLabel: java.lang.String | string, args: java.lang.String[] | string[]): boolean
                /**
                 * Executed on tab completion for this command, returning a list of
                 * options the player can tab through.
                 * @param sender Source object which is executing this command
                 * @param alias the alias being used
                 * @param args All arguments passed to the command, split via ' '
                 * @return a list of tab-completions for the specified arguments. This
                 *      will never be null. List may be immutable.
                 * @throws IllegalArgumentException if sender, alias, or args is null
                 */
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, alias: java.lang.String | string, args: java.lang.String[] | string[]): Array<java.lang.String | string>
                /**
                 * Executed on tab completion for this command, returning a list of
                 * options the player can tab through.
                 * @param sender Source object which is executing this command
                 * @param alias the alias being used
                 * @param args All arguments passed to the command, split via ' '
                 * @param location The position looked at by the sender, or null if none
                 * @return a list of tab-completions for the specified arguments. This
                 *      will never be null. List may be immutable.
                 * @throws IllegalArgumentException if sender, alias, or args is null
                 */
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, alias: java.lang.String | string, args: java.lang.String[] | string[], location: org.bukkit.Location): Array<java.lang.String | string>
                /**
                 * Returns the name of this command
                 * @return Name of this command
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Sets the name of this command.
                 * <p>
                 * May only be used before registering the command.
                 * Will return true if the new name is set, and false
                 * if the command has already been registered.
                 * @param name New command name
                 * @return returns true if the name change happened instantly or false if
                 *      the command was already registered
                 */
                // @ts-ignore
                public setName(name: java.lang.String | string): boolean
                /**
                 * Gets the permission required by users to be able to perform this
                 * command
                 * @return Permission name, or null if none
                 */
                // @ts-ignore
                public getPermission(): string
                /**
                 * Sets the permission required by users to be able to perform this
                 * command
                 * @param permission Permission name or null
                 */
                // @ts-ignore
                public setPermission(permission: java.lang.String | string): void
                /**
                 * Tests the given {@link CommandSender} to see if they can perform this
                 * command.
                 * <p>
                 * If they do not have permission, they will be informed that they cannot
                 * do this.
                 * @param target User to test
                 * @return true if they can use it, otherwise false
                 */
                // @ts-ignore
                public testPermission(target: org.bukkit.command.CommandSender): boolean
                /**
                 * Tests the given {@link CommandSender} to see if they can perform this
                 * command.
                 * <p>
                 * No error is sent to the sender.
                 * @param target User to test
                 * @return true if they can use it, otherwise false
                 */
                // @ts-ignore
                public testPermissionSilent(target: org.bukkit.command.CommandSender): boolean
                /**
                 * Returns the label for this command
                 * @return Label of this command
                 */
                // @ts-ignore
                public getLabel(): string
                /**
                 * Sets the label of this command.
                 * <p>
                 * May only be used before registering the command.
                 * Will return true if the new name is set, and false
                 * if the command has already been registered.
                 * @param name The command's name
                 * @return returns true if the name change happened instantly or false if
                 *      the command was already registered
                 */
                // @ts-ignore
                public setLabel(name: java.lang.String | string): boolean
                /**
                 * Registers this command to a CommandMap.
                 * Once called it only allows changes the registered CommandMap
                 * @param commandMap the CommandMap to register this command to
                 * @return true if the registration was successful (the current registered
                 *      CommandMap was the passed CommandMap or null) false otherwise
                 */
                // @ts-ignore
                public register(commandMap: org.bukkit.command.CommandMap): boolean
                /**
                 * Unregisters this command from the passed CommandMap applying any
                 * outstanding changes
                 * @param commandMap the CommandMap to unregister
                 * @return true if the unregistration was successful (the current
                 *      registered CommandMap was the passed CommandMap or null) false
                 *      otherwise
                 */
                // @ts-ignore
                public unregister(commandMap: org.bukkit.command.CommandMap): boolean
                /**
                 * Returns the current registered state of this command
                 * @return true if this command is currently registered false otherwise
                 */
                // @ts-ignore
                public isRegistered(): boolean
                /**
                 * Returns a list of active aliases of this command
                 * @return List of aliases
                 */
                // @ts-ignore
                public getAliases(): Array<java.lang.String | string>
                /**
                 * Returns a message to be displayed on a failed permission check for this
                 * command
                 * @return Permission check failed message
                 */
                // @ts-ignore
                public getPermissionMessage(): string
                /**
                 * Gets a brief description of this command
                 * @return Description of this command
                 */
                // @ts-ignore
                public getDescription(): string
                /**
                 * Gets an example usage of this command
                 * @return One or more example usages
                 */
                // @ts-ignore
                public getUsage(): string
                /**
                 * Sets the list of aliases to request on registration for this command.
                 * This is not effective outside of defining aliases in the {@link
                 * PluginDescriptionFile#getCommands()} (under the
                 * `<code>aliases</code>' node) is equivalent to this method.
                 * @param aliases aliases to register to this command
                 * @return this command object, for chaining
                 */
                // @ts-ignore
                public setAliases(aliases: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): org.bukkit.command.Command
                /**
                 * Sets a brief description of this command. Defining a description in the
                 * {@link PluginDescriptionFile#getCommands()} (under the
                 * `<code>description</code>' node) is equivalent to this method.
                 * @param description new command description
                 * @return this command object, for chaining
                 */
                // @ts-ignore
                public setDescription(description: java.lang.String | string): org.bukkit.command.Command
                /**
                 * Sets the message sent when a permission check fails
                 * @param permissionMessage new permission message, null to indicate
                 *      default message, or an empty string to indicate no message
                 * @return this command object, for chaining
                 */
                // @ts-ignore
                public setPermissionMessage(permissionMessage: java.lang.String | string): org.bukkit.command.Command
                /**
                 * Sets the example usage of this command
                 * @param usage new example usage
                 * @return this command object, for chaining
                 */
                // @ts-ignore
                public setUsage(usage: java.lang.String | string): org.bukkit.command.Command
                // @ts-ignore
                public static broadcastCommandMessage(source: org.bukkit.command.CommandSender, message: java.lang.String | string): void
                // @ts-ignore
                public static broadcastCommandMessage(source: org.bukkit.command.CommandSender, message: java.lang.String | string, sendToSource: boolean): void
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
