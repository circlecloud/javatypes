declare namespace java {
    namespace security {
        namespace cert {
            /**
             * This exception indicates one of a variety of certificate problems.
             * @author Hemma Prafullchandra
             * @see Certificate
             */
            // @ts-ignore
            class CertificateException extends java.security.GeneralSecurityException {
                /**
                 * Constructs a certificate exception with no detail message. A detail
                 * message is a String that describes this particular exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a certificate exception with the given detail
                 * message. A detail message is a String that describes this
                 * particular exception.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Creates a {@code CertificateException} with the specified
                 * detail message and cause.
                 * @param message the detail message (which is saved for later retrieval
                 *         by the {#link #getMessage()} method).
                 * @param cause the cause (which is saved for later retrieval by the
                 *         {#link #getCause()} method).  (A {@code null} value is permitted,
                 *         and indicates that the cause is nonexistent or unknown.)
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
                /**
                 * Creates a {@code CertificateException} with the specified cause
                 * and a detail message of {@code (cause==null ? null : cause.toString())}
                 * (which typically contains the class and detail message of
                 * {@code cause}).
                 * @param cause the cause (which is saved for later retrieval by the
                 *         {#link #getCause()} method).  (A {@code null} value is permitted,
                 *         and indicates that the cause is nonexistent or unknown.)
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
