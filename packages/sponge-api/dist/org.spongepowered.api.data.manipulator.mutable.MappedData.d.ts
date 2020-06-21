declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * A variant type of {@link DataManipulator} that uses a {@link Map}.
                         * @param <K> The type of key
                         * @param <V> The type of value
                         * @param <M> The mutable variant of this manipulator
                         * @param <I> The immutable variant of this manipulator
                         */
                        // @ts-ignore
                        interface MappedData<K, V, M extends org.spongepowered.api.data.manipulator.mutable.MappedData<K, V, M, I>, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData<K, V, I, M>> extends org.spongepowered.api.data.manipulator.DataManipulator<M, I> {
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
                             * Gets the {@link MapValue} of this manipulator.
                             * @return The map value of this manipulator
                             */
                            // @ts-ignore
                            getMapValue(): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                            /**
                             * Gets this manipulator as a {@link Map}.
                             * @return The map
                             */
                            // @ts-ignore
                            asMap(): java.util.Map<K, V>
                            /**
                             * Sets the {@code value} with the provided {@code key}.
                             * @param key The key
                             * @param value The value
                             * @return This manipulator, for chaining
                             * @see Map#put(Object, Object)
                             */
                            // @ts-ignore
                            put(key: K, value: V): M
                            /**
                             * Sets all available {@link Map#entrySet()} values into this
                             * {@link MappedData} manipulator.
                             * @param map The map containing keys and values
                             * @return This manipulator, for chaining
                             * @see Map#putAll(Map)
                             */
                            // @ts-ignore
                            putAll(map: java.util.Map<any, any>): M
                            /**
                             * Removes any values keyed to the provided {@code key}.
                             * @param key The key to remove the value of
                             * @return This manipulator, for chaining
                             * @see Map#remove(Object)
                             */
                            // @ts-ignore
                            remove(key: K): M
                        }
                    }
                }
            }
        }
    }
}
