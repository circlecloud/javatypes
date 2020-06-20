declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        namespace SmeltingRecipe {
                            /**
                             * Builds a simple furnace recipe.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.recipe.smelting.SmeltingRecipe, org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder> {
                                /**
                                 * Changes the ingredient predicate and returns this builder.
                                 * The ingredient predicate is the predicate which must return
                                 * {@code true} in order for this recipe to be fulfilled.
                                 * @param ingredientPredicate The ingredient predicate
                                 * @param exemplaryIngredient An exemplary ingredient
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                ingredient(ingredientPredicate: java.util.function.Predicate<org.spongepowered.api.item.inventory.ItemStackSnapshot> | java.util.function$.Predicate<org.spongepowered.api.item.inventory.ItemStackSnapshot>, exemplaryIngredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep
                                /**
                                 * Changes the ingredient predicate and returns this builder.
                                 * The ingredient predicate is the predicate which must return
                                 * {@code true} in order for this recipe to be fulfilled.
                                 * <p>The vanilla {@link ItemStack} matching behavior is used as the
                                 * ingredient predicate.</p>
                                 * @param ingredient The required ingredient
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                ingredient(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep
                                /**
                                 * Changes the ingredient and returns this builder. The ingredient is
                                 * the {@link ItemStack} required in order for the recipe to be
                                 * fulfilled.
                                 * @param ingredient The required ingredient
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                ingredient(ingredient: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep
                                /**
                                 * Changes the ingredient and returns this builder. The ingredient is
                                 * the {@link ItemStack} required in order for the recipe to be
                                 * fulfilled.
                                 * @param ingredient The required ingredient
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                ingredient(ingredient: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.ResultStep
                            }
                        }
                    }
                }
            }
        }
    }
}
