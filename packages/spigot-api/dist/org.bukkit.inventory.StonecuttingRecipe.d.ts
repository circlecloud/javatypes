declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a Stonecutting recipe.
             */
            // @ts-ignore
            class StonecuttingRecipe extends java.lang.Object implements org.bukkit.inventory.Recipe, org.bukkit.Keyed {
                /**
                 * Create a Stonecutting recipe to craft the specified ItemStack.
                 * @param key The unique recipe key
                 * @param result The item you want the recipe to create.
                 * @param source The input material.
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material)
                /**
                 * Create a cooking recipe to craft the specified ItemStack.
                 * @param key The unique recipe key
                 * @param result The item you want the recipe to create.
                 * @param input The input choices.
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice)
                /**
                 * Sets the input of this cooking recipe.
                 * @param input The input material.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                setInput(input: org.bukkit.Material): org.bukkit.inventory.StonecuttingRecipe
                /**
                 * Get the input material.
                 * @return The input material.
                 */
                // @ts-ignore
                getInput(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the input of this cooking recipe.
                 * @param input The input choice.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                setInputChoice(input: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.StonecuttingRecipe
                /**
                 * Get the input choice.
                 * @return The input choice.
                 */
                // @ts-ignore
                getInputChoice(): org.bukkit.inventory.RecipeChoice
                /**
                 * Get the result of this recipe.
                 * @return The resulting stack.
                 */
                // @ts-ignore
                getResult(): org.bukkit.inventory.ItemStack
                // @ts-ignore
                getKey(): org.bukkit.NamespacedKey
                /**
                 * Get the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 * @return recipe group. An empty string denotes no group. May not be null.
                 */
                // @ts-ignore
                getGroup(): java.lang.String
                /**
                 * Set the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 * @param group recipe group. An empty string denotes no group. May not be
                 *  null.
                 */
                // @ts-ignore
                setGroup(group: string): void
            }
        }
    }
}
