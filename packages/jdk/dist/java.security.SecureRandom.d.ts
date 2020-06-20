declare namespace java {
    namespace security {
        /**
         * This class provides a cryptographically strong random number
         * generator (RNG).
         * <p>A cryptographically strong random number
         * minimally complies with the statistical random number generator tests
         * specified in <a href="http://csrc.nist.gov/cryptval/140-2.htm">
         * <i>FIPS 140-2, Security Requirements for Cryptographic Modules</i></a>,
         * section 4.9.1.
         * Additionally, SecureRandom must produce non-deterministic output.
         * Therefore any seed material passed to a SecureRandom object must be
         * unpredictable, and all SecureRandom output sequences must be
         * cryptographically strong, as described in
         * <a href="http://www.ietf.org/rfc/rfc1750.txt">
         * <i>RFC 1750: Randomness Recommendations for Security</i></a>.
         * <p>A caller obtains a SecureRandom instance via the
         * no-argument constructor or one of the {@code getInstance} methods:
         * <pre>
         * SecureRandom random = new SecureRandom();
         * </pre>
         * <p> Many SecureRandom implementations are in the form of a pseudo-random
         * number generator (PRNG), which means they use a deterministic algorithm
         * to produce a pseudo-random sequence from a true random seed.
         * Other implementations may produce true random numbers,
         * and yet others may use a combination of both techniques.
         * <p> Typical callers of SecureRandom invoke the following methods
         * to retrieve random bytes:
         * <pre>
         * SecureRandom random = new SecureRandom();
         * byte bytes[] = new byte[20];
         * random.nextBytes(bytes);
         * </pre>
         * <p> Callers may also invoke the {@code generateSeed} method
         * to generate a given number of seed bytes (to seed other random number
         * generators, for example):
         * <pre>
         * byte seed[] = random.generateSeed(20);
         * </pre>
         * Note: Depending on the implementation, the {@code generateSeed} and
         * {@code nextBytes} methods may block as entropy is being gathered,
         * for example, if they need to read from /dev/random on various Unix-like
         * operating systems.
         * @see java.security.SecureRandomSpi
         * @see java.util.Random
         * @author Benjamin Renaud
         * @author Josh Bloch
         */
        // @ts-ignore
        class SecureRandom extends java.util.Random {
            /**
             * Constructs a secure random number generator (RNG) implementing the
             * default random number algorithm.
             * <p> This constructor traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the first
             * Provider that supports a SecureRandom (RNG) algorithm is returned.
             * If none of the Providers support a RNG algorithm,
             * then an implementation-specific default is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> See the SecureRandom section in the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html#SecureRandom">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard RNG algorithm names.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a secure random number generator (RNG) implementing the
             * default random number algorithm.
             * The SecureRandom instance is seeded with the specified seed bytes.
             * <p> This constructor traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the first
             * Provider that supports a SecureRandom (RNG) algorithm is returned.
             * If none of the Providers support a RNG algorithm,
             * then an implementation-specific default is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> See the SecureRandom section in the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html#SecureRandom">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard RNG algorithm names.
             * @param seed the seed.
             */
            // @ts-ignore
            constructor(seed: number /*byte*/[])
            /**
             * Creates a SecureRandom object.
             * @param secureRandomSpi the SecureRandom implementation.
             * @param provider the provider.
             */
            // @ts-ignore
            constructor(secureRandomSpi: java.security.SecureRandomSpi, provider: java.security.Provider)
            /**
             * Returns a SecureRandom object that implements the specified
             * Random Number Generator (RNG) algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             * @param algorithm the name of the RNG algorithm.
             *  See the SecureRandom section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#SecureRandom">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard RNG algorithm names.
             * @return the new SecureRandom object.
             * @exception NoSuchAlgorithmException if no Provider supports a
             *           SecureRandomSpi implementation for the
             *           specified algorithm.
             * @see Provider
             * @since 1.2
             */
            // @ts-ignore
            getInstance(algorithm: string): java.security.SecureRandom
            /**
             * Returns a SecureRandom object that implements the specified
             * Random Number Generator (RNG) algorithm.
             * <p> A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             * @param algorithm the name of the RNG algorithm.
             *  See the SecureRandom section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#SecureRandom">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard RNG algorithm names.
             * @param provider the name of the provider.
             * @return the new SecureRandom object.
             * @exception NoSuchAlgorithmException if a SecureRandomSpi
             *           implementation for the specified algorithm is not
             *           available from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the provider name is null
             *           or empty.
             * @see Provider
             * @since 1.2
             */
            // @ts-ignore
            getInstance(algorithm: string, provider: string): java.security.SecureRandom
            /**
             * Returns a SecureRandom object that implements the specified
             * Random Number Generator (RNG) algorithm.
             * <p> A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             * @param algorithm the name of the RNG algorithm.
             *  See the SecureRandom section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#SecureRandom">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard RNG algorithm names.
             * @param provider the provider.
             * @return the new SecureRandom object.
             * @exception NoSuchAlgorithmException if a SecureRandomSpi
             *           implementation for the specified algorithm is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the specified provider is null.
             * @see Provider
             * @since 1.4
             */
            // @ts-ignore
            getInstance(algorithm: string, provider: java.security.Provider): java.security.SecureRandom
            /**
             * Returns the provider of this SecureRandom object.
             * @return the provider of this SecureRandom object.
             */
            // @ts-ignore
            getProvider(): java.security.Provider
            /**
             * Returns the name of the algorithm implemented by this SecureRandom
             * object.
             * @return the name of the algorithm or {#code unknown}
             *           if the algorithm name cannot be determined.
             * @since 1.5
             */
            // @ts-ignore
            getAlgorithm(): java.lang.String
            /**
             * Reseeds this random object. The given seed supplements, rather than
             * replaces, the existing seed. Thus, repeated calls are guaranteed
             * never to reduce randomness.
             * @param seed the seed.
             * @see #getSeed
             */
            // @ts-ignore
            setSeed(seed: number /*byte*/[]): void
            /**
             * Reseeds this random object, using the eight bytes contained
             * in the given {@code long seed}. The given seed supplements,
             * rather than replaces, the existing seed. Thus, repeated calls
             * are guaranteed never to reduce randomness.
             * <p>This method is defined for compatibility with
             * {@code java.util.Random}.
             * @param seed the seed.
             * @see #getSeed
             */
            // @ts-ignore
            setSeed(seed: number /*long*/): void
            /**
             * Generates a user-specified number of random bytes.
             * <p> If a call to {@code setSeed} had not occurred previously,
             * the first call to this method forces this SecureRandom object
             * to seed itself.  This self-seeding will not occur if
             * {@code setSeed} was previously called.
             * @param bytes the array to be filled in with random bytes.
             */
            // @ts-ignore
            nextBytes(bytes: number /*byte*/[]): void
            /**
             * Generates an integer containing the user-specified number of
             * pseudo-random bits (right justified, with leading zeros).  This
             * method overrides a {@code java.util.Random} method, and serves
             * to provide a source of random bits to all of the methods inherited
             * from that class (for example, {@code nextInt},
             * {@code nextLong}, and {@code nextFloat}).
             * @param numBits number of pseudo-random bits to be generated, where
             *  {#code 0 <= numBits <= 32}.
             * @return an {#code int} containing the user-specified number
             *  of pseudo-random bits (right justified, with leading zeros).
             */
            // @ts-ignore
            next(numBits: number /*int*/): int
            /**
             * Returns the given number of seed bytes, computed using the seed
             * generation algorithm that this class uses to seed itself.  This
             * call may be used to seed other random number generators.
             * <p>This method is only included for backwards compatibility.
             * The caller is encouraged to use one of the alternative
             * {@code getInstance} methods to obtain a SecureRandom object, and
             * then call the {@code generateSeed} method to obtain seed bytes
             * from that object.
             * @param numBytes the number of seed bytes to generate.
             * @return the seed bytes.
             * @see #setSeed
             */
            // @ts-ignore
            getSeed(numBytes: number /*int*/): byte[]
            /**
             * Returns the given number of seed bytes, computed using the seed
             * generation algorithm that this class uses to seed itself.  This
             * call may be used to seed other random number generators.
             * @param numBytes the number of seed bytes to generate.
             * @return the seed bytes.
             */
            // @ts-ignore
            generateSeed(numBytes: number /*int*/): byte[]
            /**
             * Returns a {@code SecureRandom} object that was selected by using
             * the algorithms/providers specified in the {@code
             * securerandom.strongAlgorithms} {@link Security} property.
             * <p>
             * Some situations require strong random values, such as when
             * creating high-value/long-lived secrets like RSA public/private
             * keys.  To help guide applications in selecting a suitable strong
             * {@code SecureRandom} implementation, Java distributions
             * include a list of known strong {@code SecureRandom}
             * implementations in the {@code securerandom.strongAlgorithms}
             * Security property.
             * <p>
             * Every implementation of the Java platform is required to
             * support at least one strong {@code SecureRandom} implementation.
             * @return a strong {#code SecureRandom} implementation as indicated
             *  by the {@code securerandom.strongAlgorithms} Security property
             * @throws NoSuchAlgorithmException if no algorithm is available
             * @see Security#getProperty(String)
             * @since 1.8
             */
            // @ts-ignore
            getInstanceStrong(): java.security.SecureRandom
        }
    }
}
