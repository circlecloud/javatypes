declare namespace java {
    namespace util {
        namespace PrimitiveIterator {
            /**
             * An Iterator specialized for {@code int} values.
             * @since 1.8
             */
            // @ts-ignore
            interface OfInt extends java.util.PrimitiveIterator<java.lang.Integer | number, java.util.function$.IntConsumer> {
                /**
                 * Returns the next {@code int} element in the iteration.
                 * @return the next {#code int} element in the iteration
                 * @throws NoSuchElementException if the iteration has no more elements
                 */
                // @ts-ignore
                nextInt(): number /*int*/
                /**
                 * Performs the given action for each remaining element until all elements
                 * have been processed or the action throws an exception.  Actions are
                 * performed in the order of iteration, if that order is specified.
                 * Exceptions thrown by the action are relayed to the caller.
                 * @implSpec <p>The default implementation behaves as if:
                 *  <pre>{#code
                 *      while (hasNext())
                 *          action.accept(nextInt());
                 *  }</pre>
                 * @param action The action to be performed for each element
                 * @throws NullPointerException if the specified action is null
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function$.IntConsumer): void
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation boxes the result of calling
                 *  {#link #nextInt()}, and returns that boxed result.
                 */
                // @ts-ignore
                next(): number
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code IntConsumer} then it is cast
                 *  to {@code IntConsumer} and passed to {@link #forEachRemaining};
                 *  otherwise the action is adapted to an instance of
                 *  {@code IntConsumer}, by boxing the argument of {@code IntConsumer},
                 *  and then passed to {@link #forEachRemaining}.
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function$.Consumer<any>): void
            }
        }
    }
}
