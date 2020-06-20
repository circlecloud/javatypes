declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    /**
                     * A ValueContainer is a holder of a particular set of {@link BaseValue}s. While
                     * there exists a {@link CompositeValueStore} and {@link ImmutableValueStore},
                     * the emphasis of {@link ValueContainer} is that it only contains "data". It
                     * is not known whether a {@code ValueContainer} is mutable or immutable.
                     * <p>Being that a {@code ValueContainer} is literally a container of
                     * {@link BaseValue}s, it itself does not contain the underlying values of
                     * data. A {@link ValueContainer} may not always be parented by another
                     * {@link ValueContainer}, such as the case for {@link DataManipulator}s and
                     * {@link DataHolder}s, it is recommended to knowingly understand the
                     * fundamental differences between them.</p>
                     * @param <C> The type of container for fluency
                     */
                    // @ts-ignore
                    interface ValueContainer<C extends org.spongepowered.api.data.value.ValueContainer<C>> {
                        /**
                         * Attempts to get the underlying value backed by a {@link BaseValue}
                         * linked to the provided {@link Key}. If the {@link Key} is not
                         * supported, {@link Optional#empty()} is returned. It is important
                         * to check for support of a {@link Key} by either calling
                         * {@link #supports(BaseValue)} or {@link #supports(Key)}.
                         * @param key The key linking the
                         * @param <E> The type of value
                         * @return The value, if available
                         */
                        // @ts-ignore
                        get<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): java.util.Optional<E>
                        /**
                         * Attempts to get the underlying value backed by a {@link BaseValue}
                         * linked to the provided {@link Key}.
                         * <p>If the {@link Key} is not supported or
                         * available, {@link NoSuchElementException} will be thrown.</p>
                         * @param key The key
                         * @param <E> The type of value
                         * @return The value
                         * @throws NoSuchElementException If the value is not supported or present
                         */
                        // @ts-ignore
                        require<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): E
                        /**
                         * Attempts to get the underlying value if available and supported. If the
                         * {@link BaseValue} is not supported whatsoever by this
                         * {@link ValueContainer}, an exception is thrown.
                         * @param key The {#link Key} backing the {@link BaseValue}
                         * @param <E> The type of value
                         * @return The value, or null if not set
                         */
                        // @ts-ignore
                        getOrNull<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>): E
                        /**
                         * Attempts to get the underlying value if available. If the value is not
                         * set, the given {@code defaultValue} is returned, if the
                         * {@link BaseValue} is even supported.
                         * @param key The key backing the {#link BaseValue}
                         * @param defaultValue The value to default to if not set
                         * @param <E> The type of value
                         * @return The value, or default if not set
                         */
                        // @ts-ignore
                        getOrElse<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, defaultValue: E): E
                        /**
                         * Gets the {@link BaseValue} for the given {@link Key}.
                         * @param key The key linked to the {#link BaseValue}
                         * @param <E> The type of the return type
                         * @param <V> The type of value
                         * @return The value, if available
                         */
                        // @ts-ignore
                        getValue<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(key: org.spongepowered.api.data.key.Key<V>): java.util.Optional<V>
                        /**
                         * Checks if the given {@link Key} is supported by this
                         * {@link ValueContainer}.
                         * @param key The key to check
                         * @return True if the key and value backed by the key is supported
                         */
                        // @ts-ignore
                        supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                        /**
                         * Checks if the provided {@link BaseValue} is supported.
                         * @param baseValue The base value to check
                         * @return True if the base value is supported
                         */
                        // @ts-ignore
                        supports(baseValue: org.spongepowered.api.data.value.BaseValue<any>): boolean
                        /**
                         * Creates a clone copy of this {@link ValueContainer} as a new
                         * {@link ValueContainer} such that all the {@link BaseValue}s are
                         * safely duplicated to the new instance.
                         * @return The new copy
                         */
                        // @ts-ignore
                        copy(): C
                        /**
                         * Gets all applicable {@link Key}s for this {@link ValueContainer}.
                         * Changes can not be made to the set to alter the {@link ValueContainer},
                         * nor can the {@link BaseValue}s be changed with the provided
                         * {@link ImmutableSet}.
                         * @return An immutable set of known {#link Key}s
                         */
                        // @ts-ignore
                        getKeys(): java.util.Set<org.spongepowered.api.data.key.Key<?>>
                        /**
                         * Gets all applicable {@link BaseValue}s associated with this
                         * {@link ValueContainer}. As the data backed by the values are copied,
                         * any modifications to the {@link BaseValue}s will not be reflected onto
                         * this {@link ValueContainer}.
                         * @return An immutable set of copied values
                         */
                        // @ts-ignore
                        getValues(): java.util.Set<org.spongepowered.api.data.value.immutable.ImmutableValue<?>>
                    }
                }
            }
        }
    }
}
