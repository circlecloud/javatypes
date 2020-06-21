declare namespace javax {
    namespace servlet {
        /**
         * Common interface for the registration of Filters and Servlets.
         * @since Servlet 3.0
         */
        // @ts-ignore
        interface Registration {
            // @ts-ignore
            getName(): string
            // @ts-ignore
            getClassName(): string
            /**
             * Add an initialisation parameter if not already added.
             * @param name  Name of initialisation parameter
             * @param value Value of initialisation parameter
             * @return <code>true</code> if the initialisation parameter was set,
             *          <code>false</code> if the initialisation parameter was not set
             *          because an initialisation parameter of the same name already
             *          existed
             * @throws IllegalArgumentException if name or value is <code>null</code>
             * @throws IllegalStateException if the ServletContext associated with this
             *          registration has already been initialised
             */
            // @ts-ignore
            setInitParameter(name: java.lang.String | string, value: java.lang.String | string): boolean
            /**
             * Get the value of an initialisation parameter.
             * @param name  The initialisation parameter whose value is required
             * @return The value of the named initialisation parameter
             */
            // @ts-ignore
            getInitParameter(name: java.lang.String | string): string
            /**
             * Add multiple initialisation parameters. If any of the supplied
             * initialisation parameter conflicts with an existing initialisation
             * parameter, no updates will be performed.
             * @param initParameters The initialisation parameters to add
             * @return The set of initialisation parameter names that conflicted with
             *          existing initialisation parameter. If there are no conflicts,
             *          this Set will be empty.
             * @throws IllegalArgumentException if any of the supplied initialisation
             *          parameters have a null name or value
             * @throws IllegalStateException if the ServletContext associated with this
             *          registration has already been initialised
             */
            // @ts-ignore
            setInitParameters(initParameters: java.util.Map<java.lang.String | string, java.lang.String | string>): Array<java.lang.String | string>
            /**
             * Get the names and values of all the initialisation parameters.
             * @return A Map of initialisation parameter names and associated values
             *          keyed by name
             */
            // @ts-ignore
            getInitParameters(): java.util.Map<java.lang.String | string, java.lang.String | string>
        }
    }
}
