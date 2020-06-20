declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Custom {@link java.beans.PropertyEditor} for String arrays.
                 * <p>Strings must be in CSV format, with a customizable separator.
                 * By default values in the result are trimmed of whitespace.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Dave Syer
                 * @see org.springframework.util.StringUtils#delimitedListToStringArray
                 * @see org.springframework.util.StringUtils#arrayToDelimitedString
                 */
                // @ts-ignore
                class StringArrayPropertyEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new {@code StringArrayPropertyEditor} with the default separator
                     * (a comma).
                     * <p>An empty text (without elements) will be turned into an empty array.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code StringArrayPropertyEditor} with the given separator.
                     * <p>An empty text (without elements) will be turned into an empty array.
                     * @param separator the separator to use for splitting a {#link String}
                     */
                    // @ts-ignore
                    constructor(separator: string)
                    /**
                     * Create a new {@code StringArrayPropertyEditor} with the given separator.
                     * @param separator the separator to use for splitting a {#link String}
                     * @param emptyArrayAsNull {#code true} if an empty String array
                     *  is to be transformed into {@code null}
                     */
                    // @ts-ignore
                    constructor(separator: string, emptyArrayAsNull: boolean)
                    /**
                     * Create a new {@code StringArrayPropertyEditor} with the given separator.
                     * @param separator the separator to use for splitting a {#link String}
                     * @param emptyArrayAsNull {#code true} if an empty String array
                     *  is to be transformed into {@code null}
                     * @param trimValues {#code true} if the values in the parsed arrays
                     *  are to be trimmed of whitespace (default is true)
                     */
                    // @ts-ignore
                    constructor(separator: string, emptyArrayAsNull: boolean, trimValues: boolean)
                    /**
                     * Create a new {@code StringArrayPropertyEditor} with the given separator.
                     * @param separator the separator to use for splitting a {#link String}
                     * @param charsToDelete a set of characters to delete, in addition to
                     *  trimming an input String. Useful for deleting unwanted line breaks:
                     *  e.g. "\r\n\f" will delete all new lines and line feeds in a String.
                     * @param emptyArrayAsNull {#code true} if an empty String array
                     *  is to be transformed into {@code null}
                     */
                    // @ts-ignore
                    constructor(separator: string, charsToDelete: string, emptyArrayAsNull: boolean)
                    /**
                     * Create a new {@code StringArrayPropertyEditor} with the given separator.
                     * @param separator the separator to use for splitting a {#link String}
                     * @param charsToDelete a set of characters to delete, in addition to
                     *  trimming an input String. Useful for deleting unwanted line breaks:
                     *  e.g. "\r\n\f" will delete all new lines and line feeds in a String.
                     * @param emptyArrayAsNull {#code true} if an empty String array
                     *  is to be transformed into {@code null}
                     * @param trimValues {#code true} if the values in the parsed arrays
                     *  are to be trimmed of whitespace (default is true)
                     */
                    // @ts-ignore
                    constructor(separator: string, charsToDelete: string, emptyArrayAsNull: boolean, trimValues: boolean)
                    /**
                     * Default separator for splitting a String: a comma (",").
                     */
                    // @ts-ignore
                    readonly DEFAULT_SEPARATOR: string
                    // @ts-ignore
                    setAsText(text: string): void
                    // @ts-ignore
                    getAsText(): java.lang.String
                }
            }
        }
    }
}
