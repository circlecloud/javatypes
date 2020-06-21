declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        /**
                         * A type of {@link ImmutableCollectionValue} that is backed by a {@link List}.
                         * All "with" and "Without" methods are returning new instances as every
                         * instance is immutable.
                         * @param <E> The type of element of this list value
                         */
                        // @ts-ignore
                        interface ImmutableListValue<E> extends org.spongepowered.api.data.value.immutable.ImmutableCollectionValue<E, java.util.List<E> | Array<E>, org.spongepowered.api.data.value.immutable.ImmutableListValue<E>, org.spongepowered.api.data.value.mutable.ListValue<E>> {
                            /**
                             * Gets the desired element at the desired index.
                             * @param index The index of the element to return
                             * @return The element at the desired index
                             * @throws IndexOutOfBoundsException if the index is out of range
                             */
                            // @ts-ignore
                            get(index: number /*int*/): E
                            /**
                             * Creates a new {@link ImmutableListValue} with the specified element
                             * at the specified position in the list. As well, the element at the
                             * provided index is shifted to the right,  increasing its and the elements
                             * thereafter their indices by one.
                             * @param index The index to add the provided element at
                             * @param value The element to add
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            with(index: number /*int*/, value: E): org.spongepowered.api.data.value.immutable.ImmutableListValue<E>
                            /**
                             * Creates a new {@link ImmutableListValue} with the specified elements
                             * in the order that they are iterated to the list at the specified index.
                             * The element at the provided index and elements thereafter are shifted to
                             * the right, increasing their indices by one.
                             * @param index The index to add the elements at
                             * @param values The elements to add
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            with(index: number /*int*/, values: java.lang.Iterable<E>): org.spongepowered.api.data.value.immutable.ImmutableListValue<E>
                            /**
                             * Creates a new {@link ImmutableListValue} without the element at the
                             * specified index. Shifts any subsequent elements to the left, subtracts
                             * one from their indices.
                             * @param index The index of the element to exclude
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            without(index: number /*int*/): org.spongepowered.api.data.value.immutable.ImmutableListValue<E>
                            /**
                             * Creates a new {@link ImmutableListValue} with the desired element at
                             * the desired index.
                             * @param index The index to replace the element
                             * @param element The element to include at the index
                             * @return The new value, for chaining
                             */
                            // @ts-ignore
                            set(index: number /*int*/, element: E): org.spongepowered.api.data.value.immutable.ImmutableListValue<E>
                            /**
                             * Queries for the index of the provided element. If the element is
                             * not contained in this list, -1 is returned.
                             * @param element The element to get the index from
                             * @return The index of the element, -1 if not available
                             */
                            // @ts-ignore
                            indexOf(element: E): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
