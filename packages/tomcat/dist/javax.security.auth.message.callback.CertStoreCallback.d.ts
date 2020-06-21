declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    /**
                     * Callback that enables a runtime to inform authentication modules of the
                     * CertStore to use.
                     */
                    // @ts-ignore
                    class CertStoreCallback extends java.lang.Object implements javax.security.auth.callback.Callback {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setCertStore(certStore: java.security.cert.CertStore): void
                        // @ts-ignore
                        public getCertStore(): java.security.cert.CertStore
                    }
                }
            }
        }
    }
}
