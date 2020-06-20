declare namespace java {
    namespace security {
        namespace cert {
            /**
             * Certificate Encoding Exception. This is thrown whenever an error
             * occurs while attempting to encode a certificate.
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            class CertificateEncodingException extends java.security.cert.CertificateException {
                /**
                 * Constructs a CertificateEncodingException with no detail message. A
                 * detail message is a String that describes this particular
                 * exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a CertificateEncodingException with the specified detail
                 * message. A detail message is a String that describes this
                 * particular exception.
                 * @param message the detail message.
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Creates a {@code CertificateEncodingException} with the specified
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
                 * Creates a {@code CertificateEncodingException}
                 * with the specified cause and a detail message of
                 * {@code (cause==null ? null : cause.toString())}
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
