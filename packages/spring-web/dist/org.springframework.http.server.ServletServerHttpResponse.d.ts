declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * {@link ServerHttpResponse} implementation that is based on a {@link HttpServletResponse}.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 3.0
                 */
                // @ts-ignore
                class ServletServerHttpResponse extends java.lang.Object implements org.springframework.http.server.ServerHttpResponse {
                    /**
                     * Construct a new instance of the ServletServerHttpResponse based on the given {@link HttpServletResponse}.
                     * @param servletResponse the servlet response
                     */
                    // @ts-ignore
                    constructor(servletResponse: HttpServletResponse)
                    /**
                     * Return the {@code HttpServletResponse} this object is based on.
                     */
                    // @ts-ignore
                    public getServletResponse(): HttpServletResponse
                    // @ts-ignore
                    public setStatusCode(status: org.springframework.http.HttpStatus): void
                    // @ts-ignore
                    public getHeaders(): org.springframework.http.HttpHeaders
                    // @ts-ignore
                    public getBody(): java.io.OutputStream
                    // @ts-ignore
                    public flush(): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
