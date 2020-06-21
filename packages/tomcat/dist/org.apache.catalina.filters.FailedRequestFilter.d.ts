declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Filter that will reject requests if there was a failure during parameter
                 * parsing. This filter can be used to ensure that none parameter values
                 * submitted by client are lost.
                 * <p>
                 * Note that it has side effect that it triggers parameter parsing and thus
                 * consumes the body for POST requests. Parameter parsing does check content
                 * type of the request, so there should not be problems with addresses that use
                 * <code>request.getInputStream()</code> and <code>request.getReader()</code>,
                 * if requests parsed by them do not use standard value for content mime-type.
                 */
                // @ts-ignore
                class FailedRequestFilter extends org.apache.catalina.filters.FilterBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getLogger(): org.apache.juli.logging.Log
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    isConfigProblemFatal(): boolean
                }
            }
        }
    }
}
