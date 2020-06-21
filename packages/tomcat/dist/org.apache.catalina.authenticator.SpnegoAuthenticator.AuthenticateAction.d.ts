declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace SpnegoAuthenticator {
                    // @ts-ignore
                    class AuthenticateAction extends java.lang.Object implements java.security.PrivilegedAction<java.security.Principal> {
                        // @ts-ignore
                        constructor(realm: org.apache.catalina.Realm, gssContext: org.ietf.jgss.GSSContext, storeDelegatedCredential: boolean)
                        // @ts-ignore
                        public run(): java.security.Principal
                    }
                }
            }
        }
    }
}
