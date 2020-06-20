declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        // @ts-ignore
                        interface ListData<E, M extends org.spongepowered.api.data.manipulator.mutable.ListData<E, M, I>, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<E, I, M>> extends org.spongepowered.api.data.manipulator.DataManipulator<M, I> {
                            /**
                             * Gets the {@link ListValue} of this {@link ListData}.
                             * @return The underlying list value
                             */
                            // @ts-ignore
                            getListValue(): org.spongepowered.api.data.value.mutable.ListValue<E>
                            /**
                             * Gets the {@link List} value itself from this manipulator.
                             * @return The underlying list value as a list
                             * @see ListValue
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
                            /**
                             * Replaces the element at the specified position in this list with the
                             * specified element (optional operation).
                             * @param index The index to set the element to
                             * @param element The element to set at the index
                             * @return This manipulator, for chaining
                             * @see List#set(int, Object)
                             */
                            // @ts-ignore
                            setElement(index: number /*int*/, element: E): M
                            /**
                             * Replaces the underlying list of elements with the provided {@link List}
                             * of elements.
                             * @param elements The element to set at the index
                             * @return This manipulator, for chaining
                             * @see List#set(int, Object)
                             */
                            // @ts-ignore
                            setElements(elements: Array<E>): M
                            /**
                             * Appends the provided element at the end of the underlying {@link List}.
                             * @param element The element to append
                             * @return This manipulator, for chaining
                             * @see List#add(Object)
                             */
                            // @ts-ignore
                            addElement(element: E): M
                            /**
                             * Inserts the specified element at the specified position in this list.
                             * Shifts the element currently at that position (if any) and any
                             * subsequent elements to the right (adds one to their indices).
                             * @param index The index of the element
                             * @param element The element to add
                             * @return This manipulator, for chaining
                             * @see List#add(int, Object)
                             */
                            // @ts-ignore
                            addElement(index: number /*int*/, element: E): M
                            /**
                             * Appends the provided {@code E} elements to the end of the internal list
                             * of elements.
                             * @param elements The elements to add
                             * @return This manipulator, for chaining
                             * @see List#addAll(Collection)
                             */
                            // @ts-ignore
                            addElements(elements: java.lang.Iterable<E>): M
                            /**
                             * Removes the desired {@code element} from the desired {@code index}.
                             * @param index The index to remove an element from
                             * @return This manipulator, for chaining
                             * @see List#remove(int)
                             */
                            // @ts-ignore
                            remove(index: number /*int*/): M
                            /**
                             * Removes the desired {@code element} from the underlying {@link List}.
                             * @param element The element to remove
                             * @return This manipulator, for chaining
                             * @see List#remove(Object)
                             */
                            // @ts-ignore
                            remove(element: E): M
                            /**
                             * Removes all of the provided {@code elements} from the underlying
                             * {@link List}.
                             * @param elements The elements to remove
                             * @return This manipulator, for chaining
                             * @see List#removeAll(Collection)
                             */
                            // @ts-ignore
                            removeAll(elements: java.lang.Iterable<E>): M
                            /**
                             * Removes any and all {@code elements} that match {@code true} to
                             * the provided {@link Predicate} from the underlying {@link List}.
                             * @param predicate The predicate to filter elements from
                             * @return This manipulator, for chaining
                             * @see List#removeIf(Predicate)
                             */
                            // @ts-ignore
                            removeAll(predicate: java.util.function.Predicate<E> | java.util.function$.Predicate<E>): M
                        }
                    }
                }
            }
        }
    }
}
