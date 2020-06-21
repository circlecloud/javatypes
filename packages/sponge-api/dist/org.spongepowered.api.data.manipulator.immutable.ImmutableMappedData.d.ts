declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableMappedData<K, V, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData<K, V, I, M>, M extends org.spongepowered.api.data.manipulator.mutable.MappedData<K, V, M, I>> extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M> {
                            /**
                             * Gets the {@code value} for the provided {@code key}, if available.
                             * @param key The key
                             * @return The value, if available
                             * @see Map#get(Object)
                             */
                            // @ts-ignore
                            get(key: K): java.util.Optional<V>
                            /**
                             * Gets a {@link Set} of {@code keys} available in this manipulator.
                             * @return The key set
                             * @see Map#keySet()
                             */
                            // @ts-ignore
                            getMapKeys(): Array<K>
                            /**
                             * Gets the {@link java.util.Map.Entry} {@link Set} of values.
                             * @return The entry set
                             * @see Map#entrySet()
                             */
                            // @ts-ignore
                            getMapValues(): Array<java.util.Map.Entry<K, V>>
                            /**
                             * Gets the {@link ImmutableMapValue} of this manipulator.
                             * @return The map value of this manipulator
                             */
                            // @ts-ignore
                            getMapValue(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            /**
                             * Gets this manipulator as a {@link Map}.
                             * @return The map
                             */
                            // @ts-ignore
                            asMap(): java.util.Map<K, V>
                        }
                    }
                }
            }
        }
    }
}
