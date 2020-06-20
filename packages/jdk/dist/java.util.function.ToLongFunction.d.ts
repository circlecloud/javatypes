declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a function that produces a long-valued result.  This is the
             * {@code long}-producing primitive specialization for {@link Function}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #applyAsLong(Object)}.
             * @param <T> the type of the input to the function
             * @see Function
             * @since 1.8
             */
            // @ts-ignore
            interface ToLongFunction<T> {
                /**
                 * Applies this function to the given argument.
                 * @param value the function argument
                 * @return the function result
                 */
                // @ts-ignore
                applyAsLong(value: T): long
            }
        }
    }
}
