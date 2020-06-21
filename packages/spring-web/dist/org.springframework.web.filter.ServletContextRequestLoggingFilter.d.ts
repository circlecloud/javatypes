declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Simple request logging filter that writes the request URI
                 * (and optionally the query string) to the ServletContext log.
                 * @author Juergen Hoeller
                 * @since 1.2.5
                 * @see #setIncludeQueryString
                 * @see #setBeforeMessagePrefix
                 * @see #setBeforeMessageSuffix
                 * @see #setAfterMessagePrefix
                 * @see #setAfterMessageSuffix
                 * @see javax.servlet.ServletContext#log(String)
                 */
                // @ts-ignore
                class ServletContextRequestLoggingFilter extends org.springframework.web.filter.AbstractRequestLoggingFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Writes a log message before the request is processed.
                     */
                    // @ts-ignore
                    beforeRequest(request: HttpServletRequest, message: java.lang.String | string): void
                    /**
                     * Writes a log message after the request is processed.
                     */
                    // @ts-ignore
                    afterRequest(request: HttpServletRequest, message: java.lang.String | string): void
                }
            }
        }
    }
}
