declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a function that accepts a double-valued argument and produces a
             * result.  This is the {@code double}-consuming primitive specialization for
             * {@link Function}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #apply(double)}.
             * @param <R> the type of the result of the function
             * @see Function
             * @since 1.8
             */
            // @ts-ignore
            interface DoubleFunction<R> {
                /**
                 * Applies this function to the given argument.
                 * @param value the function argument
                 * @return the function result
                 */
                // @ts-ignore
                apply(value: number /*double*/): R
            }
        }
    }
}
