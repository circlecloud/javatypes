declare namespace javax {
    namespace servlet {
        /**
         * A servlet configuration object used by a servlet container to pass
         * information to a servlet during initialization.
         */
        // @ts-ignore
        interface ServletConfig {
            /**
             * Returns the name of this servlet instance. The name may be provided via
             * server administration, assigned in the web application deployment
             * descriptor, or for an unregistered (and thus unnamed) servlet instance it
             * will be the servlet's class name.
             * @return the name of the servlet instance
             */
            // @ts-ignore
            getServletName(): string
            /**
             * Returns a reference to the {@link ServletContext} in which the caller is
             * executing.
             * @return a {#link ServletContext} object, used by the caller to interact
             *          with its servlet container
             * @see ServletContext
             */
            // @ts-ignore
            getServletContext(): javax.servlet.ServletContext
            /**
             * Returns a <code>String</code> containing the value of the named
             * initialization parameter, or <code>null</code> if the parameter does not
             * exist.
             * @param name
             *             a <code>String</code> specifying the name of the
             *             initialization parameter
             * @return a <code>String</code> containing the value of the initialization
             *          parameter
             */
            // @ts-ignore
            getInitParameter(name: java.lang.String | string): string
            /**
             * Returns the names of the servlet's initialization parameters as an
             * <code>Enumeration</code> of <code>String</code> objects, or an empty
             * <code>Enumeration</code> if the servlet has no initialization parameters.
             * @return an <code>Enumeration</code> of <code>String</code> objects
             *          containing the names of the servlet's initialization parameters
             */
            // @ts-ignore
            getInitParameterNames(): java.util.Enumeration<java.lang.String | string>
        }
    }
}
