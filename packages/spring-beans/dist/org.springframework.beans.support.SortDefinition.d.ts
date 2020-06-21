declare namespace org {
    namespace springframework {
        namespace beans {
            namespace support {
                /**
                 * Definition for sorting bean instances by a property.
                 * @author Juergen Hoeller
                 * @since 26.05.2003
                 */
                // @ts-ignore
                interface SortDefinition {
                    /**
                     * Return the name of the bean property to compare.
                     * Can also be a nested bean property path.
                     */
                    // @ts-ignore
                    getProperty(): string
                    /**
                     * Return whether upper and lower case in String values should be ignored.
                     */
                    // @ts-ignore
                    isIgnoreCase(): boolean
                    /**
                     * Return whether to sort ascending (true) or descending (false).
                     */
                    // @ts-ignore
                    isAscending(): boolean
                }
            }
        }
    }
}
