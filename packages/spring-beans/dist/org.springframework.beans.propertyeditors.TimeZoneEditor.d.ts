declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.util.TimeZone}, translating timezone IDs into
                 * {@code TimeZone} objects. Exposes the {@code TimeZone} ID as a text
                 * representation.
                 * @author Juergen Hoeller
                 * @author Nicholas Williams
                 * @since 3.0
                 * @see java.util.TimeZone
                 * @see ZoneIdEditor
                 */
                // @ts-ignore
                class TimeZoneEditor extends java.beans.PropertyEditorSupport {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setAsText(text: string): void
                    // @ts-ignore
                    getAsText(): java.lang.String
                }
            }
        }
    }
}
