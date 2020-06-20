declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies the set of parameters used to generate an RSA
             * key pair.
             * @author Jan Luehe
             * @see java.security.KeyPairGenerator#initialize(java.security.spec.AlgorithmParameterSpec)
             * @since 1.3
             */
            // @ts-ignore
            class RSAKeyGenParameterSpec extends java.lang.Object implements java.security.spec.AlgorithmParameterSpec {
                /**
                 * Constructs a new {@code RSAParameterSpec} object from the
                 * given keysize and public-exponent value.
                 * @param keysize the modulus size (specified in number of bits)
                 * @param publicExponent the public exponent
                 */
                // @ts-ignore
                constructor(keysize: number /*int*/, publicExponent: java.math.BigInteger)
                /**
                 * The public-exponent value F0 = 3.
                 */
                // @ts-ignore
                readonly F0: java.math.BigInteger
                /**
                 * The public exponent-value F4 = 65537.
                 */
                // @ts-ignore
                readonly F4: java.math.BigInteger
                /**
                 * Returns the keysize.
                 * @return the keysize.
                 */
                // @ts-ignore
                getKeysize(): int
                /**
                 * Returns the public-exponent value.
                 * @return the public-exponent value.
                 */
                // @ts-ignore
                getPublicExponent(): java.math.BigInteger
            }
        }
    }
}
