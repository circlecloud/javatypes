declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * This event is called when a command is received over RCON. See the javadocs
                 * of {@link ServerCommandEvent} for more information.
                 */
                // @ts-ignore
                class RemoteServerCommandEvent extends org.bukkit.event.server.ServerCommandEvent {
                    // @ts-ignore
                    constructor(sender: org.bukkit.command.CommandSender, command: java.lang.String | string)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
