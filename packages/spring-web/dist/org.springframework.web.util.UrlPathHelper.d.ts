declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Helper class for URL path matching. Provides support for URL paths in
                 * {@code RequestDispatcher} includes and support for consistent URL decoding.
                 * <p>Used by {@link org.springframework.web.servlet.handler.AbstractUrlHandlerMapping}
                 * and {@link org.springframework.web.servlet.support.RequestContext} for path matching
                 * and/or URI determination.
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 * @author Rossen Stoyanchev
                 * @since 14.01.2004
                 * @see #getLookupPathForRequest
                 * @see javax.servlet.RequestDispatcher
                 */
                // @ts-ignore
                class UrlPathHelper extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Whether URL lookups should always use the full path within the current
                     * web application context, i.e. within
                     * {@link javax.servlet.ServletContext#getContextPath()}.
                     * <p>If set to {@literal false} the path within the current servlet mapping
                     * is used instead if applicable (i.e. in the case of a prefix based Servlet
                     * mapping such as "/myServlet/*").
                     * <p>By default this is set to "false".
                     */
                    // @ts-ignore
                    setAlwaysUseFullPath(alwaysUseFullPath: boolean): void
                    /**
                     * Whether the context path and request URI should be decoded -- both of
                     * which are returned <i>undecoded</i> by the Servlet API, in contrast to
                     * the servlet path.
                     * <p>Either the request encoding or the default Servlet spec encoding
                     * (ISO-8859-1) is used when set to "true".
                     * <p>By default this is set to {@literal true}.
                     * <p><strong>Note:</strong> Be aware the servlet path will not match when
                     * compared to encoded paths. Therefore use of {@code urlDecode=false} is
                     * not compatible with a prefix-based Servlet mapping and likewise implies
                     * also setting {@code alwaysUseFullPath=true}.
                     * @see #getServletPath
                     * @see #getContextPath
                     * @see #getRequestUri
                     * @see WebUtils#DEFAULT_CHARACTER_ENCODING
                     * @see javax.servlet.ServletRequest#getCharacterEncoding()
                     * @see java.net.URLDecoder#decode(String, String)
                     */
                    // @ts-ignore
                    setUrlDecode(urlDecode: boolean): void
                    /**
                     * Whether to decode the request URI when determining the lookup path.
                     * @since 4.3.13
                     */
                    // @ts-ignore
                    isUrlDecode(): boolean
                    /**
                     * Set if ";" (semicolon) content should be stripped from the request URI.
                     * <p>Default is "true".
                     */
                    // @ts-ignore
                    setRemoveSemicolonContent(removeSemicolonContent: boolean): void
                    /**
                     * Whether configured to remove ";" (semicolon) content from the request URI.
                     */
                    // @ts-ignore
                    shouldRemoveSemicolonContent(): boolean
                    /**
                     * Set the default character encoding to use for URL decoding.
                     * Default is ISO-8859-1, according to the Servlet spec.
                     * <p>If the request specifies a character encoding itself, the request
                     * encoding will override this setting. This also allows for generically
                     * overriding the character encoding in a filter that invokes the
                     * {@code ServletRequest.setCharacterEncoding} method.
                     * @param defaultEncoding the character encoding to use
                     * @see #determineEncoding
                     * @see javax.servlet.ServletRequest#getCharacterEncoding()
                     * @see javax.servlet.ServletRequest#setCharacterEncoding(String)
                     * @see WebUtils#DEFAULT_CHARACTER_ENCODING
                     */
                    // @ts-ignore
                    setDefaultEncoding(defaultEncoding: string): void
                    /**
                     * Return the default character encoding to use for URL decoding.
                     */
                    // @ts-ignore
                    getDefaultEncoding(): java.lang.String
                    /**
                     * Return the mapping lookup path for the given request, within the current
                     * servlet mapping if applicable, else within the web application.
                     * <p>Detects include request URL if called within a RequestDispatcher include.
                     * @param request current HTTP request
                     * @return the lookup path
                     * @see #getPathWithinServletMapping
                     * @see #getPathWithinApplication
                     */
                    // @ts-ignore
                    getLookupPathForRequest(request: HttpServletRequest): java.lang.String
                    /**
                     * Variant of {@link #getLookupPathForRequest(HttpServletRequest)} that
                     * automates checking for a previously computed lookupPath saved as a
                     * request attribute. The attribute is only used for lookup purposes.
                     * @param request current HTTP request
                     * @param lookupPathAttributeName the request attribute to check
                     * @return the lookup path
                     * @since 5.2
                     * @see org.springframework.web.servlet.HandlerMapping#LOOKUP_PATH
                     */
                    // @ts-ignore
                    getLookupPathForRequest(request: HttpServletRequest, lookupPathAttributeName: string): java.lang.String
                    /**
                     * Return the path within the servlet mapping for the given request,
                     * i.e. the part of the request's URL beyond the part that called the servlet,
                     * or "" if the whole URL has been used to identify the servlet.
                     * <p>Detects include request URL if called within a RequestDispatcher include.
                     * <p>E.g.: servlet mapping = "/*"; request URI = "/test/a" -> "/test/a".
                     * <p>E.g.: servlet mapping = "/"; request URI = "/test/a" -> "/test/a".
                     * <p>E.g.: servlet mapping = "/test/*"; request URI = "/test/a" -> "/a".
                     * <p>E.g.: servlet mapping = "/test"; request URI = "/test" -> "".
                     * <p>E.g.: servlet mapping = "/*.test"; request URI = "/a.test" -> "".
                     * @param request current HTTP request
                     * @return the path within the servlet mapping, or ""
                     * @see #getLookupPathForRequest
                     */
                    // @ts-ignore
                    getPathWithinServletMapping(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the path within the web application for the given request.
                     * <p>Detects include request URL if called within a RequestDispatcher include.
                     * @param request current HTTP request
                     * @return the path within the web application
                     * @see #getLookupPathForRequest
                     */
                    // @ts-ignore
                    getPathWithinApplication(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the request URI for the given request, detecting an include request
                     * URL if called within a RequestDispatcher include.
                     * <p>As the value returned by {@code request.getRequestURI()} is <i>not</i>
                     * decoded by the servlet container, this method will decode it.
                     * <p>The URI that the web container resolves <i>should</i> be correct, but some
                     * containers like JBoss/Jetty incorrectly include ";" strings like ";jsessionid"
                     * in the URI. This method cuts off such incorrect appendices.
                     * @param request current HTTP request
                     * @return the request URI
                     */
                    // @ts-ignore
                    getRequestUri(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the context path for the given request, detecting an include request
                     * URL if called within a RequestDispatcher include.
                     * <p>As the value returned by {@code request.getContextPath()} is <i>not</i>
                     * decoded by the servlet container, this method will decode it.
                     * @param request current HTTP request
                     * @return the context path
                     */
                    // @ts-ignore
                    getContextPath(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the servlet path for the given request, regarding an include request
                     * URL if called within a RequestDispatcher include.
                     * <p>As the value returned by {@code request.getServletPath()} is already
                     * decoded by the servlet container, this method will not attempt to decode it.
                     * @param request current HTTP request
                     * @return the servlet path
                     */
                    // @ts-ignore
                    getServletPath(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the request URI for the given request. If this is a forwarded request,
                     * correctly resolves to the request URI of the original request.
                     */
                    // @ts-ignore
                    getOriginatingRequestUri(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the context path for the given request, detecting an include request
                     * URL if called within a RequestDispatcher include.
                     * <p>As the value returned by {@code request.getContextPath()} is <i>not</i>
                     * decoded by the servlet container, this method will decode it.
                     * @param request current HTTP request
                     * @return the context path
                     */
                    // @ts-ignore
                    getOriginatingContextPath(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the servlet path for the given request, detecting an include request
                     * URL if called within a RequestDispatcher include.
                     * @param request current HTTP request
                     * @return the servlet path
                     */
                    // @ts-ignore
                    getOriginatingServletPath(request: HttpServletRequest): java.lang.String
                    /**
                     * Return the query string part of the given request's URL. If this is a forwarded request,
                     * correctly resolves to the query string of the original request.
                     * @param request current HTTP request
                     * @return the query string
                     */
                    // @ts-ignore
                    getOriginatingQueryString(request: HttpServletRequest): java.lang.String
                    /**
                     * Decode the given source string with a URLDecoder. The encoding will be taken
                     * from the request, falling back to the default "ISO-8859-1".
                     * <p>The default implementation uses {@code URLDecoder.decode(input, enc)}.
                     * @param request current HTTP request
                     * @param source the String to decode
                     * @return the decoded String
                     * @see WebUtils#DEFAULT_CHARACTER_ENCODING
                     * @see javax.servlet.ServletRequest#getCharacterEncoding
                     * @see java.net.URLDecoder#decode(String, String)
                     * @see java.net.URLDecoder#decode(String)
                     */
                    // @ts-ignore
                    decodeRequestString(request: HttpServletRequest, source: string): java.lang.String
                    /**
                     * Determine the encoding for the given request.
                     * Can be overridden in subclasses.
                     * <p>The default implementation checks the request encoding,
                     * falling back to the default encoding specified for this resolver.
                     * @param request current HTTP request
                     * @return the encoding for the request (never {#code null})
                     * @see javax.servlet.ServletRequest#getCharacterEncoding()
                     * @see #setDefaultEncoding
                     */
                    // @ts-ignore
                    determineEncoding(request: HttpServletRequest): java.lang.String
                    /**
                     * Remove ";" (semicolon) content from the given request URI if the
                     * {@linkplain #setRemoveSemicolonContent removeSemicolonContent}
                     * property is set to "true". Note that "jsessionid" is always removed.
                     * @param requestUri the request URI string to remove ";" content from
                     * @return the updated URI string
                     */
                    // @ts-ignore
                    removeSemicolonContent(requestUri: string): java.lang.String
                    /**
                     * Decode the given URI path variables via {@link #decodeRequestString} unless
                     * {@link #setUrlDecode} is set to {@code true} in which case it is assumed
                     * the URL path from which the variables were extracted is already decoded
                     * through a call to {@link #getLookupPathForRequest(HttpServletRequest)}.
                     * @param request current HTTP request
                     * @param vars the URI variables extracted from the URL path
                     * @return the same Map or a new Map instance
                     */
                    // @ts-ignore
                    decodePathVariables(request: HttpServletRequest, vars: java.util.Map<java.lang.String, java.lang.String>): java.util.Map<java.lang.String, java.lang.String>
                    /**
                     * Decode the given matrix variables via {@link #decodeRequestString} unless
                     * {@link #setUrlDecode} is set to {@code true} in which case it is assumed
                     * the URL path from which the variables were extracted is already decoded
                     * through a call to {@link #getLookupPathForRequest(HttpServletRequest)}.
                     * @param request current HTTP request
                     * @param vars the URI variables extracted from the URL path
                     * @return the same Map or a new Map instance
                     */
                    // @ts-ignore
                    decodeMatrixVariables(request: HttpServletRequest, vars: object): <any>
                }
            }
        }
    }
}
