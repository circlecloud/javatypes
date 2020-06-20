declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies an RSA public key.
             * @author Jan Luehe
             * @see java.security.Key
             * @see java.security.KeyFactory
             * @see KeySpec
             * @see X509EncodedKeySpec
             * @see RSAPrivateKeySpec
             * @see RSAPrivateCrtKeySpec
             */
            // @ts-ignore
            class RSAPublicKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a new RSAPublicKeySpec.
                 * @param modulus the modulus
                 * @param publicExponent the public exponent
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, publicExponent: java.math.BigInteger)
                /**
                 * Returns the modulus.
                 * @return the modulus
                 */
                // @ts-ignore
                getModulus(): java.math.BigInteger
                /**
                 * Returns the public exponent.
                 * @return the public exponent
                 */
                // @ts-ignore
                getPublicExponent(): java.math.BigInteger
            }
        }
    }
}
