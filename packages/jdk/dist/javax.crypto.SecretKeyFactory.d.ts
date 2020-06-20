declare namespace javax {
    namespace crypto {
        /**
         * This class represents a factory for secret keys.
         * <P> Key factories are used to convert <I>keys</I> (opaque
         * cryptographic keys of type <code>Key</code>) into <I>key specifications</I>
         * (transparent representations of the underlying key material), and vice
         * versa.
         * Secret key factories operate only on secret (symmetric) keys.
         * <P> Key factories are bi-directional, i.e., they allow to build an opaque
         * key object from a given key specification (key material), or to retrieve
         * the underlying key material of a key object in a suitable format.
         * <P> Application developers should refer to their provider's documentation
         * to find out which key specifications are supported by the
         * {@link #generateSecret(java.security.spec.KeySpec) generateSecret} and
         * {@link #getKeySpec(javax.crypto.SecretKey, java.lang.Class) getKeySpec}
         * methods.
         * For example, the DES secret-key factory supplied by the "SunJCE" provider
         * supports <code>DESKeySpec</code> as a transparent representation of DES
         * keys, and that provider's secret-key factory for Triple DES keys supports
         * <code>DESedeKeySpec</code> as a transparent representation of Triple DES
         * keys.
         * <p> Every implementation of the Java platform is required to support the
         * following standard <code>SecretKeyFactory</code> algorithms:
         * <ul>
         * <li><tt>DES</tt></li>
         * <li><tt>DESede</tt></li>
         * </ul>
         * These algorithms are described in the <a href=
         * "{@docRoot}/../technotes/guides/security/StandardNames.html#SecretKeyFactory">
         * SecretKeyFactory section</a> of the
         * Java Cryptography Architecture Standard Algorithm Name Documentation.
         * Consult the release documentation for your implementation to see if any
         * other algorithms are supported.
         * @author Jan Luehe
         * @see SecretKey
         * @see javax.crypto.spec.DESKeySpec
         * @see javax.crypto.spec.DESedeKeySpec
         * @see javax.crypto.spec.PBEKeySpec
         * @since 1.4
         */
        // @ts-ignore
        class SecretKeyFactory extends java.lang.Object {
            /**
             * Creates a SecretKeyFactory object.
             * @param keyFacSpi the delegate
             * @param provider the provider
             * @param algorithm the secret-key algorithm
             */
            // @ts-ignore
            constructor(keyFacSpi: javax.crypto.SecretKeyFactorySpi, provider: java.security.Provider, algorithm: string)
            /**
             * Returns a <code>SecretKeyFactory</code> object that converts
             * secret keys of the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new SecretKeyFactory object encapsulating the
             * SecretKeyFactorySpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the standard name of the requested secret-key
             *  algorithm.
             *  See the SecretKeyFactory section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#SecretKeyFactory">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @return the new <code>SecretKeyFactory</code> object.
             * @exception NullPointerException if the specified algorithm
             *           is null.
             * @exception NoSuchAlgorithmException if no Provider supports a
             *           SecretKeyFactorySpi implementation for the
             *           specified algorithm.
             * @see java.security.Provider
             */
            // @ts-ignore
            getInstance(algorithm: string): javax.crypto.SecretKeyFactory
            /**
             * Returns a <code>SecretKeyFactory</code> object that converts
             * secret keys of the specified algorithm.
             * <p> A new SecretKeyFactory object encapsulating the
             * SecretKeyFactorySpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the standard name of the requested secret-key
             *  algorithm.
             *  See the SecretKeyFactory section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#SecretKeyFactory">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the name of the provider.
             * @return the new <code>SecretKeyFactory</code> object.
             * @exception NoSuchAlgorithmException if a SecretKeyFactorySpi
             *           implementation for the specified algorithm is not
             *           available from the specified provider.
             * @exception NullPointerException if the specified algorithm
             *           is null.
             * @throws NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the <code>provider</code>
             *           is null or empty.
             * @see java.security.Provider
             */
            // @ts-ignore
            getInstance(algorithm: string, provider: string): javax.crypto.SecretKeyFactory
            /**
             * Returns a <code>SecretKeyFactory</code> object that converts
             * secret keys of the specified algorithm.
             * <p> A new SecretKeyFactory object encapsulating the
             * SecretKeyFactorySpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * @param algorithm the standard name of the requested secret-key
             *  algorithm.
             *  See the SecretKeyFactory section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#SecretKeyFactory">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the provider.
             * @return the new <code>SecretKeyFactory</code> object.
             * @exception NullPointerException if the specified algorithm
             *  is null.
             * @exception NoSuchAlgorithmException if a SecretKeyFactorySpi
             *           implementation for the specified algorithm is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the <code>provider</code>
             *           is null.
             * @see java.security.Provider
             */
            // @ts-ignore
            getInstance(algorithm: string, provider: java.security.Provider): javax.crypto.SecretKeyFactory
            /**
             * Returns the provider of this <code>SecretKeyFactory</code> object.
             * @return the provider of this <code>SecretKeyFactory</code> object
             */
            // @ts-ignore
            getProvider(): java.security.Provider
            /**
             * Returns the algorithm name of this <code>SecretKeyFactory</code> object.
             * <p>This is the same name that was specified in one of the
             * <code>getInstance</code> calls that created this
             * <code>SecretKeyFactory</code> object.
             * @return the algorithm name of this <code>SecretKeyFactory</code>
             *  object.
             */
            // @ts-ignore
            getAlgorithm(): java.lang.String
            /**
             * Generates a <code>SecretKey</code> object from the provided key
             * specification (key material).
             * @param keySpec the specification (key material) of the secret key
             * @return the secret key
             * @exception InvalidKeySpecException if the given key specification
             *  is inappropriate for this secret-key factory to produce a secret key.
             */
            // @ts-ignore
            generateSecret(keySpec: java.security.spec.KeySpec): javax.crypto.SecretKey
            /**
             * Returns a specification (key material) of the given key object
             * in the requested format.
             * @param key the key
             * @param keySpec the requested format in which the key material shall be
             *  returned
             * @return the underlying key specification (key material) in the
             *  requested format
             * @exception InvalidKeySpecException if the requested key specification is
             *  inappropriate for the given key (e.g., the algorithms associated with
             *  <code>key</code> and <code>keySpec</code> do not match, or
             *  <code>key</code> references a key on a cryptographic hardware device
             *  whereas <code>keySpec</code> is the specification of a software-based
             *  key), or the given key cannot be dealt with
             *  (e.g., the given key has an algorithm or format not supported by this
             *  secret-key factory).
             */
            // @ts-ignore
            getKeySpec(key: javax.crypto.SecretKey, keySpec: java.lang.Class<any>): java.security.spec.KeySpec
            /**
             * Translates a key object, whose provider may be unknown or potentially
             * untrusted, into a corresponding key object of this secret-key factory.
             * @param key the key whose provider is unknown or untrusted
             * @return the translated key
             * @exception InvalidKeyException if the given key cannot be processed
             *  by this secret-key factory.
             */
            // @ts-ignore
            translateKey(key: javax.crypto.SecretKey): javax.crypto.SecretKey
        }
    }
}
