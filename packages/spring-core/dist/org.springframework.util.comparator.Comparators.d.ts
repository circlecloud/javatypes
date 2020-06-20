declare namespace org {
    namespace springframework {
        namespace util {
            namespace comparator {
                /**
                 * Convenient entry point with generically typed factory methods
                 * for common Spring {@link Comparator} variants.
                 * @author Juergen Hoeller
                 * @since 5.0
                 */
                // @ts-ignore
                class Comparators extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return a {@link Comparable} adapter.
                     * @see ComparableComparator#INSTANCE
                     */
                    // @ts-ignore
                    comparable<T>(): java.util.Comparator<T>
                    /**
                     * Return a {@link Comparable} adapter which accepts
                     * null values and sorts them lower than non-null values.
                     * @see NullSafeComparator#NULLS_LOW
                     */
                    // @ts-ignore
                    nullsLow<T>(): java.util.Comparator<T>
                    /**
                     * Return a decorator for the given comparator which accepts
                     * null values and sorts them lower than non-null values.
                     * @see NullSafeComparator#NullSafeComparator(boolean)
                     */
                    // @ts-ignore
                    nullsLow<T>(comparator: java.util.Comparator<T>): java.util.Comparator<T>
                    /**
                     * Return a {@link Comparable} adapter which accepts
                     * null values and sorts them higher than non-null values.
                     * @see NullSafeComparator#NULLS_HIGH
                     */
                    // @ts-ignore
                    nullsHigh<T>(): java.util.Comparator<T>
                    /**
                     * Return a decorator for the given comparator which accepts
                     * null values and sorts them higher than non-null values.
                     * @see NullSafeComparator#NullSafeComparator(boolean)
                     */
                    // @ts-ignore
                    nullsHigh<T>(comparator: java.util.Comparator<T>): java.util.Comparator<T>
                }
            }
        }
    }
}
