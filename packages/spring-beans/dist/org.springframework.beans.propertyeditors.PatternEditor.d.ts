declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.util.regex.Pattern}, to directly populate a Pattern property.
                 * Expects the same syntax as Pattern's {@code compile} method.
                 * @author Juergen Hoeller
                 * @since 2.0.1
                 * @see java.util.regex.Pattern
                 * @see java.util.regex.Pattern#compile(String)
                 */
                // @ts-ignore
                class PatternEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new PatternEditor with default settings.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new PatternEditor with the given settings.
                     * @param flags the {#code java.util.regex.Pattern} flags to apply
                     * @see java.util.regex.Pattern#compile(String, int)
                     * @see java.util.regex.Pattern#CASE_INSENSITIVE
                     * @see java.util.regex.Pattern#MULTILINE
                     * @see java.util.regex.Pattern#DOTALL
                     * @see java.util.regex.Pattern#UNICODE_CASE
                     * @see java.util.regex.Pattern#CANON_EQ
                     */
                    // @ts-ignore
                    constructor(flags: number /*int*/)
                    // @ts-ignore
                    setAsText(text: string): void
                    // @ts-ignore
                    getAsText(): java.lang.String
                }
            }
        }
    }
}
