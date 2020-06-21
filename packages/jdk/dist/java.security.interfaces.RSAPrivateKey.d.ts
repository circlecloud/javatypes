declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an RSA private key.
             * @author Jan Luehe
             * @see RSAPrivateCrtKey
             */
            // @ts-ignore
            interface RSAPrivateKey extends java.security.PrivateKey, java.security.interfaces.RSAKey {
                /**
                 * The type fingerprint that is set to indicate
                 * serialization compatibility with a previous
                 * version of the type.
                 */
                // @ts-ignore
                readonly serialVersionUID: number /*long*/
                /**
                 * Returns the private exponent.
                 * @return the private exponent
                 */
                // @ts-ignore
                getPrivateExponent(): java.math.BigInteger
            }
        }
    }
}
