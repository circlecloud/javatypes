declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * {@link javax.servlet.Filter} that converts posted method parameters into HTTP methods,
                 * retrievable via {@link HttpServletRequest#getMethod()}. Since browsers currently only
                 * support GET and POST, a common technique - used by the Prototype library, for instance -
                 * is to use a normal POST with an additional hidden form field ({@code _method})
                 * to pass the "real" HTTP method along. This filter reads that parameter and changes
                 * the {@link HttpServletRequestWrapper#getMethod()} return value accordingly.
                 * Only {@code "PUT"}, {@code "DELETE"} and {@code "PATCH"} HTTP methods are allowed.
                 * <p>The name of the request parameter defaults to {@code _method}, but can be
                 * adapted via the {@link #setMethodParam(String) methodParam} property.
                 * <p><b>NOTE: This filter needs to run after multipart processing in case of a multipart
                 * POST request, due to its inherent need for checking a POST body parameter.</b>
                 * So typically, put a Spring {@link org.springframework.web.multipart.support.MultipartFilter}
                 * <i>before</i> this HiddenHttpMethodFilter in your {@code web.xml} filter chain.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class HiddenHttpMethodFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Default method parameter: {@code _method}.
                     */
                    // @ts-ignore
                    readonly DEFAULT_METHOD_PARAM: string
                    /**
                     * Set the parameter name to look for HTTP methods.
                     * @see #DEFAULT_METHOD_PARAM
                     */
                    // @ts-ignore
                    setMethodParam(methodParam: string): void
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
