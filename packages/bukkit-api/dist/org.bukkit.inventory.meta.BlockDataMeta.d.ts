declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface BlockDataMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Returns whether the item has block data currently attached to it.
                     * @return whether block data is already attached
                     */
                    // @ts-ignore
                    hasBlockData(): boolean
                    /**
                     * Returns the currently attached block data for this item or creates a new
                     * one if one doesn't exist.
                     * The state is a copy, it must be set back (or to another item) with
                     * {@link #setBlockData(org.bukkit.block.data.BlockData)}
                     * @param material the material we wish to get this data in the context of
                     * @return the attached data or new data
                     */
                    // @ts-ignore
                    getBlockData(material: org.bukkit.Material): org.bukkit.block.data.BlockData
                    /**
                     * Attaches a copy of the passed block data to the item.
                     * @param blockData the block data to attach to the block.
                     * @throws IllegalArgumentException if the blockData is null or invalid for
                     *  this item.
                     */
                    // @ts-ignore
                    setBlockData(blockData: org.bukkit.block.data.BlockData): void
                }
            }
        }
    }
}
