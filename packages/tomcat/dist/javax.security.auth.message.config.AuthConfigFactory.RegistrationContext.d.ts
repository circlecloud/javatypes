declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace config {
                    namespace AuthConfigFactory {
                        // @ts-ignore
                        interface RegistrationContext {
                            // @ts-ignore
                            getMessageLayer(): string
                            // @ts-ignore
                            getAppContext(): string
                            // @ts-ignore
                            getDescription(): string
                            // @ts-ignore
                            isPersistent(): boolean
                        }
                    }
                }
            }
        }
    }
}
