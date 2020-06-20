declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a supplier of results.
             * <p>There is no requirement that a new or distinct result be returned each
             * time the supplier is invoked.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #get()}.
             * @param <T> the type of results supplied by this supplier
             * @since 1.8
             */
            // @ts-ignore
            interface Supplier<T> {
                /**
                 * Gets a result.
                 * @return a result
                 */
                // @ts-ignore
                get(): T
            }
        }
    }
}
