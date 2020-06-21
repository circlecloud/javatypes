declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * One-way PropertyEditor which can convert from a text String to a
                 * {@code java.io.InputStream}, interpreting the given String as a
                 * Spring resource location (e.g. a URL String).
                 * <p>Supports Spring-style URL notation: any fully qualified standard URL
                 * ("file:", "http:", etc.) and Spring's special "classpath:" pseudo-URL.
                 * <p>Note that such streams usually do not get closed by Spring itself!
                 * @author Juergen Hoeller
                 * @since 1.0.1
                 * @see java.io.InputStream
                 * @see org.springframework.core.io.ResourceEditor
                 * @see org.springframework.core.io.ResourceLoader
                 * @see URLEditor
                 * @see FileEditor
                 */
                // @ts-ignore
                class InputStreamEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new InputStreamEditor, using the default ResourceEditor underneath.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new InputStreamEditor, using the given ResourceEditor underneath.
                     * @param resourceEditor the ResourceEditor to use
                     */
                    // @ts-ignore
                    constructor(resourceEditor: ResourceEditor)
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    /**
                     * This implementation returns {@code null} to indicate that
                     * there is no appropriate text representation.
                     */
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
