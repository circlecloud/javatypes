declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation upon two {@code long}-valued operands and producing a
             * {@code long}-valued result.   This is the primitive type specialization of
             * {@link BinaryOperator} for {@code long}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #applyAsLong(long, long)}.
             * @see BinaryOperator
             * @see LongUnaryOperator
             * @since 1.8
             */
            // @ts-ignore
            interface LongBinaryOperator {
                /**
                 * Applies this operator to the given operands.
                 * @param left the first operand
                 * @param right the second operand
                 * @return the operator result
                 */
                // @ts-ignore
                applyAsLong(left: number /*long*/, right: number /*long*/): long
            }
        }
    }
}
