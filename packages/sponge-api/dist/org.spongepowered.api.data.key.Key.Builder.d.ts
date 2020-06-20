declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace key {
                    namespace Key {
                        // @ts-ignore
                        interface Builder<E, V extends org.spongepowered.api.data.value.BaseValue<E>> extends org.spongepowered.api.util.CatalogBuilder<org.spongepowered.api.data.key.Key<V>, org.spongepowered.api.data.key.Key.Builder<E, V>> {
                            /**
                             * Starter method for the builder, to be used immediately after
                             * {@link Key#builder()} is called. This defines the generics for the
                             * builder itself to provide the properly generified {@link Key}.
                             * <p>Common {@link TypeToken TypeTokens} can be found in
                             * {@link TypeTokens}. If a new TypeToken is to be created, it is
                             * recommended to create an anonymous class instance of a token,
                             * as recommended by Guava's wiki found
                             * <a href="https://github.com/google/guava/wiki/ReflectionExplained#introduction">here</a>.
                             * </p>
                             * @param token The type token, preferably an anonymous
                             * @param <T> The element type of the Key
                             * @param <B> The base value type of the key
                             * @return This builder, generified
                             */
                            // @ts-ignore
                            type<T, B extends org.spongepowered.api.data.value.BaseValue<T>>(token: object): org.spongepowered.api.data.key.Key.Builder<T, B>
                            // @ts-ignore
                            id(id: string): org.spongepowered.api.data.key.Key.Builder<E, V>
                            // @ts-ignore
                            name(name: string): org.spongepowered.api.data.key.Key.Builder<E, V>
                            /**
                             * Sets the {@link DataQuery} recommended for use with
                             * {@link DataContainer}s. See {@link Key#getQuery()}.
                             * @param query The DataQuery
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            query(query: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.key.Key.Builder<E, V>
                            /**
                             * Builds a new {@link Key}, provided that the
                             * {@link #type(TypeToken)}, {@link #id(String)},
                             * {@link #name(String)}, and {@link #query(DataQuery)}
                             * are set.
                             * @return The generated Key
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.data.key.Key<V>
                            // @ts-ignore
                            from(value: org.spongepowered.api.data.key.Key<V>): org.spongepowered.api.data.key.Key.Builder<E, V>
                        }
                    }
                }
            }
        }
    }
}
