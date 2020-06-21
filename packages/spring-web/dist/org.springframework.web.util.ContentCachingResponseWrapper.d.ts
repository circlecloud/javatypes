declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * {@link javax.servlet.http.HttpServletResponse} wrapper that caches all content written to
                 * the {@linkplain #getOutputStream() output stream} and {@linkplain #getWriter() writer},
                 * and allows this content to be retrieved via a {@link #getContentAsByteArray() byte array}.
                 * <p>Used e.g. by {@link org.springframework.web.filter.ShallowEtagHeaderFilter}.
                 * Note: As of Spring Framework 5.0, this wrapper is built on the Servlet 3.1 API.
                 * @author Juergen Hoeller
                 * @since 4.1.3
                 * @see ContentCachingRequestWrapper
                 */
                // @ts-ignore
                class ContentCachingResponseWrapper extends HttpServletResponseWrapper {
                    /**
                     * Create a new ContentCachingResponseWrapper for the given servlet response.
                     * @param response the original servlet response
                     */
                    // @ts-ignore
                    constructor(response: HttpServletResponse)
                    // @ts-ignore
                    public sendError(sc: number /*int*/): void
                    // @ts-ignore
                    public sendError(sc: number /*int*/, msg: java.lang.String | string): void
                    // @ts-ignore
                    public sendRedirect(location: java.lang.String | string): void
                    // @ts-ignore
                    public getOutputStream(): ServletOutputStream
                    // @ts-ignore
                    public getWriter(): java.io.PrintWriter
                    // @ts-ignore
                    public flushBuffer(): void
                    // @ts-ignore
                    public setContentLength(len: number /*int*/): void
                    // @ts-ignore
                    public setContentLengthLong(len: number /*long*/): void
                    // @ts-ignore
                    public setBufferSize(size: number /*int*/): void
                    // @ts-ignore
                    public resetBuffer(): void
                    // @ts-ignore
                    public reset(): void
                    /**
                     * Return the status code as specified on the response.
                     * @deprecated as of 5.2 in favor of {#link HttpServletResponse#getStatus()}
                     */
                    // @ts-ignore
                    public getStatusCode(): number /*int*/
                    /**
                     * Return the cached response content as a byte array.
                     */
                    // @ts-ignore
                    public getContentAsByteArray(): number /*byte*/[]
                    /**
                     * Return an {@link InputStream} to the cached content.
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getContentInputStream(): java.io.InputStream
                    /**
                     * Return the current size of the cached content.
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getContentSize(): number /*int*/
                    /**
                     * Copy the complete cached body content to the response.
                     * @since 4.2
                     */
                    // @ts-ignore
                    public copyBodyToResponse(): void
                    /**
                     * Copy the cached body content to the response.
                     * @param complete whether to set a corresponding content length
                     *  for the complete cached body content
                     * @since 4.2
                     */
                    // @ts-ignore
                    copyBodyToResponse(complete: boolean): void
                }
            }
        }
    }
}
