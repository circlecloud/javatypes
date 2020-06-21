declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a predicate (boolean-valued function) of one {@code int}-valued
             * argument. This is the {@code int}-consuming primitive type specialization of
             * {@link Predicate}.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #test(int)}.
             * @see Predicate
             * @since 1.8
             */
            // @ts-ignore
            interface IntPredicate {
                /**
                 * Evaluates this predicate on the given argument.
                 * @param value the input argument
                 * @return {#code true} if the input argument matches the predicate,
                 *  otherwise {@code false}
                 */
                // @ts-ignore
                test(value: number /*int*/): boolean
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
                and(other: java.util.function$.IntPredicate): java.util.function$.IntPredicate
                /**
                 * Returns a predicate that represents the logical negation of this
                 * predicate.
                 * @return a predicate that represents the logical negation of this
                 *  predicate
                 */
                // @ts-ignore
                negate(): java.util.function$.IntPredicate
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
                or(other: java.util.function$.IntPredicate): java.util.function$.IntPredicate
            }
        }
    }
}
