declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface CommandSender extends org.bukkit.permissions.Permissible {
                /**
                 * Sends this sender a message
                 * @param message Message to be displayed
                 */
                // @ts-ignore
                sendMessage(message: java.lang.String | string): void
                /**
                 * Sends this sender multiple messages
                 * @param messages An array of messages to be displayed
                 */
                // @ts-ignore
                sendMessage(messages: java.lang.String[] | string[]): void
                /**
                 * Returns the server instance that this command is running on
                 * @return Server instance
                 */
                // @ts-ignore
                getServer(): org.bukkit.Server
                /**
                 * Gets the name of this command sender
                 * @return Name of the sender
                 */
                // @ts-ignore
                getName(): string
                // @ts-ignore
                spigot(): org.bukkit.command.CommandSender.Spigot
            }
        }
    }
}
