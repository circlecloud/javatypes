declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        /**
                         * A type of {@link BoundedValue} that is immutable as an
                         * {@link ImmutableValue}.
                         * @param <E> The type of element
                         */
                        // @ts-ignore
                        interface ImmutableBoundedValue<E> extends org.spongepowered.api.data.value.BoundedValue<E>, org.spongepowered.api.data.value.immutable.ImmutableValue<E> {
                            // @ts-ignore
                            transform(func: java.util.function$.Function<E, E>): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<E>
                            // @ts-ignore
                            asMutable(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<E>
                        }
                    }
                }
            }
        }
    }
}
