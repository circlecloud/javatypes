declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies an RSA multi-prime private key, as defined in the
             * PKCS#1 v2.1, using the Chinese Remainder Theorem (CRT) information
             * values for efficiency.
             * @author Valerie Peng
             * @see java.security.Key
             * @see java.security.KeyFactory
             * @see KeySpec
             * @see PKCS8EncodedKeySpec
             * @see RSAPrivateKeySpec
             * @see RSAPublicKeySpec
             * @see RSAOtherPrimeInfo
             * @since 1.4
             */
            // @ts-ignore
            class RSAMultiPrimePrivateCrtKeySpec extends java.security.spec.RSAPrivateKeySpec {
                /**
                 * Creates a new {@code RSAMultiPrimePrivateCrtKeySpec}
                 * given the modulus, publicExponent, privateExponent,
                 * primeP, primeQ, primeExponentP, primeExponentQ,
                 * crtCoefficient, and otherPrimeInfo as defined in PKCS#1 v2.1.
                 * <p>Note that the contents of {@code otherPrimeInfo}
                 * are copied to protect against subsequent modification when
                 * constructing this object.
                 * @param modulus the modulus n.
                 * @param publicExponent the public exponent e.
                 * @param privateExponent the private exponent d.
                 * @param primeP the prime factor p of n.
                 * @param primeQ the prime factor q of n.
                 * @param primeExponentP this is d mod (p-1).
                 * @param primeExponentQ this is d mod (q-1).
                 * @param crtCoefficient the Chinese Remainder Theorem
                 *  coefficient q-1 mod p.
                 * @param otherPrimeInfo triplets of the rest of primes, null can be
                 *  specified if there are only two prime factors (p and q).
                 * @exception NullPointerException if any of the parameters, i.e.
                 *  {#code modulus},
                 *  {@code publicExponent}, {@code privateExponent},
                 *  {@code primeP}, {@code primeQ},
                 *  {@code primeExponentP}, {@code primeExponentQ},
                 *  {@code crtCoefficient}, is null.
                 * @exception IllegalArgumentException if an empty, i.e. 0-length,
                 *  {#code otherPrimeInfo} is specified.
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, publicExponent: java.math.BigInteger, privateExponent: java.math.BigInteger, primeP: java.math.BigInteger, primeQ: java.math.BigInteger, primeExponentP: java.math.BigInteger, primeExponentQ: java.math.BigInteger, crtCoefficient: java.math.BigInteger, otherPrimeInfo: java.security.spec.RSAOtherPrimeInfo[])
                /**
                 * Returns the public exponent.
                 * @return the public exponent.
                 */
                // @ts-ignore
                getPublicExponent(): java.math.BigInteger
                /**
                 * Returns the primeP.
                 * @return the primeP.
                 */
                // @ts-ignore
                getPrimeP(): java.math.BigInteger
                /**
                 * Returns the primeQ.
                 * @return the primeQ.
                 */
                // @ts-ignore
                getPrimeQ(): java.math.BigInteger
                /**
                 * Returns the primeExponentP.
                 * @return the primeExponentP.
                 */
                // @ts-ignore
                getPrimeExponentP(): java.math.BigInteger
                /**
                 * Returns the primeExponentQ.
                 * @return the primeExponentQ.
                 */
                // @ts-ignore
                getPrimeExponentQ(): java.math.BigInteger
                /**
                 * Returns the crtCoefficient.
                 * @return the crtCoefficient.
                 */
                // @ts-ignore
                getCrtCoefficient(): java.math.BigInteger
                /**
                 * Returns a copy of the otherPrimeInfo or null if there are
                 * only two prime factors (p and q).
                 * @return the otherPrimeInfo. Returns a new array each
                 *  time this method is called.
                 */
                // @ts-ignore
                getOtherPrimeInfo(): java.security.spec.RSAOtherPrimeInfo[]
            }
        }
    }
}
