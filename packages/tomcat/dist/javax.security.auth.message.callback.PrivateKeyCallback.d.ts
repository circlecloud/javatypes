declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    /**
                     * Callback that enables an authentication module to request a certificate chain
                     * and private key from the runtime. The information specifying the chain and
                     * key may be an alias, a digest, a subject key, or an issuer ID. Other request
                     * types may be supported.
                     */
                    // @ts-ignore
                    class PrivateKeyCallback extends java.lang.Object implements javax.security.auth.callback.Callback {
                        // @ts-ignore
                        constructor(request: javax.security.auth.message.callback.PrivateKeyCallback.Request)
                        // @ts-ignore
                        public getRequest(): javax.security.auth.message.callback.PrivateKeyCallback.Request
                        // @ts-ignore
                        public setKey(key: java.security.PrivateKey, chain: java.security.cert.Certificate[]): void
                        // @ts-ignore
                        public getKey(): java.security.PrivateKey
                        // @ts-ignore
                        public getChain(): java.security.cert.Certificate[]
                    }
                }
            }
        }
    }
}
