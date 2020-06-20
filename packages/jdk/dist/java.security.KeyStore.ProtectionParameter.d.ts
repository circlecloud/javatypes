declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A marker interface for keystore protection parameters.
             * <p> The information stored in a {@code ProtectionParameter}
             * object protects the contents of a keystore.
             * For example, protection parameters may be used to check
             * the integrity of keystore data, or to protect the
             * confidentiality of sensitive keystore data
             * (such as a {@code PrivateKey}).
             * @since 1.5
             */
            // @ts-ignore
            interface ProtectionParameter {
            }
        }
    }
}
