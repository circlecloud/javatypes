declare namespace java {
    namespace security {
        namespace cert {
            /**
             * CRL (Certificate Revocation List) Exception.
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            class CRLException extends java.security.GeneralSecurityException {
                /**
                 * Constructs a CRLException with no detail message. A
                 * detail message is a String that describes this particular
                 * exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a CRLException with the specified detail
                 * message. A detail message is a String that describes this
                 * particular exception.
                 * @param message the detail message.
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Creates a {@code CRLException} with the specified
                 * detail message and cause.
                 * @param message the detail message (which is saved for later retrieval
                 *         by the {#link #getMessage()} method).
                 * @param cause the cause (which is saved for later retrieval by the
                 *         {#link #getCause()} method).  (A {@code null} value is permitted,
                 *         and indicates that the cause is nonexistent or unknown.)
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Creates a {@code CRLException} with the specified cause
                 * and a detail message of {@code (cause==null ? null : cause.toString())}
                 * (which typically contains the class and detail message of
                 * {@code cause}).
                 * @param cause the cause (which is saved for later retrieval by the
                 *         {#link #getCause()} method).  (A {@code null} value is permitted,
                 *         and indicates that the cause is nonexistent or unknown.)
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
            }
        }
    }
}
