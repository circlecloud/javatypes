declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A {@code KeyStore} entry that holds a {@code PrivateKey}
             * and corresponding certificate chain.
             * @since 1.5
             */
            // @ts-ignore
            class PrivateKeyEntry extends java.lang.Object implements java.security.KeyStore.Entry {
                /**
                 * Constructs a {@code PrivateKeyEntry} with a
                 * {@code PrivateKey} and corresponding certificate chain.
                 * <p> The specified {@code chain} is cloned before it is stored
                 * in the new {@code PrivateKeyEntry} object.
                 * @param privateKey the {#code PrivateKey}
                 * @param chain an array of {#code Certificate}s
                 *       representing the certificate chain.
                 *       The chain must be ordered and contain a
                 *       {@code Certificate} at index 0
                 *       corresponding to the private key.
                 * @exception NullPointerException if
                 *       {#code privateKey} or {@code chain}
                 *       is {@code null}
                 * @exception IllegalArgumentException if the specified chain has a
                 *       length of 0, if the specified chain does not contain
                 *       {#code Certificate}s of the same type,
                 *       or if the {@code PrivateKey} algorithm
                 *       does not match the algorithm of the {@code PublicKey}
                 *       in the end entity {@code Certificate} (at index 0)
                 */
                // @ts-ignore
                constructor(privateKey: java.security.PrivateKey, chain: java.security.cert.Certificate[])
                /**
                 * Constructs a {@code PrivateKeyEntry} with a {@code PrivateKey} and
                 * corresponding certificate chain and associated entry attributes.
                 * <p> The specified {@code chain} and {@code attributes} are cloned
                 * before they are stored in the new {@code PrivateKeyEntry} object.
                 * @param privateKey the {#code PrivateKey}
                 * @param chain an array of {#code Certificate}s
                 *       representing the certificate chain.
                 *       The chain must be ordered and contain a
                 *       {@code Certificate} at index 0
                 *       corresponding to the private key.
                 * @param attributes the attributes
                 * @exception NullPointerException if {#code privateKey}, {@code chain}
                 *       or {@code attributes} is {@code null}
                 * @exception IllegalArgumentException if the specified chain has a
                 *       length of 0, if the specified chain does not contain
                 *       {#code Certificate}s of the same type,
                 *       or if the {@code PrivateKey} algorithm
                 *       does not match the algorithm of the {@code PublicKey}
                 *       in the end entity {@code Certificate} (at index 0)
                 * @since 1.8
                 */
                // @ts-ignore
                constructor(privateKey: java.security.PrivateKey, chain: java.security.cert.Certificate[], attributes: java.util.Set<java.security.KeyStore.Entry.Attribute> | Array<java.security.KeyStore.Entry.Attribute>)
                /**
                 * Gets the {@code PrivateKey} from this entry.
                 * @return the {#code PrivateKey} from this entry
                 */
                // @ts-ignore
                public getPrivateKey(): java.security.PrivateKey
                /**
                 * Gets the {@code Certificate} chain from this entry.
                 * <p> The stored chain is cloned before being returned.
                 * @return an array of {#code Certificate}s corresponding
                 *       to the certificate chain for the public key.
                 *       If the certificates are of type X.509,
                 *       the runtime type of the returned array is
                 *       {@code X509Certificate[]}.
                 */
                // @ts-ignore
                public getCertificateChain(): java.security.cert.Certificate[]
                /**
                 * Gets the end entity {@code Certificate}
                 * from the certificate chain in this entry.
                 * @return the end entity {#code Certificate} (at index 0)
                 *       from the certificate chain in this entry.
                 *       If the certificate is of type X.509,
                 *       the runtime type of the returned certificate is
                 *       {@code X509Certificate}.
                 */
                // @ts-ignore
                public getCertificate(): java.security.cert.Certificate
                /**
                 * Retrieves the attributes associated with an entry.
                 * <p>
                 * @return an unmodifiable {#code Set} of attributes, possibly empty
                 * @since 1.8
                 */
                // @ts-ignore
                public getAttributes(): Array<java.security.KeyStore.Entry.Attribute>
                /**
                 * Returns a string representation of this PrivateKeyEntry.
                 * @return a string representation of this PrivateKeyEntry.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
