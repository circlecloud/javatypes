declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        /**
                         * Represents a {@link Value} that is backed by a {@link Collection} of
                         * elements.
                         * @param <E> The type of element
                         * @param <C> The type of collection, for chaining
                         * @param <V> The type of {#linkplain CollectionValue}
                         * @param <I> The type of {#link ImmutableCollectionValue}
                         */
                        // @ts-ignore
                        interface CollectionValue<E, C extends java.util.Collection<E>, V extends org.spongepowered.api.data.value.mutable.CollectionValue<E, C, V, I>, I extends org.spongepowered.api.data.value.immutable.ImmutableCollectionValue<E, C, I, V>> extends org.spongepowered.api.data.value.mutable.Value<C>, java.lang.Iterable<E> {
                            // @ts-ignore
                            set(value: C extends java.util.Collection<E>): V
                            // @ts-ignore
                            transform(func: java.util.function.Function<C, C> | java.util.function$.Function<C, C>): V
                            /**
                             * Gets the size of the underlying collection of elements.
                             * @return The size
                             */
                            // @ts-ignore
                            size(): int
                            /**
                             * Checks if the backed {@link Collection} is empty.
                             * @see Collection#isEmpty()
                             * @return True if the collection is empty
                             */
                            // @ts-ignore
                            isEmpty(): boolean
                            /**
                             * Adds the given {@code element} to this {@link CollectionValue}.
                             * @param element The element to add
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            add(element: E): V
                            /**
                             * Adds all the given {@link Iterable} {@code elements} to the underlying
                             * {@link Collection}.
                             * @see Collection#addAll(Collection)
                             * @param elements The elements to add
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            addAll(elements: java.lang.Iterable<E>): V
                            /**
                             * Removes the given {@code element} from the backed {@link Collection}.
                             * @param element The element to remove
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            remove(element: E): V
                            /**
                             * Removes all elements from the {@link Iterable} from the backed
                             * {@link Collection}.
                             * @param elements The elements to remove
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            removeAll(elements: java.lang.Iterable<E>): V
                            /**
                             * Iterates over all existing elements and removes any elements that
                             * {@link Predicate#test(Object)} returns {@code true}.
                             * @param predicate The predicate to remove elements
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            removeAll(predicate: java.util.function.Predicate<E> | java.util.function$.Predicate<E>): V
                            /**
                             * Checks if the given <code>E</code> element is contained within the backed
                             * {@link Collection}.
                             * @param element The element to check
                             * @return True if the element is contained in this collection
                             */
                            // @ts-ignore
                            contains(element: E): boolean
                            /**
                             * Checks if all of the given {@link Iterable} elements are contained
                             * within the backed {@link Collection}.
                             * @param iterable The iterable elements
                             * @return True if all elements are contained in this value
                             */
                            // @ts-ignore
                            containsAll(iterable: Array<E>): boolean
                            /**
                             * Applies a {@link Predicate} to filter the underlying elements in the
                             * backed {@link Collection} to create a new {@link CollectionValue}
                             * separate from this {@link CollectionValue}. This value is not modified,
                             * nor is the underlying {@link Collection}. Elements that return
                             * <code>true</code> from {@link Predicate#test(Object)} are kept, and
                             * those that return <code>false</code> are excluded.
                             * @param predicate The predicate to filter
                             * @return This value, for chaining
                             */
                            // @ts-ignore
                            filter(predicate: java.util.function.Predicate<any super E> | java.util.function$.Predicate<? super E>): V
                            /**
                             * Creates a new {@link Collection} of the proper type <code>C</code> with
                             * all elements copied to the new collection. Any modifications to the new
                             * collection are not reflected to this {@link CollectionValue}. Likewise,
                             * no modifications to this {@link CollectionValue} are reflected to the
                             * returned {@link Collection}.
                             * @return A new collection with all elements copied
                             */
                            // @ts-ignore
                            getAll(): C
                            // @ts-ignore
                            asImmutable(): I
                            // @ts-ignore
                            copy(): V
                        }
                    }
                }
            }
        }
    }
}
