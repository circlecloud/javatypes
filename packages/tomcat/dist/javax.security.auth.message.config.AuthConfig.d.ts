declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace config {
                    // @ts-ignore
                    interface AuthConfig {
                        // @ts-ignore
                        getMessageLayer(): string
                        // @ts-ignore
                        getAppContext(): string
                        // @ts-ignore
                        getAuthContextID(messageInfo: javax.security.auth.message.MessageInfo): string
                        // @ts-ignore
                        refresh(): void
                        // @ts-ignore
                        isProtected(): boolean
                    }
                }
            }
        }
    }
}
