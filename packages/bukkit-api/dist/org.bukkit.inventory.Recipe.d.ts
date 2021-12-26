declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents some type of crafting recipe.
             */
            // @ts-ignore
            interface Recipe {
                /**
                 * Get the result of this recipe.
                 * @return The result stack
                 */
                // @ts-ignore
                getResult(): org.bukkit.inventory.ItemStack
            }
        }
    }
}
