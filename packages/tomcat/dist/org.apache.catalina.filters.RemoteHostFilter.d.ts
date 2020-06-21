declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Concrete implementation of <code>RequestFilter</code> that filters
                 * based on the remote client's host name.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class RemoteHostFilter extends org.apache.catalina.filters.RequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Extract the desired request property, and pass it (along with the
                     * specified request and response objects and associated filter chain) to
                     * the protected <code>process()</code> method to perform the actual
                     * filtering.
                     * @param request  The servlet request to be processed
                     * @param response The servlet response to be created
                     * @param chain    The filter chain for this request
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    getLogger(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
