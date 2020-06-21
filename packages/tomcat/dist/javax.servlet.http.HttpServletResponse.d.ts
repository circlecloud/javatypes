declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Extends the {@link ServletResponse} interface to provide HTTP-specific
             * functionality in sending a response. For example, it has methods to access
             * HTTP headers and cookies.
             * <p>
             * The servlet container creates an <code>HttpServletResponse</code> object and
             * passes it as an argument to the servlet's service methods (<code>doGet</code>, <code>doPost</code>, etc).
             * @see javax.servlet.ServletResponse
             */
            // @ts-ignore
            interface HttpServletResponse extends javax.servlet.ServletResponse {
                /**
                 * Status code (100) indicating the client can continue.
                 */
                // @ts-ignore
                readonly SC_CONTINUE: number /*int*/
                /**
                 * Status code (101) indicating the server is switching protocols according
                 * to Upgrade header.
                 */
                // @ts-ignore
                readonly SC_SWITCHING_PROTOCOLS: number /*int*/
                /**
                 * Status code (200) indicating the request succeeded normally.
                 */
                // @ts-ignore
                readonly SC_OK: number /*int*/
                /**
                 * Status code (201) indicating the request succeeded and created a new
                 * resource on the server.
                 */
                // @ts-ignore
                readonly SC_CREATED: number /*int*/
                /**
                 * Status code (202) indicating that a request was accepted for processing,
                 * but was not completed.
                 */
                // @ts-ignore
                readonly SC_ACCEPTED: number /*int*/
                /**
                 * Status code (203) indicating that the meta information presented by the
                 * client did not originate from the server.
                 */
                // @ts-ignore
                readonly SC_NON_AUTHORITATIVE_INFORMATION: number /*int*/
                /**
                 * Status code (204) indicating that the request succeeded but that there
                 * was no new information to return.
                 */
                // @ts-ignore
                readonly SC_NO_CONTENT: number /*int*/
                /**
                 * Status code (205) indicating that the agent <em>SHOULD</em> reset the
                 * document view which caused the request to be sent.
                 */
                // @ts-ignore
                readonly SC_RESET_CONTENT: number /*int*/
                /**
                 * Status code (206) indicating that the server has fulfilled the partial
                 * GET request for the resource.
                 */
                // @ts-ignore
                readonly SC_PARTIAL_CONTENT: number /*int*/
                /**
                 * Status code (300) indicating that the requested resource corresponds to
                 * any one of a set of representations, each with its own specific location.
                 */
                // @ts-ignore
                readonly SC_MULTIPLE_CHOICES: number /*int*/
                /**
                 * Status code (301) indicating that the resource has permanently moved to a
                 * new location, and that future references should use a new URI with their
                 * requests.
                 */
                // @ts-ignore
                readonly SC_MOVED_PERMANENTLY: number /*int*/
                /**
                 * Status code (302) indicating that the resource has temporarily moved to
                 * another location, but that future references should still use the
                 * original URI to access the resource. This definition is being retained
                 * for backwards compatibility. SC_FOUND is now the preferred definition.
                 */
                // @ts-ignore
                readonly SC_MOVED_TEMPORARILY: number /*int*/
                /**
                 * Status code (302) indicating that the resource reside temporarily under a
                 * different URI. Since the redirection might be altered on occasion, the
                 * client should continue to use the Request-URI for future
                 * requests.(HTTP/1.1) To represent the status code (302), it is recommended
                 * to use this variable.
                 */
                // @ts-ignore
                readonly SC_FOUND: number /*int*/
                /**
                 * Status code (303) indicating that the response to the request can be
                 * found under a different URI.
                 */
                // @ts-ignore
                readonly SC_SEE_OTHER: number /*int*/
                /**
                 * Status code (304) indicating that a conditional GET operation found that
                 * the resource was available and not modified.
                 */
                // @ts-ignore
                readonly SC_NOT_MODIFIED: number /*int*/
                /**
                 * Status code (305) indicating that the requested resource <em>MUST</em> be
                 * accessed through the proxy given by the <code><em>Location</em></code>
                 * field.
                 */
                // @ts-ignore
                readonly SC_USE_PROXY: number /*int*/
                /**
                 * Status code (307) indicating that the requested resource resides
                 * temporarily under a different URI. The temporary URI <em>SHOULD</em> be
                 * given by the <code><em>Location</em></code> field in the response.
                 */
                // @ts-ignore
                readonly SC_TEMPORARY_REDIRECT: number /*int*/
                /**
                 * Status code (400) indicating the request sent by the client was
                 * syntactically incorrect.
                 */
                // @ts-ignore
                readonly SC_BAD_REQUEST: number /*int*/
                /**
                 * Status code (401) indicating that the request requires HTTP
                 * authentication.
                 */
                // @ts-ignore
                readonly SC_UNAUTHORIZED: number /*int*/
                /**
                 * Status code (402) reserved for future use.
                 */
                // @ts-ignore
                readonly SC_PAYMENT_REQUIRED: number /*int*/
                /**
                 * Status code (403) indicating the server understood the request but
                 * refused to fulfill it.
                 */
                // @ts-ignore
                readonly SC_FORBIDDEN: number /*int*/
                /**
                 * Status code (404) indicating that the requested resource is not
                 * available.
                 */
                // @ts-ignore
                readonly SC_NOT_FOUND: number /*int*/
                /**
                 * Status code (405) indicating that the method specified in the
                 * <code><em>Request-Line</em></code> is not allowed for the resource
                 * identified by the <code><em>Request-URI</em></code>.
                 */
                // @ts-ignore
                readonly SC_METHOD_NOT_ALLOWED: number /*int*/
                /**
                 * Status code (406) indicating that the resource identified by the request
                 * is only capable of generating response entities which have content
                 * characteristics not acceptable according to the accept headers sent in
                 * the request.
                 */
                // @ts-ignore
                readonly SC_NOT_ACCEPTABLE: number /*int*/
                /**
                 * Status code (407) indicating that the client <em>MUST</em> first
                 * authenticate itself with the proxy.
                 */
                // @ts-ignore
                readonly SC_PROXY_AUTHENTICATION_REQUIRED: number /*int*/
                /**
                 * Status code (408) indicating that the client did not produce a request
                 * within the time that the server was prepared to wait.
                 */
                // @ts-ignore
                readonly SC_REQUEST_TIMEOUT: number /*int*/
                /**
                 * Status code (409) indicating that the request could not be completed due
                 * to a conflict with the current state of the resource.
                 */
                // @ts-ignore
                readonly SC_CONFLICT: number /*int*/
                /**
                 * Status code (410) indicating that the resource is no longer available at
                 * the server and no forwarding address is known. This condition
                 * <em>SHOULD</em> be considered permanent.
                 */
                // @ts-ignore
                readonly SC_GONE: number /*int*/
                /**
                 * Status code (411) indicating that the request cannot be handled without a
                 * defined <code><em>Content-Length</em></code>.
                 */
                // @ts-ignore
                readonly SC_LENGTH_REQUIRED: number /*int*/
                /**
                 * Status code (412) indicating that the precondition given in one or more
                 * of the request-header fields evaluated to false when it was tested on the
                 * server.
                 */
                // @ts-ignore
                readonly SC_PRECONDITION_FAILED: number /*int*/
                /**
                 * Status code (413) indicating that the server is refusing to process the
                 * request because the request entity is larger than the server is willing
                 * or able to process.
                 */
                // @ts-ignore
                readonly SC_REQUEST_ENTITY_TOO_LARGE: number /*int*/
                /**
                 * Status code (414) indicating that the server is refusing to service the
                 * request because the <code><em>Request-URI</em></code> is longer than the
                 * server is willing to interpret.
                 */
                // @ts-ignore
                readonly SC_REQUEST_URI_TOO_LONG: number /*int*/
                /**
                 * Status code (415) indicating that the server is refusing to service the
                 * request because the entity of the request is in a format not supported by
                 * the requested resource for the requested method.
                 */
                // @ts-ignore
                readonly SC_UNSUPPORTED_MEDIA_TYPE: number /*int*/
                /**
                 * Status code (416) indicating that the server cannot serve the requested
                 * byte range.
                 */
                // @ts-ignore
                readonly SC_REQUESTED_RANGE_NOT_SATISFIABLE: number /*int*/
                /**
                 * Status code (417) indicating that the server could not meet the
                 * expectation given in the Expect request header.
                 */
                // @ts-ignore
                readonly SC_EXPECTATION_FAILED: number /*int*/
                /**
                 * Status code (500) indicating an error inside the HTTP server which
                 * prevented it from fulfilling the request.
                 */
                // @ts-ignore
                readonly SC_INTERNAL_SERVER_ERROR: number /*int*/
                /**
                 * Status code (501) indicating the HTTP server does not support the
                 * functionality needed to fulfill the request.
                 */
                // @ts-ignore
                readonly SC_NOT_IMPLEMENTED: number /*int*/
                /**
                 * Status code (502) indicating that the HTTP server received an invalid
                 * response from a server it consulted when acting as a proxy or gateway.
                 */
                // @ts-ignore
                readonly SC_BAD_GATEWAY: number /*int*/
                /**
                 * Status code (503) indicating that the HTTP server is temporarily
                 * overloaded, and unable to handle the request.
                 */
                // @ts-ignore
                readonly SC_SERVICE_UNAVAILABLE: number /*int*/
                /**
                 * Status code (504) indicating that the server did not receive a timely
                 * response from the upstream server while acting as a gateway or proxy.
                 */
                // @ts-ignore
                readonly SC_GATEWAY_TIMEOUT: number /*int*/
                /**
                 * Status code (505) indicating that the server does not support or refuses
                 * to support the HTTP protocol version that was used in the request
                 * message.
                 */
                // @ts-ignore
                readonly SC_HTTP_VERSION_NOT_SUPPORTED: number /*int*/
                /**
                 * Adds the specified cookie to the response. This method can be called
                 * multiple times to set more than one cookie.
                 * @param cookie
                 *             the Cookie to return to the client
                 */
                // @ts-ignore
                addCookie(cookie: javax.servlet.http.Cookie): void
                /**
                 * Returns a boolean indicating whether the named response header has
                 * already been set.
                 * @param name
                 *             the header name
                 * @return <code>true</code> if the named response header has already been
                 *          set; <code>false</code> otherwise
                 */
                // @ts-ignore
                containsHeader(name: java.lang.String | string): boolean
                /**
                 * Encodes the specified URL by including the session ID in it, or, if
                 * encoding is not needed, returns the URL unchanged. The implementation of
                 * this method includes the logic to determine whether the session ID needs
                 * to be encoded in the URL. For example, if the browser supports cookies,
                 * or session tracking is turned off, URL encoding is unnecessary.
                 * <p>
                 * For robust session tracking, all URLs emitted by a servlet should be run
                 * through this method. Otherwise, URL rewriting cannot be used with
                 * browsers which do not support cookies.
                 * @param url
                 *             the url to be encoded.
                 * @return the encoded URL if encoding is needed; the unchanged URL
                 *          otherwise.
                 */
                // @ts-ignore
                encodeURL(url: java.lang.String | string): string
                /**
                 * Encodes the specified URL for use in the <code>sendRedirect</code> method
                 * or, if encoding is not needed, returns the URL unchanged. The
                 * implementation of this method includes the logic to determine whether the
                 * session ID needs to be encoded in the URL. Because the rules for making
                 * this determination can differ from those used to decide whether to encode
                 * a normal link, this method is separated from the <code>encodeURL</code>
                 * method.
                 * <p>
                 * All URLs sent to the <code>HttpServletResponse.sendRedirect</code> method
                 * should be run through this method. Otherwise, URL rewriting cannot be
                 * used with browsers which do not support cookies.
                 * @param url
                 *             the url to be encoded.
                 * @return the encoded URL if encoding is needed; the unchanged URL
                 *          otherwise.
                 * @see #sendRedirect
                 * @see #encodeUrl
                 */
                // @ts-ignore
                encodeRedirectURL(url: java.lang.String | string): string
                /**
                 * @param url
                 *             the url to be encoded.
                 * @return the encoded URL if encoding is needed; the unchanged URL
                 *          otherwise.
                 * @deprecated As of version 2.1, use encodeURL(String url) instead
                 */
                // @ts-ignore
                encodeUrl(url: java.lang.String | string): string
                /**
                 * @param url
                 *             the url to be encoded.
                 * @return the encoded URL if encoding is needed; the unchanged URL
                 *          otherwise.
                 * @deprecated As of version 2.1, use encodeRedirectURL(String url) instead
                 */
                // @ts-ignore
                encodeRedirectUrl(url: java.lang.String | string): string
                /**
                 * Sends an error response to the client using the specified status code and
                 * clears the output buffer. The server defaults to creating the response to
                 * look like an HTML-formatted server error page containing the specified
                 * message, setting the content type to "text/html", leaving cookies and
                 * other headers unmodified. If an error-page declaration has been made for
                 * the web application corresponding to the status code passed in, it will
                 * be served back in preference to the suggested msg parameter.
                 * <p>
                 * If the response has already been committed, this method throws an
                 * IllegalStateException. After using this method, the response should be
                 * considered to be committed and should not be written to.
                 * @param sc
                 *             the error status code
                 * @param msg
                 *             the descriptive message
                 * @exception IOException
                 *                 If an input or output exception occurs
                 * @exception IllegalStateException
                 *                 If the response was committed
                 */
                // @ts-ignore
                sendError(sc: number /*int*/, msg: java.lang.String | string): void
                /**
                 * Sends an error response to the client using the specified status code and
                 * clears the buffer. This is equivalent to calling {@link #sendError(int,
                 * String)} with the same status code and <code>null</code> for the message.
                 * @param sc
                 *             the error status code
                 * @exception IOException
                 *                 If an input or output exception occurs
                 * @exception IllegalStateException
                 *                 If the response was committed before this method call
                 */
                // @ts-ignore
                sendError(sc: number /*int*/): void
                /**
                 * Sends a temporary redirect response to the client using the specified
                 * redirect location URL. This method can accept relative URLs; the servlet
                 * container must convert the relative URL to an absolute URL before sending
                 * the response to the client. If the location is relative without a leading
                 * '/' the container interprets it as relative to the current request URI.
                 * If the location is relative with a leading '/' the container interprets
                 * it as relative to the servlet container root.
                 * <p>
                 * If the response has already been committed, this method throws an
                 * IllegalStateException. After using this method, the response should be
                 * considered to be committed and should not be written to.
                 * @param location
                 *             the redirect location URL
                 * @exception IOException
                 *                 If an input or output exception occurs
                 * @exception IllegalStateException
                 *                 If the response was committed or if a partial URL is given
                 *                 and cannot be converted into a valid URL
                 */
                // @ts-ignore
                sendRedirect(location: java.lang.String | string): void
                /**
                 * Sets a response header with the given name and date-value. The date is
                 * specified in terms of milliseconds since the epoch. If the header had
                 * already been set, the new value overwrites the previous one. The
                 * <code>containsHeader</code> method can be used to test for the presence
                 * of a header before setting its value.
                 * @param name
                 *             the name of the header to set
                 * @param date
                 *             the assigned date value
                 * @see #containsHeader
                 * @see #addDateHeader
                 */
                // @ts-ignore
                setDateHeader(name: java.lang.String | string, date: number /*long*/): void
                /**
                 * Adds a response header with the given name and date-value. The date is
                 * specified in terms of milliseconds since the epoch. This method allows
                 * response headers to have multiple values.
                 * @param name
                 *             the name of the header to set
                 * @param date
                 *             the additional date value
                 * @see #setDateHeader
                 */
                // @ts-ignore
                addDateHeader(name: java.lang.String | string, date: number /*long*/): void
                /**
                 * Sets a response header with the given name and value. If the header had
                 * already been set, the new value overwrites the previous one. The
                 * <code>containsHeader</code> method can be used to test for the presence
                 * of a header before setting its value.
                 * @param name
                 *             the name of the header
                 * @param value
                 *             the header value If it contains octet string, it should be
                 *             encoded according to RFC 2047
                 *             (http://www.ietf.org/rfc/rfc2047.txt)
                 * @see #containsHeader
                 * @see #addHeader
                 */
                // @ts-ignore
                setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Adds a response header with the given name and value. This method allows
                 * response headers to have multiple values.
                 * @param name
                 *             the name of the header
                 * @param value
                 *             the additional header value If it contains octet string, it
                 *             should be encoded according to RFC 2047
                 *             (http://www.ietf.org/rfc/rfc2047.txt)
                 * @see #setHeader
                 */
                // @ts-ignore
                addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Sets a response header with the given name and integer value. If the
                 * header had already been set, the new value overwrites the previous one.
                 * The <code>containsHeader</code> method can be used to test for the
                 * presence of a header before setting its value.
                 * @param name
                 *             the name of the header
                 * @param value
                 *             the assigned integer value
                 * @see #containsHeader
                 * @see #addIntHeader
                 */
                // @ts-ignore
                setIntHeader(name: java.lang.String | string, value: number /*int*/): void
                /**
                 * Adds a response header with the given name and integer value. This method
                 * allows response headers to have multiple values.
                 * @param name
                 *             the name of the header
                 * @param value
                 *             the assigned integer value
                 * @see #setIntHeader
                 */
                // @ts-ignore
                addIntHeader(name: java.lang.String | string, value: number /*int*/): void
                /**
                 * Sets the status code for this response. This method is used to set the
                 * return status code when there is no error (for example, for the status
                 * codes SC_OK or SC_MOVED_TEMPORARILY). If there is an error, and the
                 * caller wishes to invoke an error-page defined in the web application, the
                 * <code>sendError</code> method should be used instead.
                 * <p>
                 * The container clears the buffer and sets the Location header, preserving
                 * cookies and other headers.
                 * @param sc
                 *             the status code
                 * @see #sendError
                 */
                // @ts-ignore
                setStatus(sc: number /*int*/): void
                /**
                 * Sets the status code and message for this response.
                 * @param sc
                 *             the status code
                 * @param sm
                 *             the status message
                 * @deprecated As of version 2.1, due to ambiguous meaning of the message
                 *              parameter. To set a status code use
                 *              <code>setStatus(int)</code>, to send an error with a
                 *              description use <code>sendError(int, String)</code>.
                 */
                // @ts-ignore
                setStatus(sc: number /*int*/, sm: java.lang.String | string): void
                /**
                 * Get the HTTP status code for this Response.
                 * @return The HTTP status code for this Response
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                getStatus(): number /*int*/
                /**
                 * Return the value for the specified header, or <code>null</code> if this
                 * header has not been set.  If more than one value was added for this
                 * name, only the first is returned; use {@link #getHeaders(String)} to
                 * retrieve all of them.
                 * @param name Header name to look up
                 * @return The first value for the specified header. This is the raw value
                 *          so if multiple values are specified in the first header then they
                 *          will be returned as a single header value .
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                getHeader(name: java.lang.String | string): string
                /**
                 * Return a Collection of all the header values associated with the
                 * specified header name.
                 * @param name Header name to look up
                 * @return The values for the specified header. These are the raw values so
                 *          if multiple values are specified in a single header that will be
                 *          returned as a single header value.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                getHeaders(name: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * Get the header names set for this HTTP response.
                 * @return The header names set for this HTTP response.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                getHeaderNames(): Array<java.lang.String | string>
                /**
                 * Configure the supplier of the trailer headers. The supplier will be
                 * called in the scope of the thread that completes the response.
                 * <br>
                 * Trailers that don't meet the requirements of RFC 7230, section 4.1.2 will
                 * be ignored.
                 * <br>
                 * The default implementation is a NO-OP.
                 * @param supplier The supplier for the trailer headers
                 * @throws IllegalStateException if this method is called when the
                 *          underlying protocol does not support trailer headers or if using
                 *          HTTP/1.1 and the response has already been committed
                 * @since Servlet 4.0
                 */
                // @ts-ignore
                setTrailerFields(supplier: java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>): void
                /**
                 * Obtain the supplier of the trailer headers.
                 * <br>
                 * The default implementation returns null.
                 * @return The supplier for the trailer headers
                 * @since Servlet 4.0
                 */
                // @ts-ignore
                getTrailerFields(): java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>
            }
        }
    }
}
