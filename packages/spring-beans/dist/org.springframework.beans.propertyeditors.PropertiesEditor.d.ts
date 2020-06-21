declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Custom {@link java.beans.PropertyEditor} for {@link Properties} objects.
                 * <p>Handles conversion from content {@link String} to {@code Properties} object.
                 * Also handles {@link Map} to {@code Properties} conversion, for populating
                 * a {@code Properties} object via XML "map" entries.
                 * <p>The required format is defined in the standard {@code Properties}
                 * documentation. Each property must be on a new line.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see java.util.Properties#load
                 */
                // @ts-ignore
                class PropertiesEditor extends java.beans.PropertyEditorSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * Convert {@link String} into {@link Properties}, considering it as
                     * properties content.
                     * @param text the text to be so converted
                     */
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    /**
                     * Take {@link Properties} as-is; convert {@link Map} into {@code Properties}.
                     */
                    // @ts-ignore
                    public setValue(value: java.lang.Object | any): void
                }
            }
        }
    }
}
