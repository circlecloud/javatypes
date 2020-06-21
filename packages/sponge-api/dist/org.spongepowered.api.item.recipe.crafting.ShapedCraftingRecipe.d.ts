declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        /**
                         * A ShapedCraftingRecipe is a CraftingRecipe that has shape and fits into
                         * a grid.
                         */
                        // @ts-ignore
                        interface ShapedCraftingRecipe extends org.spongepowered.api.item.recipe.crafting.CraftingRecipe {
                            /**
                             * Creates a new {@link ShapedCraftingRecipe.Builder} to build a {@link ShapedCraftingRecipe}.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder
                            /**
                             * Returns the ingredient predicate at the specified location in this
                             * recipe.
                             * @param x The x coordinate counted from the left side
                             * @param y The y coordinate counted from the top
                             * @return The ingredient predicate at this position defined by the aisle
                             * @throws IndexOutOfBoundsException if the location is invalid
                             */
                            // @ts-ignore
                            getIngredient(x: number /*int*/, y: number /*int*/): org.spongepowered.api.item.recipe.crafting.Ingredient
                            /**
                             * Gets the width of the grid this ShapedCraftingRecipe fits into.
                             * @return The width of the grid
                             */
                            // @ts-ignore
                            getWidth(): number /*int*/
                            /**
                             * Gets the height of the grid this ShapedCraftingRecipe fits into.
                             * @return The height of the grid
                             */
                            // @ts-ignore
                            getHeight(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
