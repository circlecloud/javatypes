declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
             * for the <code>KeyManagerFactory</code> class.
             * <p> All the abstract methods in this class must be implemented by each
             * cryptographic service provider who wishes to supply the implementation
             * of a particular key manager factory.
             * @since 1.4
             * @see KeyManagerFactory
             * @see KeyManager
             */
            // @ts-ignore
            class KeyManagerFactorySpi extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Initializes this factory with a source of key material.
                 * @param ks the key store or null
                 * @param password the password for recovering keys
                 * @throws KeyStoreException if this operation fails
                 * @throws NoSuchAlgorithmException if the specified algorithm is not
                 *           available from the specified provider.
                 * @throws UnrecoverableKeyException if the key cannot be recovered
                 * @see KeyManagerFactory#init(KeyStore, char[])
                 */
                // @ts-ignore
                abstract engineInit(ks: java.security.KeyStore, password: string[]): void
                /**
                 * Initializes this factory with a source of key material.
                 * <P>
                 * In some cases, initialization parameters other than a keystore
                 * and password may be needed by a provider.  Users of that
                 * particular provider are expected to pass an implementation of
                 * the appropriate <CODE>ManagerFactoryParameters</CODE> as
                 * defined by the provider.  The provider can then call the
                 * specified methods in the ManagerFactoryParameters
                 * implementation to obtain the needed information.
                 * @param spec an implementation of a provider-specific parameter
                 *           specification
                 * @throws InvalidAlgorithmParameterException if there is problem
                 *           with the parameters
                 * @see KeyManagerFactory#init(ManagerFactoryParameters spec)
                 */
                // @ts-ignore
                abstract engineInit(spec: javax.net.ssl.ManagerFactoryParameters): void
                /**
                 * Returns one key manager for each type of key material.
                 * @return the key managers
                 * @throws IllegalStateException
                 *          if the KeyManagerFactorySpi is not initialized
                 */
                // @ts-ignore
                abstract engineGetKeyManagers(): javax.net.ssl.KeyManager[]
            }
        }
    }
}
