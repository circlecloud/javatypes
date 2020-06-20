declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation that accepts a single {@code long}-valued argument and
             * returns no result.  This is the primitive type specialization of
             * {@link Consumer} for {@code long}.  Unlike most other functional interfaces,
             * {@code LongConsumer} is expected to operate via side-effects.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #accept(long)}.
             * @see Consumer
             * @since 1.8
             */
            // @ts-ignore
            interface LongConsumer {
                /**
                 * Performs this operation on the given argument.
                 * @param value the input argument
                 */
                // @ts-ignore
                accept(value: number /*long*/): void
                /**
                 * Returns a composed {@code LongConsumer} that performs, in sequence, this
                 * operation followed by the {@code after} operation. If performing either
                 * operation throws an exception, it is relayed to the caller of the
                 * composed operation.  If performing this operation throws an exception,
                 * the {@code after} operation will not be performed.
                 * @param after the operation to perform after this operation
                 * @return a composed {#code LongConsumer} that performs in sequence this
                 *  operation followed by the {@code after} operation
                 * @throws NullPointerException if {#code after} is null
                 */
                // @ts-ignore
                andThen(after: java.util.function.LongConsumer | java.util.function$.LongConsumer): java.util.function.LongConsumer
            }
        }
    }
}
