declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a dropper.
             */
            // @ts-ignore
            interface Dropper extends org.bukkit.block.Container, org.bukkit.loot.Lootable {
                /**
                 * Tries to drop a randomly selected item from the dropper's inventory,
                 * following the normal behavior of a dropper.
                 * <p>
                 * Normal behavior of a dropper is as follows:
                 * <p>
                 * If the block that the dropper is facing is an InventoryHolder,
                 * the randomly selected ItemStack is placed within that
                 * Inventory in the first slot that's available, starting with 0 and
                 * counting up.  If the inventory is full, nothing happens.
                 * <p>
                 * If the block that the dropper is facing is not an InventoryHolder,
                 * the randomly selected ItemStack is dropped on
                 * the ground in the form of an {@link org.bukkit.entity.Item Item}.
                 * <p>
                 * If the block represented by this state is no longer a dropper, this will
                 * do nothing.
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                drop(): void
            }
        }
    }
}
