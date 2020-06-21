declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * <p>Implementation of a Filter that logs interesting contents from the
                 * specified Request (before processing) and the corresponding Response
                 * (after processing).  It is especially useful in debugging problems
                 * related to headers and cookies.</p>
                 * <p>When using this Filter, it is strongly recommended that the
                 * <code>org.apache.catalina.filter.RequestDumperFilter</code> logger is
                 * directed to a dedicated file and that the
                 * <code>org.apache.juli.VerbatimFormatter</code> is used.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class RequestDumperFilter extends javax.servlet.GenericFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Log the interesting request parameters, invoke the next Filter in the
                     * sequence, and log the interesting response parameters.
                     * @param request  The servlet request to be processed
                     * @param response The servlet response to be created
                     * @param chain    The filter chain being processed
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                }
            }
        }
    }
}
