declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace jaspic {
                    /**
                     * Basic implementation primarily intended for use when using third-party
                     * {@link javax.security.auth.message.module.ServerAuthModule} implementations
                     * that only provide the module.
                     */
                    // @ts-ignore
                    class SimpleAuthConfigProvider extends java.lang.Object implements javax.security.auth.message.config.AuthConfigProvider {
                        // @ts-ignore
                        constructor(properties: java.util.Map<java.lang.String | string, java.lang.String | string>, factory: javax.security.auth.message.config.AuthConfigFactory)
                        /**
                         * {@inheritDoc}
                         * <p>
                         * This implementation does not support client-side authentication and
                         * therefore always returns {@code null}.
                         */
                        // @ts-ignore
                        public getClientAuthConfig(layer: java.lang.String | string, appContext: java.lang.String | string, handler: javax.security.auth.callback.CallbackHandler): javax.security.auth.message.config.ClientAuthConfig
                        // @ts-ignore
                        public getServerAuthConfig(layer: java.lang.String | string, appContext: java.lang.String | string, handler: javax.security.auth.callback.CallbackHandler): javax.security.auth.message.config.ServerAuthConfig
                        // @ts-ignore
                        createServerAuthConfig(layer: java.lang.String | string, appContext: java.lang.String | string, handler: javax.security.auth.callback.CallbackHandler, properties: java.util.Map<java.lang.String | string, java.lang.String | string>): javax.security.auth.message.config.ServerAuthConfig
                        // @ts-ignore
                        public refresh(): void
                    }
                }
            }
        }
    }
}
