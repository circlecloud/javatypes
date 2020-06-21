declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The standard interface to a DSA private key. DSA (Digital Signature
             * Algorithm) is defined in NIST's FIPS-186.
             * @see java.security.Key
             * @see java.security.Signature
             * @see DSAKey
             * @see DSAPublicKey
             * @author Benjamin Renaud
             */
            // @ts-ignore
            interface DSAPrivateKey extends java.security.interfaces.DSAKey, java.security.PrivateKey {
                /**
                 * The class fingerprint that is set to indicate
                 * serialization compatibility with a previous
                 * version of the class.
                 */
                // @ts-ignore
                readonly serialVersionUID: number /*long*/
                /**
                 * Returns the value of the private key, {@code x}.
                 * @return the value of the private key, {#code x}.
                 */
                // @ts-ignore
                getX(): java.math.BigInteger
            }
        }
    }
}
