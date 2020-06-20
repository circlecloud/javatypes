declare namespace java {
    namespace security {
        namespace interfaces {
            /**
             * The interface to an elliptic curve (EC) key.
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            interface ECKey {
                /**
                 * Returns the domain parameters associated
                 * with this key. The domain parameters are
                 * either explicitly specified or implicitly
                 * created during key generation.
                 * @return the associated domain parameters.
                 */
                // @ts-ignore
                getParams(): java.security.spec.ECParameterSpec
            }
        }
    }
}
