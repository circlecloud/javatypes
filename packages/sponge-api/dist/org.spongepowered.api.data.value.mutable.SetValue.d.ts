declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a type of {@link CollectionValue} backed by a {@link Set}. The
                         * reasoning is that a {@link Set} retains no ordering of the elements it
                         * contains.
                         * @param <E> The type of elements supported
                         */
                        // @ts-ignore
                        interface SetValue<E> extends org.spongepowered.api.data.value.mutable.CollectionValue<E, java.util.Set<E>, org.spongepowered.api.data.value.mutable.SetValue<E>, org.spongepowered.api.data.value.immutable.ImmutableSetValue<E>> {
                        }
                    }
                }
            }
        }
    }
}
