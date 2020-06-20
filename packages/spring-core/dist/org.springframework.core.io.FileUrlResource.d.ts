declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Subclass of {@link UrlResource} which assumes file resolution, to the degree
                 * of implementing the {@link WritableResource} interface for it. This resource
                 * variant also caches resolved {@link File} handles from {@link #getFile()}.
                 * <p>This is the class resolved by {@link DefaultResourceLoader} for a "file:..."
                 * URL location, allowing a downcast to {@link WritableResource} for it.
                 * <p>Alternatively, for direct construction from a {@link java.io.File} handle
                 * or NIO {@link java.nio.file.Path}, consider using {@link FileSystemResource}.
                 * @author Juergen Hoeller
                 * @since 5.0.2
                 */
                // @ts-ignore
                class FileUrlResource extends org.springframework.core.io.UrlResource implements org.springframework.core.io.WritableResource {
                    /**
                     * Create a new {@code FileUrlResource} based on the given URL object.
                     * <p>Note that this does not enforce "file" as URL protocol. If a protocol
                     * is known to be resolvable to a file,
                     * @param url a URL
                     * @see ResourceUtils#isFileURL(URL)
                     * @see #getFile()
                     */
                    // @ts-ignore
                    constructor(url: java.net.URL)
                    /**
                     * Create a new {@code FileUrlResource} based on the given file location,
                     * using the URL protocol "file".
                     * <p>The given parts will automatically get encoded if necessary.
                     * @param location the location (i.e. the file path within that protocol)
                     * @throws MalformedURLException if the given URL specification is not valid
                     * @see UrlResource#UrlResource(String, String)
                     * @see ResourceUtils#URL_PROTOCOL_FILE
                     */
                    // @ts-ignore
                    constructor(location: string)
                    // @ts-ignore
                    getFile(): java.io.File
                    // @ts-ignore
                    isWritable(): boolean
                    // @ts-ignore
                    getOutputStream(): java.io.OutputStream
                    // @ts-ignore
                    writableChannel(): java.nio.channels.WritableByteChannel
                    // @ts-ignore
                    createRelative(relativePath: string): org.springframework.core.io.Resource
                }
            }
        }
    }
}
