declare namespace org {
    namespace springframework {
        namespace util {
            namespace comparator {
                /**
                 * A decorator for a comparator, with an "ascending" flag denoting
                 * whether comparison results should be treated in forward (standard
                 * ascending) order or flipped for reverse (descending) order.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 1.2.2
                 * @param <T> the type of objects that may be compared by this comparator
                 * @deprecated as of Spring Framework 5.0, in favor of the standard JDK 8
                 *  {#link Comparator#reversed()}
                 */
                // @ts-ignore
                class InvertibleComparator<T> extends java.lang.Object implements java.util.Comparator<T>, java.io.Serializable {
                    /**
                     * Create an InvertibleComparator that sorts ascending by default.
                     * For the actual comparison, the specified Comparator will be used.
                     * @param comparator the comparator to decorate
                     */
                    // @ts-ignore
                    constructor(comparator: java.util.Comparator<T>)
                    /**
                     * Create an InvertibleComparator that sorts based on the provided order.
                     * For the actual comparison, the specified Comparator will be used.
                     * @param comparator the comparator to decorate
                     * @param ascending the sort order: ascending (true) or descending (false)
                     */
                    // @ts-ignore
                    constructor(comparator: java.util.Comparator<T>, ascending: boolean)
                    /**
                     * Specify the sort order: ascending (true) or descending (false).
                     */
                    // @ts-ignore
                    setAscending(ascending: boolean): void
                    /**
                     * Return the sort order: ascending (true) or descending (false).
                     */
                    // @ts-ignore
                    isAscending(): boolean
                    /**
                     * Invert the sort order: ascending -> descending or
                     * descending -> ascending.
                     */
                    // @ts-ignore
                    invertOrder(): void
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
