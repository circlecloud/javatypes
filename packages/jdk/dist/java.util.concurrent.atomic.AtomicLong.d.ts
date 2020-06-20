declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * A {@code long} value that may be updated atomically.  See the
                 * {@link java.util.concurrent.atomic} package specification for
                 * description of the properties of atomic variables. An
                 * {@code AtomicLong} is used in applications such as atomically
                 * incremented sequence numbers, and cannot be used as a replacement
                 * for a {@link java.lang.Long}. However, this class does extend
                 * {@code Number} to allow uniform access by tools and utilities that
                 * deal with numerically-based classes.
                 * @since 1.5
                 * @author Doug Lea
                 */
                // @ts-ignore
                class AtomicLong extends java.lang.Number implements java.io.Serializable {
                    /**
                     * Creates a new AtomicLong with the given initial value.
                     * @param initialValue the initial value
                     */
                    // @ts-ignore
                    constructor(initialValue: number /*long*/)
                    /**
                     * Creates a new AtomicLong with initial value {@code 0}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the current value.
                     * @return the current value
                     */
                    // @ts-ignore
                    get(): long
                    /**
                     * Sets to the given value.
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    set(newValue: number /*long*/): void
                    /**
                     * Eventually sets to the given value.
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    lazySet(newValue: number /*long*/): void
                    /**
                     * Atomically sets to the given value and returns the old value.
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndSet(newValue: number /*long*/): long
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful. False return indicates that
                     *  the actual value was not equal to the expected value.
                     */
                    // @ts-ignore
                    compareAndSet(expect: number /*long*/, update: number /*long*/): boolean
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
                    weakCompareAndSet(expect: number /*long*/, update: number /*long*/): boolean
                    /**
                     * Atomically increments by one the current value.
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndIncrement(): long
                    /**
                     * Atomically decrements by one the current value.
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndDecrement(): long
                    /**
                     * Atomically adds the given value to the current value.
                     * @param delta the value to add
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndAdd(delta: number /*long*/): long
                    /**
                     * Atomically increments by one the current value.
                     * @return the updated value
                     */
                    // @ts-ignore
                    incrementAndGet(): long
                    /**
                     * Atomically decrements by one the current value.
                     * @return the updated value
                     */
                    // @ts-ignore
                    decrementAndGet(): long
                    /**
                     * Atomically adds the given value to the current value.
                     * @param delta the value to add
                     * @return the updated value
                     */
                    // @ts-ignore
                    addAndGet(delta: number /*long*/): long
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
                    getAndUpdate(updateFunction: java.util.function.LongUnaryOperator | java.util.function$.LongUnaryOperator): long
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
                    updateAndGet(updateFunction: java.util.function.LongUnaryOperator | java.util.function$.LongUnaryOperator): long
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
                    getAndAccumulate(x: number /*long*/, accumulatorFunction: java.util.function.LongBinaryOperator | java.util.function$.LongBinaryOperator): long
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
                    accumulateAndGet(x: number /*long*/, accumulatorFunction: java.util.function.LongBinaryOperator | java.util.function$.LongBinaryOperator): long
                    /**
                     * Returns the String representation of the current value.
                     * @return the String representation of the current value
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Returns the value of this {@code AtomicLong} as an {@code int}
                     * after a narrowing primitive conversion.
                     * @jls 5.1.3 Narrowing Primitive Conversions
                     */
                    // @ts-ignore
                    intValue(): int
                    /**
                     * Returns the value of this {@code AtomicLong} as a {@code long}.
                     */
                    // @ts-ignore
                    longValue(): long
                    /**
                     * Returns the value of this {@code AtomicLong} as a {@code float}
                     * after a widening primitive conversion.
                     * @jls 5.1.2 Widening Primitive Conversions
                     */
                    // @ts-ignore
                    floatValue(): float
                    /**
                     * Returns the value of this {@code AtomicLong} as a {@code double}
                     * after a widening primitive conversion.
                     * @jls 5.1.2 Widening Primitive Conversions
                     */
                    // @ts-ignore
                    doubleValue(): double
                }
            }
        }
    }
}
