declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.util.Currency}, translating currency codes into Currency
                 * objects. Exposes the currency code as text representation of a Currency object.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see java.util.Currency
                 */
                // @ts-ignore
                class CurrencyEditor extends java.beans.PropertyEditorSupport {
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
