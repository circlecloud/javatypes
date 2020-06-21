declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Checked exception thrown when a file system operation is denied, typically
             * due to a file permission or other access check.
             * <p> This exception is not related to the {@link
             * java.security.AccessControlException AccessControlException} or {@link
             * SecurityException} thrown by access controllers or security managers when
             * access to a file is denied.
             * @since 1.7
             */
            // @ts-ignore
            class AccessDeniedException extends java.nio.file.FileSystemException {
                /**
                 * Constructs an instance of this class.
                 * @param file
                 *           a string identifying the file or {#code null} if not known
                 */
                // @ts-ignore
                constructor(file: java.lang.String | string)
                /**
                 * Constructs an instance of this class.
                 * @param file
                 *           a string identifying the file or {#code null} if not known
                 * @param other
                 *           a string identifying the other file or {#code null} if not known
                 * @param reason
                 *           a reason message with additional information or {#code null}
                 */
                // @ts-ignore
                constructor(file: java.lang.String | string, other: java.lang.String | string, reason: java.lang.String | string)
            }
        }
    }
}
