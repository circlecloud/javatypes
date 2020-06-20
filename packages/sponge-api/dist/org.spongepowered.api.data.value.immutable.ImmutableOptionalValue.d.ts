declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        /**
                         * Represents a {@link ImmutableValue} that can be {@link Optional} such that
                         * the underlying value may be present or {@code null}.
                         * @param <E> The type of element
                         */
                        // @ts-ignore
                        interface ImmutableOptionalValue<E> extends org.spongepowered.api.data.value.immutable.ImmutableValue<java.util.Optional<E>> {
                            // @ts-ignore
                            with(value: java.util.Optional<E>): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<E>
                            // @ts-ignore
                            transform(func: java.util.function.Function<java.util.Optional<E>, java.util.Optional<E>> | java.util.function$.Function<java.util.Optional<E>, java.util.Optional<E>>): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<E>
                            /**
                             * Creates a new {@link ImmutableOptionalValue} with the provided value,
                             * may be null.
                             * @param value The value
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            instead(value: E): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<E>
                            /**
                             * Provides the value such that if the underlying value is
                             * {@code null}, the default value is returned as an
                             * {@link ImmutableValue}, if the underlying value is present, the
                             * underlying value is returned as a {@link ImmutableValue}.
                             * @param value The value to substitute, if the underlying value is
                             *       null
                             * @return A new {#link ImmutableValue} with a non-null value
                             */
                            // @ts-ignore
                            or(value: E): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                            // @ts-ignore
                            asMutable(): org.spongepowered.api.data.value.mutable.OptionalValue<E>
                        }
                    }
                }
            }
        }
    }
}
