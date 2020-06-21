declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * Basic attributes associated with a file in a file system.
                 * <p> Basic file attributes are attributes that are common to many file systems
                 * and consist of mandatory and optional file attributes as defined by this
                 * interface.
                 * <p> <b>Usage Example:</b>
                 * <pre>
                 * Path file = ...
                 * BasicFileAttributes attrs = Files.readAttributes(file, BasicFileAttributes.class);
                 * </pre>
                 * @since 1.7
                 * @see BasicFileAttributeView
                 */
                // @ts-ignore
                interface BasicFileAttributes {
                    /**
                     * Returns the time of last modification.
                     * <p> If the file system implementation does not support a time stamp
                     * to indicate the time of last modification then this method returns an
                     * implementation specific default value, typically a {@code FileTime}
                     * representing the epoch (1970-01-01T00:00:00Z).
                     * @return a {#code FileTime} representing the time the file was last
                     *           modified
                     */
                    // @ts-ignore
                    lastModifiedTime(): java.nio.file.attribute.FileTime
                    /**
                     * Returns the time of last access.
                     * <p> If the file system implementation does not support a time stamp
                     * to indicate the time of last access then this method returns
                     * an implementation specific default value, typically the {@link
                     * #lastModifiedTime() last-modified-time} or a {@code FileTime}
                     * representing the epoch (1970-01-01T00:00:00Z).
                     * @return a {#code FileTime} representing the time of last access
                     */
                    // @ts-ignore
                    lastAccessTime(): java.nio.file.attribute.FileTime
                    /**
                     * Returns the creation time. The creation time is the time that the file
                     * was created.
                     * <p> If the file system implementation does not support a time stamp
                     * to indicate the time when the file was created then this method returns
                     * an implementation specific default value, typically the {@link
                     * #lastModifiedTime() last-modified-time} or a {@code FileTime}
                     * representing the epoch (1970-01-01T00:00:00Z).
                     * @return a {#code FileTime} representing the time the file was created
                     */
                    // @ts-ignore
                    creationTime(): java.nio.file.attribute.FileTime
                    /**
                     * Tells whether the file is a regular file with opaque content.
                     * @return {#code true} if the file is a regular file with opaque content
                     */
                    // @ts-ignore
                    isRegularFile(): boolean
                    /**
                     * Tells whether the file is a directory.
                     * @return {#code true} if the file is a directory
                     */
                    // @ts-ignore
                    isDirectory(): boolean
                    /**
                     * Tells whether the file is a symbolic link.
                     * @return {#code true} if the file is a symbolic link
                     */
                    // @ts-ignore
                    isSymbolicLink(): boolean
                    /**
                     * Tells whether the file is something other than a regular file, directory,
                     * or symbolic link.
                     * @return {#code true} if the file something other than a regular file,
                     *          directory or symbolic link
                     */
                    // @ts-ignore
                    isOther(): boolean
                    /**
                     * Returns the size of the file (in bytes). The size may differ from the
                     * actual size on the file system due to compression, support for sparse
                     * files, or other reasons. The size of files that are not {@link
                     * #isRegularFile regular} files is implementation specific and
                     * therefore unspecified.
                     * @return the file size, in bytes
                     */
                    // @ts-ignore
                    size(): number /*long*/
                    /**
                     * Returns an object that uniquely identifies the given file, or {@code
                     * null} if a file key is not available. On some platforms or file systems
                     * it is possible to use an identifier, or a combination of identifiers to
                     * uniquely identify a file. Such identifiers are important for operations
                     * such as file tree traversal in file systems that support <a
                     * href="../package-summary.html#links">symbolic links</a> or file systems
                     * that allow a file to be an entry in more than one directory. On UNIX file
                     * systems, for example, the <em>device ID</em> and <em>inode</em> are
                     * commonly used for such purposes.
                     * <p> The file key returned by this method can only be guaranteed to be
                     * unique if the file system and files remain static. Whether a file system
                     * re-uses identifiers after a file is deleted is implementation dependent and
                     * therefore unspecified.
                     * <p> File keys returned by this method can be compared for equality and are
                     * suitable for use in collections. If the file system and files remain static,
                     * and two files are the {@link java.nio.file.Files#isSameFile same} with
                     * non-{@code null} file keys, then their file keys are equal.
                     * @return an object that uniquely identifies the given file, or {#code null}
                     * @see java.nio.file.Files#walkFileTree
                     */
                    // @ts-ignore
                    fileKey(): any
                }
            }
        }
    }
}
