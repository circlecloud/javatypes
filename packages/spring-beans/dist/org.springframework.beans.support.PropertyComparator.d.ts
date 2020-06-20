declare namespace org {
    namespace springframework {
        namespace beans {
            namespace support {
                /**
                 * PropertyComparator performs a comparison of two beans,
                 * evaluating the specified bean property via a BeanWrapper.
                 * @author Juergen Hoeller
                 * @author Jean-Pierre Pawlak
                 * @since 19.05.2003
                 * @param <T> the type of objects that may be compared by this comparator
                 * @see org.springframework.beans.BeanWrapper
                 */
                // @ts-ignore
                class PropertyComparator<T> extends java.lang.Object implements java.util.Comparator<T> {
                    /**
                     * Create a new PropertyComparator for the given SortDefinition.
                     * @see MutableSortDefinition
                     */
                    // @ts-ignore
                    constructor(sortDefinition: org.springframework.beans.support.SortDefinition)
                    /**
                     * Create a PropertyComparator for the given settings.
                     * @param property the property to compare
                     * @param ignoreCase whether upper and lower case in String values should be ignored
                     * @param ascending whether to sort ascending (true) or descending (false)
                     */
                    // @ts-ignore
                    constructor(property: string, ignoreCase: boolean, ascending: boolean)
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Return the SortDefinition that this comparator uses.
                     */
                    // @ts-ignore
                    getSortDefinition(): org.springframework.beans.support.SortDefinition
                    // @ts-ignore
                    compare(o1: T, o2: T): int
                    /**
                     * Sort the given List according to the given sort definition.
                     * <p>Note: Contained objects have to provide the given property
                     * in the form of a bean property, i.e. a getXXX method.
                     * @param source the input List
                     * @param sortDefinition the parameters to sort by
                     * @throws java.lang.IllegalArgumentException in case of a missing propertyName
                     */
                    // @ts-ignore
                    sort(source: Array<any>, sortDefinition: org.springframework.beans.support.SortDefinition): void
                    /**
                     * Sort the given source according to the given sort definition.
                     * <p>Note: Contained objects have to provide the given property
                     * in the form of a bean property, i.e. a getXXX method.
                     * @param source input source
                     * @param sortDefinition the parameters to sort by
                     * @throws java.lang.IllegalArgumentException in case of a missing propertyName
                     */
                    // @ts-ignore
                    sort(source: any[], sortDefinition: org.springframework.beans.support.SortDefinition): void
                }
            }
        }
    }
}
