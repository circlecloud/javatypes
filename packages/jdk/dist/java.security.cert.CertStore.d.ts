declare namespace java {
    namespace security {
        namespace cert {
            /**
             * A class for retrieving {@code Certificate}s and {@code CRL}s
             * from a repository.
             * <p>
             * This class uses a provider-based architecture.
             * To create a {@code CertStore}, call one of the static
             * {@code getInstance} methods, passing in the type of
             * {@code CertStore} desired, any applicable initialization parameters
             * and optionally the name of the provider desired.
             * <p>
             * Once the {@code CertStore} has been created, it can be used to
             * retrieve {@code Certificate}s and {@code CRL}s by calling its
             * {@link #getCertificates(CertSelector selector) getCertificates} and
             * {@link #getCRLs(CRLSelector selector) getCRLs} methods.
             * <p>
             * Unlike a {@link java.security.KeyStore KeyStore}, which provides access
             * to a cache of private keys and trusted certificates, a
             * {@code CertStore} is designed to provide access to a potentially
             * vast repository of untrusted certificates and CRLs. For example, an LDAP
             * implementation of {@code CertStore} provides access to certificates
             * and CRLs stored in one or more directories using the LDAP protocol and the
             * schema as defined in the RFC service attribute.
             * <p> Every implementation of the Java platform is required to support the
             * following standard {@code CertStore} type:
             * <ul>
             * <li>{@code Collection}</li>
             * </ul>
             * This type is described in the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html#CertStore">
             * CertStore section</a> of the
             * Java Cryptography Architecture Standard Algorithm Name Documentation.
             * Consult the release documentation for your implementation to see if any
             * other types are supported.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * All public methods of {@code CertStore} objects must be thread-safe.
             * That is, multiple threads may concurrently invoke these methods on a
             * single {@code CertStore} object (or more than one) with no
             * ill effects. This allows a {@code CertPathBuilder} to search for a
             * CRL while simultaneously searching for further certificates, for instance.
             * <p>
             * The static methods of this class are also guaranteed to be thread-safe.
             * Multiple threads may concurrently invoke the static methods defined in
             * this class with no ill effects.
             * @since 1.4
             * @author Sean Mullan, Steve Hanna
             */
            // @ts-ignore
            class CertStore extends java.lang.Object {
                /**
                 * Creates a {@code CertStore} object of the given type, and
                 * encapsulates the given provider implementation (SPI object) in it.
                 * @param storeSpi the provider implementation
                 * @param provider the provider
                 * @param type the type
                 * @param params the initialization parameters (may be {#code null})
                 */
                // @ts-ignore
                constructor(storeSpi: java.security.cert.CertStoreSpi, provider: java.security.Provider, type: string, params: java.security.cert.CertStoreParameters)
                /**
                 * Returns a {@code Collection} of {@code Certificate}s that
                 * match the specified selector. If no {@code Certificate}s
                 * match the selector, an empty {@code Collection} will be returned.
                 * <p>
                 * For some {@code CertStore} types, the resulting
                 * {@code Collection} may not contain <b>all</b> of the
                 * {@code Certificate}s that match the selector. For instance,
                 * an LDAP {@code CertStore} may not search all entries in the
                 * directory. Instead, it may just search entries that are likely to
                 * contain the {@code Certificate}s it is looking for.
                 * <p>
                 * Some {@code CertStore} implementations (especially LDAP
                 * {@code CertStore}s) may throw a {@code CertStoreException}
                 * unless a non-null {@code CertSelector} is provided that
                 * includes specific criteria that can be used to find the certificates.
                 * Issuer and/or subject names are especially useful criteria.
                 * @param selector A {#code CertSelector} used to select which
                 *   {@code Certificate}s should be returned. Specify {@code null}
                 *   to return all {@code Certificate}s (if supported).
                 * @return A {#code Collection} of {@code Certificate}s that
                 *          match the specified selector (never {@code null})
                 * @throws CertStoreException if an exception occurs
                 */
                // @ts-ignore
                getCertificates(selector: java.security.cert.CertSelector): java.util.Collection<? extends java.security.cert.Certificate>
                /**
                 * Returns a {@code Collection} of {@code CRL}s that
                 * match the specified selector. If no {@code CRL}s
                 * match the selector, an empty {@code Collection} will be returned.
                 * <p>
                 * For some {@code CertStore} types, the resulting
                 * {@code Collection} may not contain <b>all</b> of the
                 * {@code CRL}s that match the selector. For instance,
                 * an LDAP {@code CertStore} may not search all entries in the
                 * directory. Instead, it may just search entries that are likely to
                 * contain the {@code CRL}s it is looking for.
                 * <p>
                 * Some {@code CertStore} implementations (especially LDAP
                 * {@code CertStore}s) may throw a {@code CertStoreException}
                 * unless a non-null {@code CRLSelector} is provided that
                 * includes specific criteria that can be used to find the CRLs.
                 * Issuer names and/or the certificate to be checked are especially useful.
                 * @param selector A {#code CRLSelector} used to select which
                 *   {@code CRL}s should be returned. Specify {@code null}
                 *   to return all {@code CRL}s (if supported).
                 * @return A {#code Collection} of {@code CRL}s that
                 *          match the specified selector (never {@code null})
                 * @throws CertStoreException if an exception occurs
                 */
                // @ts-ignore
                getCRLs(selector: java.security.cert.CRLSelector): java.util.Collection<? extends java.security.cert.CRL>
                /**
                 * Returns a {@code CertStore} object that implements the specified
                 * {@code CertStore} type and is initialized with the specified
                 * parameters.
                 * <p> This method traverses the list of registered security Providers,
                 * starting with the most preferred Provider.
                 * A new CertStore object encapsulating the
                 * CertStoreSpi implementation from the first
                 * Provider that supports the specified type is returned.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 * <p>The {@code CertStore} that is returned is initialized with the
                 * specified {@code CertStoreParameters}. The type of parameters
                 * needed may vary between different types of {@code CertStore}s.
                 * Note that the specified {@code CertStoreParameters} object is
                 * cloned.
                 * @param type the name of the requested {#code CertStore} type.
                 *  See the CertStore section in the <a href=
                 *  "{@docRoot}/../technotes/guides/security/StandardNames.html#CertStore">
                 *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
                 *  for information about standard types.
                 * @param params the initialization parameters (may be {#code null}).
                 * @return a {#code CertStore} object that implements the specified
                 *           {@code CertStore} type.
                 * @throws NoSuchAlgorithmException if no Provider supports a
                 *           CertStoreSpi implementation for the specified type.
                 * @throws InvalidAlgorithmParameterException if the specified
                 *           initialization parameters are inappropriate for this
                 *           {#code CertStore}.
                 * @see java.security.Provider
                 */
                // @ts-ignore
                getInstance(type: string, params: java.security.cert.CertStoreParameters): java.security.cert.CertStore
                /**
                 * Returns a {@code CertStore} object that implements the specified
                 * {@code CertStore} type.
                 * <p> A new CertStore object encapsulating the
                 * CertStoreSpi implementation from the specified provider
                 * is returned.  The specified provider must be registered
                 * in the security provider list.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 * <p>The {@code CertStore} that is returned is initialized with the
                 * specified {@code CertStoreParameters}. The type of parameters
                 * needed may vary between different types of {@code CertStore}s.
                 * Note that the specified {@code CertStoreParameters} object is
                 * cloned.
                 * @param type the requested {#code CertStore} type.
                 *  See the CertStore section in the <a href=
                 *  "{@docRoot}/../technotes/guides/security/StandardNames.html#CertStore">
                 *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
                 *  for information about standard types.
                 * @param params the initialization parameters (may be {#code null}).
                 * @param provider the name of the provider.
                 * @return a {#code CertStore} object that implements the
                 *           specified type.
                 * @throws NoSuchAlgorithmException if a CertStoreSpi
                 *           implementation for the specified type is not
                 *           available from the specified provider.
                 * @throws InvalidAlgorithmParameterException if the specified
                 *           initialization parameters are inappropriate for this
                 *           {#code CertStore}.
                 * @throws NoSuchProviderException if the specified provider is not
                 *           registered in the security provider list.
                 * @exception IllegalArgumentException if the {#code provider} is
                 *           null or empty.
                 * @see java.security.Provider
                 */
                // @ts-ignore
                getInstance(type: string, params: java.security.cert.CertStoreParameters, provider: string): java.security.cert.CertStore
                /**
                 * Returns a {@code CertStore} object that implements the specified
                 * {@code CertStore} type.
                 * <p> A new CertStore object encapsulating the
                 * CertStoreSpi implementation from the specified Provider
                 * object is returned.  Note that the specified Provider object
                 * does not have to be registered in the provider list.
                 * <p>The {@code CertStore} that is returned is initialized with the
                 * specified {@code CertStoreParameters}. The type of parameters
                 * needed may vary between different types of {@code CertStore}s.
                 * Note that the specified {@code CertStoreParameters} object is
                 * cloned.
                 * @param type the requested {#code CertStore} type.
                 *  See the CertStore section in the <a href=
                 *  "{@docRoot}/../technotes/guides/security/StandardNames.html#CertStore">
                 *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
                 *  for information about standard types.
                 * @param params the initialization parameters (may be {#code null}).
                 * @param provider the provider.
                 * @return a {#code CertStore} object that implements the
                 *           specified type.
                 * @exception NoSuchAlgorithmException if a CertStoreSpi
                 *           implementation for the specified type is not available
                 *           from the specified Provider object.
                 * @throws InvalidAlgorithmParameterException if the specified
                 *           initialization parameters are inappropriate for this
                 *           {#code CertStore}
                 * @exception IllegalArgumentException if the {#code provider} is
                 *           null.
                 * @see java.security.Provider
                 */
                // @ts-ignore
                getInstance(type: string, params: java.security.cert.CertStoreParameters, provider: java.security.Provider): java.security.cert.CertStore
                /**
                 * Returns the parameters used to initialize this {@code CertStore}.
                 * Note that the {@code CertStoreParameters} object is cloned before
                 * it is returned.
                 * @return the parameters used to initialize this {#code CertStore}
                 *  (may be {@code null})
                 */
                // @ts-ignore
                getCertStoreParameters(): java.security.cert.CertStoreParameters
                /**
                 * Returns the type of this {@code CertStore}.
                 * @return the type of this {#code CertStore}
                 */
                // @ts-ignore
                getType(): java.lang.String
                /**
                 * Returns the provider of this {@code CertStore}.
                 * @return the provider of this {#code CertStore}
                 */
                // @ts-ignore
                getProvider(): java.security.Provider
                /**
                 * Returns the default {@code CertStore} type as specified by the
                 * {@code certstore.type} security property, or the string
                 * {@literal "LDAP"} if no such property exists.
                 * <p>The default {@code CertStore} type can be used by applications
                 * that do not want to use a hard-coded type when calling one of the
                 * {@code getInstance} methods, and want to provide a default
                 * {@code CertStore} type in case a user does not specify its own.
                 * <p>The default {@code CertStore} type can be changed by setting
                 * the value of the {@code certstore.type} security property to the
                 * desired type.
                 * @see java.security.Security security properties
                 * @return the default {#code CertStore} type as specified by the
                 *  {@code certstore.type} security property, or the string
                 *  {@literal "LDAP"} if no such property exists.
                 */
                // @ts-ignore
                getDefaultType(): java.lang.String
            }
        }
    }
}
