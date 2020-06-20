declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            namespace Builder {
                                /**
                                 * In this Step set the result of the recipe.
                                 */
                                // @ts-ignore
                                interface ResultStep extends org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder {
                                    /**
                                     * Sets the resultant {@link ItemStackSnapshot} for when this shaped
                                     * recipe is correctly crafted.
                                     * @param result The resultant snapshot
                                     * @return The builder
                                     */
                                    // @ts-ignore
                                    result(result: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep
                                    /**
                                     * Sets the resultant {@link ItemStack} for when this shaped recipe
                                     * is correctly crafted.
                                     * @param result The resultant stack
                                     * @return The builder
                                     */
                                    // @ts-ignore
                                    result(result: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
