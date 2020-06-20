declare namespace java {
    namespace security {
        namespace cert {
            /**
             * Certificate is not yet valid exception. This is thrown whenever
             * the current {@code Date} or the specified {@code Date}
             * is before the {@code notBefore} date/time in the Certificate
             * validity period.
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            class CertificateNotYetValidException extends java.security.cert.CertificateException {
                /**
                 * Constructs a CertificateNotYetValidException with no detail message. A
                 * detail message is a String that describes this particular
                 * exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a CertificateNotYetValidException with the specified detail
                 * message. A detail message is a String that describes this
                 * particular exception.
                 * @param message the detail message.
                 */
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
