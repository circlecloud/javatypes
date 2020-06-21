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
                    static readonly FORM_CONTENT_TYPE: java.lang.String | string
                    // @ts-ignore
                    static readonly FORM_CHARSET: java.nio.charset.Charset
                    /**
                     * Returns the {@code HttpServletRequest} this object is based on.
                     */
                    // @ts-ignore
                    public getServletRequest(): HttpServletRequest
                    // @ts-ignore
                    public getMethod(): org.springframework.http.HttpMethod
                    // @ts-ignore
                    public getMethodValue(): string
                    // @ts-ignore
                    public getURI(): java.net.URI
                    // @ts-ignore
                    public getHeaders(): org.springframework.http.HttpHeaders
                    // @ts-ignore
                    public getPrincipal(): java.security.Principal
                    // @ts-ignore
                    public getLocalAddress(): java.net.InetSocketAddress
                    // @ts-ignore
                    public getRemoteAddress(): java.net.InetSocketAddress
                    // @ts-ignore
                    public getBody(): java.io.InputStream
                    // @ts-ignore
                    public getAsyncRequestControl(response: org.springframework.http.server.ServerHttpResponse): org.springframework.http.server.ServerHttpAsyncRequestControl
                }
            }
        }
    }
}
