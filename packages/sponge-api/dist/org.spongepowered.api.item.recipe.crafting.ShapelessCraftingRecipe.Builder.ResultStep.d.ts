declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapelessCraftingRecipe {
                            namespace Builder {
                                /**
                                 * In this Step set the result of the Recipe.
                                 */
                                // @ts-ignore
                                interface ResultStep extends org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder {
                                    /**
                                     * Changes the result and returns this builder. The result is the
                                     * {@link ItemStack} created when the recipe is fulfilled.
                                     * @param result The result
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    result(result: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep
                                    /**
                                     * Changes the result and returns this builder. The result is the
                                     * {@link ItemStack} created when the recipe is fulfilled.
                                     * @param result The result
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    result(result: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
