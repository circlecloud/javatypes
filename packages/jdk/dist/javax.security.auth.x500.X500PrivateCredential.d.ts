declare namespace javax {
    namespace security {
        namespace auth {
            namespace x500 {
                /**
                 * <p> This class represents an {@code X500PrivateCredential}.
                 * It associates an X.509 certificate, corresponding private key and the
                 * KeyStore alias used to reference that exact key pair in the KeyStore.
                 * This enables looking up the private credentials for an X.500 principal
                 * in a subject.
                 */
                // @ts-ignore
                class X500PrivateCredential extends java.lang.Object implements javax.security.auth.Destroyable {
                    /**
                     * Creates an X500PrivateCredential that associates an X.509 certificate,
                     * a private key and the KeyStore alias.
                     * <p>
                     * @param cert X509Certificate
                     * @param key  PrivateKey for the certificate
                     * @exception IllegalArgumentException if either {#code cert} or
                     *  {@code key} is null
                     */
                    // @ts-ignore
                    constructor(cert: java.security.cert.X509Certificate, key: java.security.PrivateKey)
                    /**
                     * Creates an X500PrivateCredential that associates an X.509 certificate,
                     * a private key and the KeyStore alias.
                     * <p>
                     * @param cert X509Certificate
                     * @param key  PrivateKey for the certificate
                     * @param alias KeyStore alias
                     * @exception IllegalArgumentException if either {#code cert},
                     *  {@code key} or {@code alias} is null
                     */
                    // @ts-ignore
                    constructor(cert: java.security.cert.X509Certificate, key: java.security.PrivateKey, alias: java.lang.String | string)
                    /**
                     * Returns the X.509 certificate.
                     * <p>
                     * @return the X509Certificate
                     */
                    // @ts-ignore
                    public getCertificate(): java.security.cert.X509Certificate
                    /**
                     * Returns the PrivateKey.
                     * <p>
                     * @return the PrivateKey
                     */
                    // @ts-ignore
                    public getPrivateKey(): java.security.PrivateKey
                    /**
                     * Returns the KeyStore alias.
                     * <p>
                     * @return the KeyStore alias
                     */
                    // @ts-ignore
                    public getAlias(): string
                    /**
                     * Clears the references to the X.509 certificate, private key and the
                     * KeyStore alias in this object.
                     */
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Determines if the references to the X.509 certificate and private key
                     * in this object have been cleared.
                     * <p>
                     * @return true if X509Certificate and the PrivateKey are null
                     */
                    // @ts-ignore
                    public isDestroyed(): boolean
                }
            }
        }
    }
}
