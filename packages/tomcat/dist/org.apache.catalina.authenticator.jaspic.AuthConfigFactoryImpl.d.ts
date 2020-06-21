declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace jaspic {
                    // @ts-ignore
                    class AuthConfigFactoryImpl extends javax.security.auth.message.config.AuthConfigFactory {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getConfigProvider(layer: java.lang.String | string, appContext: java.lang.String | string, listener: javax.security.auth.message.config.RegistrationListener): javax.security.auth.message.config.AuthConfigProvider
                        // @ts-ignore
                        public registerConfigProvider(className: java.lang.String | string, properties: java.util.Map<any>, layer: java.lang.String | string, appContext: java.lang.String | string, description: java.lang.String | string): string
                        // @ts-ignore
                        public registerConfigProvider(provider: javax.security.auth.message.config.AuthConfigProvider, layer: java.lang.String | string, appContext: java.lang.String | string, description: java.lang.String | string): string
                        // @ts-ignore
                        public removeRegistration(registrationID: java.lang.String | string): boolean
                        // @ts-ignore
                        public detachListener(listener: javax.security.auth.message.config.RegistrationListener, layer: java.lang.String | string, appContext: java.lang.String | string): string[]
                        // @ts-ignore
                        public getRegistrationIDs(provider: javax.security.auth.message.config.AuthConfigProvider): string[]
                        // @ts-ignore
                        public getRegistrationContext(registrationID: java.lang.String | string): javax.security.auth.message.config.AuthConfigFactory.RegistrationContext
                        // @ts-ignore
                        public refresh(): void
                    }
                }
            }
        }
    }
}
