declare namespace javax {
    namespace crypto {
        /**
         * This class provides the functionality of a secret (symmetric) key generator.
         * <p>Key generators are constructed using one of the <code>getInstance</code>
         * class methods of this class.
         * <p>KeyGenerator objects are reusable, i.e., after a key has been
         * generated, the same KeyGenerator object can be re-used to generate further
         * keys.
         * <p>There are two ways to generate a key: in an algorithm-independent
         * manner, and in an algorithm-specific manner.
         * The only difference between the two is the initialization of the object:
         * <ul>
         * <li><b>Algorithm-Independent Initialization</b>
         * <p>All key generators share the concepts of a <i>keysize</i> and a
         * <i>source of randomness</i>.
         * There is an
         * {@link #init(int, java.security.SecureRandom) init}
         * method in this KeyGenerator class that takes these two universally
         * shared types of arguments. There is also one that takes just a
         * <code>keysize</code> argument, and uses the SecureRandom implementation
         * of the highest-priority installed provider as the source of randomness
         * (or a system-provided source of randomness if none of the installed
         * providers supply a SecureRandom implementation), and one that takes just a
         * source of randomness.
         * <p>Since no other parameters are specified when you call the above
         * algorithm-independent <code>init</code> methods, it is up to the
         * provider what to do about the algorithm-specific parameters (if any) to be
         * associated with each of the keys.
         * <li><b>Algorithm-Specific Initialization</b>
         * <p>For situations where a set of algorithm-specific parameters already
         * exists, there are two
         * {@link #init(java.security.spec.AlgorithmParameterSpec) init}
         * methods that have an <code>AlgorithmParameterSpec</code>
         * argument. One also has a <code>SecureRandom</code> argument, while the
         * other uses the SecureRandom implementation
         * of the highest-priority installed provider as the source of randomness
         * (or a system-provided source of randomness if none of the installed
         * providers supply a SecureRandom implementation).
         * </ul>
         * <p>In case the client does not explicitly initialize the KeyGenerator
         * (via a call to an <code>init</code> method), each provider must
         * supply (and document) a default initialization.
         * <p> Every implementation of the Java platform is required to support the
         * following standard <code>KeyGenerator</code> algorithms with the keysizes in
         * parentheses:
         * <ul>
         * <li><tt>AES</tt> (128)</li>
         * <li><tt>DES</tt> (56)</li>
         * <li><tt>DESede</tt> (168)</li>
         * <li><tt>HmacSHA1</tt></li>
         * <li><tt>HmacSHA256</tt></li>
         * </ul>
         * These algorithms are described in the <a href=
         * "{@docRoot}/../technotes/guides/security/StandardNames.html#KeyGenerator">
         * KeyGenerator section</a> of the
         * Java Cryptography Architecture Standard Algorithm Name Documentation.
         * Consult the release documentation for your implementation to see if any
         * other algorithms are supported.
         * @author Jan Luehe
         * @see SecretKey
         * @since 1.4
         */
        // @ts-ignore
        class KeyGenerator extends java.lang.Object {
            /**
             * Creates a KeyGenerator object.
             * @param keyGenSpi the delegate
             * @param provider the provider
             * @param algorithm the algorithm
             */
            // @ts-ignore
            constructor(keyGenSpi: javax.crypto.KeyGeneratorSpi, provider: java.security.Provider, algorithm: java.lang.String | string)
            /**
             * Returns the algorithm name of this <code>KeyGenerator</code> object.
             * <p>This is the same name that was specified in one of the
             * <code>getInstance</code> calls that created this
             * <code>KeyGenerator</code> object.
             * @return the algorithm name of this <code>KeyGenerator</code> object.
             */
            // @ts-ignore
            public getAlgorithm(): string
            /**
             * Returns a <code>KeyGenerator</code> object that generates secret keys
             * for the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new KeyGenerator object encapsulating the
             * KeyGeneratorSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the standard name of the requested key algorithm.
             *  See the KeyGenerator section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyGenerator">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @return the new <code>KeyGenerator</code> object.
             * @exception NullPointerException if the specified algorithm is null.
             * @exception NoSuchAlgorithmException if no Provider supports a
             *           KeyGeneratorSpi implementation for the
             *           specified algorithm.
             * @see java.security.Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string): javax.crypto.KeyGenerator
            /**
             * Returns a <code>KeyGenerator</code> object that generates secret keys
             * for the specified algorithm.
             * <p> A new KeyGenerator object encapsulating the
             * KeyGeneratorSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the standard name of the requested key algorithm.
             *  See the KeyGenerator section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyGenerator">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the name of the provider.
             * @return the new <code>KeyGenerator</code> object.
             * @exception NullPointerException if the specified algorithm is null.
             * @exception NoSuchAlgorithmException if a KeyGeneratorSpi
             *           implementation for the specified algorithm is not
             *           available from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the <code>provider</code>
             *           is null or empty.
             * @see java.security.Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.lang.String | string): javax.crypto.KeyGenerator
            /**
             * Returns a <code>KeyGenerator</code> object that generates secret keys
             * for the specified algorithm.
             * <p> A new KeyGenerator object encapsulating the
             * KeyGeneratorSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * @param algorithm the standard name of the requested key algorithm.
             *  See the KeyGenerator section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyGenerator">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the provider.
             * @return the new <code>KeyGenerator</code> object.
             * @exception NullPointerException if the specified algorithm is null.
             * @exception NoSuchAlgorithmException if a KeyGeneratorSpi
             *           implementation for the specified algorithm is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the <code>provider</code>
             *           is null.
             * @see java.security.Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.security.Provider): javax.crypto.KeyGenerator
            /**
             * Returns the provider of this <code>KeyGenerator</code> object.
             * @return the provider of this <code>KeyGenerator</code> object
             */
            // @ts-ignore
            public getProvider(): java.security.Provider
            /**
             * Initializes this key generator.
             * @param random the source of randomness for this generator
             */
            // @ts-ignore
            public init(random: java.security.SecureRandom): void
            /**
             * Initializes this key generator with the specified parameter set.
             * <p> If this key generator requires any random bytes, it will get them
             * using the
             * {@link java.security.SecureRandom}
             * implementation of the highest-priority installed
             * provider as the source of randomness.
             * (If none of the installed providers supply an implementation of
             * SecureRandom, a system-provided source of randomness will be used.)
             * @param params the key generation parameters
             * @exception InvalidAlgorithmParameterException if the given parameters
             *  are inappropriate for this key generator
             */
            // @ts-ignore
            public init(params: java.security.spec.AlgorithmParameterSpec): void
            /**
             * Initializes this key generator with the specified parameter
             * set and a user-provided source of randomness.
             * @param params the key generation parameters
             * @param random the source of randomness for this key generator
             * @exception InvalidAlgorithmParameterException if <code>params</code> is
             *  inappropriate for this key generator
             */
            // @ts-ignore
            public init(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void
            /**
             * Initializes this key generator for a certain keysize.
             * <p> If this key generator requires any random bytes, it will get them
             * using the
             * {@link java.security.SecureRandom}
             * implementation of the highest-priority installed
             * provider as the source of randomness.
             * (If none of the installed providers supply an implementation of
             * SecureRandom, a system-provided source of randomness will be used.)
             * @param keysize the keysize. This is an algorithm-specific metric,
             *  specified in number of bits.
             * @exception InvalidParameterException if the keysize is wrong or not
             *  supported.
             */
            // @ts-ignore
            public init(keysize: number /*int*/): void
            /**
             * Initializes this key generator for a certain keysize, using a
             * user-provided source of randomness.
             * @param keysize the keysize. This is an algorithm-specific metric,
             *  specified in number of bits.
             * @param random the source of randomness for this key generator
             * @exception InvalidParameterException if the keysize is wrong or not
             *  supported.
             */
            // @ts-ignore
            public init(keysize: number /*int*/, random: java.security.SecureRandom): void
            /**
             * Generates a secret key.
             * @return the new key
             */
            // @ts-ignore
            public generateKey(): javax.crypto.SecretKey
        }
    }
}
