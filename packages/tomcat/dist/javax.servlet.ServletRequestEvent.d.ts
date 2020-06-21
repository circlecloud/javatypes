declare namespace javax {
    namespace servlet {
        /**
         * Events of this kind indicate lifecycle events for a ServletRequest. The
         * source of the event is the ServletContext of this web application.
         * @see ServletRequestListener
         * @since Servlet 2.4
         */
        // @ts-ignore
        class ServletRequestEvent extends java.util.EventObject {
            /**
             * Construct a ServletRequestEvent for the given ServletContext and
             * ServletRequest.
             * @param sc
             *             the ServletContext of the web application.
             * @param request
             *             the ServletRequest that is sending the event.
             */
            // @ts-ignore
            constructor(sc: javax.servlet.ServletContext, request: javax.servlet.ServletRequest)
            /**
             * Get the associated ServletRequest.
             * @return the ServletRequest that is changing.
             */
            // @ts-ignore
            public getServletRequest(): javax.servlet.ServletRequest
            /**
             * Get the associated ServletContext.
             * @return the ServletContext that is changing.
             */
            // @ts-ignore
            public getServletContext(): javax.servlet.ServletContext
        }
    }
}
