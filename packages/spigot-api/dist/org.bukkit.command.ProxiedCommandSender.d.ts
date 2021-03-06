declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface ProxiedCommandSender extends org.bukkit.command.CommandSender {
                /**
                 * Returns the CommandSender which triggered this proxied command
                 * @return the caller which triggered the command
                 */
                // @ts-ignore
                getCaller(): org.bukkit.command.CommandSender
                /**
                 * Returns the CommandSender which is being used to call the command
                 * @return the caller which the command is being run as
                 */
                // @ts-ignore
                getCallee(): org.bukkit.command.CommandSender
            }
        }
    }
}
