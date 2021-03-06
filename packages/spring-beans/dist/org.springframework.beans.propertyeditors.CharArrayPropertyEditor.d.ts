declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for char arrays. Strings will simply be converted to
                 * their corresponding char representations.
                 * @author Juergen Hoeller
                 * @since 1.2.8
                 * @see String#toCharArray()
                 */
                // @ts-ignore
                class CharArrayPropertyEditor extends java.beans.PropertyEditorSupport {
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
