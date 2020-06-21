declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        /**
                         * A ShapelessCraftingRecipe is a CraftingRecipe that does not have shape and
                         * just has a list of ingredients.
                         */
                        // @ts-ignore
                        interface ShapelessCraftingRecipe extends org.spongepowered.api.item.recipe.crafting.CraftingRecipe {
                            /**
                             * Creates a new {@link Builder} to build a {@link ShapelessCraftingRecipe}.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder
                            /**
                             * Gets the ingredient predicates for this ShapelessCraftingRecipe.
                             * @return An unmodifiable list of the ingredient predicates
                             */
                            // @ts-ignore
                            getIngredientPredicates(): Array<org.spongepowered.api.item.recipe.crafting.Ingredient>
                        }
                    }
                }
            }
        }
    }
}
