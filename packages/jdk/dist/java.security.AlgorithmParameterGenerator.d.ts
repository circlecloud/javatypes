declare namespace java {
    namespace security {
        /**
         * The {@code AlgorithmParameterGenerator} class is used to generate a
         * set of
         * parameters to be used with a certain algorithm. Parameter generators
         * are constructed using the {@code getInstance} factory methods
         * (static methods that return instances of a given class).
         * <P>The object that will generate the parameters can be initialized
         * in two different ways: in an algorithm-independent manner, or in an
         * algorithm-specific manner:
         * <ul>
         * <li>The algorithm-independent approach uses the fact that all parameter
         * generators share the concept of a "size" and a
         * source of randomness. The measure of size is universally shared
         * by all algorithm parameters, though it is interpreted differently
         * for different algorithms. For example, in the case of parameters for
         * the <i>DSA</i> algorithm, "size" corresponds to the size
         * of the prime modulus (in bits).
         * When using this approach, algorithm-specific parameter generation
         * values - if any - default to some standard values, unless they can be
         * derived from the specified size.
         * <li>The other approach initializes a parameter generator object
         * using algorithm-specific semantics, which are represented by a set of
         * algorithm-specific parameter generation values. To generate
         * Diffie-Hellman system parameters, for example, the parameter generation
         * values usually
         * consist of the size of the prime modulus and the size of the
         * random exponent, both specified in number of bits.
         * </ul>
         * <P>In case the client does not explicitly initialize the
         * AlgorithmParameterGenerator
         * (via a call to an {@code init} method), each provider must supply (and
         * document) a default initialization. For example, the Sun provider uses a
         * default modulus prime size of 1024 bits for the generation of DSA
         * parameters.
         * <p> Every implementation of the Java platform is required to support the
         * following standard {@code AlgorithmParameterGenerator} algorithms and
         * keysizes in parentheses:
         * <ul>
         * <li>{@code DiffieHellman} (1024)</li>
         * <li>{@code DSA} (1024)</li>
         * </ul>
         * These algorithms are described in the <a href=
         * "{@docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameterGenerator">
         * AlgorithmParameterGenerator section</a> of the
         * Java Cryptography Architecture Standard Algorithm Name Documentation.
         * Consult the release documentation for your implementation to see if any
         * other algorithms are supported.
         * @author Jan Luehe
         * @see AlgorithmParameters
         * @see java.security.spec.AlgorithmParameterSpec
         * @since 1.2
         */
        // @ts-ignore
        class AlgorithmParameterGenerator extends java.lang.Object {
            /**
             * Creates an AlgorithmParameterGenerator object.
             * @param paramGenSpi the delegate
             * @param provider the provider
             * @param algorithm the algorithm
             */
            // @ts-ignore
            constructor(paramGenSpi: java.security.AlgorithmParameterGeneratorSpi, provider: java.security.Provider, algorithm: java.lang.String | string)
            /**
             * Returns the standard name of the algorithm this parameter
             * generator is associated with.
             * @return the string name of the algorithm.
             */
            // @ts-ignore
            public getAlgorithm(): string
            /**
             * Returns an AlgorithmParameterGenerator object for generating
             * a set of parameters to be used with the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new AlgorithmParameterGenerator object encapsulating the
             * AlgorithmParameterGeneratorSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the name of the algorithm this
             *  parameter generator is associated with.
             *  See the AlgorithmParameterGenerator section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameterGenerator">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @return the new AlgorithmParameterGenerator object.
             * @exception NoSuchAlgorithmException if no Provider supports an
             *           AlgorithmParameterGeneratorSpi implementation for the
             *           specified algorithm.
             * @see Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string): java.security.AlgorithmParameterGenerator
            /**
             * Returns an AlgorithmParameterGenerator object for generating
             * a set of parameters to be used with the specified algorithm.
             * <p> A new AlgorithmParameterGenerator object encapsulating the
             * AlgorithmParameterGeneratorSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the name of the algorithm this
             *  parameter generator is associated with.
             *  See the AlgorithmParameterGenerator section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameterGenerator">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the string name of the Provider.
             * @return the new AlgorithmParameterGenerator object.
             * @exception NoSuchAlgorithmException if an AlgorithmParameterGeneratorSpi
             *           implementation for the specified algorithm is not
             *           available from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the provider name is null
             *           or empty.
             * @see Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.lang.String | string): java.security.AlgorithmParameterGenerator
            /**
             * Returns an AlgorithmParameterGenerator object for generating
             * a set of parameters to be used with the specified algorithm.
             * <p> A new AlgorithmParameterGenerator object encapsulating the
             * AlgorithmParameterGeneratorSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * @param algorithm the string name of the algorithm this
             *  parameter generator is associated with.
             *  See the AlgorithmParameterGenerator section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameterGenerator">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the Provider object.
             * @return the new AlgorithmParameterGenerator object.
             * @exception NoSuchAlgorithmException if an AlgorithmParameterGeneratorSpi
             *           implementation for the specified algorithm is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the specified provider is null.
             * @see Provider
             * @since 1.4
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.security.Provider): java.security.AlgorithmParameterGenerator
            /**
             * Returns the provider of this algorithm parameter generator object.
             * @return the provider of this algorithm parameter generator object
             */
            // @ts-ignore
            public getProvider(): java.security.Provider
            /**
             * Initializes this parameter generator for a certain size.
             * To create the parameters, the {@code SecureRandom}
             * implementation of the highest-priority installed provider is used as
             * the source of randomness.
             * (If none of the installed providers supply an implementation of
             * {@code SecureRandom}, a system-provided source of randomness is
             * used.)
             * @param size the size (number of bits).
             */
            // @ts-ignore
            public init(size: number /*int*/): void
            /**
             * Initializes this parameter generator for a certain size and source
             * of randomness.
             * @param size the size (number of bits).
             * @param random the source of randomness.
             */
            // @ts-ignore
            public init(size: number /*int*/, random: java.security.SecureRandom): void
            /**
             * Initializes this parameter generator with a set of algorithm-specific
             * parameter generation values.
             * To generate the parameters, the {@code SecureRandom}
             * implementation of the highest-priority installed provider is used as
             * the source of randomness.
             * (If none of the installed providers supply an implementation of
             * {@code SecureRandom}, a system-provided source of randomness is
             * used.)
             * @param genParamSpec the set of algorithm-specific parameter generation values.
             * @exception InvalidAlgorithmParameterException if the given parameter
             *  generation values are inappropriate for this parameter generator.
             */
            // @ts-ignore
            public init(genParamSpec: java.security.spec.AlgorithmParameterSpec): void
            /**
             * Initializes this parameter generator with a set of algorithm-specific
             * parameter generation values.
             * @param genParamSpec the set of algorithm-specific parameter generation values.
             * @param random the source of randomness.
             * @exception InvalidAlgorithmParameterException if the given parameter
             *  generation values are inappropriate for this parameter generator.
             */
            // @ts-ignore
            public init(genParamSpec: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void
            /**
             * Generates the parameters.
             * @return the new AlgorithmParameters object.
             */
            // @ts-ignore
            public generateParameters(): java.security.AlgorithmParameters
        }
    }
}
