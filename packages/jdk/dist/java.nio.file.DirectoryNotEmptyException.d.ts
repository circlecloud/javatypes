declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Checked exception thrown when a file system operation fails because a
             * directory is not empty.
             * @since 1.7
             */
            // @ts-ignore
            class DirectoryNotEmptyException extends java.nio.file.FileSystemException {
                /**
                 * Constructs an instance of this class.
                 * @param dir
                 *           a string identifying the directory or {#code null} if not known
                 */
                // @ts-ignore
                constructor(dir: java.lang.String | string)
            }
        }
    }
}
