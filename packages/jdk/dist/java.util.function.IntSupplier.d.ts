declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a supplier of {@code int}-valued results.  This is the
             * {@code int}-producing primitive specialization of {@link Supplier}.
             * <p>There is no requirement that a distinct result be returned each
             * time the supplier is invoked.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #getAsInt()}.
             * @see Supplier
             * @since 1.8
             */
            // @ts-ignore
            interface IntSupplier {
                /**
                 * Gets a result.
                 * @return a result
                 */
                // @ts-ignore
                getAsInt(): int
            }
        }
    }
}
