declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace SpnegoAuthenticator {
                    /**
                     * This class gets a gss credential via a privileged action.
                     */
                    // @ts-ignore
                    class AcceptAction extends java.lang.Object implements java.security.PrivilegedExceptionAction<number /*byte*/[]> {
                        // @ts-ignore
                        constructor(context: org.ietf.jgss.GSSContext, decodedToken: number /*byte*/[])
                        // @ts-ignore
                        public run(): number /*byte*/[]
                    }
                }
            }
        }
    }
}
