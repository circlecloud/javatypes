declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Implementation of <code>javax.servlet.FilterChain</code> used to manage
                 * the execution of a set of filters for a particular request.  When the
                 * set of defined filters has all been executed, the next call to
                 * <code>doFilter()</code> will execute the servlet's <code>service()</code>
                 * method itself.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ApplicationFilterChain extends java.lang.Object implements javax.servlet.FilterChain {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly INCREMENT: number /*int*/
                    /**
                     * Invoke the next filter in this chain, passing the specified request
                     * and response.  If there are no more filters in this chain, invoke
                     * the <code>service()</code> method of the servlet itself.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet exception occurs
                     */
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse): void
                    /**
                     * The last request passed to a servlet for servicing from the current
                     * thread.
                     * @return The last request to be serviced.
                     */
                    // @ts-ignore
                    public static getLastServicedRequest(): javax.servlet.ServletRequest
                    /**
                     * The last response passed to a servlet for servicing from the current
                     * thread.
                     * @return The last response to be serviced.
                     */
                    // @ts-ignore
                    public static getLastServicedResponse(): javax.servlet.ServletResponse
                    /**
                     * Identifies the Filters, if any, in this FilterChain that do not support
                     * async.
                     * @param result The Set to which the fully qualified class names of each
                     *                Filter in this FilterChain that does not support async will
                     *                be added
                     */
                    // @ts-ignore
                    public findNonAsyncFilters(result: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): void
                }
            }
        }
    }
}
