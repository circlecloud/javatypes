declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    /**
                     * A Callback enabling an authentication module to request a truststore from the
                     * runtime.
                     */
                    // @ts-ignore
                    class TrustStoreCallback extends java.lang.Object implements javax.security.auth.callback.Callback {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setTrustStore(trustStore: java.security.KeyStore): void
                        // @ts-ignore
                        public getTrustStore(): java.security.KeyStore
                    }
                }
            }
        }
    }
}
