declare namespace org {
    namespace springframework {
        namespace util {
            namespace function$ {
                /**
                 * Convenience utilities for {@link java.util.function.Supplier} handling.
                 * @author Juergen Hoeller
                 * @since 5.1
                 * @see SingletonSupplier
                 */
                // @ts-ignore
                class SupplierUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Resolve the given {@code Supplier}, getting its result or immediately
                     * returning {@code null} if the supplier itself was {@code null}.
                     * @param supplier the supplier to resolve
                     * @return the supplier's result, or {#code null} if none
                     */
                    // @ts-ignore
                    resolve<T>(supplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): T
                }
            }
        }
    }
}
