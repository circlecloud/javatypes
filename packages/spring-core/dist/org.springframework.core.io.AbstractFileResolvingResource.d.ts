declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Abstract base class for resources which resolve URLs into File references,
                 * such as {@link UrlResource} or {@link ClassPathResource}.
                 * <p>Detects the "file" protocol as well as the JBoss "vfs" protocol in URLs,
                 * resolving file system references accordingly.
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class AbstractFileResolvingResource extends org.springframework.core.io.AbstractResource {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    exists(): boolean
                    // @ts-ignore
                    isReadable(): boolean
                    // @ts-ignore
                    isFile(): boolean
                    /**
                     * This implementation returns a File reference for the underlying class path
                     * resource, provided that it refers to a file in the file system.
                     * @see org.springframework.util.ResourceUtils#getFile(java.net.URL, String)
                     */
                    // @ts-ignore
                    getFile(): java.io.File
                    /**
                     * This implementation determines the underlying File
                     * (or jar file, in case of a resource in a jar/zip).
                     */
                    // @ts-ignore
                    getFileForLastModifiedCheck(): java.io.File
                    /**
                     * This implementation returns a File reference for the given URI-identified
                     * resource, provided that it refers to a file in the file system.
                     * @since 5.0
                     * @see #getFile(URI)
                     */
                    // @ts-ignore
                    isFile(uri: java.net.URI): boolean
                    /**
                     * This implementation returns a File reference for the given URI-identified
                     * resource, provided that it refers to a file in the file system.
                     * @see org.springframework.util.ResourceUtils#getFile(java.net.URI, String)
                     */
                    // @ts-ignore
                    getFile(uri: java.net.URI): java.io.File
                    /**
                     * This implementation returns a FileChannel for the given URI-identified
                     * resource, provided that it refers to a file in the file system.
                     * @since 5.0
                     * @see #getFile()
                     */
                    // @ts-ignore
                    readableChannel(): java.nio.channels.ReadableByteChannel
                    // @ts-ignore
                    contentLength(): long
                    // @ts-ignore
                    lastModified(): long
                    /**
                     * Customize the given {@link URLConnection}, obtained in the course of an
                     * {@link #exists()}, {@link #contentLength()} or {@link #lastModified()} call.
                     * <p>Calls {@link ResourceUtils#useCachesIfNecessary(URLConnection)} and
                     * delegates to {@link #customizeConnection(HttpURLConnection)} if possible.
                     * Can be overridden in subclasses.
                     * @param con the URLConnection to customize
                     * @throws IOException if thrown from URLConnection methods
                     */
                    // @ts-ignore
                    customizeConnection(con: java.net.URLConnection): void
                    /**
                     * Customize the given {@link HttpURLConnection}, obtained in the course of an
                     * {@link #exists()}, {@link #contentLength()} or {@link #lastModified()} call.
                     * <p>Sets request method "HEAD" by default. Can be overridden in subclasses.
                     * @param con the HttpURLConnection to customize
                     * @throws IOException if thrown from HttpURLConnection methods
                     */
                    // @ts-ignore
                    customizeConnection(con: java.net.HttpURLConnection): void
                }
            }
        }
    }
}
