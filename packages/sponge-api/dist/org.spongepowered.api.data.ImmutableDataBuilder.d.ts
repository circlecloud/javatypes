declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * A builder, much like a normal {@link DataBuilder} except that it builds
                 * {@link ImmutableDataHolder}s. While the {@link ImmutableDataHolder} is like
                 * a {@link DataHolder}, it is immutable.
                 * @param <H> The type of {#link ImmutableDataHolder}
                 * @param <E> The extended {#link ImmutableDataBuilder}
                 */
                // @ts-ignore
                interface ImmutableDataBuilder<H extends org.spongepowered.api.data.ImmutableDataHolder<H>, E extends org.spongepowered.api.data.ImmutableDataBuilder<H, E>> extends org.spongepowered.api.data.persistence.DataBuilder<H> {
                    /**
                     * Adds the given {@link DataManipulator} to the builder. The
                     * {@link DataManipulator} is copied when the {@link ImmutableDataHolder}
                     * is created.
                     * @param manipulator The manipulator to add
                     * @return This builder, for chaining
                     */
                    // @ts-ignore
                    add(manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): E
                    /**
                     * Adds the given {@link ImmutableDataManipulator} to the builder.
                     * @param manipulator The manipulator to add
                     * @return This builder, for chaining
                     */
                    // @ts-ignore
                    add(manipulator: org.spongepowered.api.data.manipulator.ImmutableDataManipulator<any, ?>): E
                    /**
                     * Adds the given {@link Key} with the given value.
                     * @param key The key to assign the value with
                     * @param value The value to assign with the key
                     * @param <V> The type of the value
                     * @return This builder, for chaining
                     */
                    // @ts-ignore
                    add<V>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<V>>, value: V): E
                    /**
                     * Copies all known {@link DataManipulator}s from the given
                     * {@link ImmutableDataHolder}. This is a defensive copy as
                     * {@link DataManipulator} is mutable.
                     * @param holder The {#link ImmutableDataHolder} to copy from
                     * @return This builder for chaining
                     */
                    // @ts-ignore
                    from(holder: H extends org.spongepowered.api.data.ImmutableDataHolder<H>): E
                    /**
                     * Attempts to build a new {@link ImmutableDataHolder}.
                     * @return The new immutable data holder
                     */
                    // @ts-ignore
                    build(): H
                    // @ts-ignore
                    reset(): E
                }
            }
        }
    }
}
