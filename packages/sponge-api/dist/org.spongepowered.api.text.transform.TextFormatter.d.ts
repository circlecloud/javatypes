declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    /**
                     * A TextFormatter is a mutable collection of {@link TextRepresentable}s which
                     * are all concatenated to an empty {@link Text} object on {@link #format()}.
                     */
                    // @ts-ignore
                    interface TextFormatter<E extends org.spongepowered.api.text.TextRepresentable> extends org.spongepowered.api.text.TextRepresentable, java.lang.Iterable<E> {
                        /**
                         * Returns an {@link ImmutableList} of this formatter's elements.
                         * @return All elements
                         */
                        // @ts-ignore
                        getAll(): object
                        /**
                         * Returns the element at the specified index.
                         * @param i Index to retrieve from
                         * @return Element at index
                         */
                        // @ts-ignore
                        get(i: number /*int*/): E
                        /**
                         * Returns the first element of the specified type after the specified
                         * index.
                         * @param index To start at
                         * @param clazz Class of type
                         * @param <T> Type of TextRepresentable
                         * @return Element if found
                         */
                        // @ts-ignore
                        firstAfter<T extends org.spongepowered.api.text.TextRepresentable>(index: number /*int*/, clazz: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Returns the first element of the specified type.
                         * @param clazz Type to get
                         * @param <T> Type of {#link TextRepresentable}
                         * @return TextRepresentable of type if found, empty otherwise
                         */
                        // @ts-ignore
                        first<T extends org.spongepowered.api.text.TextRepresentable>(clazz: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Applies the specified consumer to each element of the specified type
                         * after the specified index.
                         * @param index Index to start at
                         * @param clazz Class of type
                         * @param consumer Consumer
                         * @param <T> Type
                         */
                        // @ts-ignore
                        forEachAfter<T extends org.spongepowered.api.text.TextRepresentable>(index: number /*int*/, clazz: java.lang.Class<T>, consumer: java.util.function$.Consumer<T>): void
                        /**
                         * Applies the specified consumer to each element of the specified type
                         * after the specified index.
                         * @param clazz Class of type
                         * @param consumer Consumer
                         * @param <T> Type
                         */
                        // @ts-ignore
                        forEach<T extends org.spongepowered.api.text.TextRepresentable>(clazz: java.lang.Class<T>, consumer: java.util.function$.Consumer<T>): void
                        /**
                         * Replaces the element previously at the specified index with the
                         * specified element.
                         * @param i Index to replace
                         * @param e Element to replace with
                         * @return Element previously at index
                         */
                        // @ts-ignore
                        set(i: number /*int*/, e: E): E
                        /**
                         * Returns the amount of elements in this formatter.
                         * @return Amount of elements
                         */
                        // @ts-ignore
                        size(): number /*int*/
                        /**
                         * Returns true if the formatter contains no elements.
                         * @return True if contains no elements
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        /**
                         * Returns true if the specified element is in the formatter.
                         * @param e Element to check
                         * @return True if in formatter
                         */
                        // @ts-ignore
                        contains(e: E): boolean
                        /**
                         * Clears all elements from this formatter.
                         */
                        // @ts-ignore
                        clear(): void
                        /**
                         * Adds the specified element to the end of this formatter.
                         * @param element Element to add
                         * @return True if the formatter changed as a result of the call
                         */
                        // @ts-ignore
                        add(element: E): boolean
                        /**
                         * Adds the specified elements to the end of this formatter.
                         * @param elements Elements to add
                         * @return True if the formatter changed as a result of the call
                         */
                        // @ts-ignore
                        add(elements: java.util.Collection<E> | Array<E>): boolean
                        /**
                         * Adds the specified elements to the end of this formatter.
                         * @param elements Elements to add
                         * @return True if the formatter changed as a result of the call
                         */
                        // @ts-ignore
                        add(elements: java.lang.Iterable<E>): boolean
                        /**
                         * Adds the specified elements to the end of this formatter.
                         * @param elements Elements to add
                         * @return True if the formatter changed as a result of the call
                         */
                        // @ts-ignore
                        add(elements: java.util.Iterator<E>): boolean
                        /**
                         * Inserts the specified element at the specified index within the
                         * formatter.
                         * @param i Index to insert at
                         * @param element Element to insert
                         */
                        // @ts-ignore
                        insert(i: number /*int*/, element: E): void
                        /**
                         * Inserts the specified elements at the specified index within the
                         * formatter.
                         * @param i Index to insert at
                         * @param elements Elements to insert
                         */
                        // @ts-ignore
                        insert(i: number /*int*/, elements: java.util.Collection<E> | Array<E>): void
                        /**
                         * Inserts the specified elements at the specified index within the
                         * formatter.
                         * @param i Index to insert at
                         * @param elements Elements to insert
                         */
                        // @ts-ignore
                        insert(i: number /*int*/, elements: java.lang.Iterable<E>): void
                        /**
                         * Inserts the specified elements at the specified index within the
                         * formatter.
                         * @param i Index to insert at
                         * @param elements Elements to insert
                         */
                        // @ts-ignore
                        insert(i: number /*int*/, elements: java.util.Iterator<E>): void
                        /**
                         * Removes the specified element from the formatter.
                         * @param element Element to remove
                         * @return True if this formatter contained the Element
                         */
                        // @ts-ignore
                        remove(element: E): boolean
                        /**
                         * Removes the specified elements from the formatter.
                         * @param elements Elements to remove
                         * @return True if the formatter changed as a result of this call
                         */
                        // @ts-ignore
                        remove(elements: java.util.Collection<E> | Array<E>): boolean
                        /**
                         * Removes the specified elements from the formatter.
                         * @param elements Elements to remove
                         * @return True if the formatter changed as a result of this call
                         */
                        // @ts-ignore
                        remove(elements: java.lang.Iterable<E>): boolean
                        /**
                         * Removes the specified elements from the formatter.
                         * @param elements Elements to remove
                         * @return True if the formatter changed as a result of this call
                         */
                        // @ts-ignore
                        remove(elements: java.util.Iterator<E>): boolean
                        /**
                         * Removes all elements from the formatter except for these specified
                         * elements.
                         * @param elements Elements to retain
                         * @return True if the formatter changed as a result of this call
                         */
                        // @ts-ignore
                        retain(elements: java.util.Collection<E> | Array<E>): boolean
                        /**
                         * Removes all elements from the formatter except for these specified
                         * elements.
                         * @param elements Elements to retain
                         * @return True if the formatter changed as a result of this call
                         */
                        // @ts-ignore
                        retain(elements: java.lang.Iterable<E>): boolean
                        /**
                         * Removes all elements from the formatter except for these specified
                         * elements.
                         * @param elements Elements to retain
                         * @return True if the formatter changed as a result of this call
                         */
                        // @ts-ignore
                        retain(elements: java.util.Iterator<E>): boolean
                        /**
                         * Builds the result {@link Text} for this formatter using the current
                         * configuration of each element. The result of each element is
                         * concatenated to an empty {@link Text} to yield the result.
                         * @return Text result of formatter
                         */
                        // @ts-ignore
                        format(): org.spongepowered.api.text.Text
                        // @ts-ignore
                        iterator(): java.util.Iterator<E>
                        // @ts-ignore
                        toText(): org.spongepowered.api.text.Text
                    }
                }
            }
        }
    }
}
