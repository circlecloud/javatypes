declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace key {
                    /**
                     * Represents a key to an underlying {@link BaseValue} such that the underlying
                     * value can be retrieved from a {@link ValueContainer}. As well, a {@link Key}
                     * can be used for {@link DataSerializable}s with the included
                     * {@link #getQuery()} to retrieve the recommended {@link DataQuery} to use.
                     * @param <V> The type of {#link BaseValue}
                     */
                    // @ts-ignore
                    interface Key<V extends org.spongepowered.api.data.value.BaseValue<?>> extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a {@link Key.Builder} which allows creation of a {@link Key}
                         * to later be registered for accessing values from
                         * a {@link ValueContainer}.
                         * @return The key builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.data.key.Key.Builder<any, any>
                        /**
                         * Gets the class of the {@link BaseValue} this {@link Key} is representing.
                         * @return The value class
                         */
                        // @ts-ignore
                        getValueToken(): object
                        /**
                         * Gets the class of the element of the {@link BaseValue} this {@link Key}
                         * is representing. On occasion, if the element is a {@link Collection} type,
                         * one can occasionally use {@link TypeToken#resolveType(Type)} with
                         * {@link Class#getTypeParameters()} as the type parameter of a collection
                         * is retrievable, such as the element type parameter for {@link List} or
                         * {@link Map}.
                         * @return The element class
                         */
                        // @ts-ignore
                        getElementToken(): object
                        /**
                         * Gets the {@link DataQuery} for recommended use with
                         * {@link DataContainer}s.
                         * @return The recommended {#link DataQuery} for use
                         */
                        // @ts-ignore
                        getQuery(): org.spongepowered.api.data.DataQuery
                        /**
                         * Register an event listener which listens to the value the key accesses
                         * changing.
                         * @param holderFilter The data holder to filter with
                         * @param listener The event listener
                         * @param <E> The class type of the data holder
                         */
                        // @ts-ignore
                        registerEvent<E extends org.spongepowered.api.data.DataHolder>(holderFilter: java.lang.Class<E>, listener: org.spongepowered.api.event.EventListener<org.spongepowered.api.event.data.ChangeDataHolderEvent.ValueChange>): void
                    }
                }
            }
        }
    }
}
