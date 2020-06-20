declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * {@link ServerHttpRequest} implementation that is based on a {@link HttpServletRequest}.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class ServletServerHttpRequest extends java.lang.Object implements org.springframework.http.server.ServerHttpRequest {
                    /**
                     * Construct a new instance of the ServletServerHttpRequest based on the
                     * given {@link HttpServletRequest}.
                     * @param servletRequest the servlet request
                     */
                    // @ts-ignore
                    constructor(servletRequest: HttpServletRequest)
                    // @ts-ignore
                    readonly FORM_CONTENT_TYPE: string
                    // @ts-ignore
                    readonly FORM_CHARSET: java.nio.charset.Charset
                    /**
                     * Returns the {@code HttpServletRequest} this object is based on.
                     */
                    // @ts-ignore
                    getServletRequest(): HttpServletRequest
                    // @ts-ignore
                    getMethod(): org.springframework.http.HttpMethod
                    // @ts-ignore
                    getMethodValue(): java.lang.String
                    // @ts-ignore
                    getURI(): java.net.URI
                    // @ts-ignore
                    getHeaders(): org.springframework.http.HttpHeaders
                    // @ts-ignore
                    getPrincipal(): java.security.Principal
                    // @ts-ignore
                    getLocalAddress(): java.net.InetSocketAddress
                    // @ts-ignore
                    getRemoteAddress(): java.net.InetSocketAddress
                    // @ts-ignore
                    getBody(): java.io.InputStream
                    // @ts-ignore
                    getAsyncRequestControl(response: org.springframework.http.server.ServerHttpResponse): org.springframework.http.server.ServerHttpAsyncRequestControl
                }
            }
        }
    }
}
