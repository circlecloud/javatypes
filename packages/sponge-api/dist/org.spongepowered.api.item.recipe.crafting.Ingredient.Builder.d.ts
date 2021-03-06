declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace Ingredient {
                            /**
                             * Builder for {@link Ingredient}s.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.recipe.crafting.Ingredient, org.spongepowered.api.item.recipe.crafting.Ingredient.Builder> {
                                /**
                                 * Adds a predicate for matching the ingredient.
                                 * <p>Also clears all previously set {@link #withDisplay} items.</p>
                                 * <p>All predicates and items are ORed together.</p>
                                 * <p>Use {@link #from} to create an ingredient from another one.</p>
                                 * @param predicate The predicate.
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                with(predicate: java.util.function$.Predicate<org.spongepowered.api.item.inventory.ItemStack>): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Adds a GameDictionary Entry as Predicate for matching the ingredient.
                                 * Also clears all previously set {@link #withDisplay} items and then
                                 * adds {@link org.spongepowered.api.GameDictionary.Entry#getTemplate()}
                                 * to it.
                                 * <p>All predicates and items are ORed together.</p>
                                 * @param entry The GameDictionary entry.
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                with(entry: org.spongepowered.api.GameDictionary.Entry): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Adds one or more ItemTypes for matching the ingredient.
                                 * The ItemTypes are also used as display items.
                                 * All predicates and items are ORed together.
                                 * @param types The items
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                with(...types: org.spongepowered.api.item.ItemType[]): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Adds one or more ItemStacks for matching the ingredient.
                                 * The ItemStacks are also used as display items.
                                 * All predicates and items are ORed together.
                                 * @param items The items
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                with(...items: org.spongepowered.api.item.inventory.ItemStack[]): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Adds one or more ItemStackSnapshots for matching the ingredient.
                                 * The Snapshots are also used as display items.
                                 * All predicates and items are ORed together.
                                 * @param items The items
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                with(...items: org.spongepowered.api.item.inventory.ItemStackSnapshot[]): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Adds ItemTypes used to display this Ingredient in a recipe.
                                 * These are not used for matching the recipe.
                                 * @param types The list of itemTypes.
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                withDisplay(...types: org.spongepowered.api.item.ItemType[]): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Adds ItemStacks used to display this Ingredient in a recipe.
                                 * These are not used for matching the recipe.
                                 * @param items The list of items.
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                withDisplay(...items: org.spongepowered.api.item.inventory.ItemStack[]): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Adds ItemStackSnasphots used to display this Ingredient in a recipe.
                                 * These are not used for matching the recipe.
                                 * @param items The list of snapshots.
                                 * @return This Builder, for chaining
                                 */
                                // @ts-ignore
                                withDisplay(...items: org.spongepowered.api.item.inventory.ItemStackSnapshot[]): org.spongepowered.api.item.recipe.crafting.Ingredient.Builder
                                /**
                                 * Builds the {@link Ingredient} with the specified items and or predicates.
                                 * @return The new Ingredient
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.item.recipe.crafting.Ingredient
                            }
                        }
                    }
                }
            }
        }
    }
}
