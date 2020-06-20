declare namespace javax {
    namespace crypto {
        namespace interfaces {
            /**
             * The interface to a Diffie-Hellman private key.
             * @author Jan Luehe
             * @see DHKey
             * @see DHPublicKey
             * @since 1.4
             */
            // @ts-ignore
            interface DHPrivateKey extends javax.crypto.interfaces.DHKey, java.security.PrivateKey {
                /**
                 * The class fingerprint that is set to indicate serialization
                 * compatibility since J2SE 1.4.
                 */
                // @ts-ignore
                
                /**
                 * Returns the private value, <code>x</code>.
                 * @return the private value, <code>x</code>
                 */
                // @ts-ignore
                getX(): java.math.BigInteger
            }
        }
    }
}
