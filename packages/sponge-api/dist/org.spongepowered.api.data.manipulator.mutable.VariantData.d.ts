declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * Represents a type of {@link DataManipulator} handling a specific
                         * type of element, usually {@link CatalogType}s. The advantage is that
                         * {@link #type()} will always return the same type as a {@link Value}.
                         * @param <E> The type of element value being represented
                         * @param <T> The type of mutable variant data for mutability
                         * @param <I> The type of immutable variant data being extended
                         */
                        // @ts-ignore
                        interface VariantData<E, T extends org.spongepowered.api.data.manipulator.mutable.VariantData<E, T, I>, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<E, I, T>> extends org.spongepowered.api.data.manipulator.DataManipulator<T, I> {
                            /**
                             * Gets the {@link Value} of the the element type.
                             * @return The value of the element type
                             */
                            // @ts-ignore
                            type(): org.spongepowered.api.data.value.mutable.Value<E>
                        }
                    }
                }
            }
        }
    }
}
