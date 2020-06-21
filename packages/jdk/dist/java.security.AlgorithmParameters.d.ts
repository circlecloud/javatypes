declare namespace java {
    namespace security {
        /**
         * This class is used as an opaque representation of cryptographic parameters.
         * <p>An {@code AlgorithmParameters} object for managing the parameters
         * for a particular algorithm can be obtained by
         * calling one of the {@code getInstance} factory methods
         * (static methods that return instances of a given class).
         * <p>Once an {@code AlgorithmParameters} object is obtained, it must be
         * initialized via a call to {@code init}, using an appropriate parameter
         * specification or parameter encoding.
         * <p>A transparent parameter specification is obtained from an
         * {@code AlgorithmParameters} object via a call to
         * {@code getParameterSpec}, and a byte encoding of the parameters is
         * obtained via a call to {@code getEncoded}.
         * <p> Every implementation of the Java platform is required to support the
         * following standard {@code AlgorithmParameters} algorithms:
         * <ul>
         * <li>{@code AES}</li>
         * <li>{@code DES}</li>
         * <li>{@code DESede}</li>
         * <li>{@code DiffieHellman}</li>
         * <li>{@code DSA}</li>
         * </ul>
         * These algorithms are described in the <a href=
         * "{@docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameters">
         * AlgorithmParameters section</a> of the
         * Java Cryptography Architecture Standard Algorithm Name Documentation.
         * Consult the release documentation for your implementation to see if any
         * other algorithms are supported.
         * @author Jan Luehe
         * @see java.security.spec.AlgorithmParameterSpec
         * @see java.security.spec.DSAParameterSpec
         * @see KeyPairGenerator
         * @since 1.2
         */
        // @ts-ignore
        class AlgorithmParameters extends java.lang.Object {
            /**
             * Creates an AlgorithmParameters object.
             * @param paramSpi the delegate
             * @param provider the provider
             * @param algorithm the algorithm
             */
            // @ts-ignore
            constructor(paramSpi: java.security.AlgorithmParametersSpi, provider: java.security.Provider, algorithm: java.lang.String | string)
            /**
             * Returns the name of the algorithm associated with this parameter object.
             * @return the algorithm name.
             */
            // @ts-ignore
            public getAlgorithm(): string
            /**
             * Returns a parameter object for the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new AlgorithmParameters object encapsulating the
             * AlgorithmParametersSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> The returned parameter object must be initialized via a call to
             * {@code init}, using an appropriate parameter specification or
             * parameter encoding.
             * @param algorithm the name of the algorithm requested.
             *  See the AlgorithmParameters section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameters">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @return the new parameter object.
             * @exception NoSuchAlgorithmException if no Provider supports an
             *           AlgorithmParametersSpi implementation for the
             *           specified algorithm.
             * @see Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string): java.security.AlgorithmParameters
            /**
             * Returns a parameter object for the specified algorithm.
             * <p> A new AlgorithmParameters object encapsulating the
             * AlgorithmParametersSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p>The returned parameter object must be initialized via a call to
             * {@code init}, using an appropriate parameter specification or
             * parameter encoding.
             * @param algorithm the name of the algorithm requested.
             *  See the AlgorithmParameters section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameters">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the name of the provider.
             * @return the new parameter object.
             * @exception NoSuchAlgorithmException if an AlgorithmParametersSpi
             *           implementation for the specified algorithm is not
             *           available from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the provider name is null
             *           or empty.
             * @see Provider
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.lang.String | string): java.security.AlgorithmParameters
            /**
             * Returns a parameter object for the specified algorithm.
             * <p> A new AlgorithmParameters object encapsulating the
             * AlgorithmParametersSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * <p>The returned parameter object must be initialized via a call to
             * {@code init}, using an appropriate parameter specification or
             * parameter encoding.
             * @param algorithm the name of the algorithm requested.
             *  See the AlgorithmParameters section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#AlgorithmParameters">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the name of the provider.
             * @return the new parameter object.
             * @exception NoSuchAlgorithmException if an AlgorithmParameterGeneratorSpi
             *           implementation for the specified algorithm is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the provider is null.
             * @see Provider
             * @since 1.4
             */
            // @ts-ignore
            public static getInstance(algorithm: java.lang.String | string, provider: java.security.Provider): java.security.AlgorithmParameters
            /**
             * Returns the provider of this parameter object.
             * @return the provider of this parameter object
             */
            // @ts-ignore
            public getProvider(): java.security.Provider
            /**
             * Initializes this parameter object using the parameters
             * specified in {@code paramSpec}.
             * @param paramSpec the parameter specification.
             * @exception InvalidParameterSpecException if the given parameter
             *  specification is inappropriate for the initialization of this parameter
             *  object, or if this parameter object has already been initialized.
             */
            // @ts-ignore
            public init(paramSpec: java.security.spec.AlgorithmParameterSpec): void
            /**
             * Imports the specified parameters and decodes them according to the
             * primary decoding format for parameters. The primary decoding
             * format for parameters is ASN.1, if an ASN.1 specification for this type
             * of parameters exists.
             * @param params the encoded parameters.
             * @exception IOException on decoding errors, or if this parameter object
             *  has already been initialized.
             */
            // @ts-ignore
            public init(params: number /*byte*/[]): void
            /**
             * Imports the parameters from {@code params} and decodes them
             * according to the specified decoding scheme.
             * If {@code format} is null, the
             * primary decoding format for parameters is used. The primary decoding
             * format is ASN.1, if an ASN.1 specification for these parameters
             * exists.
             * @param params the encoded parameters.
             * @param format the name of the decoding scheme.
             * @exception IOException on decoding errors, or if this parameter object
             *  has already been initialized.
             */
            // @ts-ignore
            public init(params: number /*byte*/[], format: java.lang.String | string): void
            /**
             * Returns a (transparent) specification of this parameter object.
             * {@code paramSpec} identifies the specification class in which
             * the parameters should be returned. It could, for example, be
             * {@code DSAParameterSpec.class}, to indicate that the
             * parameters should be returned in an instance of the
             * {@code DSAParameterSpec} class.
             * @param <T> the type of the parameter specification to be returrned
             * @param paramSpec the specification class in which
             *  the parameters should be returned.
             * @return the parameter specification.
             * @exception InvalidParameterSpecException if the requested parameter
             *  specification is inappropriate for this parameter object, or if this
             *  parameter object has not been initialized.
             */
            // @ts-ignore
            public getParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(paramSpec: java.lang.Class<T>): T
            /**
             * Returns the parameters in their primary encoding format.
             * The primary encoding format for parameters is ASN.1, if an ASN.1
             * specification for this type of parameters exists.
             * @return the parameters encoded using their primary encoding format.
             * @exception IOException on encoding errors, or if this parameter object
             *  has not been initialized.
             */
            // @ts-ignore
            public getEncoded(): number /*byte*/[]
            /**
             * Returns the parameters encoded in the specified scheme.
             * If {@code format} is null, the
             * primary encoding format for parameters is used. The primary encoding
             * format is ASN.1, if an ASN.1 specification for these parameters
             * exists.
             * @param format the name of the encoding format.
             * @return the parameters encoded using the specified encoding scheme.
             * @exception IOException on encoding errors, or if this parameter object
             *  has not been initialized.
             */
            // @ts-ignore
            public getEncoded(format: java.lang.String | string): number /*byte*/[]
            /**
             * Returns a formatted string describing the parameters.
             * @return a formatted string describing the parameters, or null if this
             *  parameter object has not been initialized.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
