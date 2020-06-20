declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            class SimpleCommandMap extends java.lang.Object implements org.bukkit.command.CommandMap {
                // @ts-ignore
                constructor(server: org.bukkit.Server)
                // @ts-ignore
                readonly knownCommands: java.util.Map<java.lang.String, org.bukkit.command.Command>
                // @ts-ignore
                setFallbackCommands(): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                registerAll(fallbackPrefix: string, commands: Array<org.bukkit.command.Command>): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                register(fallbackPrefix: string, command: org.bukkit.command.Command): boolean
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                register(label: string, fallbackPrefix: string, command: org.bukkit.command.Command): boolean
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                dispatch(sender: org.bukkit.command.CommandSender, commandLine: string): boolean
                // @ts-ignore
                clearCommands(): void
                // @ts-ignore
                getCommand(name: string): org.bukkit.command.Command
                // @ts-ignore
                tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string): java.util.List<java.lang.String>
                // @ts-ignore
                tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string, location: org.bukkit.Location): java.util.List<java.lang.String>
                // @ts-ignore
                getCommands(): java.util.Collection<org.bukkit.command.Command>
                // @ts-ignore
                registerServerAliases(): void
            }
        }
    }
}
