declare namespace org {
    namespace springframework {
        namespace util {
            namespace comparator {
                /**
                 * Comparator that adapts Comparables to the Comparator interface.
                 * Mainly for internal use in other Comparators, when supposed
                 * to work on Comparables.
                 * @author Keith Donald
                 * @since 1.2.2
                 * @param <T> the type of comparable objects that may be compared by this comparator
                 * @see Comparable
                 */
                // @ts-ignore
                class ComparableComparator<T extends java.lang.Comparable<T>> extends java.lang.Object implements java.util.Comparator<T> {
                    // @ts-ignore
                    constructor()
                    /**
                     * A shared instance of this default comparator.
                     * @see Comparators#comparable()
                     */
                    // @ts-ignore
                    public static readonly INSTANCE: org.springframework.util.comparator.ComparableComparator<any>
                    // @ts-ignore
                    public compare(o1: T, o2: T): number /*int*/
                }
            }
        }
    }
}
