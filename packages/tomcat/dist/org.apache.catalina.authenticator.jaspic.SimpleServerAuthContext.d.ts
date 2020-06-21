declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace jaspic {
                    /**
                     * Basic implementation primarily intended for use when using third-party
                     * {@link ServerAuthModule} implementations that only provide the module. This
                     * implementation supports multiple modules and will treat the user as
                     * authenticated if any one module is able to authenticate the user.
                     */
                    // @ts-ignore
                    class SimpleServerAuthContext extends java.lang.Object implements javax.security.auth.message.config.ServerAuthContext {
                        // @ts-ignore
                        constructor(modules: java.util.List<javax.security.auth.message.module.ServerAuthModule> | Array<javax.security.auth.message.module.ServerAuthModule>)
                        // @ts-ignore
                        public validateRequest(messageInfo: javax.security.auth.message.MessageInfo, clientSubject: javax.security.auth.Subject, serviceSubject: javax.security.auth.Subject): javax.security.auth.message.AuthStatus
                        // @ts-ignore
                        public secureResponse(messageInfo: javax.security.auth.message.MessageInfo, serviceSubject: javax.security.auth.Subject): javax.security.auth.message.AuthStatus
                        // @ts-ignore
                        public cleanSubject(messageInfo: javax.security.auth.message.MessageInfo, subject: javax.security.auth.Subject): void
                    }
                }
            }
        }
    }
}
