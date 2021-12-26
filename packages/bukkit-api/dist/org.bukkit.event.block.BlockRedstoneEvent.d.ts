declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a redstone current changes
                 */
                // @ts-ignore
                class BlockRedstoneEvent extends org.bukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, oldCurrent: number /*int*/, newCurrent: number /*int*/)
                    /**
                     * Gets the old current of this block
                     * @return The previous current
                     */
                    // @ts-ignore
                    public getOldCurrent(): number /*int*/
                    /**
                     * Gets the new current of this block
                     * @return The new current
                     */
                    // @ts-ignore
                    public getNewCurrent(): number /*int*/
                    /**
                     * Sets the new current of this block
                     * @param newCurrent The new current to set
                     */
                    // @ts-ignore
                    public setNewCurrent(newCurrent: number /*int*/): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
