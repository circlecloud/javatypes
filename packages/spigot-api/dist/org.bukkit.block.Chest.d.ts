declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a chest.
             */
            // @ts-ignore
            interface Chest extends org.bukkit.block.Container, org.bukkit.loot.Lootable, org.bukkit.block.Lidded {
                /**
                 * Gets the inventory of the chest block represented by this block state.
                 * <p>
                 * If the chest is a double chest, it returns just the portion of the
                 * inventory linked to the half of the chest corresponding to this block state.
                 * <p>
                 * If the block was changed to a different type in the meantime, the
                 * returned inventory might no longer be valid.
                 * <p>
                 * If this block state is not placed this will return the captured
                 * inventory snapshot instead.
                 * @return the inventory
                 */
                // @ts-ignore
                getBlockInventory(): org.bukkit.inventory.Inventory
            }
        }
    }
}
