declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockState {
                    /**
                     * A builder for building {@link StateMatcher}s.
                     */
                    // @ts-ignore
                    class MatcherBuilder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.block.BlockState.StateMatcher, org.spongepowered.api.block.BlockState.MatcherBuilder> {
                        /**
                         * Sets the root {@link BlockType} for the {@link StateMatcher}.
                         * <p>Note that the {@link BlockType type} <b>must be set prior</b>
                         * to setting various {@link BlockTrait traits} and their values.</p>
                         * @param type The block type to use
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        type(type: org.spongepowered.api.block.BlockType): org.spongepowered.api.block.BlockState.MatcherBuilder
                        /**
                         * Adds the desired {@link BlockTrait} and {code value} to this
                         * builder, if the desired {@link BlockTrait} does not belong to the
                         * original {@link BlockType} as provided by {@link #type(BlockType)},
                         * an exception is thrown. Likewise, if a {@code value} is not within
                         * the possible values for the desired trait of the desired type, an
                         * exception is thrown.
                         * @param trait The desired block trait
                         * @param value the desired value
                         * @param <T> The type of comparable
                         * @return This builder
                         * @throws IllegalArgumentException If the block trait does not match
                         *      the block type, or if the value does not belong to the trait
                         *      with the desired block type
                         */
                        // @ts-ignore
                        trait<T extends java.lang.Comparable<T>>(trait: org.spongepowered.api.block.trait.BlockTrait<T>, value: T extends java.lang.Comparable<T>): org.spongepowered.api.block.BlockState.MatcherBuilder
                        /**
                         * Creates a new {@link StateMatcher}.
                         * @return The new state matcher
                         * @throws IllegalStateException If there is no block type
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.block.BlockState.StateMatcher
                        // @ts-ignore
                        from(value: org.spongepowered.api.block.BlockState.StateMatcher): org.spongepowered.api.block.BlockState.MatcherBuilder
                        // @ts-ignore
                        reset(): org.spongepowered.api.block.BlockState.MatcherBuilder
                    }
                }
            }
        }
    }
}
