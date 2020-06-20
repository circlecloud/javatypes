declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * Represents a type of {@link ImmutableDataManipulator} handling a specific
                         * type of element, usually {@link CatalogType}s. The advantage is that
                         * {@link #type()} will always return the same type as an
                         * {@link ImmutableValue}.
                         * @param <E> The type of element value being represented
                         * @param <I> The type of immutable variant data being extended
                         * @param <M> The type of mutable variant data for mutability
                         */
                        // @ts-ignore
                        interface ImmutableVariantData<E, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<E, I, M>, M extends org.spongepowered.api.data.manipulator.mutable.VariantData<E, M, I>> extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M> {
                            /**
                             * Gets the {@link ImmutableValue} of the the element type.
                             * @return The immutable value of the element type
                             */
                            // @ts-ignore
                            type(): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                        }
                    }
                }
            }
        }
    }
}
