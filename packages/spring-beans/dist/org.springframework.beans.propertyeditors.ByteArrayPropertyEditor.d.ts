declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for byte arrays. Strings will simply be converted to
                 * their corresponding byte representations.
                 * @author Juergen Hoeller
                 * @since 1.0.1
                 * @see java.lang.String#getBytes
                 */
                // @ts-ignore
                class ByteArrayPropertyEditor extends java.beans.PropertyEditorSupport {
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
