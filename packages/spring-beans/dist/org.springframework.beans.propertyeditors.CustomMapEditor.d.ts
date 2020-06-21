declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor for Maps, converting any source Map
                 * to a given target Map type.
                 * @author Juergen Hoeller
                 * @since 2.0.1
                 * @see java.util.Map
                 * @see java.util.SortedMap
                 */
                // @ts-ignore
                class CustomMapEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new CustomMapEditor for the given target type,
                     * keeping an incoming {@code null} as-is.
                     * @param mapType the target type, which needs to be a
                     *  sub-interface of Map or a concrete Map class
                     * @see java.util.Map
                     * @see java.util.HashMap
                     * @see java.util.TreeMap
                     * @see java.util.LinkedHashMap
                     */
                    // @ts-ignore
                    constructor(mapType: java.lang.Class<any>)
                    /**
                     * Create a new CustomMapEditor for the given target type.
                     * <p>If the incoming value is of the given type, it will be used as-is.
                     * If it is a different Map type or an array, it will be converted
                     * to a default implementation of the given Map type.
                     * If the value is anything else, a target Map with that single
                     * value will be created.
                     * <p>The default Map implementations are: TreeMap for SortedMap,
                     * and LinkedHashMap for Map.
                     * @param mapType the target type, which needs to be a
                     *  sub-interface of Map or a concrete Map class
                     * @param nullAsEmptyMap ap whether to convert an incoming {#code null}
                     *  value to an empty Map (of the appropriate type)
                     * @see java.util.Map
                     * @see java.util.TreeMap
                     * @see java.util.LinkedHashMap
                     */
                    // @ts-ignore
                    constructor(mapType: java.lang.Class<any>, nullAsEmptyMap: boolean)
                    /**
                     * Convert the given text value to a Map with a single element.
                     */
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    /**
                     * Convert the given value to a Map of the target type.
                     */
                    // @ts-ignore
                    public setValue(value: java.lang.Object | any): void
                    /**
                     * Create a Map of the given type, with the given
                     * initial capacity (if supported by the Map type).
                     * @param mapType a sub-interface of Map
                     * @param initialCapacity the initial capacity
                     * @return the new Map instance
                     */
                    // @ts-ignore
                    createMap(mapType: java.lang.Class<any>, initialCapacity: number /*int*/): java.util.Map<java.lang.Object | any, java.lang.Object | any>
                    /**
                     * Return whether to always create a new Map,
                     * even if the type of the passed-in Map already matches.
                     * <p>Default is "false"; can be overridden to enforce creation of a
                     * new Map, for example to convert elements in any case.
                     * @see #convertKey
                     * @see #convertValue
                     */
                    // @ts-ignore
                    alwaysCreateNewMap(): boolean
                    /**
                     * Hook to convert each encountered Map key.
                     * The default implementation simply returns the passed-in key as-is.
                     * <p>Can be overridden to perform conversion of certain keys,
                     * for example from String to Integer.
                     * <p>Only called if actually creating a new Map!
                     * This is by default not the case if the type of the passed-in Map
                     * already matches. Override {@link #alwaysCreateNewMap()} to
                     * enforce creating a new Map in every case.
                     * @param key the source key
                     * @return the key to be used in the target Map
                     * @see #alwaysCreateNewMap
                     */
                    // @ts-ignore
                    convertKey(key: java.lang.Object | any): any
                    /**
                     * Hook to convert each encountered Map value.
                     * The default implementation simply returns the passed-in value as-is.
                     * <p>Can be overridden to perform conversion of certain values,
                     * for example from String to Integer.
                     * <p>Only called if actually creating a new Map!
                     * This is by default not the case if the type of the passed-in Map
                     * already matches. Override {@link #alwaysCreateNewMap()} to
                     * enforce creating a new Map in every case.
                     * @param value the source value
                     * @return the value to be used in the target Map
                     * @see #alwaysCreateNewMap
                     */
                    // @ts-ignore
                    convertValue(value: java.lang.Object | any): any
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
