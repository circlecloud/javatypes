declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Checked exception thrown when a file system loop, or cycle, is encountered.
             * @since 1.7
             * @see Files#walkFileTree
             */
            // @ts-ignore
            class FileSystemLoopException extends java.nio.file.FileSystemException {
                /**
                 * Constructs an instance of this class.
                 * @param file
                 *           a string identifying the file causing the cycle or {#code null} if
                 *           not known
                 */
                // @ts-ignore
                constructor(file: string)
            }
        }
    }
}
