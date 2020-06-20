declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * An {@code AtomicStampedReference} maintains an object reference
                 * along with an integer "stamp", that can be updated atomically.
                 * <p>Implementation note: This implementation maintains stamped
                 * references by creating internal objects representing "boxed"
                 * [reference, integer] pairs.
                 * @since 1.5
                 * @author Doug Lea
                 * @param <V> The type of object referred to by this reference
                 */
                // @ts-ignore
                class AtomicStampedReference<V> extends java.lang.Object {
                    /**
                     * Creates a new {@code AtomicStampedReference} with the given
                     * initial values.
                     * @param initialRef the initial reference
                     * @param initialStamp the initial stamp
                     */
                    // @ts-ignore
                    constructor(initialRef: V, initialStamp: number /*int*/)
                    /**
                     * Returns the current value of the reference.
                     * @return the current value of the reference
                     */
                    // @ts-ignore
                    getReference(): V
                    /**
                     * Returns the current value of the stamp.
                     * @return the current value of the stamp
                     */
                    // @ts-ignore
                    getStamp(): int
                    /**
                     * Returns the current values of both the reference and the stamp.
                     * Typical usage is {@code int[1] holder; ref = v.get(holder); }.
                     * @param stampHolder an array of size of at least one.  On return,
                     *  {#code stampholder[0]} will hold the value of the stamp.
                     * @return the current value of the reference
                     */
                    // @ts-ignore
                    get(stampHolder: number /*int*/[]): V
                    /**
                     * Atomically sets the value of both the reference and stamp
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current stamp is equal to the expected stamp.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     * @param expectedReference the expected value of the reference
                     * @param newReference the new value for the reference
                     * @param expectedStamp the expected value of the stamp
                     * @param newStamp the new value for the stamp
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    weakCompareAndSet(expectedReference: V, newReference: V, expectedStamp: number /*int*/, newStamp: number /*int*/): boolean
                    /**
                     * Atomically sets the value of both the reference and stamp
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current stamp is equal to the expected stamp.
                     * @param expectedReference the expected value of the reference
                     * @param newReference the new value for the reference
                     * @param expectedStamp the expected value of the stamp
                     * @param newStamp the new value for the stamp
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    compareAndSet(expectedReference: V, newReference: V, expectedStamp: number /*int*/, newStamp: number /*int*/): boolean
                    /**
                     * Unconditionally sets the value of both the reference and stamp.
                     * @param newReference the new value for the reference
                     * @param newStamp the new value for the stamp
                     */
                    // @ts-ignore
                    set(newReference: V, newStamp: number /*int*/): void
                    /**
                     * Atomically sets the value of the stamp to the given update value
                     * if the current reference is {@code ==} to the expected
                     * reference.  Any given invocation of this operation may fail
                     * (return {@code false}) spuriously, but repeated invocation
                     * when the current value holds the expected value and no other
                     * thread is also attempting to set the value will eventually
                     * succeed.
                     * @param expectedReference the expected value of the reference
                     * @param newStamp the new value for the stamp
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    attemptStamp(expectedReference: V, newStamp: number /*int*/): boolean
                }
            }
        }
    }
}
