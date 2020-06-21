declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a furnace recipe.
             */
            // @ts-ignore
            class FurnaceRecipe extends org.bukkit.inventory.CookingRecipe<org.bukkit.inventory.FurnaceRecipe> {
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.material.MaterialData)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.material.MaterialData, experience: number /*float*/)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, data: number /*int*/)
                /**
                 * Create a furnace recipe to craft the specified ItemStack.
                 * @param key The unique recipe key
                 * @param result The item you want the recipe to create.
                 * @param source The input material.
                 * @param experience The experience given by this recipe
                 * @param cookingTime The cooking time (in ticks)
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, experience: number /*float*/, cookingTime: number /*int*/)
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, data: number /*int*/, experience: number /*float*/, cookingTime: number /*int*/)
                /**
                 * Create a furnace recipe to craft the specified ItemStack.
                 * @param key The unique recipe key
                 * @param result The item you want the recipe to create.
                 * @param input The input choices.
                 * @param experience The experience given by this recipe
                 * @param cookingTime The cooking time (in ticks)
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice, experience: number /*float*/, cookingTime: number /*int*/)
                /**
                 * Sets the input of this furnace recipe.
                 * @param input The input material.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                public setInput(input: org.bukkit.material.MaterialData): org.bukkit.inventory.FurnaceRecipe
                // @ts-ignore
                public setInput(input: org.bukkit.Material): org.bukkit.inventory.FurnaceRecipe
                /**
                 * Sets the input of this furnace recipe.
                 * @param input The input material.
                 * @param data The data value. (Note: This is currently ignored by the
                 *      CraftBukkit server.)
                 * @return The changed recipe, so you can chain calls.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public setInput(input: org.bukkit.Material, data: number /*int*/): org.bukkit.inventory.FurnaceRecipe
                // @ts-ignore
                public setInputChoice(input: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.FurnaceRecipe
            }
        }
    }
}
