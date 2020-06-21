declare namespace javax {
    namespace servlet {
        /**
         * Implementations of this interface receive notifications about changes to the
         * servlet context of the web application they are part of. To receive
         * notification events, the implementation class must be configured in the
         * deployment descriptor for the web application.
         * @see ServletContextEvent
         * @since v 2.3
         */
        // @ts-ignore
        interface ServletContextListener extends java.util.EventListener {
            /**
             * Notification that the web application initialization process is starting.
             * All ServletContextListeners are notified of context initialization before
             * any filter or servlet in the web application is initialized.
             * The default implementation is a NO-OP.
             * @param sce Information about the ServletContext that was initialized
             */
            // @ts-ignore
            contextInitialized(sce: javax.servlet.ServletContextEvent): void
            /**
             * Notification that the servlet context is about to be shut down. All
             * servlets and filters have been destroy()ed before any
             * ServletContextListeners are notified of context destruction.
             * The default implementation is a NO-OP.
             * @param sce Information about the ServletContext that was destroyed
             */
            // @ts-ignore
            contextDestroyed(sce: javax.servlet.ServletContextEvent): void
        }
    }
}
