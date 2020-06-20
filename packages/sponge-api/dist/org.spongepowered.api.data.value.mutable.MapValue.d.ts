declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a specialized type of {@link Value} that is different from
                         * a {@link CollectionValue} such that the "elements" are
                         * {@link Entry}. Usually, this type of value is used to represent
                         * a particular "type" of "key" that is associated to a particular "value".
                         * @param <K> The type of the key
                         * @param <V> The type of the value
                         */
                        // @ts-ignore
                        interface MapValue<K, V> extends org.spongepowered.api.data.value.mutable.Value<java.util.Map<K, V>> {
                            /**
                             * Gets the size of this map.
                             * @return The size of this map
                             */
                            // @ts-ignore
                            size(): int
                            /**
                             * Associates the provided key to the provided value. If there already
                             * exists a value for the provided key, the value is replaced.
                             * @param key The key to associate to the value
                             * @param value The value associated with the key
                             * @return This map value, for chaining
                             */
                            // @ts-ignore
                            put(key: K, value: V): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                            /**
                             * Associates all provided {@link Entry} to this map value.
                             * @param map The map of key values to set
                             * @return This map value, for chaining
                             */
                            // @ts-ignore
                            putAll(map: java.util.Map<K, V>): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                            /**
                             * Removes the association of the provided key to the value currently
                             * associated.
                             * @param key The key to remove
                             * @return This map value, for chaining
                             */
                            // @ts-ignore
                            remove(key: K): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                            /**
                             * Removes all key value associations of the provided keys.
                             * @param keys The keys to remove
                             * @return This map value, for chaining
                             */
                            // @ts-ignore
                            removeAll(keys: java.lang.Iterable<K>): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                            /**
                             * Applies the {@link Predicate} to all {@link Entry} within this
                             * {@link MapValue}. Any entries that are false will be removed from the
                             * map value.
                             * @param predicate The predicate to filer
                             * @return This map value, for chaining
                             */
                            // @ts-ignore
                            removeAll(predicate: java.util.function.Predicate<java.util.Map.Entry<K, V>> | java.util.function$.Predicate<java.util.Map.Entry<K, V>>): org.spongepowered.api.data.value.mutable.MapValue<K, V>
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
                            transform(func: java.util.function.Function<java.util.Map<K, V>, java.util.Map<K, V>> | java.util.function$.Function<java.util.Map<K, V>, java.util.Map<K, V>>): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                            // @ts-ignore
                            asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<K, V>
                            // @ts-ignore
                            copy(): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                        }
                    }
                }
            }
        }
    }
}
