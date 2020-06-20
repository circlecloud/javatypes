declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a function that accepts an int-valued argument and produces a
             * result.  This is the {@code int}-consuming primitive specialization for
             * {@link Function}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #apply(int)}.
             * @param <R> the type of the result of the function
             * @see Function
             * @since 1.8
             */
            // @ts-ignore
            interface IntFunction<R> {
                /**
                 * Applies this function to the given argument.
                 * @param value the function argument
                 * @return the function result
                 */
                // @ts-ignore
                apply(value: number /*int*/): R
            }
        }
    }
}
