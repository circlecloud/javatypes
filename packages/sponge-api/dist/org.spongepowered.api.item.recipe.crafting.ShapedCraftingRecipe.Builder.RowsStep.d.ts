declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            namespace Builder {
                                /**
                                 * In this Step add one or more rows of Ingredients.
                                 */
                                // @ts-ignore
                                interface RowsStep extends org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder {
                                    /**
                                     * Adds a row of ingredients.
                                     * @param ingredients The row of ingredients.
                                     * @return This builder
                                     */
                                    // @ts-ignore
                                    row(...ingredients: org.spongepowered.api.item.recipe.crafting.Ingredient[]): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.RowsStep.ResultStep
                                    /**
                                     * Adds a row of ingredients filling the skipped
                                     * columns with {@link Ingredient#NONE}.
                                     * @param skip The amount of columns to skip.
                                     * @param ingredients The row of ingredients.
                                     * @return This builder
                                     */
                                    // @ts-ignore
                                    row(skip: number /*int*/, ...ingredients: org.spongepowered.api.item.recipe.crafting.Ingredient[]): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.RowsStep.ResultStep
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
