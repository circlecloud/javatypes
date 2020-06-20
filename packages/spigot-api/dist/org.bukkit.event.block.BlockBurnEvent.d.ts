declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block is destroyed as a result of being burnt by fire.
                 * <p>
                 * If a Block Burn event is cancelled, the block will not be destroyed as a
                 * result of being burnt by fire.
                 */
                // @ts-ignore
                class BlockBurnEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block)
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, ignitingBlock: org.bukkit.block.Block)
                    /**
                     * Gets the block which ignited this block.
                     * @return The Block that ignited and burned this block, or null if no
                     *  source block exists
                     */
                    // @ts-ignore
                    getIgnitingBlock(): org.bukkit.block.Block
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
