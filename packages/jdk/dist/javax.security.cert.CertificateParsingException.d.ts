declare namespace javax {
    namespace security {
        namespace cert {
            /**
             * Certificate Parsing Exception. This is thrown whenever
             * invalid DER encoded certificate is parsed or unsupported DER features
             * are found in the Certificate.
             * <p><em>Note: The classes in the package {@code javax.security.cert}
             * exist for compatibility with earlier versions of the
             * Java Secure Sockets Extension (JSSE). New applications should instead
             * use the standard Java SE certificate classes located in
             * {@code java.security.cert}.</em></p>
             * @since 1.4
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            class CertificateParsingException extends javax.security.cert.CertificateException {
                /**
                 * Constructs a CertificateParsingException with no detail message. A
                 * detail message is a String that describes this particular
                 * exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a CertificateParsingException with the specified detail
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
