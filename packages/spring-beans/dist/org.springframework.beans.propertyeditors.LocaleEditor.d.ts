declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.util.Locale}, to directly populate a Locale property.
                 * <p>Expects the same syntax as Locale's {@code toString}, i.e. language +
                 * optionally country + optionally variant, separated by "_" (e.g. "en", "en_US").
                 * Also accepts spaces as separators, as alternative to underscores.
                 * @author Juergen Hoeller
                 * @since 26.05.2003
                 * @see java.util.Locale
                 * @see org.springframework.util.StringUtils#parseLocaleString
                 */
                // @ts-ignore
                class LocaleEditor extends java.beans.PropertyEditorSupport {
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
