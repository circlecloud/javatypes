declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation on a single operand that produces a result of the
             * same type as its operand.  This is a specialization of {@code Function} for
             * the case where the operand and result are of the same type.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #apply(Object)}.
             * @param <T> the type of the operand and result of the operator
             * @see Function
             * @since 1.8
             */
            // @ts-ignore
            interface UnaryOperator<T> extends java.util.function.Function<T, T> {
                /**
                 * Returns a unary operator that always returns its input argument.
                 * @param <T> the type of the input and output of the operator
                 * @return a unary operator that always returns its input argument
                 */
                // @ts-ignore
                identity<T>(): java.util.function$.UnaryOperator<T>
            }
        }
    }
}
