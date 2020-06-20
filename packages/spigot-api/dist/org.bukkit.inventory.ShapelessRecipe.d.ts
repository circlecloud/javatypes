declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a shapeless recipe, where the arrangement of the ingredients on
             * the crafting grid does not matter.
             */
            // @ts-ignore
            class ShapelessRecipe extends java.lang.Object implements org.bukkit.inventory.Recipe, org.bukkit.Keyed {
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack)
                /**
                 * Create a shapeless recipe to craft the specified ItemStack. The
                 * constructor merely determines the result and type; to set the actual
                 * recipe, you'll need to call the appropriate methods.
                 * @param key the unique recipe key
                 * @param result The item you want the recipe to create.
                 * @see ShapelessRecipe#addIngredient(Material)
                 * @see ShapelessRecipe#addIngredient(MaterialData)
                 * @see ShapelessRecipe#addIngredient(Material,int)
                 * @see ShapelessRecipe#addIngredient(int,Material)
                 * @see ShapelessRecipe#addIngredient(int,MaterialData)
                 * @see ShapelessRecipe#addIngredient(int,Material,int)
                 */
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack)
                /**
                 * Adds the specified ingredient.
                 * @param ingredient The ingredient to add.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                addIngredient(ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Adds the specified ingredient.
                 * @param ingredient The ingredient to add.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                addIngredient(ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Adds the specified ingredient.
                 * @param ingredient The ingredient to add.
                 * @param rawdata The data value, or -1 to allow any data value.
                 * @return The changed recipe, so you can chain calls.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                addIngredient(ingredient: org.bukkit.Material, rawdata: number /*int*/): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Adds multiples of the specified ingredient.
                 * @param count How many to add (can't be more than 9!)
                 * @param ingredient The ingredient to add.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                addIngredient(count: number /*int*/, ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Adds multiples of the specified ingredient.
                 * @param count How many to add (can't be more than 9!)
                 * @param ingredient The ingredient to add.
                 * @return The changed recipe, so you can chain calls.
                 */
                // @ts-ignore
                addIngredient(count: number /*int*/, ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Adds multiples of the specified ingredient.
                 * @param count How many to add (can't be more than 9!)
                 * @param ingredient The ingredient to add.
                 * @param rawdata The data value, or -1 to allow any data value.
                 * @return The changed recipe, so you can chain calls.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                addIngredient(count: number /*int*/, ingredient: org.bukkit.Material, rawdata: number /*int*/): org.bukkit.inventory.ShapelessRecipe
                // @ts-ignore
                addIngredient(ingredient: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Removes an ingredient from the list.
                 * @param ingredient The ingredient to remove
                 * @return The changed recipe.
                 */
                // @ts-ignore
                removeIngredient(ingredient: org.bukkit.inventory.RecipeChoice): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Removes an ingredient from the list. If the ingredient occurs multiple
                 * times, only one instance of it is removed. Only removes exact matches,
                 * with a data value of 0.
                 * @param ingredient The ingredient to remove
                 * @return The changed recipe.
                 */
                // @ts-ignore
                removeIngredient(ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Removes an ingredient from the list. If the ingredient occurs multiple
                 * times, only one instance of it is removed. If the data value is -1,
                 * only ingredients with a -1 data value will be removed.
                 * @param ingredient The ingredient to remove
                 * @return The changed recipe.
                 */
                // @ts-ignore
                removeIngredient(ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Removes multiple instances of an ingredient from the list. If there are
                 * less instances then specified, all will be removed. Only removes exact
                 * matches, with a data value of 0.
                 * @param count The number of copies to remove.
                 * @param ingredient The ingredient to remove
                 * @return The changed recipe.
                 */
                // @ts-ignore
                removeIngredient(count: number /*int*/, ingredient: org.bukkit.Material): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Removes multiple instances of an ingredient from the list. If there are
                 * less instances then specified, all will be removed. If the data value
                 * is -1, only ingredients with a -1 data value will be removed.
                 * @param count The number of copies to remove.
                 * @param ingredient The ingredient to remove.
                 * @return The changed recipe.
                 */
                // @ts-ignore
                removeIngredient(count: number /*int*/, ingredient: org.bukkit.material.MaterialData): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Removes an ingredient from the list. If the ingredient occurs multiple
                 * times, only one instance of it is removed. If the data value is -1,
                 * only ingredients with a -1 data value will be removed.
                 * @param ingredient The ingredient to remove
                 * @param rawdata The data value;
                 * @return The changed recipe.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                removeIngredient(ingredient: org.bukkit.Material, rawdata: number /*int*/): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Removes multiple instances of an ingredient from the list. If there are
                 * less instances then specified, all will be removed. If the data value
                 * is -1, only ingredients with a -1 data value will be removed.
                 * @param count The number of copies to remove.
                 * @param ingredient The ingredient to remove.
                 * @param rawdata The data value.
                 * @return The changed recipe.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                removeIngredient(count: number /*int*/, ingredient: org.bukkit.Material, rawdata: number /*int*/): org.bukkit.inventory.ShapelessRecipe
                /**
                 * Get the result of this recipe.
                 * @return The result stack.
                 */
                // @ts-ignore
                getResult(): org.bukkit.inventory.ItemStack
                /**
                 * Get the list of ingredients used for this recipe.
                 * @return The input list
                 */
                // @ts-ignore
                getIngredientList(): java.util.List<org.bukkit.inventory.ItemStack>
                // @ts-ignore
                getChoiceList(): java.util.List<org.bukkit.inventory.RecipeChoice>
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
