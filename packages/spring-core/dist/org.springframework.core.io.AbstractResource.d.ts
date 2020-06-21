declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Convenience base class for {@link Resource} implementations,
                 * pre-implementing typical behavior.
                 * <p>The "exists" method will check whether a File or InputStream can
                 * be opened; "isOpen" will always return false; "getURL" and "getFile"
                 * throw an exception; and "toString" will return the description.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 28.12.2003
                 */
                // @ts-ignore
                abstract class AbstractResource extends java.lang.Object implements org.springframework.core.io.Resource {
                    // @ts-ignore
                    constructor()
                    /**
                     * This implementation checks whether a File can be opened,
                     * falling back to whether an InputStream can be opened.
                     * This will cover both directories and content resources.
                     */
                    // @ts-ignore
                    public exists(): boolean
                    /**
                     * This implementation always returns {@code true} for a resource
                     * that {@link #exists() exists} (revised as of 5.1).
                     */
                    // @ts-ignore
                    public isReadable(): boolean
                    /**
                     * This implementation always returns {@code false}.
                     */
                    // @ts-ignore
                    public isOpen(): boolean
                    /**
                     * This implementation always returns {@code false}.
                     */
                    // @ts-ignore
                    public isFile(): boolean
                    /**
                     * This implementation throws a FileNotFoundException, assuming
                     * that the resource cannot be resolved to a URL.
                     */
                    // @ts-ignore
                    public getURL(): java.net.URL
                    /**
                     * This implementation builds a URI based on the URL returned
                     * by {@link #getURL()}.
                     */
                    // @ts-ignore
                    public getURI(): java.net.URI
                    /**
                     * This implementation throws a FileNotFoundException, assuming
                     * that the resource cannot be resolved to an absolute file path.
                     */
                    // @ts-ignore
                    public getFile(): java.io.File
                    /**
                     * This implementation returns {@link Channels#newChannel(InputStream)}
                     * with the result of {@link #getInputStream()}.
                     * <p>This is the same as in {@link Resource}'s corresponding default method
                     * but mirrored here for efficient JVM-level dispatching in a class hierarchy.
                     */
                    // @ts-ignore
                    public readableChannel(): java.nio.channels.ReadableByteChannel
                    /**
                     * This method reads the entire InputStream to determine the content length.
                     * <p>For a custom sub-class of {@code InputStreamResource}, we strongly
                     * recommend overriding this method with a more optimal implementation, e.g.
                     * checking File length, or possibly simply returning -1 if the stream can
                     * only be read once.
                     * @see #getInputStream()
                     */
                    // @ts-ignore
                    public contentLength(): number /*long*/
                    /**
                     * This implementation checks the timestamp of the underlying File,
                     * if available.
                     * @see #getFileForLastModifiedCheck()
                     */
                    // @ts-ignore
                    public lastModified(): number /*long*/
                    /**
                     * Determine the File to use for timestamp checking.
                     * <p>The default implementation delegates to {@link #getFile()}.
                     * @return the File to use for timestamp checking (never {#code null})
                     * @throws FileNotFoundException if the resource cannot be resolved as
                     *  an absolute file path, i.e. is not available in a file system
                     * @throws IOException in case of general resolution/reading failures
                     */
                    // @ts-ignore
                    getFileForLastModifiedCheck(): java.io.File
                    /**
                     * This implementation throws a FileNotFoundException, assuming
                     * that relative resources cannot be created for this resource.
                     */
                    // @ts-ignore
                    public createRelative(relativePath: java.lang.String | string): org.springframework.core.io.Resource
                    /**
                     * This implementation always returns {@code null},
                     * assuming that this resource type does not have a filename.
                     */
                    // @ts-ignore
                    public getFilename(): string
                    /**
                     * This implementation compares description strings.
                     * @see #getDescription()
                     */
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    /**
                     * This implementation returns the description's hash code.
                     * @see #getDescription()
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * This implementation returns the description of this resource.
                     * @see #getDescription()
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
