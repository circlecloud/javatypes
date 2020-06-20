declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * An object reference that may be updated atomically. See the {@link
                 * java.util.concurrent.atomic} package specification for description
                 * of the properties of atomic variables.
                 * @since 1.5
                 * @author Doug Lea
                 * @param <V> The type of object referred to by this reference
                 */
                // @ts-ignore
                class AtomicReference<V> extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a new AtomicReference with the given initial value.
                     * @param initialValue the initial value
                     */
                    // @ts-ignore
                    constructor(initialValue: V)
                    /**
                     * Creates a new AtomicReference with null initial value.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the current value.
                     * @return the current value
                     */
                    // @ts-ignore
                    get(): V
                    /**
                     * Sets to the given value.
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    set(newValue: V): void
                    /**
                     * Eventually sets to the given value.
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    lazySet(newValue: V): void
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful. False return indicates that
                     *  the actual value was not equal to the expected value.
                     */
                    // @ts-ignore
                    compareAndSet(expect: V, update: V): boolean
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
                    weakCompareAndSet(expect: V, update: V): boolean
                    /**
                     * Atomically sets to the given value and returns the old value.
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndSet(newValue: V): V
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     * @param updateFunction a side-effect-free function
                     * @return the previous value
                     * @since 1.8
                     */
                    // @ts-ignore
                    getAndUpdate(updateFunction: java.util.function.UnaryOperator<V> | java.util.function$.UnaryOperator<V>): V
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     * @param updateFunction a side-effect-free function
                     * @return the updated value
                     * @since 1.8
                     */
                    // @ts-ignore
                    updateAndGet(updateFunction: java.util.function.UnaryOperator<V> | java.util.function$.UnaryOperator<V>): V
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function to the current and given values,
                     * returning the previous value. The function should be
                     * side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function
                     * is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     * @param x the update value
                     * @param accumulatorFunction a side-effect-free function of two arguments
                     * @return the previous value
                     * @since 1.8
                     */
                    // @ts-ignore
                    getAndAccumulate(x: V, accumulatorFunction: java.util.function.BinaryOperator<V> | java.util.function$.BinaryOperator<V>): V
                    /**
                     * Atomically updates the current value with the results of
                     * applying the given function to the current and given values,
                     * returning the updated value. The function should be
                     * side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function
                     * is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     * @param x the update value
                     * @param accumulatorFunction a side-effect-free function of two arguments
                     * @return the updated value
                     * @since 1.8
                     */
                    // @ts-ignore
                    accumulateAndGet(x: V, accumulatorFunction: java.util.function.BinaryOperator<V> | java.util.function$.BinaryOperator<V>): V
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
