declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A marker interface for {@code KeyStore}
             * {@link #load(KeyStore.LoadStoreParameter) load}
             * and
             * {@link #store(KeyStore.LoadStoreParameter) store}
             * parameters.
             * @since 1.5
             */
            // @ts-ignore
            interface LoadStoreParameter {
                /**
                 * Gets the parameter used to protect keystore data.
                 * @return the parameter used to protect keystore data, or null
                 */
                // @ts-ignore
                getProtectionParameter(): java.security.KeyStore.ProtectionParameter
            }
        }
    }
}
