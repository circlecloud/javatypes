declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation that accepts two input arguments and returns no
             * result.  This is the two-arity specialization of {@link Consumer}.
             * Unlike most other functional interfaces, {@code BiConsumer} is expected
             * to operate via side-effects.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #accept(Object, Object)}.
             * @param <T> the type of the first argument to the operation
             * @param <U> the type of the second argument to the operation
             * @see Consumer
             * @since 1.8
             */
            // @ts-ignore
            interface BiConsumer<T, U> {
                /**
                 * Performs this operation on the given arguments.
                 * @param t the first input argument
                 * @param u the second input argument
                 */
                // @ts-ignore
                accept(t: T, u: U): void
                /**
                 * Returns a composed {@code BiConsumer} that performs, in sequence, this
                 * operation followed by the {@code after} operation. If performing either
                 * operation throws an exception, it is relayed to the caller of the
                 * composed operation.  If performing this operation throws an exception,
                 * the {@code after} operation will not be performed.
                 * @param after the operation to perform after this operation
                 * @return a composed {#code BiConsumer} that performs in sequence this
                 *  operation followed by the {@code after} operation
                 * @throws NullPointerException if {#code after} is null
                 */
                // @ts-ignore
                andThen(after: java.util.function.BiConsumer<any super T, ? super U> | java.util.function$.BiConsumer<? super T, ? super U>): java.util.function.BiConsumer<T, U>
            }
        }
    }
}
