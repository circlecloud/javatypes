declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a sign is changed by a player.
                 * <p>
                 * If a Sign Change event is cancelled, the sign will not be changed.
                 */
                // @ts-ignore
                class SignChangeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, thePlayer: org.bukkit.entity.Player, theLines: java.lang.String[] | string[])
                    /**
                     * Gets the player changing the sign involved in this event.
                     * @return the Player involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    /**
                     * Gets all of the lines of text from the sign involved in this event.
                     * @return the String array for the sign's lines new text
                     */
                    // @ts-ignore
                    public getLines(): string[]
                    /**
                     * Gets a single line of text from the sign involved in this event.
                     * @param index index of the line to get
                     * @return the String containing the line of text associated with the
                     *      provided index
                     * @throws IndexOutOfBoundsException thrown when the provided index is {#literal > 3
                     *      or < 0}
                     */
                    // @ts-ignore
                    public getLine(index: number /*int*/): string
                    /**
                     * Sets a single line for the sign involved in this event
                     * @param index index of the line to set
                     * @param line text to set
                     * @throws IndexOutOfBoundsException thrown when the provided index is {#literal > 3
                     *      or < 0}
                     */
                    // @ts-ignore
                    public setLine(index: number /*int*/, line: java.lang.String | string): void
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
