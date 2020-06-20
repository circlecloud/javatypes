declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a sponge absorbs water from the world.
                 * <br>
                 * The world will be in its previous state, and {@link #getBlocks()} will
                 * represent the changes to be made to the world, if the event is not cancelled.
                 * <br>
                 * As this is a physics based event it may be called multiple times for "the
                 * same" changes.
                 */
                // @ts-ignore
                class SpongeAbsorbEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, waterblocks: Array<org.bukkit.block.BlockState>)
                    /**
                     * Get a list of all blocks to be removed by the sponge.
                     * <br>
                     * This list is mutable and contains the blocks in their removed state, i.e.
                     * having a type of {@link Material#AIR}.
                     * @return list of the to be removed blocks.
                     */
                    // @ts-ignore
                    getBlocks(): java.util.List<org.bukkit.block.BlockState>
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
