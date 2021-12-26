declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the crafting inventories
             */
            // @ts-ignore
            interface CraftingInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Check what item is in the result slot of this crafting inventory.
                 * @return The result item.
                 */
                // @ts-ignore
                getResult(): org.bukkit.inventory.ItemStack
                /**
                 * Get the contents of the crafting matrix.
                 * @return The contents. Individual entries may be null.
                 */
                // @ts-ignore
                getMatrix(): org.bukkit.inventory.ItemStack[]
                /**
                 * Set the item in the result slot of the crafting inventory.
                 * @param newResult The new result item.
                 */
                // @ts-ignore
                setResult(newResult: org.bukkit.inventory.ItemStack): void
                /**
                 * Replace the contents of the crafting matrix
                 * @param contents The new contents. Individual entries may be null.
                 * @throws IllegalArgumentException if the length of contents is greater
                 *      than the size of the crafting matrix.
                 */
                // @ts-ignore
                setMatrix(contents: org.bukkit.inventory.ItemStack[]): void
                /**
                 * Get the current recipe formed on the crafting inventory, if any.
                 * @return The recipe, or null if the current contents don't match any
                 *      recipe.
                 */
                // @ts-ignore
                getRecipe(): org.bukkit.inventory.Recipe
            }
        }
    }
}
