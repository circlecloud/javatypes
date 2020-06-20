declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * A type of {@link BoundedValue} that is modifiable as a {@link Value}.
                         * @param <E> The type of element
                         */
                        // @ts-ignore
                        interface MutableBoundedValue<E> extends org.spongepowered.api.data.value.BoundedValue<E>, org.spongepowered.api.data.value.mutable.Value<E> {
                            // @ts-ignore
                            asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<E>
                            // @ts-ignore
                            copy(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<E>
                        }
                    }
                }
            }
        }
    }
}
