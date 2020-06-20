declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            namespace Builder {
                                /**
                                 * In this Step define one or more Ingredients.
                                 */
                                // @ts-ignore
                                interface AisleStep extends org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder {
                                    /**
                                     * Sets an ingredient based on the aisle pattern.
                                     * <p>Sets the ingredient to {@link Ingredient#NONE} if
                                     * {@code null} is specified.</p>
                                     * @param symbol The ingredient symbol
                                     * @param ingredient The ingredient to set
                                     * @return The builder
                                     * @throws IllegalArgumentException If the aisle does not contain
                                     *      the specified character symbol
                                     */
                                    // @ts-ignore
                                    where(symbol: string, ingredient: org.spongepowered.api.item.recipe.crafting.Ingredient): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.AisleStep.ResultStep
                                    /**
                                     * Sets multiple ingredients based on the aisle pattern.
                                     * @param ingredientMap The ingredients to set
                                     * @return The builder
                                     * @throws IllegalArgumentException If the aisle does not contain
                                     *      the specified character symbol
                                     */
                                    // @ts-ignore
                                    where(ingredientMap: java.util.Map<java.lang.Character, org.spongepowered.api.item.recipe.crafting.Ingredient>): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.AisleStep.ResultStep
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
