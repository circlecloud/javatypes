declare namespace javax {
    namespace servlet {
        /**
         * A ServletRequestListener can be implemented by the developer
         * interested in being notified of requests coming in and out of
         * scope in a web component. A request is defined as coming into
         * scope when it is about to enter the first servlet or filter
         * in each web application, as going out of scope when it exits
         * the last servlet or the first filter in the chain.
         * @since Servlet 2.4
         */
        // @ts-ignore
        interface ServletRequestListener extends java.util.EventListener {
            /**
             * The request is about to go out of scope of the web application.
             * The default implementation is a NO-OP.
             * @param sre Information about the request
             */
            // @ts-ignore
            requestDestroyed(sre: javax.servlet.ServletRequestEvent): void
            /**
             * The request is about to come into scope of the web application.
             * The default implementation is a NO-OP.
             * @param sre Information about the request
             */
            // @ts-ignore
            requestInitialized(sre: javax.servlet.ServletRequestEvent): void
        }
    }
}
