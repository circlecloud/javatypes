declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Provides basic CSRF protection for a web application. The filter assumes
                 * that:
                 * <ul>
                 * <li>The filter is mapped to /*</li>
                 * <li>{@link HttpServletResponse#encodeRedirectURL(String)} and
                 * {@link HttpServletResponse#encodeURL(String)} are used to encode all URLs
                 * returned to the client
                 * </ul>
                 */
                // @ts-ignore
                class CsrfPreventionFilter extends org.apache.catalina.filters.CsrfPreventionFilterBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Entry points are URLs that will not be tested for the presence of a valid
                     * nonce. They are used to provide a way to navigate back to a protected
                     * application after navigating away from it. Entry points will be limited
                     * to HTTP GET requests and should not trigger any security sensitive
                     * actions.
                     * @param entryPoints   Comma separated list of URLs to be configured as
                     *                       entry points.
                     */
                    // @ts-ignore
                    public setEntryPoints(entryPoints: java.lang.String | string): void
                    /**
                     * Sets the number of previously issued nonces that will be cached on a LRU
                     * basis to support parallel requests, limited use of the refresh and back
                     * in the browser and similar behaviors that may result in the submission
                     * of a previous nonce rather than the current one. If not set, the default
                     * value of 5 will be used.
                     * @param nonceCacheSize    The number of nonces to cache
                     */
                    // @ts-ignore
                    public setNonceCacheSize(nonceCacheSize: number /*int*/): void
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                }
            }
        }
    }
}
