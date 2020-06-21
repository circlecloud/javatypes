declare namespace javax {
    namespace servlet {
        /**
         * ServletContainerInitializers (SCIs) are registered via an entry in the
         * file META-INF/services/javax.servlet.ServletContainerInitializer that must be
         * included in the JAR file that contains the SCI implementation.
         * <p>
         * SCI processing is performed regardless of the setting of metadata-complete.
         * SCI processing can be controlled per JAR file via fragment ordering. If an
         * absolute ordering is defined, the only those JARs included in the ordering
         * will be processed for SCIs. To disable SCI processing completely, an empty
         * absolute ordering may be defined.
         * <p>
         * SCIs register an interest in annotations (class, method or field) and/or
         * types via the {@link javax.servlet.annotation.HandlesTypes} annotation which
         * is added to the class.
         * @since Servlet 3.0
         */
        // @ts-ignore
        interface ServletContainerInitializer {
            /**
             * Receives notification during startup of a web application of the classes
             * within the web application that matched the criteria defined via the
             * {@link javax.servlet.annotation.HandlesTypes} annotation.
             * @param c     The (possibly null) set of classes that met the specified
             *               criteria
             * @param ctx   The ServletContext of the web application in which the
             *               classes were discovered
             * @throws ServletException If an error occurs
             */
            // @ts-ignore
            onStartup(c: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>, ctx: javax.servlet.ServletContext): void
        }
    }
}
