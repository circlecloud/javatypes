declare namespace java {
    namespace security {
        namespace cert {
            /**
             * Certificate Expired Exception. This is thrown whenever the current
             * {@code Date} or the specified {@code Date} is after the
             * {@code notAfter} date/time specified in the validity period
             * of the certificate.
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            class CertificateExpiredException extends java.security.cert.CertificateException {
                /**
                 * Constructs a CertificateExpiredException with no detail message. A
                 * detail message is a String that describes this particular
                 * exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a CertificateExpiredException with the specified detail
                 * message. A detail message is a String that describes this
                 * particular exception.
                 * @param message the detail message.
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
            }
        }
    }
}
