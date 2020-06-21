declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * An array of object references in which elements may be updated
                 * atomically.  See the {@link java.util.concurrent.atomic} package
                 * specification for description of the properties of atomic
                 * variables.
                 * @since 1.5
                 * @author Doug Lea
                 * @param <E> The base class of elements held in this array
                 */
                // @ts-ignore
                class AtomicReferenceArray<E> extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a new AtomicReferenceArray of the given length, with all
                     * elements initially null.
                     * @param length the length of the array
                     */
                    // @ts-ignore
                    constructor(length: number /*int*/)
                    /**
                     * Creates a new AtomicReferenceArray with the same length as, and
                     * all elements copied from, the given array.
                     * @param array the array to copy elements from
                     * @throws NullPointerException if array is null
                     */
                    // @ts-ignore
                    constructor(array: E[])
                    /**
                     * Returns the length of the array.
                     * @return the length of the array
                     */
                    // @ts-ignore
                    public length(): number /*int*/
                    /**
                     * Gets the current value at position {@code i}.
                     * @param i the index
                     * @return the current value
                     */
                    // @ts-ignore
                    public get(i: number /*int*/): E
                    /**
                     * Sets the element at position {@code i} to the given value.
                     * @param i the index
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    public set(i: number /*int*/, newValue: E): void
                    /**
                     * Eventually sets the element at position {@code i} to the given value.
                     * @param i the index
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    public lazySet(i: number /*int*/, newValue: E): void
                    /**
                     * Atomically sets the element at position {@code i} to the given
                     * value and returns the old value.
                     * @param i the index
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    public getAndSet(i: number /*int*/, newValue: E): E
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
                    public compareAndSet(i: number /*int*/, expect: E, update: E): boolean
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
                    public weakCompareAndSet(i: number /*int*/, expect: E, update: E): boolean
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
                    public getAndUpdate(i: number /*int*/, updateFunction: java.util.function$.UnaryOperator<E>): E
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
                    public updateAndGet(i: number /*int*/, updateFunction: java.util.function$.UnaryOperator<E>): E
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
                    public getAndAccumulate(i: number /*int*/, x: E, accumulatorFunction: java.util.function$.BinaryOperator<E>): E
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
                    public accumulateAndGet(i: number /*int*/, x: E, accumulatorFunction: java.util.function$.BinaryOperator<E>): E
                    /**
                     * Returns the String representation of the current values of array.
                     * @return the String representation of the current values of array
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
