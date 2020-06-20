declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.nio.charset.Charset}, translating charset
                 * String representations into Charset objects and back.
                 * <p>Expects the same syntax as Charset's {@link java.nio.charset.Charset#name()},
                 * e.g. {@code UTF-8}, {@code ISO-8859-16}, etc.
                 * @author Arjen Poutsma
                 * @since 2.5.4
                 * @see Charset
                 */
                // @ts-ignore
                class CharsetEditor extends java.beans.PropertyEditorSupport {
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
