declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * Called when a {@link CommandSender} of any description (ie: player or
                 * console) attempts to tab complete.
                 * <br>
                 * Note that due to client changes, if the sender is a Player, this event will
                 * only begin to fire once command arguments are specified, not commands
                 * themselves. Plugins wishing to remove commands from tab completion are
                 * advised to ensure the client does not have permission for the relevant
                 * commands, or use {@link PlayerCommandSendEvent}.
                 */
                // @ts-ignore
                class TabCompleteEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sender: org.bukkit.command.CommandSender, buffer: string, completions: Array<java.lang.String>)
                    /**
                     * Get the sender completing this command.
                     * @return the {#link CommandSender} instance
                     */
                    // @ts-ignore
                    getSender(): org.bukkit.command.CommandSender
                    /**
                     * Return the entire buffer which formed the basis of this completion.
                     * @return command buffer, as entered
                     */
                    // @ts-ignore
                    getBuffer(): java.lang.String
                    /**
                     * The list of completions which will be offered to the sender, in order.
                     * This list is mutable and reflects what will be offered.
                     * @return a list of offered completions
                     */
                    // @ts-ignore
                    getCompletions(): java.util.List<java.lang.String>
                    /**
                     * Set the completions offered, overriding any already set.
                     * @param completions the new completions
                     */
                    // @ts-ignore
                    setCompletions(completions: Array<java.lang.String>): void
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
