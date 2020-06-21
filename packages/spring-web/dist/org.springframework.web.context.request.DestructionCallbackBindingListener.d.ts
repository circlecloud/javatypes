declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Adapter that implements the Servlet HttpSessionBindingListener interface,
                     * wrapping a session destruction callback.
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see RequestAttributes#registerDestructionCallback
                     * @see ServletRequestAttributes#registerSessionDestructionCallback
                     */
                    // @ts-ignore
                    class DestructionCallbackBindingListener extends java.lang.Object implements java.io.Serializable {
                        /**
                         * Create a new DestructionCallbackBindingListener for the given callback.
                         * @param destructionCallback the Runnable to execute when this listener
                         *  object gets unbound from the session
                         */
                        // @ts-ignore
                        constructor(destructionCallback: java.lang.Runnable)
                        // @ts-ignore
                        public valueBound(event: HttpSessionBindingEvent): void
                        // @ts-ignore
                        public valueUnbound(event: HttpSessionBindingEvent): void
                    }
                }
            }
        }
    }
}
