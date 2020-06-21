declare namespace cn {
    namespace nukkit {
        namespace command {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class PluginCommand<T extends cn.nukkit.plugin.Plugin> extends cn.nukkit.command.Command implements cn.nukkit.command.PluginIdentifiableCommand {
                // @ts-ignore
                constructor(name: java.lang.String | string, owner: T)
                // @ts-ignore
                public execute(sender: cn.nukkit.command.CommandSender, commandLabel: java.lang.String | string, args: java.lang.String[] | string[]): boolean
                // @ts-ignore
                public getExecutor(): cn.nukkit.command.CommandExecutor
                // @ts-ignore
                public setExecutor(executor: cn.nukkit.command.CommandExecutor): void
                // @ts-ignore
                public getPlugin(): T
            }
        }
    }
}
