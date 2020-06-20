declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a function that accepts two arguments and produces a result.
             * This is the two-arity specialization of {@link Function}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #apply(Object, Object)}.
             * @param <T> the type of the first argument to the function
             * @param <U> the type of the second argument to the function
             * @param <R> the type of the result of the function
             * @see Function
             * @since 1.8
             */
            // @ts-ignore
            interface BiFunction<T, U, R> {
                /**
                 * Applies this function to the given arguments.
                 * @param t the first function argument
                 * @param u the second function argument
                 * @return the function result
                 */
                // @ts-ignore
                apply(t: T, u: U): R
                /**
                 * Returns a composed function that first applies this function to
                 * its input, and then applies the {@code after} function to the result.
                 * If evaluation of either function throws an exception, it is relayed to
                 * the caller of the composed function.
                 * @param <V> the type of output of the {#code after} function, and of the
                 *            composed function
                 * @param after the function to apply after this function is applied
                 * @return a composed function that first applies this function and then
                 *  applies the {#code after} function
                 * @throws NullPointerException if after is null
                 */
                // @ts-ignore
                andThen<V>(after: java.util.function.Function<any super R, V> | java.util.function$.Function<? super R, V>): java.util.function.BiFunction<T, U, V>
            }
        }
    }
}
