declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This class specifies an RSA private key.
             * @author Jan Luehe
             * @see java.security.Key
             * @see java.security.KeyFactory
             * @see KeySpec
             * @see PKCS8EncodedKeySpec
             * @see RSAPublicKeySpec
             * @see RSAPrivateCrtKeySpec
             */
            // @ts-ignore
            class RSAPrivateKeySpec extends java.lang.Object implements java.security.spec.KeySpec {
                /**
                 * Creates a new RSAPrivateKeySpec.
                 * @param modulus the modulus
                 * @param privateExponent the private exponent
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, privateExponent: java.math.BigInteger)
                /**
                 * Returns the modulus.
                 * @return the modulus
                 */
                // @ts-ignore
                public getModulus(): java.math.BigInteger
                /**
                 * Returns the private exponent.
                 * @return the private exponent
                 */
                // @ts-ignore
                public getPrivateExponent(): java.math.BigInteger
            }
        }
    }
}
