declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a piston extends
                 */
                // @ts-ignore
                class BlockPistonExtendEvent extends org.bukkit.event.block.BlockPistonEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, length: number /*int*/, direction: org.bukkit.block.BlockFace)
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, blocks: java.util.List<org.bukkit.block.Block> | Array<org.bukkit.block.Block>, direction: org.bukkit.block.BlockFace)
                    /**
                     * Get the amount of blocks which will be moved while extending.
                     * @return the amount of moving blocks
                     * @deprecated slime blocks make the value of this method
                     *           inaccurate due to blocks being pushed at the side
                     */
                    // @ts-ignore
                    public getLength(): number /*int*/
                    /**
                     * Get an immutable list of the blocks which will be moved by the
                     * extending.
                     * @return Immutable list of the moved blocks.
                     */
                    // @ts-ignore
                    public getBlocks(): Array<org.bukkit.block.Block>
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
