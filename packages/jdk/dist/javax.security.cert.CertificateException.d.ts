declare namespace javax {
    namespace security {
        namespace cert {
            /**
             * This exception indicates one of a variety of certificate problems.
             * <p><em>Note: The classes in the package {@code javax.security.cert}
             * exist for compatibility with earlier versions of the
             * Java Secure Sockets Extension (JSSE). New applications should instead
             * use the standard Java SE certificate classes located in
             * {@code java.security.cert}.</em></p>
             * @author Hemma Prafullchandra
             * @since 1.4
             * @see Certificate
             */
            // @ts-ignore
            class CertificateException extends java.lang.Exception {
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
            }
        }
    }
}
