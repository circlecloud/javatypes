declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Fired when a single block placement action of a player triggers the
                 * creation of multiple blocks(e.g. placing a bed block). The block returned
                 * by {@link #getBlockPlaced()} and its related methods is the block where
                 * the placed block would exist if the placement only affected a single
                 * block.
                 */
                // @ts-ignore
                class BlockMultiPlaceEvent extends org.bukkit.event.block.BlockPlaceEvent {
                    // @ts-ignore
                    constructor(states: java.util.List<org.bukkit.block.BlockState> | Array<org.bukkit.block.BlockState>, clicked: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, thePlayer: org.bukkit.entity.Player, canBuild: boolean)
                    /**
                     * Gets a list of blockstates for all blocks which were replaced by the
                     * placement of the new blocks. Most of these blocks will just have a
                     * Material type of AIR.
                     * @return immutable list of replaced BlockStates
                     */
                    // @ts-ignore
                    public getReplacedBlockStates(): Array<org.bukkit.block.BlockState>
                }
            }
        }
    }
}
