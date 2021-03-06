declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link Scope} wrapper for a ServletContext, i.e. for global web application attributes.
                     * <p>This differs from traditional Spring singletons in that it exposes attributes in the
                     * ServletContext. Those attributes will get destroyed whenever the entire application
                     * shuts down, which might be earlier or later than the shutdown of the containing Spring
                     * ApplicationContext.
                     * <p>The associated destruction mechanism relies on a
                     * {@link org.springframework.web.context.ContextCleanupListener} being registered in
                     * {@code web.xml}. Note that {@link org.springframework.web.context.ContextLoaderListener}
                     * includes ContextCleanupListener's functionality.
                     * <p>This scope is registered as default scope with key
                     * {@link org.springframework.web.context.WebApplicationContext#SCOPE_APPLICATION "application"}.
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see org.springframework.web.context.ContextCleanupListener
                     */
                    // @ts-ignore
                    class ServletContextScope extends java.lang.Object {
                        /**
                         * Create a new Scope wrapper for the given ServletContext.
                         * @param servletContext the ServletContext to wrap
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext)
                        // @ts-ignore
                        public get(name: java.lang.String | string, objectFactory: object): any
                        // @ts-ignore
                        public remove(name: java.lang.String | string): any
                        // @ts-ignore
                        public registerDestructionCallback(name: java.lang.String | string, callback: java.lang.Runnable): void
                        // @ts-ignore
                        public resolveContextualObject(key: java.lang.String | string): any
                        // @ts-ignore
                        public getConversationId(): string
                        /**
                         * Invoke all registered destruction callbacks.
                         * To be called on ServletContext shutdown.
                         * @see org.springframework.web.context.ContextCleanupListener
                         */
                        // @ts-ignore
                        public destroy(): void
                    }
                }
            }
        }
    }
}
