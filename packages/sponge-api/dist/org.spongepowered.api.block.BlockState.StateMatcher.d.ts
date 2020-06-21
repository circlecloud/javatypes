declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockState {
                    /**
                     * A {@link BlockState} matcher that will match various block states
                     * according to a pre-built list of {@link BlockTrait}s and their
                     * values, such that not all {@link BlockTrait}s contained in a
                     * {@link BlockState} must be matched. (Such as if a block state
                     * that contains 4 traits, and only 2 are wanting to be matched,
                     * then the other two traits may be variable).
                     */
                    // @ts-ignore
                    class StateMatcher extends java.lang.Object implements java.util.function.Predicate<org.spongepowered.api.block.BlockState> {
                        /**
                         * Gets a {@code true} return value if the provided {@link BlockState}
                         * sufficiently matches this matcher, such that the {@link BlockType}
                         * matches, and the pre-defined {@link BlockTrait} values match.
                         * @param state The block state in question
                         * @return True if the state sufficiently matches
                         */
                        // @ts-ignore
                        public matches(state: org.spongepowered.api.block.BlockState): boolean
                        // @ts-ignore
                        public test(blockState: org.spongepowered.api.block.BlockState): boolean
                        /**
                         * Gets a {@link List} of compatible {@link BlockState}s.
                         * Since all {@link BlockState}s are known in the initialization
                         * of a {@link BlockType}, the states are already deterministic
                         * and cannot change themselves.
                         * @return The list of compatible block states
                         */
                        // @ts-ignore
                        public getCompatibleStates(): Array<org.spongepowered.api.block.BlockState>
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
