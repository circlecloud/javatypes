declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Generic interface for a web request. Mainly intended for generic web
                     * request interceptors, giving them access to general request metadata,
                     * not for actual handling of the request.
                     * @author Juergen Hoeller
                     * @author Brian Clozel
                     * @since 2.0
                     * @see WebRequestInterceptor
                     */
                    // @ts-ignore
                    interface WebRequest extends org.springframework.web.context.request.RequestAttributes {
                        /**
                         * Return the request header of the given name, or {@code null} if none.
                         * <p>Retrieves the first header value in case of a multi-value header.
                         * @since 3.0
                         * @see javax.servlet.http.HttpServletRequest#getHeader(String)
                         */
                        // @ts-ignore
                        getHeader(headerName: java.lang.String | string): string
                        /**
                         * Return the request header values for the given header name,
                         * or {@code null} if none.
                         * <p>A single-value header will be exposed as an array with a single element.
                         * @since 3.0
                         * @see javax.servlet.http.HttpServletRequest#getHeaders(String)
                         */
                        // @ts-ignore
                        getHeaderValues(headerName: java.lang.String | string): string[]
                        /**
                         * Return a Iterator over request header names.
                         * @since 3.0
                         * @see javax.servlet.http.HttpServletRequest#getHeaderNames()
                         */
                        // @ts-ignore
                        getHeaderNames(): java.util.Iterator<java.lang.String | string>
                        /**
                         * Return the request parameter of the given name, or {@code null} if none.
                         * <p>Retrieves the first parameter value in case of a multi-value parameter.
                         * @see javax.servlet.http.HttpServletRequest#getParameter(String)
                         */
                        // @ts-ignore
                        getParameter(paramName: java.lang.String | string): string
                        /**
                         * Return the request parameter values for the given parameter name,
                         * or {@code null} if none.
                         * <p>A single-value parameter will be exposed as an array with a single element.
                         * @see javax.servlet.http.HttpServletRequest#getParameterValues(String)
                         */
                        // @ts-ignore
                        getParameterValues(paramName: java.lang.String | string): string[]
                        /**
                         * Return a Iterator over request parameter names.
                         * @since 3.0
                         * @see javax.servlet.http.HttpServletRequest#getParameterNames()
                         */
                        // @ts-ignore
                        getParameterNames(): java.util.Iterator<java.lang.String | string>
                        /**
                         * Return a immutable Map of the request parameters, with parameter names as map keys
                         * and parameter values as map values. The map values will be of type String array.
                         * <p>A single-value parameter will be exposed as an array with a single element.
                         * @see javax.servlet.http.HttpServletRequest#getParameterMap()
                         */
                        // @ts-ignore
                        getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                        /**
                         * Return the primary Locale for this request.
                         * @see javax.servlet.http.HttpServletRequest#getLocale()
                         */
                        // @ts-ignore
                        getLocale(): java.util.Locale
                        /**
                         * Return the context path for this request
                         * (usually the base path that the current web application is mapped to).
                         * @see javax.servlet.http.HttpServletRequest#getContextPath()
                         */
                        // @ts-ignore
                        getContextPath(): string
                        /**
                         * Return the remote user for this request, if any.
                         * @see javax.servlet.http.HttpServletRequest#getRemoteUser()
                         */
                        // @ts-ignore
                        getRemoteUser(): string
                        /**
                         * Return the user principal for this request, if any.
                         * @see javax.servlet.http.HttpServletRequest#getUserPrincipal()
                         */
                        // @ts-ignore
                        getUserPrincipal(): java.security.Principal
                        /**
                         * Determine whether the user is in the given role for this request.
                         * @see javax.servlet.http.HttpServletRequest#isUserInRole(String)
                         */
                        // @ts-ignore
                        isUserInRole(role: java.lang.String | string): boolean
                        /**
                         * Return whether this request has been sent over a secure transport
                         * mechanism (such as SSL).
                         * @see javax.servlet.http.HttpServletRequest#isSecure()
                         */
                        // @ts-ignore
                        isSecure(): boolean
                        /**
                         * Check whether the requested resource has been modified given the
                         * supplied last-modified timestamp (as determined by the application).
                         * <p>This will also transparently set the "Last-Modified" response header
                         * and HTTP status when applicable.
                         * <p>Typical usage:
                         * <pre class="code">
                         * public String myHandleMethod(WebRequest webRequest, Model model) {
                         * long lastModified = // application-specific calculation
                         * if (request.checkNotModified(lastModified)) {
                         * // shortcut exit - no further processing necessary
                         * return null;
                         * }
                         * // further request processing, actually building content
                         * model.addAttribute(...);
                         * return "myViewName";
                         * }</pre>
                         * <p>This method works with conditional GET/HEAD requests, but
                         * also with conditional POST/PUT/DELETE requests.
                         * <p><strong>Note:</strong> you can use either
                         * this {@code #checkNotModified(long)} method; or
                         * {@link #checkNotModified(String)}. If you want enforce both
                         * a strong entity tag and a Last-Modified value,
                         * as recommended by the HTTP specification,
                         * then you should use {@link #checkNotModified(String, long)}.
                         * <p>If the "If-Modified-Since" header is set but cannot be parsed
                         * to a date value, this method will ignore the header and proceed
                         * with setting the last-modified timestamp on the response.
                         * @param lastModifiedTimestamp the last-modified timestamp in
                         *  milliseconds that the application determined for the underlying
                         *  resource
                         * @return whether the request qualifies as not modified,
                         *  allowing to abort request processing and relying on the response
                         *  telling the client that the content has not been modified
                         */
                        // @ts-ignore
                        checkNotModified(lastModifiedTimestamp: number /*long*/): boolean
                        /**
                         * Check whether the requested resource has been modified given the
                         * supplied {@code ETag} (entity tag), as determined by the application.
                         * <p>This will also transparently set the "ETag" response header
                         * and HTTP status when applicable.
                         * <p>Typical usage:
                         * <pre class="code">
                         * public String myHandleMethod(WebRequest webRequest, Model model) {
                         * String eTag = // application-specific calculation
                         * if (request.checkNotModified(eTag)) {
                         * // shortcut exit - no further processing necessary
                         * return null;
                         * }
                         * // further request processing, actually building content
                         * model.addAttribute(...);
                         * return "myViewName";
                         * }</pre>
                         * <p><strong>Note:</strong> you can use either
                         * this {@code #checkNotModified(String)} method; or
                         * {@link #checkNotModified(long)}. If you want enforce both
                         * a strong entity tag and a Last-Modified value,
                         * as recommended by the HTTP specification,
                         * then you should use {@link #checkNotModified(String, long)}.
                         * @param etag the entity tag that the application determined
                         *  for the underlying resource. This parameter will be padded
                         *  with quotes (") if necessary.
                         * @return true if the request does not require further processing.
                         */
                        // @ts-ignore
                        checkNotModified(etag: java.lang.String | string): boolean
                        /**
                         * Check whether the requested resource has been modified given the
                         * supplied {@code ETag} (entity tag) and last-modified timestamp,
                         * as determined by the application.
                         * <p>This will also transparently set the "ETag" and "Last-Modified"
                         * response headers, and HTTP status when applicable.
                         * <p>Typical usage:
                         * <pre class="code">
                         * public String myHandleMethod(WebRequest webRequest, Model model) {
                         * String eTag = // application-specific calculation
                         * long lastModified = // application-specific calculation
                         * if (request.checkNotModified(eTag, lastModified)) {
                         * // shortcut exit - no further processing necessary
                         * return null;
                         * }
                         * // further request processing, actually building content
                         * model.addAttribute(...);
                         * return "myViewName";
                         * }</pre>
                         * <p>This method works with conditional GET/HEAD requests, but
                         * also with conditional POST/PUT/DELETE requests.
                         * <p><strong>Note:</strong> The HTTP specification recommends
                         * setting both ETag and Last-Modified values, but you can also
                         * use {@code #checkNotModified(String)} or
                         * {@link #checkNotModified(long)}.
                         * @param etag the entity tag that the application determined
                         *  for the underlying resource. This parameter will be padded
                         *  with quotes (") if necessary.
                         * @param lastModifiedTimestamp the last-modified timestamp in
                         *  milliseconds that the application determined for the underlying
                         *  resource
                         * @return true if the request does not require further processing.
                         * @since 4.2
                         */
                        // @ts-ignore
                        checkNotModified(etag: java.lang.String | string, lastModifiedTimestamp: number /*long*/): boolean
                        /**
                         * Get a short description of this request,
                         * typically containing request URI and session id.
                         * @param includeClientInfo whether to include client-specific
                         *  information such as session id and user name
                         * @return the requested description as String
                         */
                        // @ts-ignore
                        getDescription(includeClientInfo: boolean): string
                    }
                }
            }
        }
    }
}
