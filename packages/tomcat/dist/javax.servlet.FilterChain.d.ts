declare namespace javax {
    namespace servlet {
        /**
         * A FilterChain is an object provided by the servlet container to the developer
         * giving a view into the invocation chain of a filtered request for a resource.
         * Filters use the FilterChain to invoke the next filter in the chain, or if the
         * calling filter is the last filter in the chain, to invoke the resource at the
         * end of the chain.
         * @see Filter
         * @since Servlet 2.3
         */
        // @ts-ignore
        interface FilterChain {
            /**
             * Causes the next filter in the chain to be invoked, or if the calling
             * filter is the last filter in the chain, causes the resource at the end of
             * the chain to be invoked.
             * @param request
             *             the request to pass along the chain.
             * @param response
             *             the response to pass along the chain.
             * @throws IOException if an I/O error occurs during the processing of the
             *                      request
             * @throws ServletException if the processing fails for any other reason
             * @since 2.3
             */
            // @ts-ignore
            doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse): void
        }
    }
}
