declare namespace javax {
    namespace crypto {
        namespace interfaces {
            /**
             * The interface to a Diffie-Hellman public key.
             * @author Jan Luehe
             * @see DHKey
             * @see DHPrivateKey
             * @since 1.4
             */
            // @ts-ignore
            interface DHPublicKey extends javax.crypto.interfaces.DHKey, java.security.PublicKey {
                /**
                 * The class fingerprint that is set to indicate serialization
                 * compatibility since J2SE 1.4.
                 */
                // @ts-ignore
                
                /**
                 * Returns the public value, <code>y</code>.
                 * @return the public value, <code>y</code>
                 */
                // @ts-ignore
                getY(): java.math.BigInteger
            }
        }
    }
}
