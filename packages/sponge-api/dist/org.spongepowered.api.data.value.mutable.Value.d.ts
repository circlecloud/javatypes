declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a type of {@link BaseValue} that is mutable. Simply put, the
                         * underlying value can always be changed without creating a new {@link Value}.
                         * @param <E> The type of element
                         */
                        // @ts-ignore
                        interface Value<E> extends org.spongepowered.api.data.value.BaseValue<E> {
                            /**
                             * Sets the underlying value to the provided {@code value}.
                             * @param value The value to set
                             * @return The owning {#link ValueContainer}
                             */
                            // @ts-ignore
                            set(value: E): org.spongepowered.api.data.value.mutable.Value<E>
                            /**
                             * Attempts to transform the underlying value based on the provided
                             * {@link Function} such that the result of {@link Function#apply(Object)}
                             * will replace the underlying value.
                             * @param function The function to apply on the existing value
                             * @return The owning {#link ValueContainer}
                             */
                            // @ts-ignore
                            transform(func: java.util.function$.Function<E, E>): org.spongepowered.api.data.value.mutable.Value<E>
                            /**
                             * Gets the {@link ImmutableValue} version of this {@link Value} such that
                             * all data is duplicated across to the new {@link ImmutableValue}. Note
                             * that once created, the {@link ImmutableValue} is not going to change.
                             * @return A new {#link ImmutableValue} instance
                             */
                            // @ts-ignore
                            asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                            /**
                             * Makes an independent copy of this {@link Value} with the same initial
                             * data. Both this value and the new value will refer to the same object
                             * initially.
                             * @return A new copy of this {#link Value}
                             */
                            // @ts-ignore
                            copy(): org.spongepowered.api.data.value.mutable.Value<E>
                        }
                    }
                }
            }
        }
    }
}
