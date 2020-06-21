declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        /**
                         * Represents an immutable representation of a {@link BaseValue} where any
                         * modifications of the underlying value result in a new instance of an
                         * {@link ImmutableValue} and/or the {@link ValueContainer} if the
                         * {@link ValueContainer} too is immutable.
                         * <p>The basis for immutability is that once created, the value can not be
                         * changed for any reason. Change requires a new instance to be created. As the
                         * {@link ImmutableValue} always has a {@link ValueContainer}, it is
                         * recommended that the owning {@link ValueContainer} too is immutable, unless
                         * the {@link ImmutableValue} is being passed around for data processing. The
                         * underlying value of an {@link ImmutableValue} may be itself mutable, however
                         * utilizing any provided methods by any of the {@link ImmutableValue} classes
                         * is recommended.</p>
                         * @param <E> The type of value
                         */
                        // @ts-ignore
                        interface ImmutableValue<E> extends org.spongepowered.api.data.value.BaseValue<E> {
                            /**
                             * Creates a new {@link ImmutableValue} with the given <code>E</code> typed
                             * value, such that if the owning {@link ValueContainer} is immutable, the
                             * {@link ValueContainer} too is recreated as a new instance with the new
                             * {@link ImmutableValue}.
                             * @param value The value to replace
                             * @return The owning {#link ValueContainer}, a new instance if it too is
                             *      immutable
                             */
                            // @ts-ignore
                            with(value: E): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                            /**
                             * Retrieves the underlying value for this {@link ImmutableValue} and
                             * applies the given {@link Function} onto that value, after which, the
                             * product is sent to a new {@link ImmutableValue} replacing this one.
                             * <p>If the {@link ValueContainer} too is immutable, a new instance of
                             * the {@link ValueContainer} may be created. If the {@link ValueContainer}
                             * is mutable, the same instance of the {@link ValueContainer} is retained.
                             * </p>
                             * @param function The function to apply onto the existing value
                             * @return The owning {#link ValueContainer}, a new instance if it too is
                             *      immutable
                             */
                            // @ts-ignore
                            transform(func: java.util.function$.Function<E, E>): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                            /**
                             * Creates a mutable {@link Value} for this {@link ImmutableValue}.
                             * @return A mutable value
                             */
                            // @ts-ignore
                            asMutable(): org.spongepowered.api.data.value.mutable.Value<E>
                        }
                    }
                }
            }
        }
    }
}
