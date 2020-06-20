declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        /**
                         * A registry for Crafting Table recipes.
                         */
                        // @ts-ignore
                        interface SmeltingRecipeRegistry extends org.spongepowered.api.item.recipe.RecipeRegistry<org.spongepowered.api.item.recipe.smelting.SmeltingRecipe> {
                            /**
                             * Retrieves the recipe used when smelting the given ingredient.
                             * @param ingredient The ingredient to check against
                             * @return The found {#link SmeltingRecipe}, or {@link Optional#empty()}
                             *          if no recipe was found for this {@link ItemStackSnapshot}
                             */
                            // @ts-ignore
                            findMatchingRecipe(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): java.util.Optional<org.spongepowered.api.item.recipe.smelting.SmeltingRecipe>
                            /**
                             * Finds the matching recipe and creates the {@link SmeltingResult},
                             * which is then returned.
                             * @param ingredient The ingredient to check against
                             * @return The {#link SmeltingResult} if a recipe was found, or
                             *          {@link Optional#empty()} if not
                             */
                            // @ts-ignore
                            getResult(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): java.util.Optional<org.spongepowered.api.item.recipe.smelting.SmeltingResult>
                        }
                    }
                }
            }
        }
    }
}
