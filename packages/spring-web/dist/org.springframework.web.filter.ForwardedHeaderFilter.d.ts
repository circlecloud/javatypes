declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Extract values from "Forwarded" and "X-Forwarded-*" headers, wrap the request
                 * and response, and make they reflect the client-originated protocol and
                 * address in the following methods:
                 * <ul>
                 * <li>{@link HttpServletRequest#getServerName() getServerName()}
                 * <li>{@link HttpServletRequest#getServerPort() getServerPort()}
                 * <li>{@link HttpServletRequest#getScheme() getScheme()}
                 * <li>{@link HttpServletRequest#isSecure() isSecure()}
                 * <li>{@link HttpServletResponse#sendRedirect(String) sendRedirect(String)}.
                 * </ul>
                 * <p>This filter can also be used in a {@link #setRemoveOnly removeOnly} mode
                 * where "Forwarded" and "X-Forwarded-*" headers are eliminated, and not used.
                 * @author Rossen Stoyanchev
                 * @author Eddú Meléndez
                 * @author Rob Winch
                 * @since 4.3
                 * @see <a href="https://tools.ietf.org/html/rfc7239">https://tools.ietf.org/html/rfc7239</a>
                 */
                // @ts-ignore
                class ForwardedHeaderFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Enables mode in which any "Forwarded" or "X-Forwarded-*" headers are
                     * removed only and the information in them ignored.
                     * @param removeOnly whether to discard and ignore forwarded headers
                     * @since 4.3.9
                     */
                    // @ts-ignore
                    setRemoveOnly(removeOnly: boolean): void
                    /**
                     * Use this property to enable relative redirects as explained in
                     * {@link RelativeRedirectFilter}, and also using the same response wrapper
                     * as that filter does, or if both are configured, only one will wrap.
                     * <p>By default, if this property is set to false, in which case calls to
                     * {@link HttpServletResponse#sendRedirect(String)} are overridden in order
                     * to turn relative into absolute URLs, also taking into account forwarded
                     * headers.
                     * @param relativeRedirects whether to use relative redirects
                     * @since 4.3.10
                     */
                    // @ts-ignore
                    setRelativeRedirects(relativeRedirects: boolean): void
                    // @ts-ignore
                    shouldNotFilter(request: HttpServletRequest): boolean
                    // @ts-ignore
                    shouldNotFilterAsyncDispatch(): boolean
                    // @ts-ignore
                    shouldNotFilterErrorDispatch(): boolean
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                    // @ts-ignore
                    doFilterNestedErrorDispatch(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
