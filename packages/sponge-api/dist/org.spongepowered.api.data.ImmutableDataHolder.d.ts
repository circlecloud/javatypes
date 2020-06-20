declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * A type of {@link DataHolder} variant that is completely immutable once
                 * constructed. The advantage of an {@link ImmutableDataHolder} is that it can
                 * be processed without worry of mutating any existing {@link BaseValue}s
                 * belonging to this {@link ImmutableDataHolder}. It should be considered that
                 * an {@link ImmutableDataHolder} is considered "safe" to process
                 * asynchronously as all {@link BaseValue}s are copied into
                 * {@link ImmutableValue} counterparts.
                 * @see DataHolder
                 * @param <T> The sub type of immutable data holder
                 */
                // @ts-ignore
                interface ImmutableDataHolder<T extends org.spongepowered.api.data.ImmutableDataHolder<T>> extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.property.PropertyHolder, org.spongepowered.api.data.value.immutable.ImmutableValueStore<T, org.spongepowered.api.data.manipulator.ImmutableDataManipulator<?, ?>> {
                    /**
                     * Gets a copy of all properties defined on this
                     * {@link ImmutableDataHolder}, with their current values.
                     * @return A collection of all known manipulators
                     */
                    // @ts-ignore
                    getManipulators(): java.util.List<org.spongepowered.api.data.manipulator.ImmutableDataManipulator<?, ?>>
                }
            }
        }
    }
}
