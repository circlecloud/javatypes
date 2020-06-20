declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event is called when the list of available server commands is sent to
                 * the player.
                 * <br>
                 * Commands may be removed from display using this event, but implementations
                 * are not required to securely remove all traces of the command. If secure
                 * removal of commands is required, then the command should be assigned a
                 * permission which is not granted to the player.
                 */
                // @ts-ignore
                class PlayerCommandSendEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, commands: Array<java.lang.String>)
                    /**
                     * Returns a mutable collection of all top level commands to be sent.
                     * <br>
                     * It is not legal to add entries to this collection, only remove them.
                     * Behaviour of adding entries is undefined.
                     * @return collection of all commands
                     */
                    // @ts-ignore
                    getCommands(): java.util.Collection<java.lang.String>
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
