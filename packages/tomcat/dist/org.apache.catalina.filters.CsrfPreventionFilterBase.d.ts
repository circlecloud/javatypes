declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                // @ts-ignore
                abstract class CsrfPreventionFilterBase extends org.apache.catalina.filters.FilterBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getLogger(): org.apache.juli.logging.Log
                    /**
                     * @return response status code that is used to reject denied request.
                     */
                    // @ts-ignore
                    public getDenyStatus(): number /*int*/
                    /**
                     * Set response status code that is used to reject denied request. If none
                     * set, the default value of 403 will be used.
                     * @param denyStatus
                     *             HTTP status code
                     */
                    // @ts-ignore
                    public setDenyStatus(denyStatus: number /*int*/): void
                    /**
                     * Specify the class to use to generate the nonces. Must be in instance of
                     * {@link Random}.
                     * @param randomClass
                     *             The name of the class to use
                     */
                    // @ts-ignore
                    public setRandomClass(randomClass: java.lang.String | string): void
                    // @ts-ignore
                    public init(filterConfig: javax.servlet.FilterConfig): void
                    // @ts-ignore
                    isConfigProblemFatal(): boolean
                    /**
                     * Generate a once time token (nonce) for authenticating subsequent
                     * requests. The nonce generation is a simplified version of
                     * ManagerBase.generateSessionId().
                     * @return the generated nonce
                     */
                    // @ts-ignore
                    generateNonce(): string
                    // @ts-ignore
                    getRequestedPath(request: javax.servlet.http.HttpServletRequest): string
                }
            }
        }
    }
}
