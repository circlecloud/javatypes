declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.time.ZoneId}, translating zone ID Strings into {@code ZoneId}
                 * objects. Exposes the {@code TimeZone} ID as a text representation.
                 * @author Nicholas Williams
                 * @since 4.0
                 * @see java.time.ZoneId
                 * @see TimeZoneEditor
                 */
                // @ts-ignore
                class ZoneIdEditor extends java.beans.PropertyEditorSupport {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
