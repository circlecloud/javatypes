declare namespace org {
    namespace springframework {
        namespace util {
            namespace comparator {
                /**
                 * A comparator that chains a sequence of one or more Comparators.
                 * <p>A compound comparator calls each Comparator in sequence until a single
                 * Comparator returns a non-zero result, or the comparators are exhausted and
                 * zero is returned.
                 * <p>This facilitates in-memory sorting similar to multi-column sorting in SQL.
                 * The order of any single Comparator in the list can also be reversed.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 1.2.2
                 * @param <T> the type of objects that may be compared by this comparator
                 * @deprecated as of Spring Framework 5.0, in favor of the standard JDK 8
                 *  {#link Comparator#thenComparing(Comparator)}
                 */
                // @ts-ignore
                class CompoundComparator<T> extends java.lang.Object implements java.util.Comparator<T>, java.io.Serializable {
                    /**
                     * Construct a CompoundComparator with initially no Comparators. Clients
                     * must add at least one Comparator before calling the compare method or an
                     * IllegalStateException is thrown.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a CompoundComparator from the Comparators in the provided array.
                     * <p>All Comparators will default to ascending sort order,
                     * unless they are InvertibleComparators.
                     * @param comparators the comparators to build into a compound comparator
                     * @see InvertibleComparator
                     */
                    // @ts-ignore
                    constructor(...comparators: java.util.Comparator[])
                    /**
                     * Add a Comparator to the end of the chain.
                     * <p>The Comparator will default to ascending sort order,
                     * unless it is a InvertibleComparator.
                     * @param comparator the Comparator to add to the end of the chain
                     * @see InvertibleComparator
                     */
                    // @ts-ignore
                    addComparator(comparator: java.util.Comparator<T>): void
                    /**
                     * Add a Comparator to the end of the chain using the provided sort order.
                     * @param comparator the Comparator to add to the end of the chain
                     * @param ascending the sort order: ascending (true) or descending (false)
                     */
                    // @ts-ignore
                    addComparator(comparator: java.util.Comparator<T>, ascending: boolean): void
                    /**
                     * Replace the Comparator at the given index.
                     * <p>The Comparator will default to ascending sort order,
                     * unless it is a InvertibleComparator.
                     * @param index the index of the Comparator to replace
                     * @param comparator the Comparator to place at the given index
                     * @see InvertibleComparator
                     */
                    // @ts-ignore
                    setComparator(index: number /*int*/, comparator: java.util.Comparator<T>): void
                    /**
                     * Replace the Comparator at the given index using the given sort order.
                     * @param index the index of the Comparator to replace
                     * @param comparator the Comparator to place at the given index
                     * @param ascending the sort order: ascending (true) or descending (false)
                     */
                    // @ts-ignore
                    setComparator(index: number /*int*/, comparator: java.util.Comparator<T>, ascending: boolean): void
                    /**
                     * Invert the sort order of each sort definition contained by this compound
                     * comparator.
                     */
                    // @ts-ignore
                    invertOrder(): void
                    /**
                     * Invert the sort order of the sort definition at the specified index.
                     * @param index the index of the comparator to invert
                     */
                    // @ts-ignore
                    invertOrder(index: number /*int*/): void
                    /**
                     * Change the sort order at the given index to ascending.
                     * @param index the index of the comparator to change
                     */
                    // @ts-ignore
                    setAscendingOrder(index: number /*int*/): void
                    /**
                     * Change the sort order at the given index to descending sort.
                     * @param index the index of the comparator to change
                     */
                    // @ts-ignore
                    setDescendingOrder(index: number /*int*/): void
                    /**
                     * Returns the number of aggregated comparators.
                     */
                    // @ts-ignore
                    getComparatorCount(): int
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
