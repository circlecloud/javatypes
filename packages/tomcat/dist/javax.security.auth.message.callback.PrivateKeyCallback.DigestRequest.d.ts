declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    namespace PrivateKeyCallback {
                        // @ts-ignore
                        class DigestRequest extends java.lang.Object implements javax.security.auth.message.callback.PrivateKeyCallback.Request {
                            // @ts-ignore
                            constructor(digest: number /*byte*/[], algorithm: java.lang.String | string)
                            // @ts-ignore
                            public getDigest(): number /*byte*/[]
                            // @ts-ignore
                            public getAlgorithm(): string
                        }
                    }
                }
            }
        }
    }
}
