declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * {@code Filter} that parses form data for HTTP PUT, PATCH, and DELETE requests
                 * and exposes it as Servlet request parameters. By default the Servlet spec
                 * only requires this for HTTP POST.
                 * @author Rossen Stoyanchev
                 * @since 5.1
                 */
                // @ts-ignore
                class FormContentFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the converter to use for parsing form content.
                     * <p>By default this is an instance of {@link AllEncompassingFormHttpMessageConverter}.
                     */
                    // @ts-ignore
                    public setFormConverter(converter: org.springframework.http.converter.FormHttpMessageConverter): void
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
