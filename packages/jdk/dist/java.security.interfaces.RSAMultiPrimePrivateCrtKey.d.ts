declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an RSA multi-prime private key, as defined in the
             * PKCS#1 v2.1, using the <i>Chinese Remainder Theorem</i>
             * (CRT) information values.
             * @author Valerie Peng
             * @see java.security.spec.RSAPrivateKeySpec
             * @see java.security.spec.RSAMultiPrimePrivateCrtKeySpec
             * @see RSAPrivateKey
             * @see RSAPrivateCrtKey
             * @since 1.4
             */
            // @ts-ignore
            interface RSAMultiPrimePrivateCrtKey extends java.security.interfaces.RSAPrivateKey {
                /**
                 * The type fingerprint that is set to indicate
                 * serialization compatibility with a previous
                 * version of the type.
                 */
                // @ts-ignore
                readonly serialVersionUID: number /*long*/
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
                 * Returns the otherPrimeInfo or null if there are only
                 * two prime factors (p and q).
                 * @return the otherPrimeInfo.
                 */
                // @ts-ignore
                getOtherPrimeInfo(): java.security.spec.RSAOtherPrimeInfo[]
            }
        }
    }
}
