declare namespace java {
    namespace nio {
        namespace file {
            /**
             * A simple visitor of files with default behavior to visit all files and to
             * re-throw I/O errors.
             * <p> Methods in this class may be overridden subject to their general contract.
             * @param <T>     The type of reference to the files
             * @since 1.7
             */
            // @ts-ignore
            class SimpleFileVisitor<T> extends java.lang.Object implements java.nio.file.FileVisitor<T> {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Invoked for a directory before entries in the directory are visited.
                 * <p> Unless overridden, this method returns {@link FileVisitResult#CONTINUE
                 * CONTINUE}.
                 */
                // @ts-ignore
                public preVisitDirectory(dir: T, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
                /**
                 * Invoked for a file in a directory.
                 * <p> Unless overridden, this method returns {@link FileVisitResult#CONTINUE
                 * CONTINUE}.
                 */
                // @ts-ignore
                public visitFile(file: T, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult
                /**
                 * Invoked for a file that could not be visited.
                 * <p> Unless overridden, this method re-throws the I/O exception that prevented
                 * the file from being visited.
                 */
                // @ts-ignore
                public visitFileFailed(file: T, exc: java.io.IOException): java.nio.file.FileVisitResult
                /**
                 * Invoked for a directory after entries in the directory, and all of their
                 * descendants, have been visited.
                 * <p> Unless overridden, this method returns {@link FileVisitResult#CONTINUE
                 * CONTINUE} if the directory iteration completes without an I/O exception;
                 * otherwise this method re-throws the I/O exception that caused the iteration
                 * of the directory to terminate prematurely.
                 */
                // @ts-ignore
                public postVisitDirectory(dir: T, exc: java.io.IOException): java.nio.file.FileVisitResult
            }
        }
    }
}
