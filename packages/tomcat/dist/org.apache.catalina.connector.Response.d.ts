declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Wrapper object for the Coyote response.
                 * @author Remy Maucherat
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class Response extends java.lang.Object implements javax.servlet.http.HttpServletResponse {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(outputBufferSize: number /*int*/)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The date format we will use for creating date headers.
                     * @deprecated Unused. This will be removed in Tomcat 10
                     */
                    // @ts-ignore
                    format: java.text.SimpleDateFormat
                    /**
                     * Coyote response.
                     */
                    // @ts-ignore
                    coyoteResponse: org.apache.coyote.Response
                    /**
                     * The associated output buffer.
                     */
                    // @ts-ignore
                    readonly outputBuffer: org.apache.catalina.connector.OutputBuffer
                    /**
                     * The associated output stream.
                     */
                    // @ts-ignore
                    outputStream: org.apache.catalina.connector.CoyoteOutputStream
                    /**
                     * The associated writer.
                     */
                    // @ts-ignore
                    writer: org.apache.catalina.connector.CoyoteWriter
                    /**
                     * The application commit flag.
                     */
                    // @ts-ignore
                    appCommitted: boolean
                    /**
                     * The included flag.
                     */
                    // @ts-ignore
                    included: boolean
                    /**
                     * Using output stream flag.
                     */
                    // @ts-ignore
                    usingOutputStream: boolean
                    /**
                     * Using writer flag.
                     */
                    // @ts-ignore
                    usingWriter: boolean
                    /**
                     * URL encoder.
                     */
                    // @ts-ignore
                    readonly urlEncoder: org.apache.tomcat.util.buf.UEncoder
                    /**
                     * Recyclable buffer to hold the redirect URL.
                     */
                    // @ts-ignore
                    readonly redirectURLCC: org.apache.tomcat.util.buf.CharChunk
                    /**
                     * The request with which this response is associated.
                     */
                    // @ts-ignore
                    request: org.apache.catalina.connector.Request
                    /**
                     * The facade associated with this response.
                     */
                    // @ts-ignore
                    facade: org.apache.catalina.connector.ResponseFacade
                    /**
                     * Set the Coyote response.
                     * @param coyoteResponse The Coyote response
                     */
                    // @ts-ignore
                    public setCoyoteResponse(coyoteResponse: org.apache.coyote.Response): void
                    /**
                     * @return the Coyote response.
                     */
                    // @ts-ignore
                    public getCoyoteResponse(): org.apache.coyote.Response
                    /**
                     * @return the Context within which this Request is being processed.
                     */
                    // @ts-ignore
                    public getContext(): org.apache.catalina.Context
                    /**
                     * Release all object references, and initialize instance variables, in
                     * preparation for reuse of this object.
                     */
                    // @ts-ignore
                    public recycle(): void
                    // @ts-ignore
                    public getCookies(): Array<javax.servlet.http.Cookie>
                    /**
                     * @return the number of bytes the application has actually written to the
                     *  output stream. This excludes chunking, compression, etc. as well as
                     *  headers.
                     */
                    // @ts-ignore
                    public getContentWritten(): number /*long*/
                    /**
                     * @return the number of bytes the actually written to the socket. This
                     *  includes chunking, compression, etc. but excludes headers.
                     * @param flush if <code>true</code> will perform a buffer flush first
                     */
                    // @ts-ignore
                    public getBytesWritten(flush: boolean): number /*long*/
                    /**
                     * Set the application commit flag.
                     * @param appCommitted The new application committed flag value
                     */
                    // @ts-ignore
                    public setAppCommitted(appCommitted: boolean): void
                    /**
                     * Application commit flag accessor.
                     * @return <code>true</code> if the application has committed the response
                     */
                    // @ts-ignore
                    public isAppCommitted(): boolean
                    /**
                     * @return the Request with which this Response is associated.
                     */
                    // @ts-ignore
                    public getRequest(): org.apache.catalina.connector.Request
                    /**
                     * Set the Request with which this Response is associated.
                     * @param request The new associated request
                     */
                    // @ts-ignore
                    public setRequest(request: org.apache.catalina.connector.Request): void
                    /**
                     * @return the <code>ServletResponse</code> for which this object
                     *  is the facade.
                     */
                    // @ts-ignore
                    public getResponse(): javax.servlet.http.HttpServletResponse
                    /**
                     * Set a wrapped HttpServletResponse to pass to the application. Components
                     * wishing to wrap the response should obtain the response via
                     * {@link #getResponse()}, wrap it and then call this method with the
                     * wrapped response.
                     * @param applicationResponse The wrapped response to pass to the
                     *         application
                     */
                    // @ts-ignore
                    public setResponse(applicationResponse: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Set the suspended flag.
                     * @param suspended The new suspended flag value
                     */
                    // @ts-ignore
                    public setSuspended(suspended: boolean): void
                    /**
                     * Suspended flag accessor.
                     * @return <code>true</code> if the response is suspended
                     */
                    // @ts-ignore
                    public isSuspended(): boolean
                    /**
                     * Closed flag accessor.
                     * @return <code>true</code> if the response has been closed
                     */
                    // @ts-ignore
                    public isClosed(): boolean
                    /**
                     * Set the error flag.
                     * @return <code>false</code> if the error flag was already set
                     */
                    // @ts-ignore
                    public setError(): boolean
                    /**
                     * Error flag accessor.
                     * @return <code>true</code> if the response has encountered an error
                     */
                    // @ts-ignore
                    public isError(): boolean
                    // @ts-ignore
                    public isErrorReportRequired(): boolean
                    // @ts-ignore
                    public setErrorReported(): boolean
                    /**
                     * Perform whatever actions are required to flush and close the output
                     * stream or writer, in a single operation.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public finishResponse(): void
                    /**
                     * @return the content length that was set or calculated for this Response.
                     */
                    // @ts-ignore
                    public getContentLength(): number /*int*/
                    /**
                     * @return the content type that was set or calculated for this response,
                     *  or <code>null</code> if no content type was set.
                     */
                    // @ts-ignore
                    public getContentType(): string
                    /**
                     * Return a PrintWriter that can be used to render error messages,
                     * regardless of whether a stream or writer has already been acquired.
                     * @return Writer which can be used for error reports. If the response is
                     *  not an error report returned using sendError or triggered by an
                     *  unexpected exception thrown during the servlet processing
                     *  (and only in that case), null will be returned if the response stream
                     *  has already been used.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public getReporter(): java.io.PrintWriter
                    /**
                     * Flush the buffer and commit this response.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public flushBuffer(): void
                    /**
                     * @return the actual buffer size used for this Response.
                     */
                    // @ts-ignore
                    public getBufferSize(): number /*int*/
                    /**
                     * @return the character encoding used for this Response.
                     */
                    // @ts-ignore
                    public getCharacterEncoding(): string
                    /**
                     * @return the servlet output stream associated with this Response.
                     * @exception IllegalStateException if <code>getWriter</code> has
                     *   already been called for this response
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public getOutputStream(): javax.servlet.ServletOutputStream
                    /**
                     * @return the Locale assigned to this response.
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                    /**
                     * @return the writer associated with this Response.
                     * @exception IllegalStateException if <code>getOutputStream</code> has
                     *   already been called for this response
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public getWriter(): java.io.PrintWriter
                    /**
                     * Has the output of this response already been committed?
                     * @return <code>true</code> if the response has been committed
                     */
                    // @ts-ignore
                    public isCommitted(): boolean
                    /**
                     * Clear any content written to the buffer.
                     * @exception IllegalStateException if this response has already
                     *   been committed
                     */
                    // @ts-ignore
                    public reset(): void
                    /**
                     * Reset the data buffer but not any status or header information.
                     * @exception IllegalStateException if the response has already
                     *   been committed
                     */
                    // @ts-ignore
                    public resetBuffer(): void
                    /**
                     * Reset the data buffer and the using Writer/Stream flags but not any
                     * status or header information.
                     * @param resetWriterStreamFlags <code>true</code> if the internal
                     *         <code>usingWriter</code>, <code>usingOutputStream</code>,
                     *         <code>isCharacterEncodingSet</code> flags should also be reset
                     * @exception IllegalStateException if the response has already
                     *   been committed
                     */
                    // @ts-ignore
                    public resetBuffer(resetWriterStreamFlags: boolean): void
                    /**
                     * Set the buffer size to be used for this Response.
                     * @param size The new buffer size
                     * @exception IllegalStateException if this method is called after
                     *   output has been committed for this response
                     */
                    // @ts-ignore
                    public setBufferSize(size: number /*int*/): void
                    /**
                     * Set the content length (in bytes) for this Response.
                     * @param length The new content length
                     */
                    // @ts-ignore
                    public setContentLength(length: number /*int*/): void
                    // @ts-ignore
                    public setContentLengthLong(length: number /*long*/): void
                    /**
                     * Set the content type for this Response.
                     * @param type The new content type
                     */
                    // @ts-ignore
                    public setContentType(type: java.lang.String | string): void
                    /**
                     * Overrides the name of the character encoding used in the body
                     * of the request. This method must be called prior to reading
                     * request parameters or reading input using getReader().
                     * @param charset String containing the name of the character encoding.
                     */
                    // @ts-ignore
                    public setCharacterEncoding(charset: java.lang.String | string): void
                    /**
                     * Set the Locale that is appropriate for this response, including
                     * setting the appropriate character encoding.
                     * @param locale The new locale
                     */
                    // @ts-ignore
                    public setLocale(locale: java.util.Locale): void
                    // @ts-ignore
                    public getHeader(name: java.lang.String | string): string
                    // @ts-ignore
                    public getHeaderNames(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getHeaders(name: java.lang.String | string): Array<java.lang.String | string>
                    /**
                     * @return the error message that was set with <code>sendError()</code>
                     *  for this Response.
                     */
                    // @ts-ignore
                    public getMessage(): string
                    // @ts-ignore
                    public getStatus(): number /*int*/
                    /**
                     * Add the specified Cookie to those that will be included with
                     * this Response.
                     * @param cookie Cookie to be added
                     */
                    // @ts-ignore
                    public addCookie(cookie: javax.servlet.http.Cookie): void
                    /**
                     * Special method for adding a session cookie as we should be overriding
                     * any previous.
                     * @param cookie The new session cookie to add the response
                     */
                    // @ts-ignore
                    public addSessionCookieInternal(cookie: javax.servlet.http.Cookie): void
                    // @ts-ignore
                    public generateCookieString(cookie: javax.servlet.http.Cookie): string
                    /**
                     * Add the specified date header to the specified value.
                     * @param name Name of the header to set
                     * @param value Date value to be set
                     */
                    // @ts-ignore
                    public addDateHeader(name: java.lang.String | string, value: number /*long*/): void
                    /**
                     * Add the specified header to the specified value.
                     * @param name Name of the header to set
                     * @param value Value to be set
                     */
                    // @ts-ignore
                    public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                    /**
                     * Add the specified integer header to the specified value.
                     * @param name Name of the header to set
                     * @param value Integer value to be set
                     */
                    // @ts-ignore
                    public addIntHeader(name: java.lang.String | string, value: number /*int*/): void
                    /**
                     * Has the specified header been set already in this response?
                     * @param name Name of the header to check
                     * @return <code>true</code> if the header has been set
                     */
                    // @ts-ignore
                    public containsHeader(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public setTrailerFields(supplier: java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>): void
                    // @ts-ignore
                    public getTrailerFields(): java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>
                    /**
                     * Encode the session identifier associated with this response
                     * into the specified redirect URL, if necessary.
                     * @param url URL to be encoded
                     * @return <code>true</code> if the URL was encoded
                     */
                    // @ts-ignore
                    public encodeRedirectURL(url: java.lang.String | string): string
                    /**
                     * Encode the session identifier associated with this response
                     * into the specified redirect URL, if necessary.
                     * @param url URL to be encoded
                     * @return <code>true</code> if the URL was encoded
                     * @deprecated As of Version 2.1 of the Java Servlet API, use
                     *   <code>encodeRedirectURL()</code> instead.
                     */
                    // @ts-ignore
                    public encodeRedirectUrl(url: java.lang.String | string): string
                    /**
                     * Encode the session identifier associated with this response
                     * into the specified URL, if necessary.
                     * @param url URL to be encoded
                     * @return <code>true</code> if the URL was encoded
                     */
                    // @ts-ignore
                    public encodeURL(url: java.lang.String | string): string
                    /**
                     * Encode the session identifier associated with this response
                     * into the specified URL, if necessary.
                     * @param url URL to be encoded
                     * @return <code>true</code> if the URL was encoded
                     * @deprecated As of Version 2.1 of the Java Servlet API, use
                     *   <code>encodeURL()</code> instead.
                     */
                    // @ts-ignore
                    public encodeUrl(url: java.lang.String | string): string
                    /**
                     * Send an acknowledgement of a request.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public sendAcknowledgement(): void
                    /**
                     * Send an error response with the specified status and a
                     * default message.
                     * @param status HTTP status code to send
                     * @exception IllegalStateException if this response has
                     *   already been committed
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public sendError(status: number /*int*/): void
                    /**
                     * Send an error response with the specified status and message.
                     * @param status HTTP status code to send
                     * @param message Corresponding message to send
                     * @exception IllegalStateException if this response has
                     *   already been committed
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public sendError(status: number /*int*/, message: java.lang.String | string): void
                    /**
                     * Send a temporary redirect to the specified redirect location URL.
                     * @param location Location URL to redirect to
                     * @exception IllegalStateException if this response has
                     *   already been committed
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public sendRedirect(location: java.lang.String | string): void
                    /**
                     * Internal method that allows a redirect to be sent with a status other
                     * than {@link HttpServletResponse#SC_FOUND} (302). No attempt is made to
                     * validate the status code.
                     * @param location Location URL to redirect to
                     * @param status HTTP status code that will be sent
                     * @throws IOException an IO exception occurred
                     */
                    // @ts-ignore
                    public sendRedirect(location: java.lang.String | string, status: number /*int*/): void
                    /**
                     * Set the specified date header to the specified value.
                     * @param name Name of the header to set
                     * @param value Date value to be set
                     */
                    // @ts-ignore
                    public setDateHeader(name: java.lang.String | string, value: number /*long*/): void
                    /**
                     * Set the specified header to the specified value.
                     * @param name Name of the header to set
                     * @param value Value to be set
                     */
                    // @ts-ignore
                    public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                    /**
                     * Set the specified integer header to the specified value.
                     * @param name Name of the header to set
                     * @param value Integer value to be set
                     */
                    // @ts-ignore
                    public setIntHeader(name: java.lang.String | string, value: number /*int*/): void
                    /**
                     * Set the HTTP status to be returned with this response.
                     * @param status The new HTTP status
                     */
                    // @ts-ignore
                    public setStatus(status: number /*int*/): void
                    /**
                     * Set the HTTP status and message to be returned with this response.
                     * @param status The new HTTP status
                     * @param message The associated text message
                     * @deprecated As of Version 2.1 of the Java Servlet API, this method
                     *   has been deprecated due to the ambiguous meaning of the message
                     *   parameter.
                     */
                    // @ts-ignore
                    public setStatus(status: number /*int*/, message: java.lang.String | string): void
                    /**
                     * Return <code>true</code> if the specified URL should be encoded with
                     * a session identifier.  This will be true if all of the following
                     * conditions are met:
                     * <ul>
                     * <li>The request we are responding to asked for a valid session
                     * <li>The requested session ID was not received via a cookie
                     * <li>The specified URL points back to somewhere within the web
                     * application that is responding to this request
                     * </ul>
                     * @param location Absolute URL to be validated
                     * @return <code>true</code> if the URL should be encoded
                     */
                    // @ts-ignore
                    isEncodeable(location: java.lang.String | string): boolean
                    /**
                     * Convert (if necessary) and return the absolute URL that represents the
                     * resource referenced by this possibly relative URL.  If this URL is
                     * already absolute, return it unchanged.
                     * @param location URL to be (possibly) converted and then returned
                     * @return the encoded URL
                     * @exception IllegalArgumentException if a MalformedURLException is
                     *   thrown when converting the relative URL to an absolute one
                     */
                    // @ts-ignore
                    toAbsolute(location: java.lang.String | string): string
                    /**
                     * Return the specified URL with the specified session identifier
                     * suitably encoded.
                     * @param url URL to be encoded with the session id
                     * @param sessionId Session id to be included in the encoded URL
                     * @return the encoded URL
                     */
                    // @ts-ignore
                    toEncoded(url: java.lang.String | string, sessionId: java.lang.String | string): string
                }
            }
        }
    }
}
