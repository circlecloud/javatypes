declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Overrides {@link HttpServletResponse#sendRedirect(String)} and handles it by
                 * setting the HTTP status and "Location" headers, which keeps the Servlet
                 * container from re-writing relative redirect URLs into absolute ones.
                 * Servlet containers are required to do that but against the recommendation of
                 * <a href="https://tools.ietf.org/html/rfc7231#section-7.1.2"> RFC 7231 Section 7.1.2</a>,
                 * and furthermore not necessarily taking into account "X-Forwarded" headers.
                 * <p><strong>Note:</strong> While relative redirects are recommended in the
                 * RFC, under some configurations with reverse proxies they may not work.
                 * @author Rob Winch
                 * @author Rossen Stoyanchev
                 * @since 4.3.10
                 */
                // @ts-ignore
                class RelativeRedirectFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the default HTTP Status to use for redirects.
                     * <p>By default this is {@link HttpStatus#SEE_OTHER}.
                     * @param status the 3xx redirect status to use
                     */
                    // @ts-ignore
                    public setRedirectStatus(status: org.springframework.http.HttpStatus): void
                    /**
                     * Return the configured redirect status.
                     */
                    // @ts-ignore
                    public getRedirectStatus(): org.springframework.http.HttpStatus
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
