declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An immutable variant of {@link ListData} that can be queried, but not
                         * changed or mutated.
                         * @param <E> The type of elements contained in the underlying list
                         * @param <I> The immutable data variant
                         * @param <M> The mutable data variant
                         */
                        // @ts-ignore
                        interface ImmutableListData<E, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<E, I, M>, M extends org.spongepowered.api.data.manipulator.mutable.ListData<E, M, I>> extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M> {
                            /**
                             * Gets the {@link ImmutableListValue} of this {@link ImmutableListData}.
                             * @return The underlying list value
                             */
                            // @ts-ignore
                            getListValue(): org.spongepowered.api.data.value.immutable.ImmutableListValue<E>
                            /**
                             * Gets the {@link List} value itself from this manipulator.
                             * @return The underlying list value as a list
                             * @see ImmutableListValue
                             */
                            // @ts-ignore
                            asList(): java.util.List<E>
                            /**
                             * Gets an element of type {@code E} by the provided {@code index}.
                             * @param index The index to get the value at
                             * @return The object at the provided index, if available
                             * @see List#get(int)
                             */
                            // @ts-ignore
                            get(index: number /*int*/): java.util.Optional<E>
                            /**
                             * Returns whether the underlying {@link List} contains the provided
                             * {@code element}.
                             * @param element The element to check
                             * @return True if the element is contained in the underlying list
                             * @see List#contains(Object)
                             */
                            // @ts-ignore
                            contains(element: E): boolean
                        }
                    }
                }
            }
        }
    }
}
