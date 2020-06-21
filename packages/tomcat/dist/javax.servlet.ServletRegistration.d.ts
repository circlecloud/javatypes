declare namespace javax {
    namespace servlet {
        /**
         * TODO SERVLET3 - Add comments
         * @since Servlet 3.0
         */
        // @ts-ignore
        interface ServletRegistration extends javax.servlet.Registration {
            /**
             * TODO
             * @param urlPatterns The URL patterns that this Servlet should be mapped to
             * @return TODO
             * @throws IllegalArgumentException if urlPattern is null or empty
             * @throws IllegalStateException if the associated ServletContext has
             *                                   already been initialised
             */
            // @ts-ignore
            addMapping(...urlPatterns: java.lang.String[] | string[]): Array<java.lang.String | string>
            // @ts-ignore
            getMappings(): Array<java.lang.String | string>
            // @ts-ignore
            getRunAsRole(): string
        }
    }
}
