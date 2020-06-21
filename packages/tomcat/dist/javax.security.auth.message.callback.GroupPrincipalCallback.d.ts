declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    /**
                     * Callback that enables an authentication module to inform the runtime of the
                     * groups a user is in.
                     */
                    // @ts-ignore
                    class GroupPrincipalCallback extends java.lang.Object implements javax.security.auth.callback.Callback {
                        // @ts-ignore
                        constructor(subject: javax.security.auth.Subject, groups: java.lang.String[] | string[])
                        // @ts-ignore
                        public getSubject(): javax.security.auth.Subject
                        // @ts-ignore
                        public getGroups(): string[]
                    }
                }
            }
        }
    }
}
