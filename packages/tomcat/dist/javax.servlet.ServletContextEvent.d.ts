declare namespace javax {
    namespace servlet {
        /**
         * This is the event class for notifications about changes to the servlet
         * context of a web application.
         * @see ServletContextListener
         * @since v 2.3
         */
        // @ts-ignore
        class ServletContextEvent extends java.util.EventObject {
            /**
             * Construct a ServletContextEvent from the given context.
             * @param source
             *             - the ServletContext that is sending the event.
             */
            // @ts-ignore
            constructor(source: javax.servlet.ServletContext)
            /**
             * Return the ServletContext that changed.
             * @return the ServletContext that sent the event.
             */
            // @ts-ignore
            public getServletContext(): javax.servlet.ServletContext
        }
    }
}
