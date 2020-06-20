declare namespace java {
    namespace util {
        namespace Spliterator {
            /**
             * A Spliterator specialized for {@code double} values.
             * @since 1.8
             */
            // @ts-ignore
            interface OfDouble extends java.util.Spliterator.OfPrimitive<java.lang.Double, java.util.function.DoubleConsumer, java.util.Spliterator.OfDouble> {
                // @ts-ignore
                trySplit(): java.util.Spliterator.OfDouble
                // @ts-ignore
                tryAdvance(action: java.util.function.DoubleConsumer | java.util.function$.DoubleConsumer): boolean
                // @ts-ignore
                forEachRemaining(action: java.util.function.DoubleConsumer | java.util.function$.DoubleConsumer): void
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code DoubleConsumer} then it is
                 *  cast to {@code DoubleConsumer} and passed to
                 *  {@link #tryAdvance(java.util.function.DoubleConsumer)}; otherwise
                 *  the action is adapted to an instance of {@code DoubleConsumer}, by
                 *  boxing the argument of {@code DoubleConsumer}, and then passed to
                 *  {@link #tryAdvance(java.util.function.DoubleConsumer)}.
                 */
                // @ts-ignore
                tryAdvance(action: java.util.function.Consumer<any super java.lang.Double> | java.util.function$.Consumer<? super java.lang.Double>): boolean
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code DoubleConsumer} then it is
                 *  cast to {@code DoubleConsumer} and passed to
                 *  {@link #forEachRemaining(java.util.function.DoubleConsumer)};
                 *  otherwise the action is adapted to an instance of
                 *  {@code DoubleConsumer}, by boxing the argument of
                 *  {@code DoubleConsumer}, and then passed to
                 *  {@link #forEachRemaining(java.util.function.DoubleConsumer)}.
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function.Consumer<any super java.lang.Double> | java.util.function$.Consumer<? super java.lang.Double>): void
            }
        }
    }
}
