declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface BlockStateMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Returns whether the item has a block state currently
                     * attached to it.
                     * @return whether a block state is already attached
                     */
                    // @ts-ignore
                    hasBlockState(): boolean
                    /**
                     * Returns the currently attached block state for this
                     * item or creates a new one if one doesn't exist.
                     * The state is a copy, it must be set back (or to another
                     * item) with {@link #setBlockState(org.bukkit.block.BlockState)}
                     * @return the attached state or a new state
                     */
                    // @ts-ignore
                    getBlockState(): org.bukkit.block.BlockState
                    /**
                     * Attaches a copy of the passed block state to the item.
                     * @param blockState the block state to attach to the block.
                     * @throws IllegalArgumentException if the blockState is null
                     *          or invalid for this item.
                     */
                    // @ts-ignore
                    setBlockState(blockState: org.bukkit.block.BlockState): void
                }
            }
        }
    }
}
