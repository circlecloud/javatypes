declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * A {@code boolean} value that may be updated atomically. See the
                 * {@link java.util.concurrent.atomic} package specification for
                 * description of the properties of atomic variables. An
                 * {@code AtomicBoolean} is used in applications such as atomically
                 * updated flags, and cannot be used as a replacement for a
                 * {@link java.lang.Boolean}.
                 * @since 1.5
                 * @author Doug Lea
                 */
                // @ts-ignore
                class AtomicBoolean extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a new {@code AtomicBoolean} with the given initial value.
                     * @param initialValue the initial value
                     */
                    // @ts-ignore
                    constructor(initialValue: boolean)
                    /**
                     * Creates a new {@code AtomicBoolean} with initial value {@code false}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the current value.
                     * @return the current value
                     */
                    // @ts-ignore
                    get(): boolean
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful. False return indicates that
                     *  the actual value was not equal to the expected value.
                     */
                    // @ts-ignore
                    compareAndSet(expect: boolean, update: boolean): boolean
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    weakCompareAndSet(expect: boolean, update: boolean): boolean
                    /**
                     * Unconditionally sets to the given value.
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    set(newValue: boolean): void
                    /**
                     * Eventually sets to the given value.
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    lazySet(newValue: boolean): void
                    /**
                     * Atomically sets to the given value and returns the previous value.
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndSet(newValue: boolean): boolean
                    /**
                     * Returns the String representation of the current value.
                     * @return the String representation of the current value
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
