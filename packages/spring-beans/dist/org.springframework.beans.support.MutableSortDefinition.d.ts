declare namespace org {
    namespace springframework {
        namespace beans {
            namespace support {
                /**
                 * Mutable implementation of the {@link SortDefinition} interface.
                 * Supports toggling the ascending value on setting the same property again.
                 * @author Juergen Hoeller
                 * @author Jean-Pierre Pawlak
                 * @since 26.05.2003
                 * @see #setToggleAscendingOnProperty
                 */
                // @ts-ignore
                class MutableSortDefinition extends java.lang.Object implements org.springframework.beans.support.SortDefinition, java.io.Serializable {
                    /**
                     * Create an empty MutableSortDefinition,
                     * to be populated via its bean properties.
                     * @see #setProperty
                     * @see #setIgnoreCase
                     * @see #setAscending
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Copy constructor: create a new MutableSortDefinition
                     * that mirrors the given sort definition.
                     * @param source the original sort definition
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.beans.support.SortDefinition)
                    /**
                     * Create a MutableSortDefinition for the given settings.
                     * @param property the property to compare
                     * @param ignoreCase whether upper and lower case in String values should be ignored
                     * @param ascending whether to sort ascending (true) or descending (false)
                     */
                    // @ts-ignore
                    constructor(property: string, ignoreCase: boolean, ascending: boolean)
                    /**
                     * Create a new MutableSortDefinition.
                     * @param toggleAscendingOnSameProperty whether to toggle the ascending flag
                     *  if the same property gets set again (that is, {#code setProperty} gets
                     *  called with already set property name again).
                     */
                    // @ts-ignore
                    constructor(toggleAscendingOnSameProperty: boolean)
                    /**
                     * Set the property to compare.
                     * <p>If the property was the same as the current, the sort is reversed if
                     * "toggleAscendingOnProperty" is activated, else simply ignored.
                     * @see #setToggleAscendingOnProperty
                     */
                    // @ts-ignore
                    setProperty(property: string): void
                    // @ts-ignore
                    getProperty(): java.lang.String
                    /**
                     * Set whether upper and lower case in String values should be ignored.
                     */
                    // @ts-ignore
                    setIgnoreCase(ignoreCase: boolean): void
                    // @ts-ignore
                    isIgnoreCase(): boolean
                    /**
                     * Set whether to sort ascending (true) or descending (false).
                     */
                    // @ts-ignore
                    setAscending(ascending: boolean): void
                    // @ts-ignore
                    isAscending(): boolean
                    /**
                     * Set whether to toggle the ascending flag if the same property gets set again
                     * (that is, {@link #setProperty} gets called with already set property name again).
                     * <p>This is particularly useful for parameter binding through a web request,
                     * where clicking on the field header again might be supposed to trigger a
                     * resort for the same field but opposite order.
                     */
                    // @ts-ignore
                    setToggleAscendingOnProperty(toggleAscendingOnProperty: boolean): void
                    /**
                     * Return whether to toggle the ascending flag if the same property gets set again
                     * (that is, {@code setProperty} gets called with already set property name again).
                     */
                    // @ts-ignore
                    isToggleAscendingOnProperty(): boolean
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
