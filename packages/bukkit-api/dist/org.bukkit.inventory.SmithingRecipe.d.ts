declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a smithing recipe.
             */
            // @ts-ignore
            class SmithingRecipe extends java.lang.Object implements org.bukkit.inventory.Recipe, org.bukkit.Keyed {
                /**
                 * Create a smithing recipe to produce the specified result ItemStack.
                 * @param key The unique recipe key
                 * @param result The item you want the recipe to create.
                 * @param base The base ingredient
                 * @param addition The addition ingredient
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, base: org.bukkit.inventory.RecipeChoice, addition: org.bukkit.inventory.RecipeChoice)
                /**
                 * Get the base recipe item.
                 * @return base choice
                 */
                // @ts-ignore
                public getBase(): org.bukkit.inventory.RecipeChoice
                /**
                 * Get the addition recipe item.
                 * @return addition choice
                 */
                // @ts-ignore
                public getAddition(): org.bukkit.inventory.RecipeChoice
                // @ts-ignore
                public getResult(): org.bukkit.inventory.ItemStack
                // @ts-ignore
                public getKey(): org.bukkit.NamespacedKey
            }
        }
    }
}
