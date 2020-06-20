declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code org.xml.sax.InputSource}, converting from a
                 * Spring resource location String to a SAX InputSource object.
                 * <p>Supports Spring-style URL notation: any fully qualified standard URL
                 * ("file:", "http:", etc) and Spring's special "classpath:" pseudo-URL.
                 * @author Juergen Hoeller
                 * @since 3.0.3
                 * @see org.xml.sax.InputSource
                 * @see org.springframework.core.io.ResourceEditor
                 * @see org.springframework.core.io.ResourceLoader
                 * @see URLEditor
                 * @see FileEditor
                 */
                // @ts-ignore
                class InputSourceEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new InputSourceEditor,
                     * using the default ResourceEditor underneath.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new InputSourceEditor,
                     * using the given ResourceEditor underneath.
                     * @param resourceEditor the ResourceEditor to use
                     */
                    // @ts-ignore
                    constructor(resourceEditor: ResourceEditor)
                    // @ts-ignore
                    setAsText(text: string): void
                    // @ts-ignore
                    getAsText(): java.lang.String
                }
            }
        }
    }
}
