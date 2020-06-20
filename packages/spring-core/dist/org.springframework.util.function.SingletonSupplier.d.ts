declare namespace org {
    namespace springframework {
        namespace util {
            namespace function$ {
                /**
                 * A {@link java.util.function.Supplier} decorator that caches a singleton result and
                 * makes it available from {@link #get()} (nullable) and {@link #obtain()} (null-safe).
                 * <p>A {@code SingletonSupplier} can be constructed via {@code of} factory methods
                 * or via constructors that provide a default supplier as a fallback. This is
                 * particularly useful for method reference suppliers, falling back to a default
                 * supplier for a method that returned {@code null} and caching the result.
                 * @author Juergen Hoeller
                 * @since 5.1
                 * @param <T> the type of results supplied by this supplier
                 */
                // @ts-ignore
                class SingletonSupplier<T> extends java.lang.Object implements java.util.function.Supplier<T> {
                    /**
                     * Build a {@code SingletonSupplier} with the given singleton instance
                     * and a default supplier for the case when the instance is {@code null}.
                     * @param instance the singleton instance (potentially {#code null})
                     * @param defaultSupplier the default supplier as a fallback
                     */
                    // @ts-ignore
                    constructor(instance: T, defaultSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>)
                    /**
                     * Build a {@code SingletonSupplier} with the given instance supplier
                     * and a default supplier for the case when the instance is {@code null}.
                     * @param instanceSupplier the immediate instance supplier
                     * @param defaultSupplier the default supplier as a fallback
                     */
                    // @ts-ignore
                    constructor(instanceSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>, defaultSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>)
                    /**
                     * Get the shared singleton instance for this supplier.
                     * @return the singleton instance (or {#code null} if none)
                     */
                    // @ts-ignore
                    get(): T
                    /**
                     * Obtain the shared singleton instance for this supplier.
                     * @return the singleton instance (never {#code null})
                     * @throws IllegalStateException in case of no instance
                     */
                    // @ts-ignore
                    obtain(): T
                    /**
                     * Build a {@code SingletonSupplier} with the given singleton instance.
                     * @param instance the singleton instance (never {#code null})
                     * @return the singleton supplier (never {#code null})
                     */
                    // @ts-ignore
                    of<T>(instance: T): org.springframework.util.function.SingletonSupplier<T>
                    /**
                     * Build a {@code SingletonSupplier} with the given singleton instance.
                     * @param instance the singleton instance (potentially {#code null})
                     * @return the singleton supplier, or {#code null} if the instance was {@code null}
                     */
                    // @ts-ignore
                    ofNullable<T>(instance: T): org.springframework.util.function.SingletonSupplier<T>
                    /**
                     * Build a {@code SingletonSupplier} with the given supplier.
                     * @param supplier the instance supplier (never {#code null})
                     * @return the singleton supplier (never {#code null})
                     */
                    // @ts-ignore
                    of<T>(supplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): org.springframework.util.function.SingletonSupplier<T>
                    /**
                     * Build a {@code SingletonSupplier} with the given supplier.
                     * @param supplier the instance supplier (potentially {#code null})
                     * @return the singleton supplier, or {#code null} if the instance supplier was {@code null}
                     */
                    // @ts-ignore
                    ofNullable<T>(supplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): org.springframework.util.function.SingletonSupplier<T>
                }
            }
        }
    }
}
