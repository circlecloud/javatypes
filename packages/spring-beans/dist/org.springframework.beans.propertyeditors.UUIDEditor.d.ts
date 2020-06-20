declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.util.UUID}, translating UUID
                 * String representations into UUID objects and back.
                 * @author Juergen Hoeller
                 * @since 3.0.1
                 * @see java.util.UUID
                 */
                // @ts-ignore
                class UUIDEditor extends java.beans.PropertyEditorSupport {
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
