declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    /**
                     * Represents a {@link FileVisitor} which will recursively delete a directory
                     * with all its contents.
                     * <p>Example usage:
                     * {@code Files.walkFileTree(dir, DeleteFileVisitor.INSTANCE);}</p>
                     */
                    // @ts-ignore
                    class DeleteFileVisitor extends java.nio.file.SimpleFileVisitor<java.nio.file.Path> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly INSTANCE: org.spongepowered.api.util.file.DeleteFileVisitor
                        // @ts-ignore
                        public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
                        // @ts-ignore
                        public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult
                    }
                }
            }
        }
    }
}
