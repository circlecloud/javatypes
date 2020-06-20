declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * A type of {@link CollectionValue} that is backed by a {@link List}. All
                         * mutator methods provided are similar to those existing in {@link List} with
                         * the difference of returning itself, for fluency.
                         * @param <E> The type of element of this list value
                         */
                        // @ts-ignore
                        interface ListValue<E> extends org.spongepowered.api.data.value.mutable.CollectionValue<E, java.util.List<E>, org.spongepowered.api.data.value.mutable.ListValue<E>, org.spongepowered.api.data.value.immutable.ImmutableListValue<E>> {
                            /**
                             * Gets the desired element at the desired index.
                             * @param index The index of the element to return
                             * @return The element at the desired index
                             * @throws IndexOutOfBoundsException if the index is out of range
                             */
                            // @ts-ignore
                            get(index: number /*int*/): E
                            /**
                             * Adds the specified element at the specified position in the list.
                             * As well, the element at the provided index is shifted to the right,
                             * increasing its and the elements thereafter their indices by one.
                             * @param index The index to add the provided element at
                             * @param value The element to add
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            add(index: number /*int*/, value: E): org.spongepowered.api.data.value.mutable.ListValue<E>
                            /**
                             * Adds the specified elements in the order that they are iterated
                             * to the list at the specified index. The element at the provided
                             * index and elements thereafter are shifted to the right, increasing
                             * their indices by one.
                             * @param index The index to add the elements at
                             * @param values The elements to add
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            add(index: number /*int*/, values: java.lang.Iterable<E>): org.spongepowered.api.data.value.mutable.ListValue<E>
                            /**
                             * Removes the element at the specified position in this list (optional
                             * operation). Shifts any subsequent elements to the left, subtracts
                             * one from their indices.
                             * @param index The index of the element to remove
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            remove(index: number /*int*/): org.spongepowered.api.data.value.mutable.ListValue<E>
                            /**
                             * Replaces the element at the specified index in this list with the
                             * specified element.
                             * @param index The index to replace the element with
                             * @param element The element to set
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            set(index: number /*int*/, element: E): org.spongepowered.api.data.value.mutable.ListValue<E>
                            /**
                             * Queries for the index of the provided element. If the element is
                             * not contained in this list, -1 is returned.
                             * @param element The element to get the index from
                             * @return The index of the element, -1 if not available
                             */
                            // @ts-ignore
                            indexOf(element: E): int
                        }
                    }
                }
            }
        }
    }
}
