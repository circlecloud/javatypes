declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Composite iterator that combines multiple other iterators,
             * as registered via {@link #add(Iterator)}.
             * <p>This implementation maintains a linked set of iterators
             * which are invoked in sequence until all iterators are exhausted.
             * @author Erwin Vervaet
             * @author Juergen Hoeller
             * @since 3.0
             * @param <E> the element type
             */
            // @ts-ignore
            class CompositeIterator<E> extends java.lang.Object implements java.util.Iterator<E> {
                // @ts-ignore
                constructor()
                /**
                 * Add given iterator to this composite.
                 */
                // @ts-ignore
                add(iterator: java.util.Iterator<E>): void
                // @ts-ignore
                hasNext(): boolean
                // @ts-ignore
                next(): E
                // @ts-ignore
                remove(): void
            }
        }
    }
}
