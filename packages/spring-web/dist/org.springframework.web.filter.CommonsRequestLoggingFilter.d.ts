declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Simple request logging filter that writes the request URI
                 * (and optionally the query string) to the Commons Log.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2.5
                 * @see #setIncludeQueryString
                 * @see #setBeforeMessagePrefix
                 * @see #setBeforeMessageSuffix
                 * @see #setAfterMessagePrefix
                 * @see #setAfterMessageSuffix
                 * @see org.apache.commons.logging.Log#debug(Object)
                 */
                // @ts-ignore
                class CommonsRequestLoggingFilter extends org.springframework.web.filter.AbstractRequestLoggingFilter {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    shouldLog(request: HttpServletRequest): boolean
                    /**
                     * Writes a log message before the request is processed.
                     */
                    // @ts-ignore
                    beforeRequest(request: HttpServletRequest, message: string): void
                    /**
                     * Writes a log message after the request is processed.
                     */
                    // @ts-ignore
                    afterRequest(request: HttpServletRequest, message: string): void
                }
            }
        }
    }
}
