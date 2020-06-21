declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace DigestAuthenticator {
                    // @ts-ignore
                    class DigestInfo extends java.lang.Object {
                        // @ts-ignore
                        constructor(opaque: java.lang.String | string, nonceValidity: number /*long*/, key: java.lang.String | string, nonces: java.util.Map<java.lang.String | string, org.apache.catalina.authenticator.DigestAuthenticator.NonceInfo>, validateUri: boolean)
                        // @ts-ignore
                        public getUsername(): string
                        // @ts-ignore
                        public parse(request: org.apache.catalina.connector.Request, authorization: java.lang.String | string): boolean
                        // @ts-ignore
                        public validate(request: org.apache.catalina.connector.Request): boolean
                        // @ts-ignore
                        public isNonceStale(): boolean
                        // @ts-ignore
                        public authenticate(realm: org.apache.catalina.Realm): java.security.Principal
                    }
                }
            }
        }
    }
}
