declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace key {
                    /**
                     * A factory of {@link Key}s, useful for both the implementation of SpongeAPI,
                     * and for plugins wishing to provide their own {@link Key}s without having to
                     * remain afraid of having to cast back and forth.
                     * @deprecated To be removed in future API versions. Use {#link Key#builder()}
                     *     to create keys.
                     */
                    // @ts-ignore
                    class KeyFactory extends java.lang.Object {
                        /**
                         * Creates a new {@link Key} with the provided <code>E</code> element class
                         * and <code>V</code> {@link Value} class along with the provided default
                         * {@link DataQuery} to be used with the generated {@link Key}.
                         * <p>Note that {@link Key}s are not registered, but it is recommended to
                         * avoid generating {@link Key}s of potentially conflicting
                         * {@link DataQuery}(s).</p>
                         * @param <E> The type of element
                         * @param <V> The inferred return type
                         * @param elementToken The element class
                         * @param valueToken The value class
                         * @param query The query
                         * @param id The id for the new key
                         * @param name The name for the new key
                         * @return The generated key
                         * @deprecated Use {#link Key#builder()} to build keys. Implementation is
                         *      being removed in future API versions
                         */
                        // @ts-ignore
                        public static makeSingleKey<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(elementToken: object, valueToken: object, query: org.spongepowered.api.data.DataQuery, id: java.lang.String | string, name: java.lang.String | string): org.spongepowered.api.data.key.Key<V>
                        /**
                         * Creates a new {@link Key} based on a {@link ListValue} of a type
                         * <code>E</code> element along with the provided {@link DataQuery}.
                         * @param <E> The type of element
                         * @param elementToken The element class
                         * @param valueToken The value class
                         * @param query The query to access the data
                         * @param id The id for the new key
                         * @param name The name for the new key
                         * @return The generated key
                         * @deprecated Use {#link Key#builder()} to build keys. Implementation is
                         *      being removed in future API versions
                         */
                        // @ts-ignore
                        public static makeListKey<E>(elementToken: object, valueToken: object, query: org.spongepowered.api.data.DataQuery, id: java.lang.String | string, name: java.lang.String | string): org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>
                        /**
                         * Creates a new {@link Key} based on a {@link SetValue} of a type
                         * <code>E</code> element along with the provided {@link DataQuery}.
                         * @param <E> The type of element
                         * @param elementToken The element class
                         * @param valueToken The value token
                         * @param query The query to access the data
                         * @param id The id for the new key
                         * @param name The name for the new key
                         * @return The generated key
                         * @deprecated Use {#link Key#builder()} to build keys. Implementation is
                         *      being removed in future API versions
                         */
                        // @ts-ignore
                        public static makeSetKey<E>(elementToken: object, valueToken: object, query: org.spongepowered.api.data.DataQuery, id: java.lang.String | string, name: java.lang.String | string): org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.SetValue<E>>
                        /**
                         * Creates a new {@link Key} based on a {@link MapValue} of the types
                         * <code>K</code> keys and <code>V</code> values with the provided
                         * {@link DataQuery} for accessing the {@link Map} in {@link DataView}s.
                         * @param <K> The type of keys
                         * @param <V> The type of values
                         * @param elementToken The element token
                         * @param valueToken The value class of the map
                         * @param query The query
                         * @param id The id for the new key
                         * @param name The name for the new key
                         * @return The generated key
                         * @deprecated Use {#link Key#builder()} to build keys. Implementation is
                         *      being removed in future API versions
                         */
                        // @ts-ignore
                        public static makeMapKey<K, V>(elementToken: object, valueToken: object, query: org.spongepowered.api.data.DataQuery, id: java.lang.String | string, name: java.lang.String | string): org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.MapValue<K, V>>
                        /**
                         * Creates a new {@link Key} based on an {@link OptionalValue} of the type
                         * <code>E</code> element type with the provided {@link DataQuery} for
                         * accessing the optionally null value in {@link DataView}s.
                         * @param <E> The element type
                         * @param elementToken The element class
                         * @param valueToken The value class
                         * @param query The query
                         * @param id The id for the new key
                         * @param name The name for the new key
                         * @return The generated key
                         * @deprecated Use {#link Key#builder()} to build keys. Implementation is
                         *      being removed in future API versions
                         */
                        // @ts-ignore
                        public static makeOptionalKey<E>(elementToken: object, valueToken: object, query: org.spongepowered.api.data.DataQuery, id: java.lang.String | string, name: java.lang.String | string): org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.OptionalValue<E>>
                    }
                }
            }
        }
    }
}
