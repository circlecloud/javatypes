declare namespace javax {
    namespace security {
        namespace cert {
            /**
             * Certificate is not yet valid exception. This is thrown whenever
             * the current {@code Date} or the specified {@code Date}
             * is before the {@code notBefore} date/time in the Certificate
             * validity period.
             * <p><em>Note: The classes in the package {@code javax.security.cert}
             * exist for compatibility with earlier versions of the
             * Java Secure Sockets Extension (JSSE). New applications should instead
             * use the standard Java SE certificate classes located in
             * {@code java.security.cert}.</em></p>
             * @since 1.4
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            class CertificateNotYetValidException extends javax.security.cert.CertificateException {
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
                constructor(message: java.lang.String | string)
            }
        }
    }
}
