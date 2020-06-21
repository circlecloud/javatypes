declare namespace cn {
    namespace nukkit {
        namespace command {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class SimpleCommandMap extends java.lang.Object implements cn.nukkit.command.CommandMap {
                // @ts-ignore
                constructor(server: cn.nukkit.Server)
                // @ts-ignore
                readonly knownCommands: java.util.Map<java.lang.String | string, cn.nukkit.command.Command>
                // @ts-ignore
                public registerAll(fallbackPrefix: java.lang.String | string, commands: java.util.List<any> | Array<any>): void
                // @ts-ignore
                public register(fallbackPrefix: java.lang.String | string, command: cn.nukkit.command.Command): boolean
                // @ts-ignore
                public register(fallbackPrefix: java.lang.String | string, command: cn.nukkit.command.Command, label: java.lang.String | string): boolean
                // @ts-ignore
                public registerSimpleCommands(object: java.lang.Object | any): void
                // @ts-ignore
                public dispatch(sender: cn.nukkit.command.CommandSender, cmdLine: java.lang.String | string): boolean
                // @ts-ignore
                public clearCommands(): void
                // @ts-ignore
                public getCommand(name: java.lang.String | string): cn.nukkit.command.Command
                // @ts-ignore
                public getCommands(): java.util.Map<java.lang.String | string, cn.nukkit.command.Command>
                // @ts-ignore
                public registerServerAliases(): void
            }
        }
    }
}
