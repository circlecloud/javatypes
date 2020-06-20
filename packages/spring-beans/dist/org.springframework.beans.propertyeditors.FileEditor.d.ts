declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.io.File}, to directly populate a File property
                 * from a Spring resource location.
                 * <p>Supports Spring-style URL notation: any fully qualified standard URL
                 * ("file:", "http:", etc) and Spring's special "classpath:" pseudo-URL.
                 * <p><b>NOTE:</b> The behavior of this editor has changed in Spring 2.0.
                 * Previously, it created a File instance directly from a filename.
                 * As of Spring 2.0, it takes a standard Spring resource location as input;
                 * this is consistent with URLEditor and InputStreamEditor now.
                 * <p><b>NOTE:</b> In Spring 2.5 the following modification was made.
                 * If a file name is specified without a URL prefix or without an absolute path
                 * then we try to locate the file using standard ResourceLoader semantics.
                 * If the file was not found, then a File instance is created assuming the file
                 * name refers to a relative file location.
                 * @author Juergen Hoeller
                 * @author Thomas Risberg
                 * @since 09.12.2003
                 * @see java.io.File
                 * @see org.springframework.core.io.ResourceEditor
                 * @see org.springframework.core.io.ResourceLoader
                 * @see URLEditor
                 * @see InputStreamEditor
                 */
                // @ts-ignore
                class FileEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new FileEditor, using a default ResourceEditor underneath.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new FileEditor, using the given ResourceEditor underneath.
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
