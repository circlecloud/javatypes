declare namespace java {
    namespace security {
        namespace cert {
            /**
             * An exception that indicates an X.509 certificate is revoked. A
             * {@code CertificateRevokedException} contains additional information
             * about the revoked certificate, such as the date on which the
             * certificate was revoked and the reason it was revoked.
             * @author Sean Mullan
             * @since 1.7
             * @see CertPathValidatorException
             */
            // @ts-ignore
            class CertificateRevokedException extends java.security.cert.CertificateException {
                /**
                 * Constructs a {@code CertificateRevokedException} with
                 * the specified revocation date, reason code, authority name, and map
                 * of extensions.
                 * @param revocationDate the date on which the certificate was revoked. The
                 *     date is copied to protect against subsequent modification.
                 * @param reason the revocation reason
                 * @param extensions a map of X.509 Extensions. Each key is an OID String
                 *     that maps to the corresponding Extension. The map is copied to
                 *     prevent subsequent modification.
                 * @param authority the {#code X500Principal} that represents the name
                 *     of the authority that signed the certificate's revocation status
                 *     information
                 * @throws NullPointerException if {#code revocationDate},
                 *     {@code reason}, {@code authority}, or
                 *     {@code extensions} is {@code null}
                 */
                // @ts-ignore
                constructor(revocationDate: java.util.Date, reason: java.security.cert.CRLReason, authority: javax.security.auth.x500.X500Principal, extensions: java.util.Map<java.lang.String, java.security.cert.Extension>)
                /**
                 * Returns the date on which the certificate was revoked. A new copy is
                 * returned each time the method is invoked to protect against subsequent
                 * modification.
                 * @return the revocation date
                 */
                // @ts-ignore
                getRevocationDate(): java.util.Date
                /**
                 * Returns the reason the certificate was revoked.
                 * @return the revocation reason
                 */
                // @ts-ignore
                getRevocationReason(): java.security.cert.CRLReason
                /**
                 * Returns the name of the authority that signed the certificate's
                 * revocation status information.
                 * @return the {#code X500Principal} that represents the name of the
                 *      authority that signed the certificate's revocation status information
                 */
                // @ts-ignore
                getAuthorityName(): javax.security.auth.x500.X500Principal
                /**
                 * Returns the invalidity date, as specified in the Invalidity Date
                 * extension of this {@code CertificateRevokedException}. The
                 * invalidity date is the date on which it is known or suspected that the
                 * private key was compromised or that the certificate otherwise became
                 * invalid. This implementation calls {@code getExtensions()} and
                 * checks the returned map for an entry for the Invalidity Date extension
                 * OID ("2.5.29.24"). If found, it returns the invalidity date in the
                 * extension; otherwise null. A new Date object is returned each time the
                 * method is invoked to protect against subsequent modification.
                 * @return the invalidity date, or {#code null} if not specified
                 */
                // @ts-ignore
                getInvalidityDate(): java.util.Date
                /**
                 * Returns a map of X.509 extensions containing additional information
                 * about the revoked certificate, such as the Invalidity Date
                 * Extension. Each key is an OID String that maps to the corresponding
                 * Extension.
                 * @return an unmodifiable map of X.509 extensions, or an empty map
                 *     if there are no extensions
                 */
                // @ts-ignore
                getExtensions(): java.util.Map<java.lang.String, java.security.cert.Extension>
                // @ts-ignore
                getMessage(): java.lang.String
            }
        }
    }
}
