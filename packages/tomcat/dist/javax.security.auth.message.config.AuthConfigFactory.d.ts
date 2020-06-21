declare namespace javax {
    namespace security {
        namespace auth {
            namespace message {
                namespace config {
                    // @ts-ignore
                    abstract class AuthConfigFactory extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly DEFAULT_FACTORY_SECURITY_PROPERTY: java.lang.String | string
                        // @ts-ignore
                        public static readonly GET_FACTORY_PERMISSION_NAME: java.lang.String | string
                        // @ts-ignore
                        public static readonly SET_FACTORY_PERMISSION_NAME: java.lang.String | string
                        // @ts-ignore
                        public static readonly PROVIDER_REGISTRATION_PERMISSION_NAME: java.lang.String | string
                        // @ts-ignore
                        public static readonly getFactorySecurityPermission: java.security.SecurityPermission
                        // @ts-ignore
                        public static readonly setFactorySecurityPermission: java.security.SecurityPermission
                        // @ts-ignore
                        public static readonly providerRegistrationSecurityPermission: java.security.SecurityPermission
                        // @ts-ignore
                        public static getFactory(): javax.security.auth.message.config.AuthConfigFactory
                        // @ts-ignore
                        public static setFactory(factory: javax.security.auth.message.config.AuthConfigFactory): void
                        // @ts-ignore
                        public abstract getConfigProvider(layer: java.lang.String | string, appContext: java.lang.String | string, listener: javax.security.auth.message.config.RegistrationListener): javax.security.auth.message.config.AuthConfigProvider
                        // @ts-ignore
                        public abstract registerConfigProvider(className: java.lang.String | string, properties: java.util.Map<any>, layer: java.lang.String | string, appContext: java.lang.String | string, description: java.lang.String | string): string
                        // @ts-ignore
                        public abstract registerConfigProvider(provider: javax.security.auth.message.config.AuthConfigProvider, layer: java.lang.String | string, appContext: java.lang.String | string, description: java.lang.String | string): string
                        // @ts-ignore
                        public abstract removeRegistration(registrationID: java.lang.String | string): boolean
                        // @ts-ignore
                        public abstract detachListener(listener: javax.security.auth.message.config.RegistrationListener, layer: java.lang.String | string, appContext: java.lang.String | string): string[]
                        // @ts-ignore
                        public abstract getRegistrationIDs(provider: javax.security.auth.message.config.AuthConfigProvider): string[]
                        // @ts-ignore
                        public abstract getRegistrationContext(registrationID: java.lang.String | string): javax.security.auth.message.config.AuthConfigFactory.RegistrationContext
                        // @ts-ignore
                        public abstract refresh(): void
                    }
                }
            }
        }
    }
}
