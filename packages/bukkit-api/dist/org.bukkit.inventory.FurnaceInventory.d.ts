declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of a Furnace.
             */
            // @ts-ignore
            interface FurnaceInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the current item in the result slot.
                 * @return The item
                 */
                // @ts-ignore
                getResult(): org.bukkit.inventory.ItemStack
                /**
                 * Get the current fuel.
                 * @return The item
                 */
                // @ts-ignore
                getFuel(): org.bukkit.inventory.ItemStack
                /**
                 * Get the item currently smelting.
                 * @return The item
                 */
                // @ts-ignore
                getSmelting(): org.bukkit.inventory.ItemStack
                /**
                 * Set the current fuel.
                 * @param stack The item
                 */
                // @ts-ignore
                setFuel(stack: org.bukkit.inventory.ItemStack): void
                /**
                 * Set the current item in the result slot.
                 * @param stack The item
                 */
                // @ts-ignore
                setResult(stack: org.bukkit.inventory.ItemStack): void
                /**
                 * Set the item currently smelting.
                 * @param stack The item
                 */
                // @ts-ignore
                setSmelting(stack: org.bukkit.inventory.ItemStack): void
                // @ts-ignore
                getHolder(): org.bukkit.block.Furnace
            }
        }
    }
}
