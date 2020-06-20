declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Runtime exception thrown if an I/O error is encountered when iterating over
             * the entries in a directory. The I/O error is retrieved as an {@link
             * IOException} using the {@link #getCause() getCause()} method.
             * @since 1.7
             * @see DirectoryStream
             */
            // @ts-ignore
            class DirectoryIteratorException extends java.util.ConcurrentModificationException {
                /**
                 * Constructs an instance of this class.
                 * @param cause
                 *           the {#code IOException} that caused the directory iteration
                 *           to fail
                 * @throws NullPointerException
                 *           if the cause is {#code null}
                 */
                // @ts-ignore
                constructor(cause: java.io.IOException)
                /**
                 * Returns the cause of this exception.
                 * @return the cause
                 */
                // @ts-ignore
                getCause(): java.io.IOException
            }
        }
    }
}
