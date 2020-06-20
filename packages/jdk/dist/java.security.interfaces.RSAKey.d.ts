declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an RSA public or private key.
             * @author Jan Luehe
             * @see RSAPublicKey
             * @see RSAPrivateKey
             * @since 1.3
             */
            // @ts-ignore
            interface RSAKey {
                /**
                 * Returns the modulus.
                 * @return the modulus
                 */
                // @ts-ignore
                getModulus(): java.math.BigInteger
            }
        }
    }
}
