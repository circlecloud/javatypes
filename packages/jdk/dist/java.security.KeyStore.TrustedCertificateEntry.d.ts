declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A {@code KeyStore} entry that holds a trusted
             * {@code Certificate}.
             * @since 1.5
             */
            // @ts-ignore
            class TrustedCertificateEntry extends java.lang.Object implements java.security.KeyStore.Entry {
                /**
                 * Constructs a {@code TrustedCertificateEntry} with a
                 * trusted {@code Certificate}.
                 * @param trustedCert the trusted {#code Certificate}
                 * @exception NullPointerException if
                 *       {#code trustedCert} is {@code null}
                 */
                // @ts-ignore
                constructor(trustedCert: java.security.cert.Certificate)
                /**
                 * Constructs a {@code TrustedCertificateEntry} with a
                 * trusted {@code Certificate} and associated entry attributes.
                 * <p> The specified {@code attributes} is cloned before it is stored
                 * in the new {@code TrustedCertificateEntry} object.
                 * @param trustedCert the trusted {#code Certificate}
                 * @param attributes the attributes
                 * @exception NullPointerException if {#code trustedCert} or
                 *      {@code attributes} is {@code null}
                 * @since 1.8
                 */
                // @ts-ignore
                constructor(trustedCert: java.security.cert.Certificate, attributes: java.util.Set<java.security.KeyStore.Entry.Attribute> | Array<java.security.KeyStore.Entry.Attribute>)
                /**
                 * Gets the trusted {@code Certficate} from this entry.
                 * @return the trusted {#code Certificate} from this entry
                 */
                // @ts-ignore
                public getTrustedCertificate(): java.security.cert.Certificate
                /**
                 * Retrieves the attributes associated with an entry.
                 * <p>
                 * @return an unmodifiable {#code Set} of attributes, possibly empty
                 * @since 1.8
                 */
                // @ts-ignore
                public getAttributes(): Array<java.security.KeyStore.Entry.Attribute>
                /**
                 * Returns a string representation of this TrustedCertificateEntry.
                 * @return a string representation of this TrustedCertificateEntry.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
