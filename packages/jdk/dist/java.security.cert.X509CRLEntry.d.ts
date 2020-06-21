declare namespace java {
    namespace security {
        namespace cert {
            /**
             * <p>Abstract class for a revoked certificate in a CRL (Certificate
             * Revocation List).
             * The ASN.1 definition for <em>revokedCertificates</em> is:
             * <pre>
             * revokedCertificates    SEQUENCE OF SEQUENCE  {
             * userCertificate    CertificateSerialNumber,
             * revocationDate     ChoiceOfTime,
             * crlEntryExtensions Extensions OPTIONAL
             * -- if present, must be v2
             * }  OPTIONAL
             * CertificateSerialNumber  ::=  INTEGER
             * Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension
             * Extension  ::=  SEQUENCE  {
             * extnId        OBJECT IDENTIFIER,
             * critical      BOOLEAN DEFAULT FALSE,
             * extnValue     OCTET STRING
             * -- contains a DER encoding of a value
             * -- of the type registered for use with
             * -- the extnId object identifier value
             * }
             * </pre>
             * @see X509CRL
             * @see X509Extension
             * @author Hemma Prafullchandra
             */
            // @ts-ignore
            abstract class X509CRLEntry extends java.lang.Object implements java.security.cert.X509Extension {
                // @ts-ignore
                constructor()
                /**
                 * Compares this CRL entry for equality with the given
                 * object. If the {@code other} object is an
                 * {@code instanceof} {@code X509CRLEntry}, then
                 * its encoded form (the inner SEQUENCE) is retrieved and compared
                 * with the encoded form of this CRL entry.
                 * @param other the object to test for equality with this CRL entry.
                 * @return true iff the encoded forms of the two CRL entries
                 *  match, false otherwise.
                 */
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                /**
                 * Returns a hashcode value for this CRL entry from its
                 * encoded form.
                 * @return the hashcode value.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns the ASN.1 DER-encoded form of this CRL Entry,
                 * that is the inner SEQUENCE.
                 * @return the encoded form of this certificate
                 * @exception CRLException if an encoding error occurs.
                 */
                // @ts-ignore
                public abstract getEncoded(): number /*byte*/[]
                /**
                 * Gets the serial number from this X509CRLEntry,
                 * the <em>userCertificate</em>.
                 * @return the serial number.
                 */
                // @ts-ignore
                public abstract getSerialNumber(): java.math.BigInteger
                /**
                 * Get the issuer of the X509Certificate described by this entry. If
                 * the certificate issuer is also the CRL issuer, this method returns
                 * null.
                 * <p>This method is used with indirect CRLs. The default implementation
                 * always returns null. Subclasses that wish to support indirect CRLs
                 * should override it.
                 * @return the issuer of the X509Certificate described by this entry
                 *  or null if it is issued by the CRL issuer.
                 * @since 1.5
                 */
                // @ts-ignore
                public getCertificateIssuer(): javax.security.auth.x500.X500Principal
                /**
                 * Gets the revocation date from this X509CRLEntry,
                 * the <em>revocationDate</em>.
                 * @return the revocation date.
                 */
                // @ts-ignore
                public abstract getRevocationDate(): java.util.Date
                /**
                 * Returns true if this CRL entry has extensions.
                 * @return true if this entry has extensions, false otherwise.
                 */
                // @ts-ignore
                public abstract hasExtensions(): boolean
                /**
                 * Returns a string representation of this CRL entry.
                 * @return a string representation of this CRL entry.
                 */
                // @ts-ignore
                public abstract toString(): string
                /**
                 * Returns the reason the certificate has been revoked, as specified
                 * in the Reason Code extension of this CRL entry.
                 * @return the reason the certificate has been revoked, or
                 *     {#code null} if this CRL entry does not have
                 *     a Reason Code extension
                 * @since 1.7
                 */
                // @ts-ignore
                public getRevocationReason(): java.security.cert.CRLReason
            }
        }
    }
}
