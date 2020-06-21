declare namespace java {
    namespace nio {
        namespace file {
            /**
             * The result type of a {@link FileVisitor FileVisitor}.
             * @since 1.7
             * @see Files#walkFileTree
             */
            // @ts-ignore
            class FileVisitResult extends java.lang.Enum<java.nio.file.FileVisitResult> {
                /**
                 * Continue. When returned from a {@link FileVisitor#preVisitDirectory
                 * preVisitDirectory} method then the entries in the directory should also
                 * be visited.
                 */
                // @ts-ignore
                readonly CONTINUE: java.nio.file.FileVisitResult
                /**
                 * Terminate.
                 */
                // @ts-ignore
                readonly TERMINATE: java.nio.file.FileVisitResult
                /**
                 * Continue without visiting the entries in this directory. This result
                 * is only meaningful when returned from the {@link
                 * FileVisitor#preVisitDirectory preVisitDirectory} method; otherwise
                 * this result type is the same as returning {@link #CONTINUE}.
                 */
                // @ts-ignore
                readonly SKIP_SUBTREE: java.nio.file.FileVisitResult
                /**
                 * Continue without visiting the <em>siblings</em> of this file or directory.
                 * If returned from the {@link FileVisitor#preVisitDirectory
                 * preVisitDirectory} method then the entries in the directory are also
                 * skipped and the {@link FileVisitor#postVisitDirectory postVisitDirectory}
                 * method is not invoked.
                 */
                // @ts-ignore
                readonly SKIP_SIBLINGS: java.nio.file.FileVisitResult
                // @ts-ignore
                values(): java.nio.file.FileVisitResult[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.nio.file.FileVisitResult
            }
        }
    }
}
