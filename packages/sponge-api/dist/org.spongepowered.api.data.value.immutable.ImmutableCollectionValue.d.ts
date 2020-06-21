declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        /**
                         * A {@link ImmutableValue} type that handles a {@link Collection} of elements
                         * type <code>E</code>. All of the methods provided for modification return new
                         * instances of the same type. Likewise, the underlying {@link ValueContainer}
                         * is not modified.
                         * @param <E> The type of element
                         * @param <C> The type of {#link Collection}
                         * @param <I> The extended {#link ImmutableCollectionValue} for self referencing
                         * @param <M> The mutable {#link CollectionValue} counterpart for {@link #asMutable()}
                         */
                        // @ts-ignore
                        interface ImmutableCollectionValue<E, C extends java.util.Collection<E>, I extends org.spongepowered.api.data.value.immutable.ImmutableCollectionValue<E, C, I, M>, M extends org.spongepowered.api.data.value.mutable.CollectionValue<E, C, M, I>> extends org.spongepowered.api.data.value.immutable.ImmutableValue<C> {
                            /**
                             * Gets the size of the underlying collection of elements.
                             * @return The size
                             */
                            // @ts-ignore
                            size(): number /*int*/
                            /**
                             * Checks if the backed {@link Collection} is empty.
                             * @see Collection#isEmpty()
                             * @return True if the collection is empty
                             */
                            // @ts-ignore
                            isEmpty(): boolean
                            // @ts-ignore
                            with(collection: C): I
                            /**
                             * Creates a new {@link ImmutableCollectionValue} with the given values
                             * along with any pre-existing values within this value.
                             * @param elements The values to add
                             * @return The new value
                             */
                            // @ts-ignore
                            withElement(elements: E): I
                            // @ts-ignore
                            transform(func: java.util.function$.Function<C, C>): I
                            /**
                             * Creates a new {@link ImmutableCollectionValue} with the given elements
                             * along with any pre-existing values within this value.
                             * @see Collection#addAll(Collection)
                             * @param elements The elements to add
                             * @return The new value
                             */
                            // @ts-ignore
                            withAll(elements: java.lang.Iterable<E>): I
                            /**
                             * Creates a new {@link ImmutableCollectionValue} without the given
                             * <code>E</code> element.
                             * @param element The element to exclude
                             * @return The new value
                             */
                            // @ts-ignore
                            without(element: E): I
                            /**
                             * Creates a new {@link ImmutableCollectionValue} without the given
                             * elements of the provided {@link Iterable}.
                             * @param elements The elements to exclude
                             * @return The new value
                             */
                            // @ts-ignore
                            withoutAll(elements: java.lang.Iterable<E>): I
                            /**
                             * Creates a new {@link ImmutableCollectionValue} with elements that
                             * when the given {@link Predicate} is {@link Predicate#test(Object)} on
                             * the element and {@code true} is returned, the element will remain in the
                             * new {@link ImmutableCollectionValue}.
                             * @param predicate The predicte to apply
                             * @return The new value
                             */
                            // @ts-ignore
                            withoutAll(predicate: java.util.function$.Predicate<E>): I
                            /**
                             * Checks if the given <code>E</code> element is contained within the
                             * backed {@link Collection}.
                             * @param element The element to check
                             * @return True if the element is contained, false if not
                             */
                            // @ts-ignore
                            contains(element: E): boolean
                            /**
                             * Checks if all of the given elements in the provided {@link Iterable} are
                             * contained within the backed {@link Collection}.
                             * @param iterable The iterable elements
                             * @return True if all elements are contained within the backed collection
                             */
                            // @ts-ignore
                            containsAll(iterable: java.lang.Iterable<E>): boolean
                            /**
                             * Creates a new {@link Collection} of the proper type <code>C</code> with
                             * all elements copied to the new collection. Any modifications to the new
                             * collection are not reflected to this {@link ImmutableCollectionValue}.
                             * Likewise, no modifications to this {@link ImmutableCollectionValue} are
                             * reflected to the returned {@link Collection}.
                             * @return A new collection with all elements copied
                             */
                            // @ts-ignore
                            getAll(): C
                            // @ts-ignore
                            asMutable(): M
                        }
                    }
                }
            }
        }
    }
}
