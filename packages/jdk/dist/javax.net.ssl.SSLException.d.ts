declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Indicates some kind of error detected by an SSL subsystem.
             * This class is the general class of exceptions produced
             * by failed SSL-related operations.
             * @since 1.4
             * @author David Brownell
             */
            // @ts-ignore
            class SSLException extends java.io.IOException {
                /**
                 * Constructs an exception reporting an error found by
                 * an SSL subsystem.
                 * @param reason describes the problem.
                 */
                // @ts-ignore
                constructor(reason: java.lang.String | string)
                /**
                 * Creates a <code>SSLException</code> with the specified
                 * detail message and cause.
                 * @param message the detail message (which is saved for later retrieval
                 *           by the {#link #getMessage()} method).
                 * @param cause the cause (which is saved for later retrieval by the
                 *           {#link #getCause()} method).  (A <tt>null</tt> value is
                 *           permitted, and indicates that the cause is nonexistent or
                 *           unknown.)
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Creates a <code>SSLException</code> with the specified cause
                 * and a detail message of <tt>(cause==null ? null : cause.toString())</tt>
                 * (which typically contains the class and detail message of
                 * <tt>cause</tt>).
                 * @param cause the cause (which is saved for later retrieval by the
                 *           {#link #getCause()} method).  (A <tt>null</tt> value is
                 *           permitted, and indicates that the cause is nonexistent or
                 *           unknown.)
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
            }
        }
    }
}
