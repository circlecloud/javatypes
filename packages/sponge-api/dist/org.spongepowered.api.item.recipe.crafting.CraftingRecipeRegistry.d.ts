declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        /**
                         * A registry for Crafting Table recipes.
                         */
                        // @ts-ignore
                        interface CraftingRecipeRegistry extends org.spongepowered.api.item.recipe.RecipeRegistry<org.spongepowered.api.item.recipe.crafting.CraftingRecipe> {
                            /**
                             * Retrieves the recipe which would be crafted when the player clicks
                             * the output slot.
                             * @param grid The crafting grid
                             * @param world The world the player is in
                             * @return The found {#link CraftingRecipe}, or {@link Optional#empty()}
                             *          if no recipe was found for this configuration
                             */
                            // @ts-ignore
                            findMatchingRecipe(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): java.util.Optional<org.spongepowered.api.item.recipe.crafting.CraftingRecipe>
                            /**
                             * Finds the matching recipe and creates the {@link CraftingResult},
                             * which is then returned.
                             * @param grid The crafting grid
                             * @param world The world the player is in
                             * @return The {#link CraftingResult} if a recipe was found, or
                             *          {@link Optional#empty()} if not
                             */
                            // @ts-ignore
                            getResult(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): java.util.Optional<org.spongepowered.api.item.recipe.crafting.CraftingResult>
                        }
                    }
                }
            }
        }
    }
}
