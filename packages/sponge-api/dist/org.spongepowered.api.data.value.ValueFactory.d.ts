declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    // @ts-ignore
                    interface ValueFactory {
                        /**
                         * Creates a new {@link Value} with the provided {@link Key} and the
                         * <code>E</code> element.
                         * @param key The key for the value
                         * @param element The element
                         * @param <E> The type of element
                         * @return The newly created value
                         */
                        // @ts-ignore
                        createValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, element: E): org.spongepowered.api.data.value.mutable.Value<E>
                        /**
                         * Creates a new {@link Value} with the provided {@link Key} and the
                         * <code>E</code> element and the provided <code>E</code> default value.
                         * @param key The key for the value
                         * @param element The element
                         * @param defaultValue The default value
                         * @param <E> The type of element
                         * @return The newly created value
                         */
                        // @ts-ignore
                        createValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, element: E, defaultValue: E): org.spongepowered.api.data.value.mutable.Value<E>
                        /**
                         * Creates a new {@link ListValue} with the provided {@link Key} and
                         * {@link List} of elements. The default value will be an empty list.
                         * @param key The key for the value
                         * @param elements The list of elements
                         * @param <E> The type of element
                         * @return The list value
                         */
                        // @ts-ignore
                        createListValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, elements: Array<E>): org.spongepowered.api.data.value.mutable.ListValue<E>
                        /**
                         * Creates a new {@link ListValue} with the provided {@link Key} and
                         * {@link List} of elements.
                         * @param key The key for the value
                         * @param elements The list of elements
                         * @param defaults The default list
                         * @param <E> The type of element
                         * @return The list value
                         */
                        // @ts-ignore
                        createListValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, elements: Array<E>, defaults: Array<E>): org.spongepowered.api.data.value.mutable.ListValue<E>
                        /**
                         * Creates a new {@link SetValue} with the provided {@link Key} and
                         * {@link Set} of elements.
                         * @param key The key for the value
                         * @param elements The set of elements
                         * @param <E> The type of element
                         * @return The set value
                         */
                        // @ts-ignore
                        createSetValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<E>>, elements: Array<E>): org.spongepowered.api.data.value.mutable.SetValue<E>
                        /**
                         * Creates a new {@link SetValue} with the provided {@link Key} and
                         * {@link Set} of elements.
                         * @param key The key for the value
                         * @param elements The set of elements
                         * @param defaults The default set
                         * @param <E> The type of element
                         * @return The set value
                         */
                        // @ts-ignore
                        createSetValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<E>>, elements: Array<E>, defaults: Array<E>): org.spongepowered.api.data.value.mutable.SetValue<E>
                        /**
                         * Creates a new {@link MapValue} of the provided {@link Key} with the
                         * types <code>K</code> and <code>V</code>.
                         * @param key The key for the value
                         * @param map The map of elements
                         * @param <K> The type of key
                         * @param <V> The type of value
                         * @return The map value
                         */
                        // @ts-ignore
                        createMapValue<K, V>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<K, V>>, map: java.util.Map<K, V>): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                        /**
                         * Creates a new {@link MapValue} of the provided {@link Key} with the
                         * types <code>K</code> and <code>V</code> along with the provided
                         * {@link Map} defaults.
                         * @param key The key for the value
                         * @param map The map of elements
                         * @param defaults The default map
                         * @param <K> The type of key
                         * @param <V> The type of value
                         * @return The map value
                         */
                        // @ts-ignore
                        createMapValue<K, V>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<K, V>>, map: java.util.Map<K, V>, defaults: java.util.Map<K, V>): org.spongepowered.api.data.value.mutable.MapValue<K, V>
                        /**
                         * Creates a {@link BoundedValueBuilder}
                         * @param key The key to the value
                         * @param <E> The type of value
                         * @return The newly created value
                         */
                        // @ts-ignore
                        createBoundedValueBuilder<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MutableBoundedValue<E>>): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder<E>
                        /**
                         * Creates an {@link OptionalValue} where even the default value may be
                         * {@link Optional#empty()}. These types of values should be restricted
                         * to values that are live, that can be potentially large to retain a
                         * reference to, and otherwise, not thread safe.
                         * @param key The key to the value
                         * @param element The element, if available
                         * @param <E> The type of element
                         * @return The newly created value
                         */
                        // @ts-ignore
                        createOptionalValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<E>>, element: E): org.spongepowered.api.data.value.mutable.OptionalValue<E>
                        /**
                         * Creates an {@link OptionalValue} where the default is NOT
                         * <code>null</code>, such that the actual value may be retained as
                         * <code>null</code>.
                         * @param key The key of the value
                         * @param element The element
                         * @param defaultElement The default value
                         * @param <E> The type of element
                         * @return The newly created value
                         */
                        // @ts-ignore
                        createOptionalValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<E>>, element: E, defaultElement: E): org.spongepowered.api.data.value.mutable.OptionalValue<E>
                    }
                }
            }
        }
    }
}
