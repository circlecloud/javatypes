declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Utility methods to help with function work.
                 */
                // @ts-ignore
                class Functional extends java.lang.Object {
                    /**
                     * Perform an AND using an array of predicates.
                     * @param predicates The predicates to AND
                     * @param <E> The type to accept
                     * @return The combined predicate
                     */
                    // @ts-ignore
                    predicateAnd<E>(...predicates: java.util.function.Predicate[] | java.util.function$.Predicate[]): java.util.function.Predicate<E>
                    /**
                     * Perform an AND using an iterable of predicates.
                     * @param predicates The predicates to and
                     * @param <E> The type to accept
                     * @return The combined predicate
                     */
                    // @ts-ignore
                    predicateAnd<E>(predicates: java.lang.Iterable<java.util.function.Predicate<E>> | java.lang.Iterable<java.util.function$.Predicate<E>>): java.util.function.Predicate<E>
                    /**
                     * Perform an AND using an array of bi-predicates.
                     * @param predicates The bi-predicates to AND
                     * @param <L> The left type to accept
                     * @param <R> The right type to accept
                     * @return The combined bi-predicate
                     */
                    // @ts-ignore
                    biPredicateAnd<L, R>(...predicates: java.util.function.BiPredicate[] | java.util.function$.BiPredicate[]): java.util.function.BiPredicate<L, R>
                    /**
                     * Perform an AND using an iterable of bi-predicates.
                     * @param predicates The bi-predicates to and
                     * @param <L> The left type to accept
                     * @param <R> The right type to accept
                     * @return The combined bi-predicate
                     */
                    // @ts-ignore
                    biPredicateAnd<L, R>(predicates: java.lang.Iterable<java.util.function.BiPredicate<L, R>> | java.lang.Iterable<java.util.function$.BiPredicate<L, R>>): java.util.function.BiPredicate<L, R>
                    /**
                     * Creates a new {@link Predicate} defining whether an {@link Object}
                     * is contained within the provided {@link Collection}.
                     * @param collection The collection
                     * @param <E> The type of object
                     * @return The predicate
                     */
                    // @ts-ignore
                    predicateIn<E>(collection: Array<E>): java.util.function.Predicate<E>
                    /**
                     * Creates a {@link com.google.common.base.Predicate} based on the provided {@link Predicate}, used
                     * to transform between Java 8 specific code to those from the guava
                     * library.
                     * @param predicate The predicate
                     * @param <E> The type of object
                     * @return The guava predicate
                     */
                    // @ts-ignore
                    java8ToGuava<E>(predicate: java.util.function.Predicate<E> | java.util.function$.Predicate<E>): <any>
                    /**
                     * Creates a new {@link Predicate} based on the provided {@link com.google.common.base.Predicate},
                     * used to transform between Java 8 specific code to those from the guava
                     * library.
                     * @param p The predicate
                     * @param <E> The type of object
                     * @return The java 8 predicate
                     * @deprecated {#link com.google.common.base.Predicate} extends {@link Predicate}
                     */
                    // @ts-ignore
                    guavaToJava8<E>(p: object): java.util.function.Predicate<E>
                    /**
                     * Gets the value of an {@link Optional} as either a zero- or one-element immutable set.
                     * @param value The value to get as a set
                     * @param <T> The type
                     * @return The immutable set containing any value the optional has
                     */
                    // @ts-ignore
                    optionalAsSet<T>(value: java.util.Optional<T>): java.util.Set<T>
                    /**
                     * Execute a callable on <strong>the current thread</strong>, capturing the result or any exceptions that may be thrown into a {@link
                     * CompletableFuture}.
                     * @param call The callable to execute
                     * @param <T> The type of value returned
                     * @return The future holding the result
                     */
                    // @ts-ignore
                    failableFuture<T>(call: java.util.concurrent.Callable<T>): java.util.concurrent.CompletableFuture<T>
                    /**
                     * Execute a callable on the provided executor, capturing the result or any exceptions that may be thrown into a {@link
                     * CompletableFuture}.
                     * @param call The callable to execute
                     * @param exec The executor to execute this task on
                     * @param <T> The type of value returned
                     * @return The future holding the result
                     */
                    // @ts-ignore
                    asyncFailableFuture<T>(call: java.util.concurrent.Callable<T>, exec: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<T>
                }
            }
        }
    }
}
