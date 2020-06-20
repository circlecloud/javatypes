declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an elliptic curve (EC) public key.
             * @author Valerie Peng
             * @see PublicKey
             * @see ECKey
             * @see java.security.spec.ECPoint
             * @since 1.5
             */
            // @ts-ignore
            interface ECPublicKey extends java.security.PublicKey, java.security.interfaces.ECKey {
                /**
                 * The class fingerprint that is set to indicate
                 * serialization compatibility.
                 */
                // @ts-ignore
                
                /**
                 * Returns the public point W.
                 * @return the public point W.
                 */
                // @ts-ignore
                getW(): java.security.spec.ECPoint
            }
        }
    }
}
