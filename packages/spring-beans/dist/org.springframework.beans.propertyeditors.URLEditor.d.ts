declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.net.URL}, to directly populate a URL property
                 * instead of using a String property as bridge.
                 * <p>Supports Spring-style URL notation: any fully qualified standard URL
                 * ("file:", "http:", etc) and Spring's special "classpath:" pseudo-URL,
                 * as well as Spring's context-specific relative file paths.
                 * <p>Note: A URL must specify a valid protocol, else it will be rejected
                 * upfront. However, the target resource does not necessarily have to exist
                 * at the time of URL creation; this depends on the specific resource type.
                 * @author Juergen Hoeller
                 * @since 15.12.2003
                 * @see java.net.URL
                 * @see org.springframework.core.io.ResourceEditor
                 * @see org.springframework.core.io.ResourceLoader
                 * @see FileEditor
                 * @see InputStreamEditor
                 */
                // @ts-ignore
                class URLEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new URLEditor, using a default ResourceEditor underneath.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new URLEditor, using the given ResourceEditor underneath.
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
