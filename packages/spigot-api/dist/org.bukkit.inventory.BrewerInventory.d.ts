declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of a Brewing Stand.
             */
            // @ts-ignore
            interface BrewerInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the current ingredient for brewing.
                 * @return The ingredient.
                 */
                // @ts-ignore
                getIngredient(): org.bukkit.inventory.ItemStack
                /**
                 * Set the current ingredient for brewing.
                 * @param ingredient The ingredient
                 */
                // @ts-ignore
                setIngredient(ingredient: org.bukkit.inventory.ItemStack): void
                /**
                 * Get the current fuel for brewing.
                 * @return The fuel
                 */
                // @ts-ignore
                getFuel(): org.bukkit.inventory.ItemStack
                /**
                 * Set the current fuel for brewing. Generally only
                 * {@link Material#BLAZE_POWDER} will be of use.
                 * @param fuel The fuel
                 */
                // @ts-ignore
                setFuel(fuel: org.bukkit.inventory.ItemStack): void
                // @ts-ignore
                getHolder(): org.bukkit.block.BrewingStand
            }
        }
    }
}
