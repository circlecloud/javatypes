declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of a Double Chest.
             */
            // @ts-ignore
            interface DoubleChestInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the left half of this double chest.
                 * @return The left side inventory
                 */
                // @ts-ignore
                getLeftSide(): org.bukkit.inventory.Inventory
                /**
                 * Get the right side of this double chest.
                 * @return The right side inventory
                 */
                // @ts-ignore
                getRightSide(): org.bukkit.inventory.Inventory
                // @ts-ignore
                getHolder(): org.bukkit.block.DoubleChest
            }
        }
    }
}
