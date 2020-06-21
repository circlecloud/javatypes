declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    /**
                     * Callback that enables an authentication module to inform the runtime of the
                     * call principal or name of the caller principal.
                     */
                    // @ts-ignore
                    class CallerPrincipalCallback extends java.lang.Object implements javax.security.auth.callback.Callback {
                        // @ts-ignore
                        constructor(subject: javax.security.auth.Subject, principal: java.security.Principal)
                        // @ts-ignore
                        constructor(subject: javax.security.auth.Subject, name: java.lang.String | string)
                        // @ts-ignore
                        public getSubject(): javax.security.auth.Subject
                        // @ts-ignore
                        public getPrincipal(): java.security.Principal
                        // @ts-ignore
                        public getName(): string
                    }
                }
            }
        }
    }
}
