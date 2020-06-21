declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Thrown when a file system operation fails on one or two files. This class is
             * the general class for file system exceptions.
             * @since 1.7
             */
            // @ts-ignore
            class FileSystemException extends java.io.IOException {
                /**
                 * Constructs an instance of this class. This constructor should be used
                 * when an operation involving one file fails and there isn't any additional
                 * information to explain the reason.
                 * @param file
                 *           a string identifying the file or {#code null} if not known.
                 */
                // @ts-ignore
                constructor(file: java.lang.String | string)
                /**
                 * Constructs an instance of this class. This constructor should be used
                 * when an operation involving two files fails, or there is additional
                 * information to explain the reason.
                 * @param file
                 *           a string identifying the file or {#code null} if not known.
                 * @param other
                 *           a string identifying the other file or {#code null} if there
                 *           isn't another file or if not known
                 * @param reason
                 *           a reason message with additional information or {#code null}
                 */
                // @ts-ignore
                constructor(file: java.lang.String | string, other: java.lang.String | string, reason: java.lang.String | string)
                /**
                 * Returns the file used to create this exception.
                 * @return the file (can be {#code null})
                 */
                // @ts-ignore
                getFile(): string
                /**
                 * Returns the other file used to create this exception.
                 * @return the other file (can be {#code null})
                 */
                // @ts-ignore
                getOtherFile(): string
                /**
                 * Returns the string explaining why the file system operation failed.
                 * @return the string explaining why the file system operation failed
                 */
                // @ts-ignore
                getReason(): string
                /**
                 * Returns the detail message string.
                 */
                // @ts-ignore
                getMessage(): string
            }
        }
    }
}
