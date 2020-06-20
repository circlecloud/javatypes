declare namespace java {
    namespace util {
        namespace PrimitiveIterator {
            /**
             * An Iterator specialized for {@code double} values.
             * @since 1.8
             */
            // @ts-ignore
            interface OfDouble extends java.util.PrimitiveIterator<java.lang.Double, java.util.function.DoubleConsumer> {
                /**
                 * Returns the next {@code double} element in the iteration.
                 * @return the next {#code double} element in the iteration
                 * @throws NoSuchElementException if the iteration has no more elements
                 */
                // @ts-ignore
                nextDouble(): double
                /**
                 * Performs the given action for each remaining element until all elements
                 * have been processed or the action throws an exception.  Actions are
                 * performed in the order of iteration, if that order is specified.
                 * Exceptions thrown by the action are relayed to the caller.
                 * @implSpec <p>The default implementation behaves as if:
                 *  <pre>{#code
                 *      while (hasNext())
                 *          action.accept(nextDouble());
                 *  }</pre>
                 * @param action The action to be performed for each element
                 * @throws NullPointerException if the specified action is null
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function.DoubleConsumer | java.util.function$.DoubleConsumer): void
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation boxes the result of calling
                 *  {#link #nextDouble()}, and returns that boxed result.
                 */
                // @ts-ignore
                next(): java.lang.Double
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code DoubleConsumer} then it is
                 *  cast to {@code DoubleConsumer} and passed to
                 *  {@link #forEachRemaining}; otherwise the action is adapted to
                 *  an instance of {@code DoubleConsumer}, by boxing the argument of
                 *  {@code DoubleConsumer}, and then passed to
                 *  {@link #forEachRemaining}.
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function.Consumer<any super java.lang.Double> | java.util.function$.Consumer<? super java.lang.Double>): void
            }
        }
    }
}
