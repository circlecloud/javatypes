declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This class acts as a factory for trust managers based on a
             * source of trust material. Each trust manager manages a specific
             * type of trust material for use by secure sockets. The trust
             * material is based on a KeyStore and/or provider specific sources.
             * @since 1.4
             * @see TrustManager
             */
            // @ts-ignore
            class TrustManagerFactory extends java.lang.Object {
                /**
                 * Creates a TrustManagerFactory object.
                 * @param factorySpi the delegate
                 * @param provider the provider
                 * @param algorithm the algorithm
                 */
                // @ts-ignore
                constructor(factorySpi: javax.net.ssl.TrustManagerFactorySpi, provider: java.security.Provider, algorithm: string)
                /**
                 * Obtains the default TrustManagerFactory algorithm name.
                 * <p>The default TrustManager can be changed at runtime by setting
                 * the value of the {@code ssl.TrustManagerFactory.algorithm}
                 * security property to the desired algorithm name.
                 * @see java.security.Security security properties
                 * @return the default algorithm name as specified by the
                 *  {#code ssl.TrustManagerFactory.algorithm} security property, or an
                 *  implementation-specific default if no such property exists.
                 */
                // @ts-ignore
                getDefaultAlgorithm(): java.lang.String
                /**
                 * Returns the algorithm name of this <code>TrustManagerFactory</code>
                 * object.
                 * <p>This is the same name that was specified in one of the
                 * <code>getInstance</code> calls that created this
                 * <code>TrustManagerFactory</code> object.
                 * @return the algorithm name of this <code>TrustManagerFactory</code>
                 *           object
                 */
                // @ts-ignore
                getAlgorithm(): java.lang.String
                /**
                 * Returns a <code>TrustManagerFactory</code> object that acts as a
                 * factory for trust managers.
                 * <p> This method traverses the list of registered security Providers,
                 * starting with the most preferred Provider.
                 * A new TrustManagerFactory object encapsulating the
                 * TrustManagerFactorySpi implementation from the first
                 * Provider that supports the specified algorithm is returned.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 * @param algorithm the standard name of the requested trust management
                 *           algorithm.  See the <a href=
                 *   "{#docRoot}/../technotes/guides/security/jsse/JSSERefGuide.html">
                 *           Java Secure Socket Extension Reference Guide </a>
                 *           for information about standard algorithm names.
                 * @return the new <code>TrustManagerFactory</code> object.
                 * @exception NoSuchAlgorithmException if no Provider supports a
                 *           TrustManagerFactorySpi implementation for the
                 *           specified algorithm.
                 * @exception NullPointerException if algorithm is null.
                 * @see java.security.Provider
                 */
                // @ts-ignore
                getInstance(algorithm: string): javax.net.ssl.TrustManagerFactory
                /**
                 * Returns a <code>TrustManagerFactory</code> object that acts as a
                 * factory for trust managers.
                 * <p> A new KeyManagerFactory object encapsulating the
                 * KeyManagerFactorySpi implementation from the specified provider
                 * is returned.  The specified provider must be registered
                 * in the security provider list.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 * @param algorithm the standard name of the requested trust management
                 *           algorithm.  See the <a href=
                 *   "{#docRoot}/../technotes/guides/security/jsse/JSSERefGuide.html">
                 *           Java Secure Socket Extension Reference Guide </a>
                 *           for information about standard algorithm names.
                 * @param provider the name of the provider.
                 * @return the new <code>TrustManagerFactory</code> object
                 * @throws NoSuchAlgorithmException if a TrustManagerFactorySpi
                 *           implementation for the specified algorithm is not
                 *           available from the specified provider.
                 * @throws NoSuchProviderException if the specified provider is not
                 *           registered in the security provider list.
                 * @throws IllegalArgumentException if the provider name is null or empty.
                 * @throws NullPointerException if algorithm is null.
                 * @see java.security.Provider
                 */
                // @ts-ignore
                getInstance(algorithm: string, provider: string): javax.net.ssl.TrustManagerFactory
                /**
                 * Returns a <code>TrustManagerFactory</code> object that acts as a
                 * factory for trust managers.
                 * <p> A new TrustManagerFactory object encapsulating the
                 * TrustManagerFactorySpi implementation from the specified Provider
                 * object is returned.  Note that the specified Provider object
                 * does not have to be registered in the provider list.
                 * @param algorithm the standard name of the requested trust management
                 *           algorithm.  See the <a href=
                 *   "{#docRoot}/../technotes/guides/security/jsse/JSSERefGuide.html">
                 *           Java Secure Socket Extension Reference Guide </a>
                 *           for information about standard algorithm names.
                 * @param provider an instance of the provider.
                 * @return the new <code>TrustManagerFactory</code> object.
                 * @throws NoSuchAlgorithmException if a TrustManagerFactorySpi
                 *           implementation for the specified algorithm is not available
                 *           from the specified Provider object.
                 * @throws IllegalArgumentException if the provider is null.
                 * @throws NullPointerException if algorithm is null.
                 * @see java.security.Provider
                 */
                // @ts-ignore
                getInstance(algorithm: string, provider: java.security.Provider): javax.net.ssl.TrustManagerFactory
                /**
                 * Returns the provider of this <code>TrustManagerFactory</code> object.
                 * @return the provider of this <code>TrustManagerFactory</code> object
                 */
                // @ts-ignore
                getProvider(): java.security.Provider
                /**
                 * Initializes this factory with a source of certificate
                 * authorities and related trust material.
                 * <P>
                 * The provider typically uses a KeyStore as a basis for making
                 * trust decisions.
                 * <P>
                 * For more flexible initialization, please see
                 * {@link #init(ManagerFactoryParameters)}.
                 * @param ks the key store, or null
                 * @throws KeyStoreException if this operation fails
                 */
                // @ts-ignore
                init(ks: java.security.KeyStore): void
                /**
                 * Initializes this factory with a source of provider-specific
                 * trust material.
                 * <P>
                 * In some cases, initialization parameters other than a keystore
                 * may be needed by a provider.  Users of that particular provider
                 * are expected to pass an implementation of the appropriate
                 * <CODE>ManagerFactoryParameters</CODE> as defined by the
                 * provider.  The provider can then call the specified methods in
                 * the <CODE>ManagerFactoryParameters</CODE> implementation to obtain the
                 * needed information.
                 * @param spec an implementation of a provider-specific parameter
                 *           specification
                 * @throws InvalidAlgorithmParameterException if an error is
                 *           encountered
                 */
                // @ts-ignore
                init(spec: javax.net.ssl.ManagerFactoryParameters): void
                /**
                 * Returns one trust manager for each type of trust material.
                 * @throws IllegalStateException if the factory is not initialized.
                 * @return the trust managers
                 */
                // @ts-ignore
                getTrustManagers(): javax.net.ssl.TrustManager[]
            }
        }
    }
}
