declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Utility methods for working with the file system.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @since 2.5.3
             * @see java.io.File
             * @see java.nio.file.Path
             * @see java.nio.file.Files
             */
            // @ts-ignore
            class FileSystemUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Delete the supplied {@link File} - for directories,
                 * recursively delete any nested directories or files as well.
                 * <p>Note: Like {@link File#delete()}, this method does not throw any
                 * exception but rather silently returns {@code false} in case of I/O
                 * errors. Consider using {@link #deleteRecursively(Path)} for NIO-style
                 * handling of I/O errors, clearly differentiating between non-existence
                 * and failure to delete an existing file.
                 * @param root the root {#code File} to delete
                 * @return {#code true} if the {@code File} was successfully deleted,
                 *  otherwise {@code false}
                 */
                // @ts-ignore
                deleteRecursively(root: java.io.File): boolean
                /**
                 * Delete the supplied {@link File} &mdash; for directories,
                 * recursively delete any nested directories or files as well.
                 * @param root the root {#code File} to delete
                 * @return {#code true} if the {@code File} existed and was deleted,
                 *  or {@code false} if it did not exist
                 * @throws IOException in the case of I/O errors
                 * @since 5.0
                 */
                // @ts-ignore
                deleteRecursively(root: java.nio.file.Path): boolean
                /**
                 * Recursively copy the contents of the {@code src} file/directory
                 * to the {@code dest} file/directory.
                 * @param src the source directory
                 * @param dest the destination directory
                 * @throws IOException in the case of I/O errors
                 */
                // @ts-ignore
                copyRecursively(src: java.io.File, dest: java.io.File): void
                /**
                 * Recursively copy the contents of the {@code src} file/directory
                 * to the {@code dest} file/directory.
                 * @param src the source directory
                 * @param dest the destination directory
                 * @throws IOException in the case of I/O errors
                 * @since 5.0
                 */
                // @ts-ignore
                copyRecursively(src: java.nio.file.Path, dest: java.nio.file.Path): void
            }
        }
    }
}
