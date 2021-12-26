declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a block inventory holder - either a BlockState, or a regular
             * Block.
             */
            // @ts-ignore
            interface BlockInventoryHolder extends org.bukkit.inventory.InventoryHolder {
                /**
                 * Gets the block associated with this holder.
                 * @return the block associated with this holder
                 * @throws IllegalStateException if the holder is a block state and is not
                 *  placed
                 */
                // @ts-ignore
                getBlock(): org.bukkit.block.Block
            }
        }
    }
}
