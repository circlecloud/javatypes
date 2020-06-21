declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * <p>Example filter that sets the character encoding to be used in parsing the
                 * incoming request, either unconditionally or only if the client did not
                 * specify a character encoding.  Configuration of this filter is based on
                 * the following initialization parameters:</p>
                 * <ul>
                 * <li><strong>encoding</strong> - The character encoding to be configured
                 * for this request, either conditionally or unconditionally based on
                 * the <code>ignore</code> initialization parameter.  This parameter
                 * is required, so there is no default.</li>
                 * <li><strong>ignore</strong> - If set to "true", any character encoding
                 * specified by the client is ignored, and the value returned by the
                 * <code>selectEncoding()</code> method is set.  If set to "false,
                 * <code>selectEncoding()</code> is called <strong>only</strong> if the
                 * client has not already specified an encoding.  By default, this
                 * parameter is set to "false".</li>
                 * </ul>
                 * <p>Although this filter can be used unchanged, it is also easy to
                 * subclass it and make the <code>selectEncoding()</code> method more
                 * intelligent about what encoding to choose, based on characteristics of
                 * the incoming request (such as the values of the <code>Accept-Language</code>
                 * and <code>User-Agent</code> headers, or a value stashed in the current
                 * user's session.</p>
                 */
                // @ts-ignore
                class SetCharacterEncodingFilter extends org.apache.catalina.filters.FilterBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setEncoding(encoding: java.lang.String | string): void
                    // @ts-ignore
                    public getEncoding(): string
                    // @ts-ignore
                    public setIgnore(ignore: boolean): void
                    // @ts-ignore
                    public isIgnore(): boolean
                    /**
                     * Select and set (if specified) the character encoding to be used to
                     * interpret request parameters for this request.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @param chain The filter chain we are processing
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    getLogger(): org.apache.juli.logging.Log
                    /**
                     * Select an appropriate character encoding to be used, based on the
                     * characteristics of the current request and/or filter initialization
                     * parameters.  If no character encoding should be set, return
                     * <code>null</code>.
                     * <p>
                     * The default implementation unconditionally returns the value configured
                     * by the <strong>encoding</strong> initialization parameter for this
                     * filter.
                     * @param request The servlet request we are processing
                     * @return the encoding that was configured
                     */
                    // @ts-ignore
                    selectEncoding(request: javax.servlet.ServletRequest): string
                }
            }
        }
    }
}
