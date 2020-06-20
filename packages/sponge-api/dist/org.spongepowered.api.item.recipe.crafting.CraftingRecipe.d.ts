declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        /**
                         * A CraftingRecipe represents some craftable recipe in the game.
                         * <p>It is essentially a Predicate that checks for if a recipe is valid as well
                         * as a function from a crafting matrix to a list of {@link ItemStack} (the
                         * crafting result), therefore making it an immutable interface.</p>
                         * <p>The passed in {@link CraftingGridInventory} is usually a crafting
                         * inventory, e.g. a 2x2 or 3x3 crafting matrix.</p>
                         * <p>The requirements of a CraftingRecipe can be general, they just have to
                         * eventually return a boolean given an crafting grid.</p>
                         */
                        // @ts-ignore
                        interface CraftingRecipe extends org.spongepowered.api.item.recipe.Recipe, org.spongepowered.api.CatalogType {
                            /**
                             * Checks if the given {@link CraftingGridInventory} fits the required
                             * constraints to craft this {@link CraftingGridInventory}.
                             * @param grid The {#link CraftingGridInventory} to check for validity
                             * @param world The world this recipe would be used in
                             * @return True if the given input matches this recipe's requirements
                             */
                            // @ts-ignore
                            isValid(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): boolean
                            /**
                             * This method should only be called if
                             * {@link #isValid(CraftingGridInventory, World)} returns {@code true}.
                             * <p>This method is preferred over the
                             * {@link CraftingRecipe#getExemplaryResult()} method, as it customizes
                             * the result further depending on the context.</p>
                             * <p>Implementing classes are advised to use the output of
                             * {@link CraftingRecipe#getExemplaryResult()}, modify it accordingly,
                             * and {@code return} it.</p>
                             * @param grid The crafting input, typically 3x3 or 2x2
                             * @return An {#link ItemStackSnapshot}
                             */
                            // @ts-ignore
                            getResult(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory): org.spongepowered.api.item.inventory.ItemStackSnapshot
                            /**
                             * Returns the {@link CraftingResult} for the current crafting grid
                             * configuration and the {@link World} the player is in.
                             * <p>Returns
                             * {@link Optional#empty()} if the arguments do not satisfy
                             * {@link #isValid(CraftingGridInventory, World)}.</p>
                             * @param grid The crafting input, typically 3x3 or 2x2
                             * @param world The world this recipe would be used in
                             * @return A {#link CraftingResult} if the arguments satisfy
                             *      {@link #isValid(CraftingGridInventory, World)}, or
                             *      {@link Optional#empty()} if not
                             */
                            // @ts-ignore
                            getResult(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory, world: org.spongepowered.api.world.World): java.util.Optional<org.spongepowered.api.item.recipe.crafting.CraftingResult>
                            /**
                             * This method should only be called if
                             * {@link #isValid(CraftingGridInventory, World)} returns {@code true}.
                             * <p>A list of items to be added to the inventory of the player when they
                             * craft the result. For example, if a player crafts a
                             * {@link ItemTypes#CAKE}, the empty buckets are returned to their
                             * inventory.</p>
                             * @param grid The crafting input, typically 3x3 or 2x2
                             * @return The list of items to be added to the inventory of the player
                             *          when the recipe has been fulfilled (possibly empty)
                             */
                            // @ts-ignore
                            getRemainingItems(grid: org.spongepowered.api.item.inventory.crafting.CraftingGridInventory): java.util.List<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            /**
                             * The group this CraftingRecipe belongs to or {@link Optional#empty()}
                             * if not defined.
                             * @return The group this Recipe belongs to.
                             */
                            // @ts-ignore
                            getGroup(): java.util.Optional<java.lang.String>
                            /**
                             * Provides a Builder for a {@link ShapedCraftingRecipe}.
                             * @return The Builder.
                             */
                            // @ts-ignore
                            shapedBuilder(): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder
                            /**
                             * Provides a Builder for a {@link ShapelessCraftingRecipe}.
                             * @return The Builder.
                             */
                            // @ts-ignore
                            shapelessBuilder(): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder
                        }
                    }
                }
            }
        }
    }
}
