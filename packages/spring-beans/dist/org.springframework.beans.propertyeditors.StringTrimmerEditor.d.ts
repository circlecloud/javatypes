declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor that trims Strings.
                 * <p>Optionally allows transforming an empty string into a {@code null} value.
                 * Needs to be explicitly registered, e.g. for command binding.
                 * @author Juergen Hoeller
                 * @see org.springframework.validation.DataBinder#registerCustomEditor
                 */
                // @ts-ignore
                class StringTrimmerEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new StringTrimmerEditor.
                     * @param emptyAsNull {#code true} if an empty String is to be
                     *  transformed into {@code null}
                     */
                    // @ts-ignore
                    constructor(emptyAsNull: boolean)
                    /**
                     * Create a new StringTrimmerEditor.
                     * @param charsToDelete a set of characters to delete, in addition to
                     *  trimming an input String. Useful for deleting unwanted line breaks:
                     *  e.g. "\r\n\f" will delete all new lines and line feeds in a String.
                     * @param emptyAsNull {#code true} if an empty String is to be
                     *  transformed into {@code null}
                     */
                    // @ts-ignore
                    constructor(charsToDelete: java.lang.String | string, emptyAsNull: boolean)
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
