declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a predicate (boolean-valued function) of two arguments.  This is
             * the two-arity specialization of {@link Predicate}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #test(Object, Object)}.
             * @param <T> the type of the first argument to the predicate
             * @param <U> the type of the second argument the predicate
             * @see Predicate
             * @since 1.8
             */
            // @ts-ignore
            interface BiPredicate<T, U> {
                /**
                 * Evaluates this predicate on the given arguments.
                 * @param t the first input argument
                 * @param u the second input argument
                 * @return {#code true} if the input arguments match the predicate,
                 *  otherwise {@code false}
                 */
                // @ts-ignore
                test(t: T, u: U): boolean
                /**
                 * Returns a composed predicate that represents a short-circuiting logical
                 * AND of this predicate and another.  When evaluating the composed
                 * predicate, if this predicate is {@code false}, then the {@code other}
                 * predicate is not evaluated.
                 * <p>Any exceptions thrown during evaluation of either predicate are relayed
                 * to the caller; if evaluation of this predicate throws an exception, the
                 * {@code other} predicate will not be evaluated.
                 * @param other a predicate that will be logically-ANDed with this
                 *               predicate
                 * @return a composed predicate that represents the short-circuiting logical
                 *  AND of this predicate and the {#code other} predicate
                 * @throws NullPointerException if other is null
                 */
                // @ts-ignore
                and(other: java.util.function.BiPredicate<any super T, ? super U> | java.util.function$.BiPredicate<? super T, ? super U>): java.util.function.BiPredicate<T, U>
                /**
                 * Returns a predicate that represents the logical negation of this
                 * predicate.
                 * @return a predicate that represents the logical negation of this
                 *  predicate
                 */
                // @ts-ignore
                negate(): java.util.function.BiPredicate<T, U>
                /**
                 * Returns a composed predicate that represents a short-circuiting logical
                 * OR of this predicate and another.  When evaluating the composed
                 * predicate, if this predicate is {@code true}, then the {@code other}
                 * predicate is not evaluated.
                 * <p>Any exceptions thrown during evaluation of either predicate are relayed
                 * to the caller; if evaluation of this predicate throws an exception, the
                 * {@code other} predicate will not be evaluated.
                 * @param other a predicate that will be logically-ORed with this
                 *               predicate
                 * @return a composed predicate that represents the short-circuiting logical
                 *  OR of this predicate and the {#code other} predicate
                 * @throws NullPointerException if other is null
                 */
                // @ts-ignore
                or(other: java.util.function.BiPredicate<any super T, ? super U> | java.util.function$.BiPredicate<? super T, ? super U>): java.util.function.BiPredicate<T, U>
            }
        }
    }
}
