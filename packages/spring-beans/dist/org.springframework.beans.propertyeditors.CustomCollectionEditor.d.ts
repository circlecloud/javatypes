declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor for Collections, converting any source Collection
                 * to a given target Collection type.
                 * <p>By default registered for Set, SortedSet and List,
                 * to automatically convert any given Collection to one of those
                 * target types if the type does not match the target property.
                 * @author Juergen Hoeller
                 * @since 1.1.3
                 * @see java.util.Collection
                 * @see java.util.Set
                 * @see java.util.SortedSet
                 * @see java.util.List
                 */
                // @ts-ignore
                class CustomCollectionEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new CustomCollectionEditor for the given target type,
                     * keeping an incoming {@code null} as-is.
                     * @param collectionType the target type, which needs to be a
                     *  sub-interface of Collection or a concrete Collection class
                     * @see java.util.Collection
                     * @see java.util.ArrayList
                     * @see java.util.TreeSet
                     * @see java.util.LinkedHashSet
                     */
                    // @ts-ignore
                    constructor(collectionType: java.lang.Class<any>)
                    /**
                     * Create a new CustomCollectionEditor for the given target type.
                     * <p>If the incoming value is of the given type, it will be used as-is.
                     * If it is a different Collection type or an array, it will be converted
                     * to a default implementation of the given Collection type.
                     * If the value is anything else, a target Collection with that single
                     * value will be created.
                     * <p>The default Collection implementations are: ArrayList for List,
                     * TreeSet for SortedSet, and LinkedHashSet for Set.
                     * @param collectionType the target type, which needs to be a
                     *  sub-interface of Collection or a concrete Collection class
                     * @param nullAsEmptyCollection whether to convert an incoming {#code null}
                     *  value to an empty Collection (of the appropriate type)
                     * @see java.util.Collection
                     * @see java.util.ArrayList
                     * @see java.util.TreeSet
                     * @see java.util.LinkedHashSet
                     */
                    // @ts-ignore
                    constructor(collectionType: java.lang.Class<any>, nullAsEmptyCollection: boolean)
                    /**
                     * Convert the given text value to a Collection with a single element.
                     */
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    /**
                     * Convert the given value to a Collection of the target type.
                     */
                    // @ts-ignore
                    public setValue(value: java.lang.Object | any): void
                    /**
                     * Create a Collection of the given type, with the given
                     * initial capacity (if supported by the Collection type).
                     * @param collectionType a sub-interface of Collection
                     * @param initialCapacity the initial capacity
                     * @return the new Collection instance
                     */
                    // @ts-ignore
                    createCollection(collectionType: java.lang.Class<any>, initialCapacity: number /*int*/): Array<java.lang.Object | any>
                    /**
                     * Return whether to always create a new Collection,
                     * even if the type of the passed-in Collection already matches.
                     * <p>Default is "false"; can be overridden to enforce creation of a
                     * new Collection, for example to convert elements in any case.
                     * @see #convertElement
                     */
                    // @ts-ignore
                    alwaysCreateNewCollection(): boolean
                    /**
                     * Hook to convert each encountered Collection/array element.
                     * The default implementation simply returns the passed-in element as-is.
                     * <p>Can be overridden to perform conversion of certain elements,
                     * for example String to Integer if a String array comes in and
                     * should be converted to a Set of Integer objects.
                     * <p>Only called if actually creating a new Collection!
                     * This is by default not the case if the type of the passed-in Collection
                     * already matches. Override {@link #alwaysCreateNewCollection()} to
                     * enforce creating a new Collection in every case.
                     * @param element the source element
                     * @return the element to be used in the target Collection
                     * @see #alwaysCreateNewCollection()
                     */
                    // @ts-ignore
                    convertElement(element: java.lang.Object | any): any
                    /**
                     * This implementation returns {@code null} to indicate that
                     * there is no appropriate text representation.
                     */
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
