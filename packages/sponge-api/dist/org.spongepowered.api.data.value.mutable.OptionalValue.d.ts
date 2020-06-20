declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a {@link Value} that can be {@link Optional} such that the
                         * underlying value may be present or {@code null}.
                         * @param <E> The type of element
                         */
                        // @ts-ignore
                        interface OptionalValue<E> extends org.spongepowered.api.data.value.mutable.Value<java.util.Optional<E>> {
                            // @ts-ignore
                            set(value: java.util.Optional<E>): org.spongepowered.api.data.value.mutable.OptionalValue<E>
                            /**
                             * Sets the underlying value, may be null.
                             * @param value The value to set
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            setTo(value: E): org.spongepowered.api.data.value.mutable.OptionalValue<E>
                            /**
                             * Provides the value such that if the underlying value is
                             * {@code null}, the default value is returned as a {@link Value}, if
                             * the underlying value is present, the underlying value is returned
                             * as a {@link Value}.
                             * @param defaultValue The value to substitute, if the underlying value is
                             *       null
                             * @return A new {#link Value} with a non-null value
                             */
                            // @ts-ignore
                            or(defaultValue: E): org.spongepowered.api.data.value.mutable.Value<E>
                            // @ts-ignore
                            copy(): org.spongepowered.api.data.value.mutable.OptionalValue<E>
                            // @ts-ignore
                            asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<E>
                        }
                    }
                }
            }
        }
    }
}
