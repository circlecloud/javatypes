declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a function that accepts a long-valued argument and produces a
             * double-valued result.  This is the {@code long}-to-{@code double} primitive
             * specialization for {@link Function}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #applyAsDouble(long)}.
             * @see Function
             * @since 1.8
             */
            // @ts-ignore
            interface LongToDoubleFunction {
                /**
                 * Applies this function to the given argument.
                 * @param value the function argument
                 * @return the function result
                 */
                // @ts-ignore
                applyAsDouble(value: number /*long*/): number /*double*/
            }
        }
    }
}
