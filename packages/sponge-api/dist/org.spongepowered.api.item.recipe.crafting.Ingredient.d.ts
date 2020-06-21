declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        /**
                         * An Ingredient for a crafting recipe.
                         * <p>Crafting recipes can only be crafted when all of the ingredients match
                         * the items in the input grid.</p>
                         */
                        // @ts-ignore
                        interface Ingredient extends java.util.function.Predicate<org.spongepowered.api.item.inventory.ItemStack> {
                            /**
                             * An empty ingredient.
                             */
                            // @ts-ignore
                            readonly NONE: org.spongepowered.api.item.recipe.crafting.Ingredient
                            // @ts-ignore
                            test(itemStack: org.spongepowered.api.item.inventory.ItemStack): boolean
                            /**
                             * Returns the list of {@link ItemStack}s used to display the ingredient in a recipe.
                             * These are not necessarily all the items that this Ingredient can match.
                             * @return The list of items to display the Ingredient in a recipe.
                             */
                            // @ts-ignore
                            displayedItems(): Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            /**
                             * Creates a new {@link Builder} to build an {@link Ingredient}.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                            /**
                             * Creates a new {@link Ingredient} for the provided {@link ItemStackSnapshot}s.
                             * @param snapshots The snapshots
                             * @return The new ingredient
                             */
                            // @ts-ignore
                            of(...snapshots: org.spongepowered.api.item.inventory.ItemStackSnapshot[]): org.spongepowered.api.item.recipe.crafting.Ingredient
                            /**
                             * Creates a new {@link Ingredient} for the provided {@link ItemStack}s.
                             * @param itemStacks The itemStacks
                             * @return The new ingredient
                             */
                            // @ts-ignore
                            of(...itemStacks: org.spongepowered.api.item.inventory.ItemStack[]): org.spongepowered.api.item.recipe.crafting.Ingredient
                            /**
                             * Creates a new {@link Ingredient} for the provided {@link ItemType}s.
                             * @param itemTypes The items
                             * @return The new ingredient
                             */
                            // @ts-ignore
                            of(...itemTypes: org.spongepowered.api.item.ItemType[]): org.spongepowered.api.item.recipe.crafting.Ingredient
                            /**
                             * Creates a new {@link Ingredient} for the provided
                             * {@link org.spongepowered.api.GameDictionary.Entry}s.
                             * @param entries The GameDictionary Entries
                             * @return The new ingredient
                             */
                            // @ts-ignore
                            of(...entries: org.spongepowered.api.GameDictionary.Entry[]): org.spongepowered.api.item.recipe.crafting.Ingredient
                        }
                    }
                }
            }
        }
    }
}
