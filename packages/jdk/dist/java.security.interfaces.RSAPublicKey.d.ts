declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an RSA public key.
             * @author Jan Luehe
             */
            // @ts-ignore
            interface RSAPublicKey extends java.security.PublicKey, java.security.interfaces.RSAKey {
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
            }
        }
    }
}
