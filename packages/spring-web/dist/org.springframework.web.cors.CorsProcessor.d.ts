declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                /**
                 * A strategy that takes a request and a {@link CorsConfiguration} and updates
                 * the response.
                 * <p>This component is not concerned with how a {@code CorsConfiguration} is
                 * selected but rather takes follow-up actions such as applying CORS validation
                 * checks and either rejecting the response or adding CORS headers to the
                 * response.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 4.2
                 * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                 * @see org.springframework.web.servlet.handler.AbstractHandlerMapping#setCorsProcessor
                 */
                // @ts-ignore
                interface CorsProcessor {
                    /**
                     * Process a request given a {@code CorsConfiguration}.
                     * @param configuration the applicable CORS configuration (possibly {#code null})
                     * @param request the current request
                     * @param response the current response
                     * @return {#code false} if the request is rejected, {@code true} otherwise
                     */
                    // @ts-ignore
                    processRequest(configuration: org.springframework.web.cors.CorsConfiguration, request: HttpServletRequest, response: HttpServletResponse): boolean
                }
            }
        }
    }
}
