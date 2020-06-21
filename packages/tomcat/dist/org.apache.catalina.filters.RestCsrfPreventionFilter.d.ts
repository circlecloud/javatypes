declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Provides basic CSRF protection for REST APIs. The filter assumes that the
                 * clients have adapted the transfer of the nonce through the 'X-CSRF-Token'
                 * header.
                 * <pre>
                 * Positive scenario:
                 * Client                            Server
                 * |                                 |
                 * | GET Fetch Request              \| JSESSIONID
                 * |---------------------------------| X-CSRF-Token
                 * |                                /| pair generation
                 * |/Response to Fetch Request       |
                 * |---------------------------------|
                 * JSESSIONID   |\                                |
                 * X-CSRF-Token |                                 |
                 * pair cached  | POST Request with valid nonce  \| JSESSIONID
                 * |---------------------------------| X-CSRF-Token
                 * |                                /| pair validation
                 * |/ Response to POST Request       |
                 * |---------------------------------|
                 * |\                                |
                 * Negative scenario:
                 * Client                            Server
                 * |                                 |
                 * | POST Request without nonce     \| JSESSIONID
                 * |---------------------------------| X-CSRF-Token
                 * |                                /| pair validation
                 * |/Request is rejected             |
                 * |---------------------------------|
                 * |\                                |
                 * Client                            Server
                 * |                                 |
                 * | POST Request with invalid nonce\| JSESSIONID
                 * |---------------------------------| X-CSRF-Token
                 * |                                /| pair validation
                 * |/Request is rejected             |
                 * |---------------------------------|
                 * |\                                |
                 * </pre>
                 */
                // @ts-ignore
                class RestCsrfPreventionFilter extends org.apache.catalina.filters.CsrfPreventionFilterBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    /**
                     * A comma separated list of URLs that can accept nonces via request
                     * parameter 'X-CSRF-Token'. For use cases when a nonce information cannot
                     * be provided via header, one can provide it via request parameters. If
                     * there is a X-CSRF-Token header, it will be taken with preference over any
                     * parameter with the same name in the request. Request parameters cannot be
                     * used to fetch new nonce, only header.
                     * @param pathsList
                     *             Comma separated list of URLs to be configured as paths
                     *             accepting request parameters with nonce information.
                     */
                    // @ts-ignore
                    public setPathsAcceptingParams(pathsList: java.lang.String | string): void
                    // @ts-ignore
                    public getPathsAcceptingParams(): Array<java.lang.String | string>
                }
            }
        }
    }
}
