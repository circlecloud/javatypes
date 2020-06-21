declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a function that accepts two arguments and produces an int-valued
             * result.  This is the {@code int}-producing primitive specialization for
             * {@link BiFunction}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #applyAsInt(Object, Object)}.
             * @param <T> the type of the first argument to the function
             * @param <U> the type of the second argument to the function
             * @see BiFunction
             * @since 1.8
             */
            // @ts-ignore
            interface ToIntBiFunction<T, U> {
                /**
                 * Applies this function to the given arguments.
                 * @param t the first function argument
                 * @param u the second function argument
                 * @return the function result
                 */
                // @ts-ignore
                applyAsInt(t: T, u: U): number /*int*/
            }
        }
    }
}
