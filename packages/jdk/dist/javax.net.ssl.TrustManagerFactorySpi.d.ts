declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
             * for the <code>TrustManagerFactory</code> class.
             * <p> All the abstract methods in this class must be implemented by each
             * cryptographic service provider who wishes to supply the implementation
             * of a particular trust manager factory.
             * @since 1.4
             * @see TrustManagerFactory
             * @see TrustManager
             */
            // @ts-ignore
            class TrustManagerFactorySpi extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Initializes this factory with a source of certificate
                 * authorities and related trust material.
                 * @param ks the key store or null
                 * @throws KeyStoreException if this operation fails
                 * @see TrustManagerFactory#init(KeyStore)
                 */
                // @ts-ignore
                abstract engineInit(ks: java.security.KeyStore): void
                /**
                 * Initializes this factory with a source of provider-specific
                 * key material.
                 * <P>
                 * In some cases, initialization parameters other than a keystore
                 * may be needed by a provider.  Users of that
                 * particular provider are expected to pass an implementation of
                 * the appropriate <CODE>ManagerFactoryParameters</CODE> as
                 * defined by the provider.  The provider can then call the
                 * specified methods in the <CODE>ManagerFactoryParameters</CODE>
                 * implementation to obtain the needed information.
                 * @param spec an implementation of a provider-specific parameter
                 *           specification
                 * @throws InvalidAlgorithmParameterException if there is problem
                 *           with the parameters
                 * @see TrustManagerFactory#init(ManagerFactoryParameters spec)
                 */
                // @ts-ignore
                abstract engineInit(spec: javax.net.ssl.ManagerFactoryParameters): void
                /**
                 * Returns one trust manager for each type of trust material.
                 * @throws IllegalStateException if the factory is not initialized.
                 * @return the trust managers
                 */
                // @ts-ignore
                abstract engineGetTrustManagers(): javax.net.ssl.TrustManager[]
            }
        }
    }
}
