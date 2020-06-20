declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Checked exception thrown when an attempt is made to access a file that does
             * not exist.
             * @since 1.7
             */
            // @ts-ignore
            class NoSuchFileException extends java.nio.file.FileSystemException {
                /**
                 * Constructs an instance of this class.
                 * @param file
                 *           a string identifying the file or {#code null} if not known.
                 */
                // @ts-ignore
                constructor(file: string)
                /**
                 * Constructs an instance of this class.
                 * @param file
                 *           a string identifying the file or {#code null} if not known.
                 * @param other
                 *           a string identifying the other file or {#code null} if not known.
                 * @param reason
                 *           a reason message with additional information or {#code null}
                 */
                // @ts-ignore
                constructor(file: string, other: string, reason: string)
            }
        }
    }
}
