declare namespace java {
    namespace util {
        namespace PrimitiveIterator {
            /**
             * An Iterator specialized for {@code long} values.
             * @since 1.8
             */
            // @ts-ignore
            interface OfLong extends java.util.PrimitiveIterator<java.lang.Long, java.util.function.LongConsumer> {
                /**
                 * Returns the next {@code long} element in the iteration.
                 * @return the next {#code long} element in the iteration
                 * @throws NoSuchElementException if the iteration has no more elements
                 */
                // @ts-ignore
                nextLong(): long
                /**
                 * Performs the given action for each remaining element until all elements
                 * have been processed or the action throws an exception.  Actions are
                 * performed in the order of iteration, if that order is specified.
                 * Exceptions thrown by the action are relayed to the caller.
                 * @implSpec <p>The default implementation behaves as if:
                 *  <pre>{#code
                 *      while (hasNext())
                 *          action.accept(nextLong());
                 *  }</pre>
                 * @param action The action to be performed for each element
                 * @throws NullPointerException if the specified action is null
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function.LongConsumer | java.util.function$.LongConsumer): void
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation boxes the result of calling
                 *  {#link #nextLong()}, and returns that boxed result.
                 */
                // @ts-ignore
                next(): java.lang.Long
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code LongConsumer} then it is cast
                 *  to {@code LongConsumer} and passed to {@link #forEachRemaining};
                 *  otherwise the action is adapted to an instance of
                 *  {@code LongConsumer}, by boxing the argument of {@code LongConsumer},
                 *  and then passed to {@link #forEachRemaining}.
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function.Consumer<any super java.lang.Long> | java.util.function$.Consumer<? super java.lang.Long>): void
            }
        }
    }
}
