declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace MessagePolicy {
                    // @ts-ignore
                    interface ProtectionPolicy {
                        // @ts-ignore
                        readonly AUTHENTICATE_SENDER: java.lang.String | string
                        // @ts-ignore
                        readonly AUTHENTICATE_CONTENT: java.lang.String | string
                        // @ts-ignore
                        readonly AUTHENTICATE_RECIPIENT: java.lang.String | string
                        // @ts-ignore
                        getID(): string
                    }
                }
            }
        }
    }
}
