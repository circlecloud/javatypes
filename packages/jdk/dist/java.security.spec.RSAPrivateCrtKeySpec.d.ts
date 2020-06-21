declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies an RSA private key, as defined in the PKCS#1
             * standard, using the Chinese Remainder Theorem (CRT) information values for
             * efficiency.
             * @author Jan Luehe
             * @see java.security.Key
             * @see java.security.KeyFactory
             * @see KeySpec
             * @see PKCS8EncodedKeySpec
             * @see RSAPrivateKeySpec
             * @see RSAPublicKeySpec
             */
            // @ts-ignore
            class RSAPrivateCrtKeySpec extends java.security.spec.RSAPrivateKeySpec {
                /**
                 * Creates a new {@code RSAPrivateCrtKeySpec}
                 * given the modulus, publicExponent, privateExponent,
                 * primeP, primeQ, primeExponentP, primeExponentQ, and
                 * crtCoefficient as defined in PKCS#1.
                 * @param modulus the modulus n
                 * @param publicExponent the public exponent e
                 * @param privateExponent the private exponent d
                 * @param primeP the prime factor p of n
                 * @param primeQ the prime factor q of n
                 * @param primeExponentP this is d mod (p-1)
                 * @param primeExponentQ this is d mod (q-1)
                 * @param crtCoefficient the Chinese Remainder Theorem
                 *  coefficient q-1 mod p
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, publicExponent: java.math.BigInteger, privateExponent: java.math.BigInteger, primeP: java.math.BigInteger, primeQ: java.math.BigInteger, primeExponentP: java.math.BigInteger, primeExponentQ: java.math.BigInteger, crtCoefficient: java.math.BigInteger)
                /**
                 * Returns the public exponent.
                 * @return the public exponent
                 */
                // @ts-ignore
                public getPublicExponent(): java.math.BigInteger
                /**
                 * Returns the primeP.
                 * @return the primeP
                 */
                // @ts-ignore
                public getPrimeP(): java.math.BigInteger
                /**
                 * Returns the primeQ.
                 * @return the primeQ
                 */
                // @ts-ignore
                public getPrimeQ(): java.math.BigInteger
                /**
                 * Returns the primeExponentP.
                 * @return the primeExponentP
                 */
                // @ts-ignore
                public getPrimeExponentP(): java.math.BigInteger
                /**
                 * Returns the primeExponentQ.
                 * @return the primeExponentQ
                 */
                // @ts-ignore
                public getPrimeExponentQ(): java.math.BigInteger
                /**
                 * Returns the crtCoefficient.
                 * @return the crtCoefficient
                 */
                // @ts-ignore
                public getCrtCoefficient(): java.math.BigInteger
            }
        }
    }
}
