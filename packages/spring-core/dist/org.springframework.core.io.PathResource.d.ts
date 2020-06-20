declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link Resource} implementation for {@link java.nio.file.Path} handles,
                 * performing all operations and transformations via the {@code Path} API.
                 * Supports resolution as a {@link File} and also as a {@link URL}.
                 * Implements the extended {@link WritableResource} interface.
                 * <p>Note: As of 5.1, {@link java.nio.file.Path} support is also available
                 * in {@link FileSystemResource#FileSystemResource(Path) FileSystemResource},
                 * applying Spring's standard String-based path transformations but
                 * performing all operations via the {@link java.nio.file.Files} API.
                 * This {@code PathResource} is effectively a pure {@code java.nio.path.Path}
                 * based alternative with different {@code createRelative} behavior.
                 * @author Philippe Marschall
                 * @author Juergen Hoeller
                 * @since 4.0
                 * @see java.nio.file.Path
                 * @see java.nio.file.Files
                 * @see FileSystemResource
                 */
                // @ts-ignore
                class PathResource extends org.springframework.core.io.AbstractResource implements org.springframework.core.io.WritableResource {
                    /**
                     * Create a new PathResource from a Path handle.
                     * <p>Note: Unlike {@link FileSystemResource}, when building relative resources
                     * via {@link #createRelative}, the relative path will be built <i>underneath</i>
                     * the given root: e.g. Paths.get("C:/dir1/"), relative path "dir2" -> "C:/dir1/dir2"!
                     * @param path a Path handle
                     */
                    // @ts-ignore
                    constructor(path: java.nio.file.Path)
                    /**
                     * Create a new PathResource from a Path handle.
                     * <p>Note: Unlike {@link FileSystemResource}, when building relative resources
                     * via {@link #createRelative}, the relative path will be built <i>underneath</i>
                     * the given root: e.g. Paths.get("C:/dir1/"), relative path "dir2" -> "C:/dir1/dir2"!
                     * @param path a path
                     * @see java.nio.file.Paths#get(String, String...)
                     */
                    // @ts-ignore
                    constructor(path: string)
                    /**
                     * Create a new PathResource from a Path handle.
                     * <p>Note: Unlike {@link FileSystemResource}, when building relative resources
                     * via {@link #createRelative}, the relative path will be built <i>underneath</i>
                     * the given root: e.g. Paths.get("C:/dir1/"), relative path "dir2" -> "C:/dir1/dir2"!
                     * @param uri a path URI
                     * @see java.nio.file.Paths#get(URI)
                     */
                    // @ts-ignore
                    constructor(uri: java.net.URI)
                    /**
                     * Return the file path for this resource.
                     */
                    // @ts-ignore
                    getPath(): java.lang.String
                    /**
                     * This implementation returns whether the underlying file exists.
                     * @see java.nio.file.Files#exists(Path, java.nio.file.LinkOption...)
                     */
                    // @ts-ignore
                    exists(): boolean
                    /**
                     * This implementation checks whether the underlying file is marked as readable
                     * (and corresponds to an actual file with content, not to a directory).
                     * @see java.nio.file.Files#isReadable(Path)
                     * @see java.nio.file.Files#isDirectory(Path, java.nio.file.LinkOption...)
                     */
                    // @ts-ignore
                    isReadable(): boolean
                    /**
                     * This implementation opens a InputStream for the underlying file.
                     * @see java.nio.file.spi.FileSystemProvider#newInputStream(Path, OpenOption...)
                     */
                    // @ts-ignore
                    getInputStream(): java.io.InputStream
                    /**
                     * This implementation checks whether the underlying file is marked as writable
                     * (and corresponds to an actual file with content, not to a directory).
                     * @see java.nio.file.Files#isWritable(Path)
                     * @see java.nio.file.Files#isDirectory(Path, java.nio.file.LinkOption...)
                     */
                    // @ts-ignore
                    isWritable(): boolean
                    /**
                     * This implementation opens a OutputStream for the underlying file.
                     * @see java.nio.file.spi.FileSystemProvider#newOutputStream(Path, OpenOption...)
                     */
                    // @ts-ignore
                    getOutputStream(): java.io.OutputStream
                    /**
                     * This implementation returns a URL for the underlying file.
                     * @see java.nio.file.Path#toUri()
                     * @see java.net.URI#toURL()
                     */
                    // @ts-ignore
                    getURL(): java.net.URL
                    /**
                     * This implementation returns a URI for the underlying file.
                     * @see java.nio.file.Path#toUri()
                     */
                    // @ts-ignore
                    getURI(): java.net.URI
                    /**
                     * This implementation always indicates a file.
                     */
                    // @ts-ignore
                    isFile(): boolean
                    /**
                     * This implementation returns the underlying File reference.
                     */
                    // @ts-ignore
                    getFile(): java.io.File
                    /**
                     * This implementation opens a Channel for the underlying file.
                     * @see Files#newByteChannel(Path, OpenOption...)
                     */
                    // @ts-ignore
                    readableChannel(): java.nio.channels.ReadableByteChannel
                    /**
                     * This implementation opens a Channel for the underlying file.
                     * @see Files#newByteChannel(Path, OpenOption...)
                     */
                    // @ts-ignore
                    writableChannel(): java.nio.channels.WritableByteChannel
                    /**
                     * This implementation returns the underlying file's length.
                     */
                    // @ts-ignore
                    contentLength(): long
                    /**
                     * This implementation returns the underlying File's timestamp.
                     * @see java.nio.file.Files#getLastModifiedTime(Path, java.nio.file.LinkOption...)
                     */
                    // @ts-ignore
                    lastModified(): long
                    /**
                     * This implementation creates a PathResource, applying the given path
                     * relative to the path of the underlying file of this resource descriptor.
                     * @see java.nio.file.Path#resolve(String)
                     */
                    // @ts-ignore
                    createRelative(relativePath: string): org.springframework.core.io.Resource
                    /**
                     * This implementation returns the name of the file.
                     * @see java.nio.file.Path#getFileName()
                     */
                    // @ts-ignore
                    getFilename(): java.lang.String
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * This implementation compares the underlying Path references.
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * This implementation returns the hash code of the underlying Path reference.
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
