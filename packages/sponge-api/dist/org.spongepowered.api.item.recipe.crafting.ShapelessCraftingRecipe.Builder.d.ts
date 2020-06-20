declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapelessCraftingRecipe {
                            /**
                             * Builder for {@link ShapelessCraftingRecipe}s.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe, org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder> {
                                /**
                                 * Adds an ingredient predicate to the requirements of this
                                 * {@link ShapelessCraftingRecipe}.
                                 * @param ingredient The ingredient predicate
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                addIngredient(ingredient: org.spongepowered.api.item.recipe.crafting.Ingredient): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.ResultStep
                            }
                        }
                    }
                }
            }
        }
    }
}
