declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a function that accepts a double-valued argument and produces a
             * long-valued result.  This is the {@code double}-to-{@code long} primitive
             * specialization for {@link Function}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #applyAsLong(double)}.
             * @see Function
             * @since 1.8
             */
            // @ts-ignore
            interface DoubleToLongFunction {
                /**
                 * Applies this function to the given argument.
                 * @param value the function argument
                 * @return the function result
                 */
                // @ts-ignore
                applyAsLong(value: number /*double*/): long
            }
        }
    }
}
