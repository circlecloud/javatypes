declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation upon two operands of the same type, producing a result
             * of the same type as the operands.  This is a specialization of
             * {@link BiFunction} for the case where the operands and the result are all of
             * the same type.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #apply(Object, Object)}.
             * @param <T> the type of the operands and result of the operator
             * @see BiFunction
             * @see UnaryOperator
             * @since 1.8
             */
            // @ts-ignore
            interface BinaryOperator<T> extends java.util.function.BiFunction<T, T, T> {
                /**
                 * Returns a {@link BinaryOperator} which returns the lesser of two elements
                 * according to the specified {@code Comparator}.
                 * @param <T> the type of the input arguments of the comparator
                 * @param comparator a {#code Comparator} for comparing the two values
                 * @return a {#code BinaryOperator} which returns the lesser of its operands,
                 *          according to the supplied {@code Comparator}
                 * @throws NullPointerException if the argument is null
                 */
                // @ts-ignore
                minBy<T>(comparator: java.util.Comparator<any super T>): java.util.function.BinaryOperator<T>
                /**
                 * Returns a {@link BinaryOperator} which returns the greater of two elements
                 * according to the specified {@code Comparator}.
                 * @param <T> the type of the input arguments of the comparator
                 * @param comparator a {#code Comparator} for comparing the two values
                 * @return a {#code BinaryOperator} which returns the greater of its operands,
                 *          according to the supplied {@code Comparator}
                 * @throws NullPointerException if the argument is null
                 */
                // @ts-ignore
                maxBy<T>(comparator: java.util.Comparator<any super T>): java.util.function.BinaryOperator<T>
            }
        }
    }
}
