declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a cooking recipe.
             * @param <T> type of recipe
             */
            // @ts-ignore
            abstract class CookingRecipe<T extends org.bukkit.inventory.CookingRecipe> extends java.lang.Object implements org.bukkit.inventory.Recipe, org.bukkit.Keyed {
                /**
                 * Create a cooking recipe to craft the specified ItemStack.
                 * @param key The unique recipe key
                 * @param result The item you want the recipe to create.
                 * @param source The input material.
                 * @param experience The experience given by this recipe
                 * @param cookingTime The cooking time (in ticks)
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, experience: number /*float*/, cookingTime: number /*int*/)
                /**
                 * Create a cooking recipe to craft the specified ItemStack.
                 * @param key The unique recipe key
                 * @param result The item you want the recipe to create.
                 * @param input The input choices.
                 * @param experience The experience given by this recipe
                 * @param cookingTime The cooking time (in ticks)
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice, experience: number /*float*/, cookingTime: number /*int*/)
                /**
                 * Sets the input of this cooking recipe.
                 * @param input The input material.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                public setInput(input: org.bukkit.Material): org.bukkit.inventory.CookingRecipe<any>
                /**
                 * Get the input material.
                 * @return The input material.
                 */
                // @ts-ignore
                public getInput(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the input of this cooking recipe.
                 * @param input The input choice.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                public setInputChoice(input: org.bukkit.inventory.RecipeChoice): T
                /**
                 * Get the input choice.
                 * @return The input choice.
                 */
                // @ts-ignore
                public getInputChoice(): org.bukkit.inventory.RecipeChoice
                /**
                 * Get the result of this recipe.
                 * @return The resulting stack.
                 */
                // @ts-ignore
                public getResult(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the experience given by this recipe.
                 * @param experience the experience level
                 */
                // @ts-ignore
                public setExperience(experience: number /*float*/): void
                /**
                 * Get the experience given by this recipe.
                 * @return experience level
                 */
                // @ts-ignore
                public getExperience(): number /*float*/
                /**
                 * Set the cooking time for this recipe in ticks.
                 * @param cookingTime new cooking time
                 */
                // @ts-ignore
                public setCookingTime(cookingTime: number /*int*/): void
                /**
                 * Get the cooking time for this recipe in ticks.
                 * @return cooking time
                 */
                // @ts-ignore
                public getCookingTime(): number /*int*/
                // @ts-ignore
                public getKey(): org.bukkit.NamespacedKey
                /**
                 * Get the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 * @return recipe group. An empty string denotes no group. May not be null.
                 */
                // @ts-ignore
                public getGroup(): string
                /**
                 * Set the group of this recipe. Recipes with the same group may be grouped
                 * together when displayed in the client.
                 * @param group recipe group. An empty string denotes no group. May not be
                 *  null.
                 */
                // @ts-ignore
                public setGroup(group: java.lang.String | string): void
            }
        }
    }
}
