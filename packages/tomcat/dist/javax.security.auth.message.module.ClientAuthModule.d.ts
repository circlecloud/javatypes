declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace module {
                    // @ts-ignore
                    interface ClientAuthModule extends javax.security.auth.message.ClientAuth {
                        // @ts-ignore
                        initialize(requestPolicy: javax.security.auth.message.MessagePolicy, responsePolicy: javax.security.auth.message.MessagePolicy, handler: javax.security.auth.callback.CallbackHandler, options: java.util.Map<any>): void
                        // @ts-ignore
                        getSupportedMessageTypes(): java.lang.Class<any>[]
                    }
                }
            }
        }
    }
}
