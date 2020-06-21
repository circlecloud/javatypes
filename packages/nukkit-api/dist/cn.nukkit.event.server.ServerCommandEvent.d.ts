declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class ServerCommandEvent extends cn.nukkit.event.server.ServerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sender: cn.nukkit.command.CommandSender, command: java.lang.String | string)
                    // @ts-ignore
                    command: java.lang.String | string
                    // @ts-ignore
                    readonly sender: cn.nukkit.command.CommandSender
                    // @ts-ignore
                    public getSender(): cn.nukkit.command.CommandSender
                    // @ts-ignore
                    public getCommand(): string
                    // @ts-ignore
                    public setCommand(command: java.lang.String | string): void
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                }
            }
        }
    }
}
