declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an elliptic curve (EC) private key.
             * @author Valerie Peng
             * @see PrivateKey
             * @see ECKey
             * @since 1.5
             */
            // @ts-ignore
            interface ECPrivateKey extends java.security.PrivateKey, java.security.interfaces.ECKey {
                /**
                 * The class fingerprint that is set to indicate
                 * serialization compatibility.
                 */
                // @ts-ignore
                readonly serialVersionUID: number /*long*/
                /**
                 * Returns the private value S.
                 * @return the private value S.
                 */
                // @ts-ignore
                getS(): java.math.BigInteger
            }
        }
    }
}
