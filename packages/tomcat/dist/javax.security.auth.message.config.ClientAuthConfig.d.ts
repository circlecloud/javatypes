declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace config {
                    // @ts-ignore
                    interface ClientAuthConfig extends javax.security.auth.message.config.AuthConfig {
                        // @ts-ignore
                        getAuthContext(authContextID: java.lang.String | string, clientSubject: javax.security.auth.Subject, properties: java.util.Map<any>): javax.security.auth.message.config.ClientAuthContext
                    }
                }
            }
        }
    }
}
