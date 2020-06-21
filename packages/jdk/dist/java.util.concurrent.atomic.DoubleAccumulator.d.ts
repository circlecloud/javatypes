declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * One or more variables that together maintain a running {@code double}
                 * value updated using a supplied function.  When updates (method
                 * {@link #accumulate}) are contended across threads, the set of variables
                 * may grow dynamically to reduce contention.  Method {@link #get}
                 * (or, equivalently, {@link #doubleValue}) returns the current value
                 * across the variables maintaining updates.
                 * <p>This class is usually preferable to alternatives when multiple
                 * threads update a common value that is used for purposes such as
                 * summary statistics that are frequently updated but less frequently
                 * read.
                 * <p>The supplied accumulator function should be side-effect-free,
                 * since it may be re-applied when attempted updates fail due to
                 * contention among threads. The function is applied with the current
                 * value as its first argument, and the given update as the second
                 * argument.  For example, to maintain a running maximum value, you
                 * could supply {@code Double::max} along with {@code
                 * Double.NEGATIVE_INFINITY} as the identity. The order of
                 * accumulation within or across threads is not guaranteed. Thus, this
                 * class may not be applicable if numerical stability is required,
                 * especially when combining values of substantially different orders
                 * of magnitude.
                 * <p>Class {@link DoubleAdder} provides analogs of the functionality
                 * of this class for the common special case of maintaining sums.  The
                 * call {@code new DoubleAdder()} is equivalent to {@code new
                 * DoubleAccumulator((x, y) -> x + y, 0.0)}.
                 * <p>This class extends {@link Number}, but does <em>not</em> define
                 * methods such as {@code equals}, {@code hashCode} and {@code
                 * compareTo} because instances are expected to be mutated, and so are
                 * not useful as collection keys.
                 * @since 1.8
                 * @author Doug Lea
                 */
                // @ts-ignore
                class DoubleAccumulator extends java.util.concurrent.atomic.Striped64 implements java.io.Serializable {
                    /**
                     * Creates a new instance using the given accumulator function
                     * and identity element.
                     * @param accumulatorFunction a side-effect-free function of two arguments
                     * @param identity identity (initial value) for the accumulator function
                     */
                    // @ts-ignore
                    constructor(accumulatorFunction: java.util.function$.DoubleBinaryOperator, identity: number /*double*/)
                    /**
                     * Updates with the given value.
                     * @param x the value
                     */
                    // @ts-ignore
                    public accumulate(x: number /*double*/): void
                    /**
                     * Returns the current value.  The returned value is <em>NOT</em>
                     * an atomic snapshot; invocation in the absence of concurrent
                     * updates returns an accurate result, but concurrent updates that
                     * occur while the value is being calculated might not be
                     * incorporated.
                     * @return the current value
                     */
                    // @ts-ignore
                    public get(): number /*double*/
                    /**
                     * Resets variables maintaining updates to the identity value.
                     * This method may be a useful alternative to creating a new
                     * updater, but is only effective if there are no concurrent
                     * updates.  Because this method is intrinsically racy, it should
                     * only be used when it is known that no threads are concurrently
                     * updating.
                     */
                    // @ts-ignore
                    public reset(): void
                    /**
                     * Equivalent in effect to {@link #get} followed by {@link
                     * #reset}. This method may apply for example during quiescent
                     * points between multithreaded computations.  If there are
                     * updates concurrent with this method, the returned value is
                     * <em>not</em> guaranteed to be the final value occurring before
                     * the reset.
                     * @return the value before reset
                     */
                    // @ts-ignore
                    public getThenReset(): number /*double*/
                    /**
                     * Returns the String representation of the current value.
                     * @return the String representation of the current value
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Equivalent to {@link #get}.
                     * @return the current value
                     */
                    // @ts-ignore
                    public doubleValue(): number /*double*/
                    /**
                     * Returns the {@linkplain #get current value} as a {@code long}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public longValue(): number /*long*/
                    /**
                     * Returns the {@linkplain #get current value} as an {@code int}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public intValue(): number /*int*/
                    /**
                     * Returns the {@linkplain #get current value} as a {@code float}
                     * after a narrowing primitive conversion.
                     */
                    // @ts-ignore
                    public floatValue(): number /*float*/
                }
            }
        }
    }
}
