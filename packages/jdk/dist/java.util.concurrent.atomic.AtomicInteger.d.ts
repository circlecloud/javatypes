declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * An {@code int} value that may be updated atomically.  See the
                 * {@link java.util.concurrent.atomic} package specification for
                 * description of the properties of atomic variables. An
                 * {@code AtomicInteger} is used in applications such as atomically
                 * incremented counters, and cannot be used as a replacement for an
                 * {@link java.lang.Integer}. However, this class does extend
                 * {@code Number} to allow uniform access by tools and utilities that
                 * deal with numerically-based classes.
                 * @since 1.5
                 * @author Doug Lea
                 */
                // @ts-ignore
                class AtomicInteger extends java.lang.Number implements java.io.Serializable {
                    /**
                     * Creates a new AtomicInteger with the given initial value.
                     * @param initialValue the initial value
                     */
                    // @ts-ignore
                    constructor(initialValue: number /*int*/)
                    /**
                     * Creates a new AtomicInteger with initial value {@code 0}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the current value.
                     * @return the current value
                     */
                    // @ts-ignore
                    public get(): number /*int*/
                    /**
                     * Sets to the given value.
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    public set(newValue: number /*int*/): void
                    /**
                     * Eventually sets to the given value.
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    public lazySet(newValue: number /*int*/): void
                    /**
                     * Atomically sets to the given value and returns the old value.
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    public getAndSet(newValue: number /*int*/): number /*int*/
                    /**
                     * Atomically sets the value to the given updated value
                     * if the current value {@code ==} the expected value.
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful. False return indicates that
                     *  the actual value was not equal to the expected value.
                     */
                    // @ts-ignore
                    public compareAndSet(expect: number /*int*/, update: number /*int*/): boolean
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
                    public weakCompareAndSet(expect: number /*int*/, update: number /*int*/): boolean
                    /**
                     * Atomically increments by one the current value.
                     * @return the previous value
                     */
                    // @ts-ignore
                    public getAndIncrement(): number /*int*/
                    /**
                     * Atomically decrements by one the current value.
                     * @return the previous value
                     */
                    // @ts-ignore
                    public getAndDecrement(): number /*int*/
                    /**
                     * Atomically adds the given value to the current value.
                     * @param delta the value to add
                     * @return the previous value
                     */
                    // @ts-ignore
                    public getAndAdd(delta: number /*int*/): number /*int*/
                    /**
                     * Atomically increments by one the current value.
                     * @return the updated value
                     */
                    // @ts-ignore
                    public incrementAndGet(): number /*int*/
                    /**
                     * Atomically decrements by one the current value.
                     * @return the updated value
                     */
                    // @ts-ignore
                    public decrementAndGet(): number /*int*/
                    /**
                     * Atomically adds the given value to the current value.
                     * @param delta the value to add
                     * @return the updated value
                     */
                    // @ts-ignore
                    public addAndGet(delta: number /*int*/): number /*int*/
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
                    public getAndUpdate(updateFunction: java.util.function$.IntUnaryOperator): number /*int*/
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
                    public updateAndGet(updateFunction: java.util.function$.IntUnaryOperator): number /*int*/
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
                    public getAndAccumulate(x: number /*int*/, accumulatorFunction: java.util.function$.IntBinaryOperator): number /*int*/
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
                    public accumulateAndGet(x: number /*int*/, accumulatorFunction: java.util.function$.IntBinaryOperator): number /*int*/
                    /**
                     * Returns the String representation of the current value.
                     * @return the String representation of the current value
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Returns the value of this {@code AtomicInteger} as an {@code int}.
                     */
                    // @ts-ignore
                    public intValue(): number /*int*/
                    /**
                     * Returns the value of this {@code AtomicInteger} as a {@code long}
                     * after a widening primitive conversion.
                     * @jls 5.1.2 Widening Primitive Conversions
                     */
                    // @ts-ignore
                    public longValue(): number /*long*/
                    /**
                     * Returns the value of this {@code AtomicInteger} as a {@code float}
                     * after a widening primitive conversion.
                     * @jls 5.1.2 Widening Primitive Conversions
                     */
                    // @ts-ignore
                    public floatValue(): number /*float*/
                    /**
                     * Returns the value of this {@code AtomicInteger} as a {@code double}
                     * after a widening primitive conversion.
                     * @jls 5.1.2 Widening Primitive Conversions
                     */
                    // @ts-ignore
                    public doubleValue(): number /*double*/
                }
            }
        }
    }
}
