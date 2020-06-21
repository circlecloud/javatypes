declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a shaped (ie normal) crafting recipe.
             */
            // @ts-ignore
            class ShapedRecipe extends java.lang.Object implements org.bukkit.inventory.Recipe, org.bukkit.Keyed {
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack)
                /**
                 * Create a shaped recipe to craft the specified ItemStack. The
                 * constructor merely determines the result and type; to set the actual
                 * recipe, you'll need to call the appropriate methods.
                 * @param key the unique recipe key
                 * @param result The item you want the recipe to create.
                 * @see ShapedRecipe#shape(String...)
                 * @see ShapedRecipe#setIngredient(char, Material)
                 * @see ShapedRecipe#setIngredient(char, Material, int)
                 * @see ShapedRecipe#setIngredient(char, MaterialData)
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack)
                /**
                 * Set the shape of this recipe to the specified rows. Each character
                 * represents a different ingredient; exactly what each character
                 * represents is set separately. The first row supplied corresponds with
                 * the upper most part of the recipe on the workbench e.g. if all three
                 * rows are supplies the first string represents the top row on the
                 * workbench.
                 * @param shape The rows of the recipe (up to 3 rows).
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                public shape(...shape: java.lang.String[] | string[]): org.bukkit.inventory.ShapedRecipe
                /**
                 * Sets the material that a character in the recipe shape refers to.
                 * @param key The character that represents the ingredient in the shape.
                 * @param ingredient The ingredient.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                public setIngredient(key: string, ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapedRecipe
                /**
                 * Sets the material that a character in the recipe shape refers to.
                 * @param key The character that represents the ingredient in the shape.
                 * @param ingredient The ingredient.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                public setIngredient(key: string, ingredient: org.bukkit.Material): org.bukkit.inventory.ShapedRecipe
                /**
                 * Sets the material that a character in the recipe shape refers to.
                 * @param key The character that represents the ingredient in the shape.
                 * @param ingredient The ingredient.
                 * @param raw The raw material data as an integer.
                 * @return The changed recipe, so you can chain calls.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public setIngredient(key: string, ingredient: org.bukkit.Material, raw: number /*int*/): org.bukkit.inventory.ShapedRecipe
                // @ts-ignore
                public setIngredient(key: string, ingredient: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.ShapedRecipe
                /**
                 * Get a copy of the ingredients map.
                 * @return The mapping of character to ingredients.
                 */
                // @ts-ignore
                public getIngredientMap(): java.util.Map<java.lang.Character, org.bukkit.inventory.ItemStack>
                // @ts-ignore
                public getChoiceMap(): java.util.Map<java.lang.Character, org.bukkit.inventory.RecipeChoice>
                /**
                 * Get the shape.
                 * @return The recipe's shape.
                 * @throws NullPointerException when not set yet
                 */
                // @ts-ignore
                public getShape(): string[]
                /**
                 * Get the result.
                 * @return The result stack.
                 */
                // @ts-ignore
                public getResult(): org.bukkit.inventory.ItemStack
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
