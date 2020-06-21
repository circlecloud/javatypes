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
                    constructor(sender: org.bukkit.command.CommandSender, buffer: java.lang.String | string, completions: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                    /**
                     * Get the sender completing this command.
                     * @return the {#link CommandSender} instance
                     */
                    // @ts-ignore
                    public getSender(): org.bukkit.command.CommandSender
                    /**
                     * Return the entire buffer which formed the basis of this completion.
                     * @return command buffer, as entered
                     */
                    // @ts-ignore
                    public getBuffer(): string
                    /**
                     * The list of completions which will be offered to the sender, in order.
                     * This list is mutable and reflects what will be offered.
                     * @return a list of offered completions
                     */
                    // @ts-ignore
                    public getCompletions(): Array<java.lang.String | string>
                    /**
                     * Set the completions offered, overriding any already set.
                     * @param completions the new completions
                     */
                    // @ts-ignore
                    public setCompletions(completions: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
