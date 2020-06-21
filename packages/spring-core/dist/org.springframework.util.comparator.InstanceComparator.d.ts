declare namespace org {
    namespace springframework {
        namespace util {
            namespace comparator {
                /**
                 * Compares objects based on an arbitrary class order. Allows objects to be sorted based
                 * on the types of class that they inherit, for example: this comparator can be used to
                 * sort a list {@code Number}s such that {@code Long}s occur before {@code Integer}s.
                 * <p>Only the specified {@code instanceOrder} classes are considered during comparison.
                 * If two objects are both instances of the ordered type this comparator will return a
                 * {@code 0}. Consider combining with {@link Comparator#thenComparing(Comparator)}
                 * if additional sorting is required.
                 * @author Phillip Webb
                 * @since 3.2
                 * @param <T> the type of objects that may be compared by this comparator
                 * @see Comparator#thenComparing(Comparator)
                 */
                // @ts-ignore
                class InstanceComparator<T> extends java.lang.Object implements java.util.Comparator<T> {
                    /**
                     * Create a new {@link InstanceComparator} instance.
                     * @param instanceOrder the ordered list of classes that should be used when comparing
                     *  objects. Classes earlier in the list will be given a higher priority.
                     */
                    // @ts-ignore
                    constructor(...instanceOrder: java.lang.Class<any>[])
                    // @ts-ignore
                    public compare(o1: T, o2: T): number /*int*/
                }
            }
        }
    }
}
