declare namespace javax {
    namespace security {
        namespace cert {
            /**
             * <p>Abstract class for managing a variety of identity certificates.
             * An identity certificate is a guarantee by a principal that
             * a public key is that of another principal.  (A principal represents
             * an entity such as an individual user, a group, or a corporation.)
             * <p>
             * This class is an abstraction for certificates that have different
             * formats but important common uses.  For example, different types of
             * certificates, such as X.509 and PGP, share general certificate
             * functionality (like encoding and verifying) and
             * some types of information (like a public key).
             * <p>
             * X.509, PGP, and SDSI certificates can all be implemented by
             * subclassing the Certificate class, even though they contain different
             * sets of information, and they store and retrieve the information in
             * different ways.
             * <p><em>Note: The classes in the package {@code javax.security.cert}
             * exist for compatibility with earlier versions of the
             * Java Secure Sockets Extension (JSSE). New applications should instead
             * use the standard Java SE certificate classes located in
             * {@code java.security.cert}.</em></p>
             * @since 1.4
             * @see X509Certificate
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            abstract class Certificate extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Compares this certificate for equality with the specified
                 * object. If the {@code other} object is an
                 * {@code instanceof} {@code Certificate}, then
                 * its encoded form is retrieved and compared with the
                 * encoded form of this certificate.
                 * @param other the object to test for equality with this certificate.
                 * @return true if the encoded forms of the two certificates
                 *          match, false otherwise.
                 */
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                /**
                 * Returns a hashcode value for this certificate from its
                 * encoded form.
                 * @return the hashcode value.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns the encoded form of this certificate. It is
                 * assumed that each certificate type would have only a single
                 * form of encoding; for example, X.509 certificates would
                 * be encoded as ASN.1 DER.
                 * @return encoded form of this certificate
                 * @exception CertificateEncodingException on internal certificate
                 *             encoding failure
                 */
                // @ts-ignore
                public abstract getEncoded(): number /*byte*/[]
                /**
                 * Verifies that this certificate was signed using the
                 * private key that corresponds to the specified public key.
                 * @param key the PublicKey used to carry out the verification.
                 * @exception NoSuchAlgorithmException on unsupported signature
                 *  algorithms.
                 * @exception InvalidKeyException on incorrect key.
                 * @exception NoSuchProviderException if there's no default provider.
                 * @exception SignatureException on signature errors.
                 * @exception CertificateException on encoding errors.
                 */
                // @ts-ignore
                public abstract verify(key: java.security.PublicKey): void
                /**
                 * Verifies that this certificate was signed using the
                 * private key that corresponds to the specified public key.
                 * This method uses the signature verification engine
                 * supplied by the specified provider.
                 * @param key the PublicKey used to carry out the verification.
                 * @param sigProvider the name of the signature provider.
                 * @exception NoSuchAlgorithmException on unsupported signature algorithms.
                 * @exception InvalidKeyException on incorrect key.
                 * @exception NoSuchProviderException on incorrect provider.
                 * @exception SignatureException on signature errors.
                 * @exception CertificateException on encoding errors.
                 */
                // @ts-ignore
                public abstract verify(key: java.security.PublicKey, sigProvider: java.lang.String | string): void
                /**
                 * Returns a string representation of this certificate.
                 * @return a string representation of this certificate.
                 */
                // @ts-ignore
                public abstract toString(): string
                /**
                 * Gets the public key from this certificate.
                 * @return the public key.
                 */
                // @ts-ignore
                public abstract getPublicKey(): java.security.PublicKey
            }
        }
    }
}
