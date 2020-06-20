declare namespace javax {
    namespace security {
        namespace cert {
            /**
             * Certificate Encoding Exception. This is thrown whenever an error
             * occurs whilst attempting to encode a certificate.
             * <p><em>Note: The classes in the package {@code javax.security.cert}
             * exist for compatibility with earlier versions of the
             * Java Secure Sockets Extension (JSSE). New applications should instead
             * use the standard Java SE certificate classes located in
             * {@code java.security.cert}.</em></p>
             * @since 1.4
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            class CertificateEncodingException extends javax.security.cert.CertificateException {
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
            }
        }
    }
}
