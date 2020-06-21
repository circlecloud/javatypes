declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an RSA private key, as defined in the PKCS#1 standard,
             * using the <i>Chinese Remainder Theorem</i> (CRT) information values.
             * @author Jan Luehe
             * @see RSAPrivateKey
             */
            // @ts-ignore
            interface RSAPrivateCrtKey extends java.security.interfaces.RSAPrivateKey {
                /**
                 * The type fingerprint that is set to indicate
                 * serialization compatibility with a previous
                 * version of the type.
                 */
                // @ts-ignore
                readonly serialVersionUID: number /*long*/
                /**
                 * Returns the public exponent.
                 * @return the public exponent
                 */
                // @ts-ignore
                getPublicExponent(): java.math.BigInteger
                /**
                 * Returns the primeP.
                 * @return the primeP
                 */
                // @ts-ignore
                getPrimeP(): java.math.BigInteger
                /**
                 * Returns the primeQ.
                 * @return the primeQ
                 */
                // @ts-ignore
                getPrimeQ(): java.math.BigInteger
                /**
                 * Returns the primeExponentP.
                 * @return the primeExponentP
                 */
                // @ts-ignore
                getPrimeExponentP(): java.math.BigInteger
                /**
                 * Returns the primeExponentQ.
                 * @return the primeExponentQ
                 */
                // @ts-ignore
                getPrimeExponentQ(): java.math.BigInteger
                /**
                 * Returns the crtCoefficient.
                 * @return the crtCoefficient
                 */
                // @ts-ignore
                getCrtCoefficient(): java.math.BigInteger
            }
        }
    }
}
