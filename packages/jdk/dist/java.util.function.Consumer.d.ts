declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation that accepts a single input argument and returns no
             * result. Unlike most other functional interfaces, {@code Consumer} is expected
             * to operate via side-effects.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #accept(Object)}.
             * @param <T> the type of the input to the operation
             * @since 1.8
             */
            // @ts-ignore
            interface Consumer<T> {
                /**
                 * Performs this operation on the given argument.
                 * @param t the input argument
                 */
                // @ts-ignore
                accept(t: T): void
                /**
                 * Returns a composed {@code Consumer} that performs, in sequence, this
                 * operation followed by the {@code after} operation. If performing either
                 * operation throws an exception, it is relayed to the caller of the
                 * composed operation.  If performing this operation throws an exception,
                 * the {@code after} operation will not be performed.
                 * @param after the operation to perform after this operation
                 * @return a composed {#code Consumer} that performs in sequence this
                 *  operation followed by the {@code after} operation
                 * @throws NullPointerException if {#code after} is null
                 */
                // @ts-ignore
                andThen(after: java.util.function$.Consumer<any>): java.util.function$.Consumer<T>
            }
        }
    }
}
