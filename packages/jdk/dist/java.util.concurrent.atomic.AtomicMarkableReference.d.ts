declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * An {@code AtomicMarkableReference} maintains an object reference
                 * along with a mark bit, that can be updated atomically.
                 * <p>Implementation note: This implementation maintains markable
                 * references by creating internal objects representing "boxed"
                 * [reference, boolean] pairs.
                 * @since 1.5
                 * @author Doug Lea
                 * @param <V> The type of object referred to by this reference
                 */
                // @ts-ignore
                class AtomicMarkableReference<V> extends java.lang.Object {
                    /**
                     * Creates a new {@code AtomicMarkableReference} with the given
                     * initial values.
                     * @param initialRef the initial reference
                     * @param initialMark the initial mark
                     */
                    // @ts-ignore
                    constructor(initialRef: V, initialMark: boolean)
                    /**
                     * Returns the current value of the reference.
                     * @return the current value of the reference
                     */
                    // @ts-ignore
                    public getReference(): V
                    /**
                     * Returns the current value of the mark.
                     * @return the current value of the mark
                     */
                    // @ts-ignore
                    public isMarked(): boolean
                    /**
                     * Returns the current values of both the reference and the mark.
                     * Typical usage is {@code boolean[1] holder; ref = v.get(holder); }.
                     * @param markHolder an array of size of at least one. On return,
                     *  {#code markholder[0]} will hold the value of the mark.
                     * @return the current value of the reference
                     */
                    // @ts-ignore
                    public get(markHolder: boolean[]): V
                    /**
                     * Atomically sets the value of both the reference and mark
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current mark is equal to the expected mark.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     * @param expectedReference the expected value of the reference
                     * @param newReference the new value for the reference
                     * @param expectedMark the expected value of the mark
                     * @param newMark the new value for the mark
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    public weakCompareAndSet(expectedReference: V, newReference: V, expectedMark: boolean, newMark: boolean): boolean
                    /**
                     * Atomically sets the value of both the reference and mark
                     * to the given update values if the
                     * current reference is {@code ==} to the expected reference
                     * and the current mark is equal to the expected mark.
                     * @param expectedReference the expected value of the reference
                     * @param newReference the new value for the reference
                     * @param expectedMark the expected value of the mark
                     * @param newMark the new value for the mark
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    public compareAndSet(expectedReference: V, newReference: V, expectedMark: boolean, newMark: boolean): boolean
                    /**
                     * Unconditionally sets the value of both the reference and mark.
                     * @param newReference the new value for the reference
                     * @param newMark the new value for the mark
                     */
                    // @ts-ignore
                    public set(newReference: V, newMark: boolean): void
                    /**
                     * Atomically sets the value of the mark to the given update value
                     * if the current reference is {@code ==} to the expected
                     * reference.  Any given invocation of this operation may fail
                     * (return {@code false}) spuriously, but repeated invocation
                     * when the current value holds the expected value and no other
                     * thread is also attempting to set the value will eventually
                     * succeed.
                     * @param expectedReference the expected value of the reference
                     * @param newMark the new value for the mark
                     * @return {#code true} if successful
                     */
                    // @ts-ignore
                    public attemptMark(expectedReference: V, newMark: boolean): boolean
                }
            }
        }
    }
}
