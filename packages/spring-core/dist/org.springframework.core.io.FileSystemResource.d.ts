declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link Resource} implementation for {@code java.io.File} and
                 * {@code java.nio.file.Path} handles with a file system target.
                 * Supports resolution as a {@code File} and also as a {@code URL}.
                 * Implements the extended {@link WritableResource} interface.
                 * <p>Note: As of Spring Framework 5.0, this {@link Resource} implementation uses
                 * NIO.2 API for read/write interactions. As of 5.1, it may be constructed with a
                 * {@link java.nio.file.Path} handle in which case it will perform all file system
                 * interactions via NIO.2, only resorting to {@link File} on {@link #getFile()}.
                 * @author Juergen Hoeller
                 * @since 28.12.2003
                 * @see #FileSystemResource(String)
                 * @see #FileSystemResource(File)
                 * @see #FileSystemResource(Path)
                 * @see java.io.File
                 * @see java.nio.file.Files
                 */
                // @ts-ignore
                class FileSystemResource extends org.springframework.core.io.AbstractResource implements org.springframework.core.io.WritableResource {
                    /**
                     * Create a new {@code FileSystemResource} from a file path.
                     * <p>Note: When building relative resources via {@link #createRelative},
                     * it makes a difference whether the specified resource base path here
                     * ends with a slash or not. In the case of "C:/dir1/", relative paths
                     * will be built underneath that root: e.g. relative path "dir2" ->
                     * "C:/dir1/dir2". In the case of "C:/dir1", relative paths will apply
                     * at the same directory level: relative path "dir2" -> "C:/dir2".
                     * @param path a file path
                     * @see #FileSystemResource(Path)
                     */
                    // @ts-ignore
                    constructor(path: string)
                    /**
                     * Create a new {@code FileSystemResource} from a {@link File} handle.
                     * <p>Note: When building relative resources via {@link #createRelative},
                     * the relative path will apply <i>at the same directory level</i>:
                     * e.g. new File("C:/dir1"), relative path "dir2" -> "C:/dir2"!
                     * If you prefer to have relative paths built underneath the given root directory,
                     * use the {@link #FileSystemResource(String) constructor with a file path}
                     * to append a trailing slash to the root path: "C:/dir1/", which indicates
                     * this directory as root for all relative paths.
                     * @param file a File handle
                     * @see #FileSystemResource(Path)
                     * @see #getFile()
                     */
                    // @ts-ignore
                    constructor(file: java.io.File)
                    /**
                     * Create a new {@code FileSystemResource} from a {@link Path} handle,
                     * performing all file system interactions via NIO.2 instead of {@link File}.
                     * <p>In contrast to {@link PathResource}, this variant strictly follows the
                     * general {@link FileSystemResource} conventions, in particular in terms of
                     * path cleaning and {@link #createRelative(String)} handling.
                     * <p>Note: When building relative resources via {@link #createRelative},
                     * the relative path will apply <i>at the same directory level</i>:
                     * e.g. Paths.get("C:/dir1"), relative path "dir2" -> "C:/dir2"!
                     * If you prefer to have relative paths built underneath the given root directory,
                     * use the {@link #FileSystemResource(String) constructor with a file path}
                     * to append a trailing slash to the root path: "C:/dir1/", which indicates
                     * this directory as root for all relative paths. Alternatively, consider
                     * using {@link PathResource#PathResource(Path)} for {@code java.nio.path.Path}
                     * resolution in {@code createRelative}, always nesting relative paths.
                     * @param filePath a Path handle to a file
                     * @since 5.1
                     * @see #FileSystemResource(File)
                     */
                    // @ts-ignore
                    constructor(filePath: java.nio.file.Path)
                    /**
                     * Create a new {@code FileSystemResource} from a {@link FileSystem} handle,
                     * locating the specified path.
                     * <p>This is an alternative to {@link #FileSystemResource(String)},
                     * performing all file system interactions via NIO.2 instead of {@link File}.
                     * @param fileSystem the FileSystem to locate the path within
                     * @param path a file path
                     * @since 5.1.1
                     * @see #FileSystemResource(File)
                     */
                    // @ts-ignore
                    constructor(fileSystem: java.nio.file.FileSystem, path: string)
                    /**
                     * Return the file path for this resource.
                     */
                    // @ts-ignore
                    getPath(): java.lang.String
                    /**
                     * This implementation returns whether the underlying file exists.
                     * @see java.io.File#exists()
                     */
                    // @ts-ignore
                    exists(): boolean
                    /**
                     * This implementation checks whether the underlying file is marked as readable
                     * (and corresponds to an actual file with content, not to a directory).
                     * @see java.io.File#canRead()
                     * @see java.io.File#isDirectory()
                     */
                    // @ts-ignore
                    isReadable(): boolean
                    /**
                     * This implementation opens a NIO file stream for the underlying file.
                     * @see java.io.FileInputStream
                     */
                    // @ts-ignore
                    getInputStream(): java.io.InputStream
                    /**
                     * This implementation checks whether the underlying file is marked as writable
                     * (and corresponds to an actual file with content, not to a directory).
                     * @see java.io.File#canWrite()
                     * @see java.io.File#isDirectory()
                     */
                    // @ts-ignore
                    isWritable(): boolean
                    /**
                     * This implementation opens a FileOutputStream for the underlying file.
                     * @see java.io.FileOutputStream
                     */
                    // @ts-ignore
                    getOutputStream(): java.io.OutputStream
                    /**
                     * This implementation returns a URL for the underlying file.
                     * @see java.io.File#toURI()
                     */
                    // @ts-ignore
                    getURL(): java.net.URL
                    /**
                     * This implementation returns a URI for the underlying file.
                     * @see java.io.File#toURI()
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
                     * This implementation opens a FileChannel for the underlying file.
                     * @see java.nio.channels.FileChannel
                     */
                    // @ts-ignore
                    readableChannel(): java.nio.channels.ReadableByteChannel
                    /**
                     * This implementation opens a FileChannel for the underlying file.
                     * @see java.nio.channels.FileChannel
                     */
                    // @ts-ignore
                    writableChannel(): java.nio.channels.WritableByteChannel
                    /**
                     * This implementation returns the underlying File/Path length.
                     */
                    // @ts-ignore
                    contentLength(): long
                    /**
                     * This implementation returns the underlying File/Path last-modified time.
                     */
                    // @ts-ignore
                    lastModified(): long
                    /**
                     * This implementation creates a FileSystemResource, applying the given path
                     * relative to the path of the underlying file of this resource descriptor.
                     * @see org.springframework.util.StringUtils#applyRelativePath(String, String)
                     */
                    // @ts-ignore
                    createRelative(relativePath: string): org.springframework.core.io.Resource
                    /**
                     * This implementation returns the name of the file.
                     * @see java.io.File#getName()
                     */
                    // @ts-ignore
                    getFilename(): java.lang.String
                    /**
                     * This implementation returns a description that includes the absolute
                     * path of the file.
                     * @see java.io.File#getAbsolutePath()
                     */
                    // @ts-ignore
                    getDescription(): java.lang.String
                    /**
                     * This implementation compares the underlying File references.
                     */
                    // @ts-ignore
                    equals(other: any): boolean
                    /**
                     * This implementation returns the hash code of the underlying File reference.
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
