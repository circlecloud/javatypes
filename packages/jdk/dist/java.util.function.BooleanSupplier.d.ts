declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents a supplier of {@code boolean}-valued results.  This is the
             * {@code boolean}-producing primitive specialization of {@link Supplier}.
             * <p>There is no requirement that a new or distinct result be returned each
             * time the supplier is invoked.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #getAsBoolean()}.
             * @see Supplier
             * @since 1.8
             */
            // @ts-ignore
            interface BooleanSupplier {
                /**
                 * Gets a result.
                 * @return a result
                 */
                // @ts-ignore
                getAsBoolean(): boolean
            }
        }
    }
}
