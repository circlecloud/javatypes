declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * {@link javax.servlet.Filter} that makes form encoded data available through
                 * the {@code ServletRequest.getParameter*()} family of methods during HTTP PUT
                 * or PATCH requests.
                 * <p>The Servlet spec requires form data to be available for HTTP POST but
                 * not for HTTP PUT or PATCH requests. This filter intercepts HTTP PUT and PATCH
                 * requests where content type is {@code 'application/x-www-form-urlencoded'},
                 * reads form encoded content from the body of the request, and wraps the ServletRequest
                 * in order to make the form data available as request parameters just like
                 * it is for HTTP POST requests.
                 * @author Rossen Stoyanchev
                 * @since 3.1
                 * @deprecated as of 5.1 in favor of {#link FormContentFilter} which is the same
                 *  but also handles DELETE.
                 */
                // @ts-ignore
                class HttpPutFormContentFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the converter to use for parsing form content.
                     * <p>By default this is an instance of {@link AllEncompassingFormHttpMessageConverter}.
                     */
                    // @ts-ignore
                    public setFormConverter(converter: org.springframework.http.converter.FormHttpMessageConverter): void
                    // @ts-ignore
                    public getFormConverter(): org.springframework.http.converter.FormHttpMessageConverter
                    /**
                     * The default character set to use for reading form data.
                     * This is a shortcut for:<br>
                     * {@code getFormConverter.setCharset(charset)}.
                     */
                    // @ts-ignore
                    public setCharset(charset: java.nio.charset.Charset): void
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
