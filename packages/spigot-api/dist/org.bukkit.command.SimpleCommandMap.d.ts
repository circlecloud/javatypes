declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            class SimpleCommandMap extends java.lang.Object implements org.bukkit.command.CommandMap {
                // @ts-ignore
                constructor(server: org.bukkit.Server)
                // @ts-ignore
                readonly knownCommands: java.util.Map<java.lang.String | string, org.bukkit.command.Command>
                // @ts-ignore
                public setFallbackCommands(): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public registerAll(fallbackPrefix: java.lang.String | string, commands: java.util.List<org.bukkit.command.Command> | Array<org.bukkit.command.Command>): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public register(fallbackPrefix: java.lang.String | string, command: org.bukkit.command.Command): boolean
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public register(label: java.lang.String | string, fallbackPrefix: java.lang.String | string, command: org.bukkit.command.Command): boolean
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public dispatch(sender: org.bukkit.command.CommandSender, commandLine: java.lang.String | string): boolean
                // @ts-ignore
                public clearCommands(): void
                // @ts-ignore
                public getCommand(name: java.lang.String | string): org.bukkit.command.Command
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: java.lang.String | string): Array<java.lang.String | string>
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: java.lang.String | string, location: org.bukkit.Location): Array<java.lang.String | string>
                // @ts-ignore
                public getCommands(): Array<org.bukkit.command.Command>
                // @ts-ignore
                public registerServerAliases(): void
            }
        }
    }
}
