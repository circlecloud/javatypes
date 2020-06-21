declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    namespace PrivateKeyCallback {
                        // @ts-ignore
                        class IssuerSerialNumRequest extends java.lang.Object implements javax.security.auth.message.callback.PrivateKeyCallback.Request {
                            // @ts-ignore
                            constructor(issuer: javax.security.auth.x500.X500Principal, serialNum: java.math.BigInteger)
                            // @ts-ignore
                            public getIssuer(): javax.security.auth.x500.X500Principal
                            // @ts-ignore
                            public getSerialNum(): java.math.BigInteger
                        }
                    }
                }
            }
        }
    }
}
