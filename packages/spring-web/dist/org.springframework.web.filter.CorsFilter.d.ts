declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * {@link javax.servlet.Filter} that handles CORS preflight requests and intercepts
                 * CORS simple and actual requests thanks to a {@link CorsProcessor} implementation
                 * ({@link DefaultCorsProcessor} by default) in order to add the relevant CORS
                 * response headers (like {@code Access-Control-Allow-Origin}) using the provided
                 * {@link CorsConfigurationSource} (for example an {@link UrlBasedCorsConfigurationSource}
                 * instance.
                 * <p>This is an alternative to Spring MVC Java config and XML namespace CORS configuration,
                 * useful for applications depending only on spring-web (not on spring-webmvc) or for
                 * security constraints requiring CORS checks to be performed at {@link javax.servlet.Filter}
                 * level.
                 * <p>This filter could be used in conjunction with {@link DelegatingFilterProxy} in order
                 * to help with its initialization.
                 * @author Sebastien Deleuze
                 * @since 4.2
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 */
                // @ts-ignore
                class CorsFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    /**
                     * Constructor accepting a {@link CorsConfigurationSource} used by the filter
                     * to find the {@link CorsConfiguration} to use for each incoming request.
                     * @see UrlBasedCorsConfigurationSource
                     */
                    // @ts-ignore
                    constructor(configSource: org.springframework.web.cors.CorsConfigurationSource)
                    /**
                     * Configure a custom {@link CorsProcessor} to use to apply the matched
                     * {@link CorsConfiguration} for a request.
                     * <p>By default {@link DefaultCorsProcessor} is used.
                     */
                    // @ts-ignore
                    setCorsProcessor(processor: org.springframework.web.cors.CorsProcessor): void
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
