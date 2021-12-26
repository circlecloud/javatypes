declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block explodes
                 */
                // @ts-ignore
                class BlockExplodeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.block.Block, blocks: java.util.List<org.bukkit.block.Block> | Array<org.bukkit.block.Block>, yield: number /*float*/)
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Returns the list of blocks that would have been removed or were removed
                     * from the explosion event.
                     * @return All blown-up blocks
                     */
                    // @ts-ignore
                    public blockList(): Array<org.bukkit.block.Block>
                    /**
                     * Returns the percentage of blocks to drop from this explosion
                     * @return The yield.
                     */
                    // @ts-ignore
                    public getYield(): number /*float*/
                    /**
                     * Sets the percentage of blocks to drop from this explosion
                     * @param yield The new yield percentage
                     */
                    // @ts-ignore
                    public setYield(yield: number /*float*/): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
