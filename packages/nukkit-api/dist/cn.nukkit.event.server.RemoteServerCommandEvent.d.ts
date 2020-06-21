declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                /**
                 * Called when an RCON command is executed.
                 * @author Tee7even
                 */
                // @ts-ignore
                class RemoteServerCommandEvent extends cn.nukkit.event.server.ServerCommandEvent {
                    // @ts-ignore
                    constructor(sender: cn.nukkit.command.CommandSender, command: java.lang.String | string)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                }
            }
        }
    }
}
