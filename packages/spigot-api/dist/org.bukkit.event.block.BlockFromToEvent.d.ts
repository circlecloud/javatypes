declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Represents events with a source block and a destination block, currently
                 * only applies to liquid (lava and water) and teleporting dragon eggs.
                 * <p>
                 * If a Block From To event is cancelled, the block will not move (the liquid
                 * will not flow).
                 */
                // @ts-ignore
                class BlockFromToEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, face: org.bukkit.block.BlockFace)
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, toBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    to: org.bukkit.block.Block
                    // @ts-ignore
                    face: org.bukkit.block.BlockFace
                    // @ts-ignore
                    cancel: boolean
                    /**
                     * Gets the BlockFace that the block is moving to.
                     * @return The BlockFace that the block is moving to
                     */
                    // @ts-ignore
                    public getFace(): org.bukkit.block.BlockFace
                    /**
                     * Convenience method for getting the faced Block.
                     * @return The faced Block
                     */
                    // @ts-ignore
                    public getToBlock(): org.bukkit.block.Block
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
