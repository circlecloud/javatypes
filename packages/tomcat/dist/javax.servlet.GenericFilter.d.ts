declare namespace javax {
    namespace servlet {
        // @ts-ignore
        abstract class GenericFilter extends java.lang.Object implements javax.servlet.Filter, javax.servlet.FilterConfig, java.io.Serializable {
            // @ts-ignore
            constructor()
            // @ts-ignore
            public getInitParameter(name: java.lang.String | string): string
            // @ts-ignore
            public getInitParameterNames(): java.util.Enumeration<java.lang.String | string>
            /**
             * Obtain the FilterConfig used to initialise this Filter instance.
             * @return The config previously passed to the {#link #init(FilterConfig)}
             *          method
             */
            // @ts-ignore
            public getFilterConfig(): javax.servlet.FilterConfig
            // @ts-ignore
            public getServletContext(): javax.servlet.ServletContext
            // @ts-ignore
            public init(filterConfig: javax.servlet.FilterConfig): void
            /**
             * Convenience method for sub-classes to save them having to call
             * <code>super.init(config)</code>. This is a NO-OP by default.
             * @throws ServletException If an exception occurs that interrupts the
             *          Filter's normal operation
             */
            // @ts-ignore
            public init(): void
            // @ts-ignore
            public getFilterName(): string
        }
    }
}
