declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    /**
                     * An {@code ImmutableDataManipulator} is an immutable {@link ValueContainer}
                     * such that once it is created, any {@link BaseValue}s exist as
                     * {@link ImmutableValue}s. Any modification methods result in new instances of
                     * the same typed {@link ImmutableDataManipulator}.
                     * <p>As with {@link DataManipulator}, it is always possible to translate back
                     * and forth between mutable and immutable with {@link #asMutable()} and
                     * {@link DataManipulator#asImmutable()}.</p>
                     * @param <I> The type of immutable data manipulator
                     * @param <M> The type of mutable data manipulator
                     */
                    // @ts-ignore
                    interface ImmutableDataManipulator<I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.value.ValueContainer<I> {
                        /**
                         * Creates a new {@link ImmutableDataManipulator} with the provided value
                         * if the {@link Key} is supported by this {@link ImmutableDataManipulator}
                         * without exception.
                         * @param key The key to use
                         * @param value The value to set
                         * @param <E> The type of value
                         * @return The new immutable data manipulator, if compatible
                         */
                        // @ts-ignore
                        with<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): java.util.Optional<I>
                        /**
                         * Creates a new {@link ImmutableDataManipulator} with the provided
                         * {@link BaseValue} provided that the {@link BaseValue} is supported by
                         * this {@link ImmutableDataManipulator}. A simple check can be called for
                         * {@link #supports(BaseValue)} prior to ensure
                         * {@link Optional#isPresent()} returns {@code true}.
                         * @param value The value to set
                         * @return The new immutable data manipulator, if compatible
                         */
                        // @ts-ignore
                        with(value: org.spongepowered.api.data.value.BaseValue<any>): java.util.Optional<I>
                        // @ts-ignore
                        copy(): I
                        /**
                         * Gets a {@link DataManipulator} copy of this
                         * {@link ImmutableDataManipulator} such that all backed
                         * {@link ImmutableValue}s are copied into their {@link Value}
                         * counterparts. Any changes to this {@link ImmutableDataManipulator} will
                         * NOT be reflected on the returned {@link DataManipulator} and vice versa.
                         * @return This {#link ImmutableDataManipulator}'s data copied into a
                         *      {@link DataManipulator}
                         */
                        // @ts-ignore
                        asMutable(): M
                    }
                }
            }
        }
    }
}
