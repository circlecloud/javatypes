declare namespace org {
    namespace springframework {
        namespace util {
            namespace comparator {
                /**
                 * A Comparator that will safely compare nulls to be lower or higher than
                 * other objects. Can decorate a given Comparator or work on Comparables.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 1.2.2
                 * @param <T> the type of objects that may be compared by this comparator
                 * @see Comparable
                 */
                // @ts-ignore
                class NullSafeComparator<T> extends java.lang.Object implements java.util.Comparator<T> {
                    /**
                     * Create a NullSafeComparator that sorts {@code null} based on the
                     * provided flag, decorating the given Comparator.
                     * <p>When comparing two non-null objects, the specified Comparator will be used.
                     * The given underlying Comparator must be able to handle the elements that this
                     * Comparator will be applied to.
                     * @param comparator the comparator to use when comparing two non-null objects
                     * @param nullsLow whether to treat nulls lower or higher than non-null objects
                     */
                    // @ts-ignore
                    constructor(comparator: java.util.Comparator<T>, nullsLow: boolean)
                    /**
                     * A shared default instance of this comparator, treating nulls lower
                     * than non-null objects.
                     * @see Comparators#nullsLow()
                     */
                    // @ts-ignore
                    readonly NULLS_LOW: org.springframework.util.comparator.NullSafeComparator
                    /**
                     * A shared default instance of this comparator, treating nulls higher
                     * than non-null objects.
                     * @see Comparators#nullsHigh()
                     */
                    // @ts-ignore
                    readonly NULLS_HIGH: org.springframework.util.comparator.NullSafeComparator
                    // @ts-ignore
                    compare(o1: T, o2: T): int
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
