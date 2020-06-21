declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        /**
                         * The result of fulfilling a {@link CraftingRecipe}.
                         */
                        // @ts-ignore
                        class CraftingResult extends java.lang.Object {
                            /**
                             * Creates a new {@link CraftingResult}.
                             * <p>Note that this may be replaced with a static of method in the
                             * future.</p>
                             * @param result The result of the crafting recipe
                             * @param remainingItems The remaining items to leave in the
                             *      crafting window
                             */
                            // @ts-ignore
                            constructor(result: org.spongepowered.api.item.inventory.ItemStackSnapshot, remainingItems: java.util.List<org.spongepowered.api.item.inventory.ItemStackSnapshot> | Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>)
                            /**
                             * This method should be used instead of the
                             * {@link CraftingRecipe#getExemplaryResult()} method, as it customizes the
                             * result further depending on the specified ingredient
                             * {@link ItemStackSnapshot}. It is advised to use the output of
                             * {@link CraftingRecipe#getExemplaryResult()}, modify it accordingly, and
                             * {@code return} it.
                             * @return The result of fulfilling the requirements of a
                             *          {#link CraftingRecipe}
                             */
                            // @ts-ignore
                            public getResult(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                            /**
                             * Returns a list of {@link ItemStackSnapshot} to be set in the input
                             * {@link CraftingGridInventory}, contains {@link ItemStackSnapshot#NONE}s for
                             * slots which should be cleared.
                             * @return A list of {#link ItemStackSnapshot}s to be set in the input
                             *          {@link CraftingGridInventory}
                             */
                            // @ts-ignore
                            public getRemainingItems(): Array<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
