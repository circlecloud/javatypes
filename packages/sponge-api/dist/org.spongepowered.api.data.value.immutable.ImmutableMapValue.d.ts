declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        /**
                         * Represents a specialized type of {@link ImmutableValue} that is different
                         * from an {@link ImmutableCollectionValue} such that the "elements" are
                         * {@link Entry}. Usually, this type of value is used to represent
                         * a particular "type" of "key" that is associated to a particular "value".
                         * @param <K> The type of the key
                         * @param <V> The type of the value
                         */
                        // @ts-ignore
                        interface ImmutableMapValue<K, V> extends org.spongepowered.api.data.value.immutable.ImmutableValue<java.util.Map<K, V>> {
                            /**
                             * Gets the size of this map.
                             * @return The size of this map
                             */
                            // @ts-ignore
                            size(): int
                            /**
                             * Associates the provided key to the provided value in the new map. If
                             * there already exists a value for the provided key, the value is
                             * replaced.
                             * @param key The key to associate to the value
                             * @param value The value associated with the key
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            with(key: K, value: V): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            // @ts-ignore
                            with(value: java.util.Map<K, V>): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            /**
                             * Associates all provided {@link Entry} along with all pre-existing
                             * map entries in a new {@link ImmutableMapValue}.
                             * @param map The map of key values to set
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            withAll(map: java.util.Map<K, V>): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            /**
                             * Creates a new {@link ImmutableMapValue} without the provided key and the
                             * associated value.
                             * @param key The key to exclude the association
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            without(key: K): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            /**
                             * Creates a new {@link ImmutableMapValue} without the provided keys and
                             * their associated values.
                             * @param keys The keys to exclude
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            withoutAll(keys: java.lang.Iterable<K>): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            /**
                             * Creates a new {@link ImmutableMapValue} such that all entries are
                             * filtered by the provided {@link Predicate}, any that return
                             * {@code true} are retained in the new value. Elements that return
                             * <code>true</code> from {@link Predicate#test(Object)} are kept, and
                             * those that return <code>false</code> are excluded.
                             * @param predicate The predicate to filter
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            withoutAll(predicate: java.util.function.Predicate<java.util.Map.Entry<K, V>> | java.util.function$.Predicate<java.util.Map.Entry<K, V>>): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            /**
                             * Checks if the provided key is contained within this map.
                             * @param key The key to check
                             * @return True if the key is contained
                             */
                            // @ts-ignore
                            containsKey(key: K): boolean
                            /**
                             * Checks if the provided value is contained within this map.
                             * @param value The value to check
                             * @return True if the value is contained
                             */
                            // @ts-ignore
                            containsValue(value: V): boolean
                            /**
                             * Gets an {@link ImmutableSet} of all keys contained in this map value.
                             * @return The set of keys
                             */
                            // @ts-ignore
                            keySet(): <any>
                            /**
                             * Retrieves an {@link ImmutableSet} of the {@link Entry}s contained
                             * within this map value.
                             * @return The immutable set of entries
                             */
                            // @ts-ignore
                            entrySet(): <any>
                            /**
                             * Retrieves an {@link ImmutableCollection} of all available values within
                             * this map.
                             * @return The collection of values
                             */
                            // @ts-ignore
                            values(): <any>
                            // @ts-ignore
                            transform(func: java.util.function.Function<java.util.Map<K, V>, java.util.Map<K, V>> | java.util.function$.Function<java.util.Map<K, V>, java.util.Map<K, V>>): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            // @ts-ignore
                            asMutable(): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                        }
                    }
                }
            }
        }
    }
}
