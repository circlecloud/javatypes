declare namespace java {
    namespace util {
        /**
         * An iterator over a collection.  {@code Iterator} takes the place of
         * {@link Enumeration} in the Java Collections Framework.  Iterators
         * differ from enumerations in two ways:
         * <ul>
         * <li> Iterators allow the caller to remove elements from the
         * underlying collection during the iteration with well-defined
         * semantics.
         * <li> Method names have been improved.
         * </ul>
         * <p>This interface is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @param <E> the type of elements returned by this iterator
         * @author Josh Bloch
         * @see Collection
         * @see ListIterator
         * @see Iterable
         * @since 1.2
         */
        // @ts-ignore
        interface Iterator<E> {
            /**
             * Returns {@code true} if the iteration has more elements.
             * (In other words, returns {@code true} if {@link #next} would
             * return an element rather than throwing an exception.)
             * @return {#code true} if the iteration has more elements
             */
            // @ts-ignore
            hasNext(): boolean
            /**
             * Returns the next element in the iteration.
             * @return the next element in the iteration
             * @throws NoSuchElementException if the iteration has no more elements
             */
            // @ts-ignore
            next(): E
            /**
             * Removes from the underlying collection the last element returned
             * by this iterator (optional operation).  This method can be called
             * only once per call to {@link #next}.  The behavior of an iterator
             * is unspecified if the underlying collection is modified while the
             * iteration is in progress in any way other than by calling this
             * method.
             * @implSpec The default implementation throws an instance of
             *  {#link UnsupportedOperationException} and performs no other action.
             * @throws UnsupportedOperationException if the {#code remove}
             *          operation is not supported by this iterator
             * @throws IllegalStateException if the {#code next} method has not
             *          yet been called, or the {@code remove} method has already
             *          been called after the last call to the {@code next}
             *          method
             */
            // @ts-ignore
            remove(): void
            /**
             * Performs the given action for each remaining element until all elements
             * have been processed or the action throws an exception.  Actions are
             * performed in the order of iteration, if that order is specified.
             * Exceptions thrown by the action are relayed to the caller.
             * @implSpec <p>The default implementation behaves as if:
             *  <pre>{#code
             *      while (hasNext())
             *          action.accept(next());
             *  }</pre>
             * @param action The action to be performed for each element
             * @throws NullPointerException if the specified action is null
             * @since 1.8
             */
            // @ts-ignore
            forEachRemaining(action: java.util.function.Consumer<any super E> | java.util.function$.Consumer<? super E>): void
        }
    }
}