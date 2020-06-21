declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a piston retracts
                 */
                // @ts-ignore
                class BlockPistonRetractEvent extends org.bukkit.event.block.BlockPistonEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, blocks: java.util.List<org.bukkit.block.Block> | Array<org.bukkit.block.Block>, direction: org.bukkit.block.BlockFace)
                    /**
                     * Gets the location where the possible moving block might be if the
                     * retracting piston is sticky.
                     * @return The possible location of the possibly moving block.
                     */
                    // @ts-ignore
                    public getRetractLocation(): org.bukkit.Location
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
