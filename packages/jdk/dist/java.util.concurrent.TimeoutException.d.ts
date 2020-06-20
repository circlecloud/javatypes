declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Exception thrown when a blocking operation times out.  Blocking
             * operations for which a timeout is specified need a means to
             * indicate that the timeout has occurred. For many such operations it
             * is possible to return a value that indicates timeout; when that is
             * not possible or desirable then {@code TimeoutException} should be
             * declared and thrown.
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            class TimeoutException extends java.lang.Exception {
                /**
                 * Constructs a {@code TimeoutException} with no specified detail
                 * message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code TimeoutException} with the specified detail
                 * message.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
