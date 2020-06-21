declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace callback {
                    /**
                     * Callback that enables an authentication module to supply a user name and
                     * password (to a runtime?) and determine if the result of validation.
                     */
                    // @ts-ignore
                    class PasswordValidationCallback extends java.lang.Object implements javax.security.auth.callback.Callback {
                        // @ts-ignore
                        constructor(subject: javax.security.auth.Subject, username: java.lang.String | string, password: string[])
                        // @ts-ignore
                        public getSubject(): javax.security.auth.Subject
                        // @ts-ignore
                        public getUsername(): string
                        // @ts-ignore
                        public getPassword(): string[]
                        // @ts-ignore
                        public clearPassword(): void
                        // @ts-ignore
                        public setResult(result: boolean): void
                        // @ts-ignore
                        public getResult(): boolean
                    }
                }
            }
        }
    }
}
