declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        /**
                         * A general interface for furnace recipes. You can implement it manually to
                         * suit your creative needs, or you can simply use the
                         * {@link SmeltingRecipe.Builder}.
                         */
                        // @ts-ignore
                        interface SmeltingRecipe extends org.spongepowered.api.item.recipe.Recipe, org.spongepowered.api.CatalogType {
                            /**
                             * Builds a simple furnace recipe. Note, that you can implement the
                             * {@link SmeltingRecipe} manually, too.
                             * @return A {#link SmeltingRecipe} builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder
                            // @ts-ignore
                            getId(): java.lang.String
                            // @ts-ignore
                            getName(): java.lang.String
                            /**
                             * An exemplary {@link ItemStackSnapshot}, which will always make
                             * {@link #isValid(ItemStackSnapshot)} return {@code true}.
                             * @return The {#link ItemStackSnapshot} as explained above
                             */
                            // @ts-ignore
                            getExemplaryIngredient(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                            /**
                             * Checks if the given {@link ItemStackSnapshot} fits the required
                             * constraints to craft this {@link SmeltingRecipe}.
                             * @param ingredient The ingredient to check against
                             * @return Whether this ingredient can be used to craft the result
                             */
                            // @ts-ignore
                            isValid(ingredient: org.spongepowered.api.item.inventory.ItemStackSnapshot): boolean
                            /**
                             * <p>Returns the {@link SmeltingResult} containing the resulting
                             * {@link ItemStackSnapshot} and the amount of experience released.</p>
                             * <p>This method should be used instead of the {@link #getExemplaryResult()}
                             * method, as it customizes the result further depending on the specified
                             * ingredient {@link ItemStackSnapshot}. It is advised to use
                             * the output of {@link #getExemplaryResult()}, modify it accordingly,
                             * and {@code return} it.</p>
                             * @param ingredient The {#link ItemStackSnapshot} currently being smelted
                             * @return The {#link SmeltingResult}, or {@link Optional#empty()}
                             *          if the recipe is not valid according to
                             *          {@link #isValid(ItemStackSnapshot)}.
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
