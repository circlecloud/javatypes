declare namespace cn {
    namespace nukkit {
        namespace command {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface CommandMap {
                // @ts-ignore
                registerAll(fallbackPrefix: java.lang.String | string, commands: java.util.List<any> | Array<any>): void
                // @ts-ignore
                register(fallbackPrefix: java.lang.String | string, command: cn.nukkit.command.Command): boolean
                // @ts-ignore
                register(fallbackPrefix: java.lang.String | string, command: cn.nukkit.command.Command, label: java.lang.String | string): boolean
                // @ts-ignore
                registerSimpleCommands(object: java.lang.Object | any): void
                // @ts-ignore
                dispatch(sender: cn.nukkit.command.CommandSender, cmdLine: java.lang.String | string): boolean
                // @ts-ignore
                clearCommands(): void
                // @ts-ignore
                getCommand(name: java.lang.String | string): cn.nukkit.command.Command
            }
        }
    }
}
