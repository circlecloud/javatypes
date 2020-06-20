declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation upon two {@code int}-valued operands and producing an
             * {@code int}-valued result.   This is the primitive type specialization of
             * {@link BinaryOperator} for {@code int}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #applyAsInt(int, int)}.
             * @see BinaryOperator
             * @see IntUnaryOperator
             * @since 1.8
             */
            // @ts-ignore
            interface IntBinaryOperator {
                /**
                 * Applies this operator to the given operands.
                 * @param left the first operand
                 * @param right the second operand
                 * @return the operator result
                 */
                // @ts-ignore
                applyAsInt(left: number /*int*/, right: number /*int*/): int
            }
        }
    }
}
