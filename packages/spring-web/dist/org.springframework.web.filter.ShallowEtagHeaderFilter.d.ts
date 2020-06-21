declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * {@link javax.servlet.Filter} that generates an {@code ETag} value based on the
                 * content on the response. This ETag is compared to the {@code If-None-Match}
                 * header of the request. If these headers are equal, the response content is
                 * not sent, but rather a {@code 304 "Not Modified"} status instead.
                 * <p>Since the ETag is based on the response content, the response
                 * (e.g. a {@link org.springframework.web.servlet.View}) is still rendered.
                 * As such, this filter only saves bandwidth, not server performance.
                 * <p><b>NOTE:</b> As of Spring Framework 5.0, this filter uses request/response
                 * decorators built on the Servlet 3.1 API.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @author Brian Clozel
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class ShallowEtagHeaderFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set whether the ETag value written to the response should be weak, as per RFC 7232.
                     * <p>Should be configured using an {@code <init-param>} for parameter name
                     * "writeWeakETag" in the filter definition in {@code web.xml}.
                     * @since 4.3
                     * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.3">RFC 7232 section 2.3</a>
                     */
                    // @ts-ignore
                    public setWriteWeakETag(writeWeakETag: boolean): void
                    /**
                     * Return whether the ETag value written to the response should be weak, as per RFC 7232.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public isWriteWeakETag(): boolean
                    /**
                     * The default value is {@code false} so that the filter may delay the generation
                     * of an ETag until the last asynchronously dispatched thread.
                     */
                    // @ts-ignore
                    shouldNotFilterAsyncDispatch(): boolean
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                    /**
                     * Whether an ETag should be calculated for the given request and response
                     * exchange. By default this is {@code true} if all of the following match:
                     * <ul>
                     * <li>Response is not committed.</li>
                     * <li>Response status codes is in the {@code 2xx} series.</li>
                     * <li>Request method is a GET.</li>
                     * <li>Response Cache-Control header does not contain "no-store" (or is not present at all).</li>
                     * </ul>
                     * @param request the HTTP request
                     * @param response the HTTP response
                     * @param responseStatusCode the HTTP response status code
                     * @param inputStream the response body
                     * @return {#code true} if eligible for ETag generation, {@code false} otherwise
                     */
                    // @ts-ignore
                    isEligibleForEtag(request: HttpServletRequest, response: HttpServletResponse, responseStatusCode: number /*int*/, inputStream: java.io.InputStream): boolean
                    /**
                     * Generate the ETag header value from the given response body byte array.
                     * <p>The default implementation generates an MD5 hash.
                     * @param inputStream the response body as an InputStream
                     * @param isWeak whether the generated ETag should be weak
                     * @return the ETag header value
                     * @see org.springframework.util.DigestUtils
                     */
                    // @ts-ignore
                    generateETagHeaderValue(inputStream: java.io.InputStream, isWeak: boolean): string
                    /**
                     * This method can be used to suppress the content caching response wrapper
                     * of the ShallowEtagHeaderFilter. The main reason for this is streaming
                     * scenarios which are not to be cached and do not need an eTag.
                     * <p><strong>Note:</strong> This method must be called before the response
                     * is written to in order for the entire response content to be written
                     * without caching.
                     * @since 4.2
                     */
                    // @ts-ignore
                    public static disableContentCaching(request: ServletRequest): void
                }
            }
        }
    }
}
