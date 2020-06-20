declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for {@code java.nio.file.Path}, to directly populate a Path
                 * property instead of using a String property as bridge.
                 * <p>Based on {@link Paths#get(URI)}'s resolution algorithm, checking
                 * registered NIO file system providers, including the default file system
                 * for "file:..." paths. Also supports Spring-style URL notation: any fully
                 * qualified standard URL and Spring's special "classpath:" pseudo-URL, as
                 * well as Spring's context-specific relative file paths. As a fallback, a
                 * path will be resolved in the file system via {@code Paths#get(String)}
                 * if no existing context-relative resource could be found.
                 * @author Juergen Hoeller
                 * @since 4.3.2
                 * @see java.nio.file.Path
                 * @see Paths#get(URI)
                 * @see ResourceEditor
                 * @see org.springframework.core.io.ResourceLoader
                 * @see FileEditor
                 * @see URLEditor
                 */
                // @ts-ignore
                class PathEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new PathEditor, using the default ResourceEditor underneath.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new PathEditor, using the given ResourceEditor underneath.
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
