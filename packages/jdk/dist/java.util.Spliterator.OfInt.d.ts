declare namespace java {
    namespace util {
        namespace Spliterator {
            /**
             * A Spliterator specialized for {@code int} values.
             * @since 1.8
             */
            // @ts-ignore
            interface OfInt extends java.util.Spliterator.OfPrimitive<java.lang.Integer, java.util.function.IntConsumer, java.util.Spliterator.OfInt> {
                // @ts-ignore
                trySplit(): java.util.Spliterator.OfInt
                // @ts-ignore
                tryAdvance(action: java.util.function.IntConsumer | java.util.function$.IntConsumer): boolean
                // @ts-ignore
                forEachRemaining(action: java.util.function.IntConsumer | java.util.function$.IntConsumer): void
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code IntConsumer} then it is cast
                 *  to {@code IntConsumer} and passed to
                 *  {@link #tryAdvance(java.util.function.IntConsumer)}; otherwise
                 *  the action is adapted to an instance of {@code IntConsumer}, by
                 *  boxing the argument of {@code IntConsumer}, and then passed to
                 *  {@link #tryAdvance(java.util.function.IntConsumer)}.
                 */
                // @ts-ignore
                tryAdvance(action: java.util.function.Consumer<any super java.lang.Integer> | java.util.function$.Consumer<? super java.lang.Integer>): boolean
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code IntConsumer} then it is cast
                 *  to {@code IntConsumer} and passed to
                 *  {@link #forEachRemaining(java.util.function.IntConsumer)}; otherwise
                 *  the action is adapted to an instance of {@code IntConsumer}, by
                 *  boxing the argument of {@code IntConsumer}, and then passed to
                 *  {@link #forEachRemaining(java.util.function.IntConsumer)}.
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function.Consumer<any super java.lang.Integer> | java.util.function$.Consumer<? super java.lang.Integer>): void
            }
        }
    }
}
