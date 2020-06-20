declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                /**
                 * The default implementation of {@link CorsProcessor}, as defined by the
                 * <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>.
                 * <p>Note that when input {@link CorsConfiguration} is {@code null}, this
                 * implementation does not reject simple or actual requests outright but simply
                 * avoid adding CORS headers to the response. CORS processing is also skipped
                 * if the response already contains CORS headers.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 4.2
                 */
                // @ts-ignore
                class DefaultCorsProcessor extends java.lang.Object implements org.springframework.web.cors.CorsProcessor {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    processRequest(config: org.springframework.web.cors.CorsConfiguration, request: HttpServletRequest, response: HttpServletResponse): boolean
                    /**
                     * Invoked when one of the CORS checks failed.
                     * The default implementation sets the response status to 403 and writes
                     * "Invalid CORS request" to the response.
                     */
                    // @ts-ignore
                    rejectRequest(response: org.springframework.http.server.ServerHttpResponse): void
                    /**
                     * Handle the given request.
                     */
                    // @ts-ignore
                    handleInternal(request: org.springframework.http.server.ServerHttpRequest, response: org.springframework.http.server.ServerHttpResponse, config: org.springframework.web.cors.CorsConfiguration, preFlightRequest: boolean): boolean
                    /**
                     * Check the origin and determine the origin for the response. The default
                     * implementation simply delegates to
                     * {@link org.springframework.web.cors.CorsConfiguration#checkOrigin(String)}.
                     */
                    // @ts-ignore
                    checkOrigin(config: org.springframework.web.cors.CorsConfiguration, requestOrigin: string): java.lang.String
                    /**
                     * Check the HTTP method and determine the methods for the response of a
                     * pre-flight request. The default implementation simply delegates to
                     * {@link org.springframework.web.cors.CorsConfiguration#checkHttpMethod(HttpMethod)}.
                     */
                    // @ts-ignore
                    checkMethods(config: org.springframework.web.cors.CorsConfiguration, requestMethod: org.springframework.http.HttpMethod): java.util.List<org.springframework.http.HttpMethod>
                    /**
                     * Check the headers and determine the headers for the response of a
                     * pre-flight request. The default implementation simply delegates to
                     * {@link org.springframework.web.cors.CorsConfiguration#checkOrigin(String)}.
                     */
                    // @ts-ignore
                    checkHeaders(config: org.springframework.web.cors.CorsConfiguration, requestHeaders: Array<java.lang.String>): java.util.List<java.lang.String>
                }
            }
        }
    }
}
