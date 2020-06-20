declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    /**
                     * Represents a {@link FileVisitor} which will create a copy of a directory
                     * and its contents.
                     * <p>Example usage:<br>
                     * {@code Files.walkFileTree(dir, new CopyFileVisitor(target);}</p>
                     */
                    // @ts-ignore
                    class CopyFileVisitor extends java.nio.file.SimpleFileVisitor<java.nio.file.Path> {
                        /**
                         * Constructs a new {@link CopyFileVisitor} which will copy the visited
                         * file paths to the specified target directory.
                         * <p><b>Note:</b> The target directory must not exist since the visitor
                         * will also copy the root directory to the specified location.</p>
                         * @param target The path to copy the visited files to
                         * @param options Optional options for the copy operations
                         */
                        // @ts-ignore
                        constructor(target: java.nio.file.Path, ...options: java.nio.file.CopyOption[])
                        // @ts-ignore
                        preVisitDirectory(dir: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
                        // @ts-ignore
                        visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
                    }
                }
            }
        }
    }
}
