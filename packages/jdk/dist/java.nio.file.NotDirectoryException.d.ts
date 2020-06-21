declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Checked exception thrown when a file system operation, intended for a
             * directory, fails because the file is not a directory.
             * @since 1.7
             */
            // @ts-ignore
            class NotDirectoryException extends java.nio.file.FileSystemException {
                /**
                 * Constructs an instance of this class.
                 * @param file
                 *           a string identifying the file or {#code null} if not known
                 */
                // @ts-ignore
                constructor(file: java.lang.String | string)
            }
        }
    }
}
