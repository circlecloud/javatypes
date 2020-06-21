declare namespace javax {
    namespace servlet {
        /**
         * @since Servlet 3.0
         *  TODO SERVLET3 - Add comments
         */
        // @ts-ignore
        interface FilterRegistration extends javax.servlet.Registration {
            /**
             * Add a mapping for this filter to one or more named Servlets.
             * @param dispatcherTypes The dispatch types to which this filter should
             *                         apply
             * @param isMatchAfter    Should this filter be applied after any mappings
             *                         defined in the deployment descriptor
             *                         (<code>true</code>) or before?
             * @param servletNames    Requests mapped to these servlets will be
             *                         processed by this filter
             * @throws IllegalArgumentException if the list of servlet names is empty
             *                                   or null
             * @throws IllegalStateException if the associated ServletContext has
             *                                already been initialised
             */
            // @ts-ignore
            addMappingForServletNames(dispatcherTypes: java.util.EnumSet<javax.servlet.DispatcherType>, isMatchAfter: boolean, ...servletNames: java.lang.String[] | string[]): void
            /**
             * @return TODO
             */
            // @ts-ignore
            getServletNameMappings(): Array<java.lang.String | string>
            /**
             * Add a mapping for this filter to one or more URL patterns.
             * @param dispatcherTypes The dispatch types to which this filter should
             *                         apply
             * @param isMatchAfter    Should this filter be applied after any mappings
             *                         defined in the deployment descriptor
             *                         (<code>true</code>) or before?
             * @param urlPatterns     The URL patterns to which this filter should be
             *                         applied
             * @throws IllegalArgumentException if the list of URL patterns is empty or
             *                                   null
             * @throws IllegalStateException if the associated ServletContext has
             *                                already been initialised
             */
            // @ts-ignore
            addMappingForUrlPatterns(dispatcherTypes: java.util.EnumSet<javax.servlet.DispatcherType>, isMatchAfter: boolean, ...urlPatterns: java.lang.String[] | string[]): void
            /**
             * @return TODO
             */
            // @ts-ignore
            getUrlPatternMappings(): Array<java.lang.String | string>
        }
    }
}
