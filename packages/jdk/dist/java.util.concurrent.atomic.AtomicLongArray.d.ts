declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * A {@code long} array in which elements may be updated atomically.
                 * See the {@link java.util.concurrent.atomic} package specification
                 * for description of the properties of atomic variables.
                 * @since 1.5
                 * @author Doug Lea
                 */
                // @ts-ignore
                class AtomicLongArray extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a new AtomicLongArray of the given length, with all
                     * elements initially zero.
                     * @param length the length of the array
                     */
                    // @ts-ignore
                    constructor(length: number /*int*/)
                    /**
                     * Creates a new AtomicLongArray with the same length as, and
                     * all elements copied from, the given array.
                     * @param array the array to copy elements from
                     * @throws NullPointerException if array is null
                     */
                    // @ts-ignore
                    constructor(array: number /*long*/[])
                    /**
                     * Returns the length of the array.
                     * @return the length of the array
                     */
                    // @ts-ignore
                    length(): int
                    /**
                     * Gets the current value at position {@code i}.
                     * @param i the index
                     * @return the current value
                     */
                    // @ts-ignore
                    get(i: number /*int*/): long
                    /**
                     * Sets the element at position {@code i} to the given value.
                     * @param i the index
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    set(i: number /*int*/, newValue: number /*long*/): void
                    /**
                     * Eventually sets the element at position {@code i} to the given value.
                     * @param i the index
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    lazySet(i: number /*int*/, newValue: number /*long*/): void
                    /**
                     * Atomically sets the element at position {@code i} to the given value
                     * and returns the old value.
                     * @param i the index
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndSet(i: number /*int*/, newValue: number /*long*/): long
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * updated value if the current value {@code ==} the expected value.
                     * @param i the index
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful. False return indicates that
                     *  the actual value was not equal to the expected value.
                     */
                    // @ts-ignore
                    compareAndSet(i: number /*int*/, expect: number /*long*/, update: number /*long*/): boolean
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * updated value if the current value {@code ==} the expected value.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     * @param i the index
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    weakCompareAndSet(i: number /*int*/, expect: number /*long*/, update: number /*long*/): boolean
                    /**
                     * Atomically increments by one the element at index {@code i}.
                     * @param i the index
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndIncrement(i: number /*int*/): long
                    /**
                     * Atomically decrements by one the element at index {@code i}.
                     * @param i the index
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndDecrement(i: number /*int*/): long
                    /**
                     * Atomically adds the given value to the element at index {@code i}.
                     * @param i the index
                     * @param delta the value to add
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndAdd(i: number /*int*/, delta: number /*long*/): long
                    /**
                     * Atomically increments by one the element at index {@code i}.
                     * @param i the index
                     * @return the updated value
                     */
                    // @ts-ignore
                    incrementAndGet(i: number /*int*/): long
                    /**
                     * Atomically decrements by one the element at index {@code i}.
                     * @param i the index
                     * @return the updated value
                     */
                    // @ts-ignore
                    decrementAndGet(i: number /*int*/): long
                    /**
                     * Atomically adds the given value to the element at index {@code i}.
                     * @param i the index
                     * @param delta the value to add
                     * @return the updated value
                     */
                    // @ts-ignore
                    addAndGet(i: number /*int*/, delta: number /*long*/): long
                    /**
                     * Atomically updates the element at index {@code i} with the results
                     * of applying the given function, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     * @param i the index
                     * @param updateFunction a side-effect-free function
                     * @return the previous value
                     * @since 1.8
                     */
                    // @ts-ignore
                    getAndUpdate(i: number /*int*/, updateFunction: java.util.function.LongUnaryOperator | java.util.function$.LongUnaryOperator): long
                    /**
                     * Atomically updates the element at index {@code i} with the results
                     * of applying the given function, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.
                     * @param i the index
                     * @param updateFunction a side-effect-free function
                     * @return the updated value
                     * @since 1.8
                     */
                    // @ts-ignore
                    updateAndGet(i: number /*int*/, updateFunction: java.util.function.LongUnaryOperator | java.util.function$.LongUnaryOperator): long
                    /**
                     * Atomically updates the element at index {@code i} with the
                     * results of applying the given function to the current and
                     * given values, returning the previous value. The function should
                     * be side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function is
                     * applied with the current value at index {@code i} as its first
                     * argument, and the given update as the second argument.
                     * @param i the index
                     * @param x the update value
                     * @param accumulatorFunction a side-effect-free function of two arguments
                     * @return the previous value
                     * @since 1.8
                     */
                    // @ts-ignore
                    getAndAccumulate(i: number /*int*/, x: number /*long*/, accumulatorFunction: java.util.function.LongBinaryOperator | java.util.function$.LongBinaryOperator): long
                    /**
                     * Atomically updates the element at index {@code i} with the
                     * results of applying the given function to the current and
                     * given values, returning the updated value. The function should
                     * be side-effect-free, since it may be re-applied when attempted
                     * updates fail due to contention among threads.  The function is
                     * applied with the current value at index {@code i} as its first
                     * argument, and the given update as the second argument.
                     * @param i the index
                     * @param x the update value
                     * @param accumulatorFunction a side-effect-free function of two arguments
                     * @return the updated value
                     * @since 1.8
                     */
                    // @ts-ignore
                    accumulateAndGet(i: number /*int*/, x: number /*long*/, accumulatorFunction: java.util.function.LongBinaryOperator | java.util.function$.LongBinaryOperator): long
                    /**
                     * Returns the String representation of the current values of array.
                     * @return the String representation of the current values of array
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
