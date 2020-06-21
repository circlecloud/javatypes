declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace simple {
                /**
                 * @author Tee7even
                 */
                // @ts-ignore
                class SimpleCommand extends cn.nukkit.command.Command {
                    // @ts-ignore
                    constructor(object: java.lang.Object | any, method: java.lang.reflect.Method, name: java.lang.String | string, description: java.lang.String | string, usageMessage: java.lang.String | string, aliases: java.lang.String[] | string[])
                    // @ts-ignore
                    public setForbidConsole(forbidConsole: boolean): void
                    // @ts-ignore
                    public setMaxArgs(maxArgs: number /*int*/): void
                    // @ts-ignore
                    public setMinArgs(minArgs: number /*int*/): void
                    // @ts-ignore
                    public sendUsageMessage(sender: cn.nukkit.command.CommandSender): void
                    // @ts-ignore
                    public sendInGameMessage(sender: cn.nukkit.command.CommandSender): void
                    // @ts-ignore
                    public execute(sender: cn.nukkit.command.CommandSender, commandLabel: java.lang.String | string, args: java.lang.String[] | string[]): boolean
                }
            }
        }
    }
}
