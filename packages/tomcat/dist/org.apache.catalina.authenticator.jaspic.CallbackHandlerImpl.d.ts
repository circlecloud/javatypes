declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace jaspic {
                    /**
                     * Implemented as a singleton since the class is stateless.
                     */
                    // @ts-ignore
                    class CallbackHandlerImpl extends java.lang.Object implements javax.security.auth.callback.CallbackHandler {
                        // @ts-ignore
                        public static getInstance(): javax.security.auth.callback.CallbackHandler
                        // @ts-ignore
                        public handle(callbacks: javax.security.auth.callback.Callback[]): void
                    }
                }
            }
        }
    }
}
