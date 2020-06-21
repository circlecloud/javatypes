declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation upon two {@code double}-valued operands and producing a
             * {@code double}-valued result.   This is the primitive type specialization of
             * {@link BinaryOperator} for {@code double}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #applyAsDouble(double, double)}.
             * @see BinaryOperator
             * @see DoubleUnaryOperator
             * @since 1.8
             */
            // @ts-ignore
            interface DoubleBinaryOperator {
                /**
                 * Applies this operator to the given operands.
                 * @param left the first operand
                 * @param right the second operand
                 * @return the operator result
                 */
                // @ts-ignore
                applyAsDouble(left: number /*double*/, right: number /*double*/): number /*double*/
            }
        }
    }
}
