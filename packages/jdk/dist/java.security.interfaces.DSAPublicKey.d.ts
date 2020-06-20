declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to a DSA public key. DSA (Digital Signature Algorithm)
             * is defined in NIST's FIPS-186.
             * @see java.security.Key
             * @see java.security.Signature
             * @see DSAKey
             * @see DSAPrivateKey
             * @author Benjamin Renaud
             */
            // @ts-ignore
            interface DSAPublicKey extends java.security.interfaces.DSAKey, java.security.PublicKey {
                /**
                 * The class fingerprint that is set to indicate
                 * serialization compatibility with a previous
                 * version of the class.
                 */
                // @ts-ignore
                
                /**
                 * Returns the value of the public key, {@code y}.
                 * @return the value of the public key, {#code y}.
                 */
                // @ts-ignore
                getY(): java.math.BigInteger
            }
        }
    }
}
