declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link ResourceLoader} implementation that resolves plain paths as
                 * file system resources rather than as class path resources
                 * (the latter is {@link DefaultResourceLoader}'s default strategy).
                 * <p><b>NOTE:</b> Plain paths will always be interpreted as relative
                 * to the current VM working directory, even if they start with a slash.
                 * (This is consistent with the semantics in a Servlet container.)
                 * <b>Use an explicit "file:" prefix to enforce an absolute file path.</b>
                 * <p>{@link org.springframework.context.support.FileSystemXmlApplicationContext}
                 * is a full-fledged ApplicationContext implementation that provides
                 * the same resource path resolution strategy.
                 * @author Juergen Hoeller
                 * @since 1.1.3
                 * @see DefaultResourceLoader
                 * @see org.springframework.context.support.FileSystemXmlApplicationContext
                 */
                // @ts-ignore
                class FileSystemResourceLoader extends org.springframework.core.io.DefaultResourceLoader {
                    // @ts-ignore
                    constructor()
                    /**
                     * Resolve resource paths as file system paths.
                     * <p>Note: Even if a given path starts with a slash, it will get
                     * interpreted as relative to the current VM working directory.
                     * @param path the path to the resource
                     * @return the corresponding Resource handle
                     * @see FileSystemResource
                     * @see org.springframework.web.context.support.ServletContextResourceLoader#getResourceByPath
                     */
                    // @ts-ignore
                    getResourceByPath(path: java.lang.String | string): org.springframework.core.io.Resource
                }
            }
        }
    }
}
