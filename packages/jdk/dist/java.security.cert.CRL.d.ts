declare namespace java {
    namespace security {
        namespace cert {
            /**
             * This class is an abstraction of certificate revocation lists (CRLs) that
             * have different formats but important common uses. For example, all CRLs
             * share the functionality of listing revoked certificates, and can be queried
             * on whether or not they list a given certificate.
             * <p>
             * Specialized CRL types can be defined by subclassing off of this abstract
             * class.
             * @author Hemma Prafullchandra
             * @see X509CRL
             * @see CertificateFactory
             * @since 1.2
             */
            // @ts-ignore
            class CRL extends java.lang.Object {
                /**
                 * Creates a CRL of the specified type.
                 * @param type the standard name of the CRL type.
                 *  See Appendix A in the <a href=
                 *  "../../../../technotes/guides/security/crypto/CryptoSpec.html#AppA">
                 *  Java Cryptography Architecture API Specification &amp; Reference </a>
                 *  for information about standard CRL types.
                 */
                // @ts-ignore
                constructor(type: string)
                /**
                 * Returns the type of this CRL.
                 * @return the type of this CRL.
                 */
                // @ts-ignore
                getType(): java.lang.String
                /**
                 * Returns a string representation of this CRL.
                 * @return a string representation of this CRL.
                 */
                // @ts-ignore
                abstract toString(): java.lang.String
                /**
                 * Checks whether the given certificate is on this CRL.
                 * @param cert the certificate to check for.
                 * @return true if the given certificate is on this CRL,
                 *  false otherwise.
                 */
                // @ts-ignore
                abstract isRevoked(cert: java.security.cert.Certificate): boolean
            }
        }
    }
}
