declare namespace java {
    namespace security {
        /**
         * Key factories are used to convert <I>keys</I> (opaque
         * cryptographic keys of type {@code Key}) into <I>key specifications</I>
         * (transparent representations of the underlying key material), and vice
         * versa.
         * <P> Key factories are bi-directional. That is, they allow you to build an
         * opaque key object from a given key specification (key material), or to
         * retrieve the underlying key material of a key object in a suitable format.
         * <P> Multiple compatible key specifications may exist for the same key.
         * For example, a DSA public key may be specified using
         * {@code DSAPublicKeySpec} or
         * {@code X509EncodedKeySpec}. A key factory can be used to translate
         * between compatible key specifications.
         * <P> The following is an example of how to use a key factory in order to
         * instantiate a DSA public key from its encoding.
         * Assume Alice has received a digital signature from Bob.
         * Bob also sent her his public key (in encoded format) to verify
         * his signature. Alice then performs the following actions:
         * <pre>
         * X509EncodedKeySpec bobPubKeySpec = new X509EncodedKeySpec(bobEncodedPubKey);
         * KeyFactory keyFactory = KeyFactory.getInstance("DSA");
         * PublicKey bobPubKey = keyFactory.generatePublic(bobPubKeySpec);
         * Signature sig = Signature.getInstance("DSA");
         * sig.initVerify(bobPubKey);
         * sig.update(data);
         * sig.verify(signature);
         * </pre>
         * <p> Every implementation of the Java platform is required to support the
         * following standard {@code KeyFactory} algorithms:
         * <ul>
         * <li>{@code DiffieHellman}</li>
         * <li>{@code DSA}</li>
         * <li>{@code RSA}</li>
         * </ul>
         * These algorithms are described in the <a href=
         * "{@docRoot}/../technotes/guides/security/StandardNames.html#KeyFactory">
         * KeyFactory section</a> of the
         * Java Cryptography Architecture Standard Algorithm Name Documentation.
         * Consult the release documentation for your implementation to see if any
         * other algorithms are supported.
         * @author Jan Luehe
         * @see Key
         * @see PublicKey
         * @see PrivateKey
         * @see java.security.spec.KeySpec
         * @see java.security.spec.DSAPublicKeySpec
         * @see java.security.spec.X509EncodedKeySpec
         * @since 1.2
         */
        // @ts-ignore
        class KeyFactory extends java.lang.Object {
            /**
             * Creates a KeyFactory object.
             * @param keyFacSpi the delegate
             * @param provider the provider
             * @param algorithm the name of the algorithm
             *  to associate with this {#code KeyFactory}
             */
            // @ts-ignore
            constructor(keyFacSpi: java.security.KeyFactorySpi, provider: java.security.Provider, algorithm: java.lang.String | string)
            /**
             * Returns a KeyFactory object that converts
             * public/private keys of the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new KeyFactory object encapsulating the
             * KeyFactorySpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the name of the requested key algorithm.
             *  See the KeyFactory section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyFactory">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @return the new KeyFactory object.
             * @exception NoSuchAlgorithmException if no Provider supports a
             *           KeyFactorySpi implementation for the
             *           specified algorithm.
             * @see Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string): java.security.KeyFactory
            /**
             * Returns a KeyFactory object that converts
             * public/private keys of the specified algorithm.
             * <p> A new KeyFactory object encapsulating the
             * KeyFactorySpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the name of the requested key algorithm.
             *  See the KeyFactory section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyFactory">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the name of the provider.
             * @return the new KeyFactory object.
             * @exception NoSuchAlgorithmException if a KeyFactorySpi
             *           implementation for the specified algorithm is not
             *           available from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the provider name is null
             *           or empty.
             * @see Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.lang.String | string): java.security.KeyFactory
            /**
             * Returns a KeyFactory object that converts
             * public/private keys of the specified algorithm.
             * <p> A new KeyFactory object encapsulating the
             * KeyFactorySpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * @param algorithm the name of the requested key algorithm.
             *  See the KeyFactory section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyFactory">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the provider.
             * @return the new KeyFactory object.
             * @exception NoSuchAlgorithmException if a KeyFactorySpi
             *           implementation for the specified algorithm is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the specified provider is null.
             * @see Provider
             * @since 1.4
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.security.Provider): java.security.KeyFactory
            /**
             * Returns the provider of this key factory object.
             * @return the provider of this key factory object
             */
            // @ts-ignore
            public getProvider(): java.security.Provider
            /**
             * Gets the name of the algorithm
             * associated with this {@code KeyFactory}.
             * @return the name of the algorithm associated with this
             *  {#code KeyFactory}
             */
            // @ts-ignore
            public getAlgorithm(): string
            /**
             * Generates a public key object from the provided key specification
             * (key material).
             * @param keySpec the specification (key material) of the public key.
             * @return the public key.
             * @exception InvalidKeySpecException if the given key specification
             *  is inappropriate for this key factory to produce a public key.
             */
            // @ts-ignore
            public generatePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey
            /**
             * Generates a private key object from the provided key specification
             * (key material).
             * @param keySpec the specification (key material) of the private key.
             * @return the private key.
             * @exception InvalidKeySpecException if the given key specification
             *  is inappropriate for this key factory to produce a private key.
             */
            // @ts-ignore
            public generatePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey
            /**
             * Returns a specification (key material) of the given key object.
             * {@code keySpec} identifies the specification class in which
             * the key material should be returned. It could, for example, be
             * {@code DSAPublicKeySpec.class}, to indicate that the
             * key material should be returned in an instance of the
             * {@code DSAPublicKeySpec} class.
             * @param <T> the type of the key specification to be returned
             * @param key the key.
             * @param keySpec the specification class in which
             *  the key material should be returned.
             * @return the underlying key specification (key material) in an instance
             *  of the requested specification class.
             * @exception InvalidKeySpecException if the requested key specification is
             *  inappropriate for the given key, or the given key cannot be processed
             *  (e.g., the given key has an unrecognized algorithm or format).
             */
            // @ts-ignore
            public getKeySpec<T extends java.security.spec.KeySpec>(key: java.security.Key, keySpec: java.lang.Class<T>): T
            /**
             * Translates a key object, whose provider may be unknown or potentially
             * untrusted, into a corresponding key object of this key factory.
             * @param key the key whose provider is unknown or untrusted.
             * @return the translated key.
             * @exception InvalidKeyException if the given key cannot be processed
             *  by this key factory.
             */
            // @ts-ignore
            public translateKey(key: java.security.Key): java.security.Key
        }
    }
}
