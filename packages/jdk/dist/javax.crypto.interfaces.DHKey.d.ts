declare namespace javax {
    namespace crypto {
        namespace interfaces {
            /**
             * The interface to a Diffie-Hellman key.
             * @author Jan Luehe
             * @see javax.crypto.spec.DHParameterSpec
             * @see DHPublicKey
             * @see DHPrivateKey
             * @since 1.4
             */
            // @ts-ignore
            interface DHKey {
                /**
                 * Returns the key parameters.
                 * @return the key parameters
                 */
                // @ts-ignore
                getParams(): javax.crypto.spec.DHParameterSpec
            }
        }
    }
}
