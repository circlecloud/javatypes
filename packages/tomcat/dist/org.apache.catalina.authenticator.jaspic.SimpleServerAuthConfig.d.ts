declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace jaspic {
                    /**
                     * Basic implementation primarily intended for use when using third-party
                     * {@link ServerAuthModule} implementations that only provide the module. This
                     * implementation supports configuring the {@link ServerAuthContext} with
                     * multiple modules.
                     */
                    // @ts-ignore
                    class SimpleServerAuthConfig extends java.lang.Object implements javax.security.auth.message.config.ServerAuthConfig {
                        // @ts-ignore
                        constructor(layer: java.lang.String | string, appContext: java.lang.String | string, handler: javax.security.auth.callback.CallbackHandler, properties: java.util.Map<java.lang.String | string, java.lang.String | string>)
                        // @ts-ignore
                        public getMessageLayer(): string
                        // @ts-ignore
                        public getAppContext(): string
                        // @ts-ignore
                        public getAuthContextID(messageInfo: javax.security.auth.message.MessageInfo): string
                        // @ts-ignore
                        public refresh(): void
                        // @ts-ignore
                        public isProtected(): boolean
                        // @ts-ignore
                        public getAuthContext(authContextID: java.lang.String | string, serviceSubject: javax.security.auth.Subject, properties: java.util.Map<any>): javax.security.auth.message.config.ServerAuthContext
                        // @ts-ignore
                        createServerAuthContext(modules: java.util.List<javax.security.auth.message.module.ServerAuthModule> | Array<javax.security.auth.message.module.ServerAuthModule>): javax.security.auth.message.config.ServerAuthContext
                    }
                }
            }
        }
    }
}
