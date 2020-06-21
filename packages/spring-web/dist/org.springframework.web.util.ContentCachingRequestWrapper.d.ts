declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * {@link javax.servlet.http.HttpServletRequest} wrapper that caches all content read from
                 * the {@linkplain #getInputStream() input stream} and {@linkplain #getReader() reader},
                 * and allows this content to be retrieved via a {@link #getContentAsByteArray() byte array}.
                 * <p>Used e.g. by {@link org.springframework.web.filter.AbstractRequestLoggingFilter}.
                 * Note: As of Spring Framework 5.0, this wrapper is built on the Servlet 3.1 API.
                 * @author Juergen Hoeller
                 * @author Brian Clozel
                 * @since 4.1.3
                 * @see ContentCachingResponseWrapper
                 */
                // @ts-ignore
                class ContentCachingRequestWrapper extends HttpServletRequestWrapper {
                    /**
                     * Create a new ContentCachingRequestWrapper for the given servlet request.
                     * @param request the original servlet request
                     */
                    // @ts-ignore
                    constructor(request: HttpServletRequest)
                    /**
                     * Create a new ContentCachingRequestWrapper for the given servlet request.
                     * @param request the original servlet request
                     * @param contentCacheLimit the maximum number of bytes to cache per request
                     * @since 4.3.6
                     * @see #handleContentOverflow(int)
                     */
                    // @ts-ignore
                    constructor(request: HttpServletRequest, contentCacheLimit: number /*int*/)
                    // @ts-ignore
                    public getInputStream(): ServletInputStream
                    // @ts-ignore
                    public getCharacterEncoding(): string
                    // @ts-ignore
                    public getReader(): java.io.BufferedReader
                    // @ts-ignore
                    public getParameter(name: java.lang.String | string): string
                    // @ts-ignore
                    public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                    // @ts-ignore
                    public getParameterNames(): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public getParameterValues(name: java.lang.String | string): string[]
                    /**
                     * Return the cached request content as a byte array.
                     * <p>The returned array will never be larger than the content cache limit.
                     * @see #ContentCachingRequestWrapper(HttpServletRequest, int)
                     */
                    // @ts-ignore
                    public getContentAsByteArray(): number /*byte*/[]
                    /**
                     * Template method for handling a content overflow: specifically, a request
                     * body being read that exceeds the specified content cache limit.
                     * <p>The default implementation is empty. Subclasses may override this to
                     * throw a payload-too-large exception or the like.
                     * @param contentCacheLimit the maximum number of bytes to cache per request
                     *  which has just been exceeded
                     * @since 4.3.6
                     * @see #ContentCachingRequestWrapper(HttpServletRequest, int)
                     */
                    // @ts-ignore
                    handleContentOverflow(contentCacheLimit: number /*int*/): void
                }
            }
        }
    }
}
