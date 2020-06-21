declare namespace java {
    namespace security {
        namespace KeyStore {
            /**
             * A ProtectionParameter encapsulating a CallbackHandler.
             * @since 1.5
             */
            // @ts-ignore
            class CallbackHandlerProtection extends java.lang.Object implements java.security.KeyStore.ProtectionParameter {
                /**
                 * Constructs a new CallbackHandlerProtection from a
                 * CallbackHandler.
                 * @param handler the CallbackHandler
                 * @exception NullPointerException if handler is null
                 */
                // @ts-ignore
                constructor(handler: javax.security.auth.callback.CallbackHandler)
                /**
                 * Returns the CallbackHandler.
                 * @return the CallbackHandler.
                 */
                // @ts-ignore
                public getCallbackHandler(): javax.security.auth.callback.CallbackHandler
            }
        }
    }
}
