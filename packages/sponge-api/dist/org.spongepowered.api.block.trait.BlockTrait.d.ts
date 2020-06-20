declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace trait {
                    /**
                     * Represents a possible trait in a {@link BlockType}s {@link BlockState}.
                     * <p>A {@link BlockState} can include zero or more {@link BlockTrait}s. Each
                     * {@link BlockTrait} within a {@link BlockState} is mapped to a value which
                     * represents the current value at the time the {@link BlockState} was taken.
                     * </p>
                     * <p>For example, a {@link BlockTypes#BED} contains three possible
                     * {@link BlockTrait}s :</p>
                     * <ul>
                     * <li>{@link EnumTraits#BED_FACING}</li>
                     * <li>{@link BooleanTraits#BED_OCCUPIED}</li>
                     * <li>{@link EnumTraits#BED_PART}</li>
                     * </ul>
                     * <p>If you query a {@link BlockTypes#BED}'s {@link BlockTrait} you have two
                     * possible outcomes for each {@link BlockTrait}. The
                     * {@link BooleanTraits#BED_OCCUPIED} has the following possible values :</p>
                     * <ul>
                     * <li><code>true</code></li>
                     * <li><code>false</code></li>
                     * </ul>
                     * <p>As 'OCCUPIED' is a {@link BooleanTrait}, it can only be <code>true</code>
                     * or <code>false</code>.
                     * The {@link EnumTraits#BED_PART} has the following possible values :</p>
                     * <ul>
                     * <li><code>HEAD</code></li>
                     * <li><code>FOOT</code></li>
                     * </ul>
                     * <p>To determine the current value of a {@link BlockTrait}, you would call
                     * {@link BlockState#getTraitValue(BlockTrait)}. To determine all possible
                     * values of a {@link BlockTrait}, you would call
                     * {@link BlockType#getTraits()}.</p>
                     * <p>As stated above, a {@link BlockType} may not always have one or more
                     * {@link BlockTrait}s. An example of such a block is
                     * {@link BlockTypes#BOOKSHELF}.</p>
                     */
                    // @ts-ignore
                    interface BlockTrait<T extends java.lang.Comparable<T>> extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the name of this {@link BlockTrait}.
                         * @return The trait name
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Gets all possible values for a specific {@link BlockTrait}. The
                         * included values may not be in any particular order. The returned
                         * {@link Collection} should be considered immutable.
                         * @return All possible values
                         */
                        // @ts-ignore
                        getPossibleValues(): java.util.Collection<T>
                        /**
                         * Gets the class type of the {@link BlockTrait}'s values.
                         * @return The value class
                         */
                        // @ts-ignore
                        getValueClass(): java.lang.Class<T>
                        /**
                         * Gets the {@link Predicate} used to determine valid values for this.
                         * {@link BlockTrait}. Any "value" that returns <code>true</code> when
                         * {@link Predicate#test(Object)} is called is valid. The
                         * {@link Predicate} is specific to this trait.
                         * @return The predicate
                         */
                        // @ts-ignore
                        getPredicate(): java.util.function.Predicate<T>
                        /**
                         * Attempts to parse the provided value as a value dictated possible by this trait or {@link Optional#empty()} otherwise.
                         * @param value The value to parse
                         * @return The actual value
                         */
                        // @ts-ignore
                        parseValue(value: string): java.util.Optional<T>
                    }
                }
            }
        }
    }
}
