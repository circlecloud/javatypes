declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace config {
                    // @ts-ignore
                    interface AuthConfigProvider {
                        // @ts-ignore
                        getClientAuthConfig(layer: java.lang.String | string, appContext: java.lang.String | string, handler: javax.security.auth.callback.CallbackHandler): javax.security.auth.message.config.ClientAuthConfig
                        // @ts-ignore
                        getServerAuthConfig(layer: java.lang.String | string, appContext: java.lang.String | string, handler: javax.security.auth.callback.CallbackHandler): javax.security.auth.message.config.ServerAuthConfig
                        // @ts-ignore
                        refresh(): void
                    }
                }
            }
        }
    }
}
