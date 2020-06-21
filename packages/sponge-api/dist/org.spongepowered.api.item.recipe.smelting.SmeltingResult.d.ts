declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        /**
                         * The result of fulfilling a {@link SmeltingRecipe}.
                         */
                        // @ts-ignore
                        class SmeltingResult extends java.lang.Object {
                            /**
                             * Creates a new {@link SmeltingResult}.
                             * <p>Note that this may be replaced with a static of method in the
                             * future.</p>
                             * @param result The result of the smelting recipe
                             * @param experience The experience that should be created from this
                             *      smelting result
                             */
                            // @ts-ignore
                            constructor(result: org.spongepowered.api.item.inventory.ItemStackSnapshot, experience: number /*double*/)
                            /**
                             * This method should be used instead of the
                             * {@link SmeltingRecipe#getExemplaryResult()} method, as it customizes the
                             * result further depending on the specified ingredient
                             * {@link ItemStackSnapshot}. It is advised to use the output of
                             * {@link SmeltingRecipe#getExemplaryResult()}, modify it accordingly, and
                             * {@code return} it.
                             * @return The result of fulfilling the requirements of a
                             *          {#link SmeltingRecipe}
                             */
                            // @ts-ignore
                            public getResult(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                            /**
                             * Returns the amount of experience released after completing a recipe.
                             * @return The amount of experience released after fulfilling the
                             *          requirements of a {#link SmeltingRecipe}
                             */
                            // @ts-ignore
                            public getExperience(): number /*double*/
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
