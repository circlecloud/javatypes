declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    /**
                     * A callback enabling an authentication module to request a secret key from the
                     * runtime, by supplying an alias. Other request types may also be supported.
                     */
                    // @ts-ignore
                    class SecretKeyCallback extends java.lang.Object implements javax.security.auth.callback.Callback {
                        // @ts-ignore
                        constructor(request: javax.security.auth.message.callback.SecretKeyCallback.Request)
                        // @ts-ignore
                        public getRequest(): javax.security.auth.message.callback.SecretKeyCallback.Request
                        // @ts-ignore
                        public setKey(key: javax.crypto.SecretKey): void
                        // @ts-ignore
                        public getKey(): javax.crypto.SecretKey
                    }
                }
            }
        }
    }
}
