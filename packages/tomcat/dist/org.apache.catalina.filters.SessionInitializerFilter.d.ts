declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * A {@link javax.servlet.Filter} that initializes the {@link HttpSession} for
                 * the {@link HttpServletRequest} by calling its getSession() method.
                 * <p>
                 * This is required for some operations with WebSocket requests, where it is
                 * too late to initialize the HttpSession object, and the current Java WebSocket
                 * specification does not provide a way to do so.
                 */
                // @ts-ignore
                class SessionInitializerFilter extends java.lang.Object implements javax.servlet.Filter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Calls {@link HttpServletRequest}'s getSession() to initialize the
                     * HttpSession and continues processing the chain.
                     * @param request  The request to process
                     * @param response The response associated with the request
                     * @param chain    Provides access to the next filter in the chain for this
                     *                  filter to pass the request and response to for further
                     *                  processing
                     * @throws IOException      if an I/O error occurs during this filter's
                     *                           processing of the request
                     * @throws ServletException if the processing fails for any other reason
                     */
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                }
            }
        }
    }
}
