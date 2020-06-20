declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Interface for a resource descriptor that abstracts from the actual
                 * type of underlying resource, such as a file or class path resource.
                 * <p>An InputStream can be opened for every resource if it exists in
                 * physical form, but a URL or File handle can just be returned for
                 * certain resources. The actual behavior is implementation-specific.
                 * @author Juergen Hoeller
                 * @since 28.12.2003
                 * @see #getInputStream()
                 * @see #getURL()
                 * @see #getURI()
                 * @see #getFile()
                 * @see WritableResource
                 * @see ContextResource
                 * @see UrlResource
                 * @see FileUrlResource
                 * @see FileSystemResource
                 * @see ClassPathResource
                 * @see ByteArrayResource
                 * @see InputStreamResource
                 */
                // @ts-ignore
                interface Resource extends org.springframework.core.io.InputStreamSource {
                    /**
                     * Determine whether this resource actually exists in physical form.
                     * <p>This method performs a definitive existence check, whereas the
                     * existence of a {@code Resource} handle only guarantees a valid
                     * descriptor handle.
                     */
                    // @ts-ignore
                    exists(): boolean
                    /**
                     * Indicate whether non-empty contents of this resource can be read via
                     * {@link #getInputStream()}.
                     * <p>Will be {@code true} for typical resource descriptors that exist
                     * since it strictly implies {@link #exists()} semantics as of 5.1.
                     * Note that actual content reading may still fail when attempted.
                     * However, a value of {@code false} is a definitive indication
                     * that the resource content cannot be read.
                     * @see #getInputStream()
                     * @see #exists()
                     */
                    // @ts-ignore
                    isReadable(): boolean
                    /**
                     * Indicate whether this resource represents a handle with an open stream.
                     * If {@code true}, the InputStream cannot be read multiple times,
                     * and must be read and closed to avoid resource leaks.
                     * <p>Will be {@code false} for typical resource descriptors.
                     */
                    // @ts-ignore
                    isOpen(): boolean
                    /**
                     * Determine whether this resource represents a file in a file system.
                     * A value of {@code true} strongly suggests (but does not guarantee)
                     * that a {@link #getFile()} call will succeed.
                     * <p>This is conservatively {@code false} by default.
                     * @since 5.0
                     * @see #getFile()
                     */
                    // @ts-ignore
                    isFile(): boolean
                    /**
                     * Return a URL handle for this resource.
                     * @throws IOException if the resource cannot be resolved as URL,
                     *  i.e. if the resource is not available as descriptor
                     */
                    // @ts-ignore
                    getURL(): java.net.URL
                    /**
                     * Return a URI handle for this resource.
                     * @throws IOException if the resource cannot be resolved as URI,
                     *  i.e. if the resource is not available as descriptor
                     * @since 2.5
                     */
                    // @ts-ignore
                    getURI(): java.net.URI
                    /**
                     * Return a File handle for this resource.
                     * @throws java.io.FileNotFoundException if the resource cannot be resolved as
                     *  absolute file path, i.e. if the resource is not available in a file system
                     * @throws IOException in case of general resolution/reading failures
                     * @see #getInputStream()
                     */
                    // @ts-ignore
                    getFile(): java.io.File
                    /**
                     * Return a {@link ReadableByteChannel}.
                     * <p>It is expected that each call creates a <i>fresh</i> channel.
                     * <p>The default implementation returns {@link Channels#newChannel(InputStream)}
                     * with the result of {@link #getInputStream()}.
                     * @return the byte channel for the underlying resource (must not be {#code null})
                     * @throws java.io.FileNotFoundException if the underlying resource doesn't exist
                     * @throws IOException if the content channel could not be opened
                     * @since 5.0
                     * @see #getInputStream()
                     */
                    // @ts-ignore
                    readableChannel(): java.nio.channels.ReadableByteChannel
                    /**
                     * Determine the content length for this resource.
                     * @throws IOException if the resource cannot be resolved
                     *  (in the file system or as some other known physical resource type)
                     */
                    // @ts-ignore
                    contentLength(): long
                    /**
                     * Determine the last-modified timestamp for this resource.
                     * @throws IOException if the resource cannot be resolved
                     *  (in the file system or as some other known physical resource type)
                     */
                    // @ts-ignore
                    lastModified(): long
                    /**
                     * Create a resource relative to this resource.
                     * @param relativePath the relative path (relative to this resource)
                     * @return the resource handle for the relative resource
                     * @throws IOException if the relative resource cannot be determined
                     */
                    // @ts-ignore
                    createRelative(relativePath: string): org.springframework.core.io.Resource
                    /**
                     * Determine a filename for this resource, i.e. typically the last
                     * part of the path: for example, "myfile.txt".
                     * <p>Returns {@code null} if this type of resource does not
                     * have a filename.
                     */
                    // @ts-ignore
                    getFilename(): java.lang.String
                    /**
                     * Return a description for this resource,
                     * to be used for error output when working with the resource.
                     * <p>Implementations are also encouraged to return this value
                     * from their {@code toString} method.
                     * @see Object#toString()
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                }
            }
        }
    }
}
