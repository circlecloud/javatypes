declare namespace java {
    namespace util {
        namespace Spliterator {
            /**
             * A Spliterator specialized for {@code long} values.
             * @since 1.8
             */
            // @ts-ignore
            interface OfLong extends java.util.Spliterator.OfPrimitive<java.lang.Long | number, java.util.function$.LongConsumer, java.util.Spliterator.OfLong> {
                // @ts-ignore
                trySplit(): java.util.Spliterator.OfLong
                // @ts-ignore
                tryAdvance(action: java.util.function$.LongConsumer): boolean
                // @ts-ignore
                forEachRemaining(action: java.util.function$.LongConsumer): void
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code LongConsumer} then it is cast
                 *  to {@code LongConsumer} and passed to
                 *  {@link #tryAdvance(java.util.function.LongConsumer)}; otherwise
                 *  the action is adapted to an instance of {@code LongConsumer}, by
                 *  boxing the argument of {@code LongConsumer}, and then passed to
                 *  {@link #tryAdvance(java.util.function.LongConsumer)}.
                 */
                // @ts-ignore
                tryAdvance(action: java.util.function$.Consumer<any>): boolean
                /**
                 * {@inheritDoc}
                 * @implSpec If the action is an instance of {#code LongConsumer} then it is cast
                 *  to {@code LongConsumer} and passed to
                 *  {@link #forEachRemaining(java.util.function.LongConsumer)}; otherwise
                 *  the action is adapted to an instance of {@code LongConsumer}, by
                 *  boxing the argument of {@code LongConsumer}, and then passed to
                 *  {@link #forEachRemaining(java.util.function.LongConsumer)}.
                 */
                // @ts-ignore
                forEachRemaining(action: java.util.function$.Consumer<any>): void
            }
        }
    }
}
