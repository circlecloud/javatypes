declare namespace java {
    namespace net {
        /**
         * A URLConnection with support for HTTP-specific features. See
         * <A HREF="http://www.w3.org/pub/WWW/Protocols/"> the spec </A> for
         * details.
         * <p>
         * Each HttpURLConnection instance is used to make a single request
         * but the underlying network connection to the HTTP server may be
         * transparently shared by other instances. Calling the close() methods
         * on the InputStream or OutputStream of an HttpURLConnection
         * after a request may free network resources associated with this
         * instance but has no effect on any shared persistent connection.
         * Calling the disconnect() method may close the underlying socket
         * if a persistent connection is otherwise idle at that time.
         * <P>The HTTP protocol handler has a few settings that can be accessed through
         * System Properties. This covers
         * <a href="doc-files/net-properties.html#Proxies">Proxy settings</a> as well as
         * <a href="doc-files/net-properties.html#MiscHTTP"> various other settings</a>.
         * </P>
         * <p>
         * <b>Security permissions</b>
         * <p>
         * If a security manager is installed, and if a method is called which results in an
         * attempt to open a connection, the caller must possess either:-
         * <ul><li>a "connect" {@link SocketPermission} to the host/port combination of the
         * destination URL or</li>
         * <li>a {@link URLPermission} that permits this request.</li>
         * </ul><p>
         * If automatic redirection is enabled, and this request is redirected to another
         * destination, then the caller must also have permission to connect to the
         * redirected host/URL.
         * @see java.net.HttpURLConnection#disconnect()
         * @since JDK1.1
         */
        // @ts-ignore
        class HttpURLConnection extends java.net.URLConnection {
            /**
             * Constructor for the HttpURLConnection.
             * @param u the URL
             */
            // @ts-ignore
            constructor(u: java.net.URL)
            /**
             * The HTTP method (GET,POST,PUT,etc.).
             */
            // @ts-ignore
            method: string
            /**
             * The chunk-length when using chunked encoding streaming mode for output.
             * A value of {@code -1} means chunked encoding is disabled for output.
             * @since 1.5
             */
            // @ts-ignore
            chunkLength: number /*int*/
            /**
             * The fixed content-length when using fixed-length streaming mode.
             * A value of {@code -1} means fixed-length streaming mode is disabled
             * for output.
             * <P> <B>NOTE:</B> {@link #fixedContentLengthLong} is recommended instead
             * of this field, as it allows larger content lengths to be set.
             * @since 1.5
             */
            // @ts-ignore
            fixedContentLength: number /*int*/
            /**
             * The fixed content-length when using fixed-length streaming mode.
             * A value of {@code -1} means fixed-length streaming mode is disabled
             * for output.
             * @since 1.7
             */
            // @ts-ignore
            fixedContentLengthLong: number /*long*/
            /**
             * An {@code int} representing the three digit HTTP Status-Code.
             * <ul>
             * <li> 1xx: Informational
             * <li> 2xx: Success
             * <li> 3xx: Redirection
             * <li> 4xx: Client Error
             * <li> 5xx: Server Error
             * </ul>
             */
            // @ts-ignore
            responseCode: number /*int*/
            /**
             * The HTTP response message.
             */
            // @ts-ignore
            responseMessage: string
            /**
             * If {@code true}, the protocol will automatically follow redirects.
             * If {@code false}, the protocol will not automatically follow
             * redirects.
             * <p>
             * This field is set by the {@code setInstanceFollowRedirects}
             * method. Its value is returned by the {@code getInstanceFollowRedirects}
             * method.
             * <p>
             * Its default value is based on the value of the static followRedirects
             * at HttpURLConnection construction time.
             * @see java.net.HttpURLConnection#setInstanceFollowRedirects(boolean)
             * @see java.net.HttpURLConnection#getInstanceFollowRedirects()
             * @see java.net.HttpURLConnection#setFollowRedirects(boolean)
             */
            // @ts-ignore
            instanceFollowRedirects: boolean
            /**
             * HTTP Status-Code 200: OK.
             */
            // @ts-ignore
            readonly HTTP_OK: number /*int*/
            /**
             * HTTP Status-Code 201: Created.
             */
            // @ts-ignore
            readonly HTTP_CREATED: number /*int*/
            /**
             * HTTP Status-Code 202: Accepted.
             */
            // @ts-ignore
            readonly HTTP_ACCEPTED: number /*int*/
            /**
             * HTTP Status-Code 203: Non-Authoritative Information.
             */
            // @ts-ignore
            readonly HTTP_NOT_AUTHORITATIVE: number /*int*/
            /**
             * HTTP Status-Code 204: No Content.
             */
            // @ts-ignore
            readonly HTTP_NO_CONTENT: number /*int*/
            /**
             * HTTP Status-Code 205: Reset Content.
             */
            // @ts-ignore
            readonly HTTP_RESET: number /*int*/
            /**
             * HTTP Status-Code 206: Partial Content.
             */
            // @ts-ignore
            readonly HTTP_PARTIAL: number /*int*/
            /**
             * HTTP Status-Code 300: Multiple Choices.
             */
            // @ts-ignore
            readonly HTTP_MULT_CHOICE: number /*int*/
            /**
             * HTTP Status-Code 301: Moved Permanently.
             */
            // @ts-ignore
            readonly HTTP_MOVED_PERM: number /*int*/
            /**
             * HTTP Status-Code 302: Temporary Redirect.
             */
            // @ts-ignore
            readonly HTTP_MOVED_TEMP: number /*int*/
            /**
             * HTTP Status-Code 303: See Other.
             */
            // @ts-ignore
            readonly HTTP_SEE_OTHER: number /*int*/
            /**
             * HTTP Status-Code 304: Not Modified.
             */
            // @ts-ignore
            readonly HTTP_NOT_MODIFIED: number /*int*/
            /**
             * HTTP Status-Code 305: Use Proxy.
             */
            // @ts-ignore
            readonly HTTP_USE_PROXY: number /*int*/
            /**
             * HTTP Status-Code 400: Bad Request.
             */
            // @ts-ignore
            readonly HTTP_BAD_REQUEST: number /*int*/
            /**
             * HTTP Status-Code 401: Unauthorized.
             */
            // @ts-ignore
            readonly HTTP_UNAUTHORIZED: number /*int*/
            /**
             * HTTP Status-Code 402: Payment Required.
             */
            // @ts-ignore
            readonly HTTP_PAYMENT_REQUIRED: number /*int*/
            /**
             * HTTP Status-Code 403: Forbidden.
             */
            // @ts-ignore
            readonly HTTP_FORBIDDEN: number /*int*/
            /**
             * HTTP Status-Code 404: Not Found.
             */
            // @ts-ignore
            readonly HTTP_NOT_FOUND: number /*int*/
            /**
             * HTTP Status-Code 405: Method Not Allowed.
             */
            // @ts-ignore
            readonly HTTP_BAD_METHOD: number /*int*/
            /**
             * HTTP Status-Code 406: Not Acceptable.
             */
            // @ts-ignore
            readonly HTTP_NOT_ACCEPTABLE: number /*int*/
            /**
             * HTTP Status-Code 407: Proxy Authentication Required.
             */
            // @ts-ignore
            readonly HTTP_PROXY_AUTH: number /*int*/
            /**
             * HTTP Status-Code 408: Request Time-Out.
             */
            // @ts-ignore
            readonly HTTP_CLIENT_TIMEOUT: number /*int*/
            /**
             * HTTP Status-Code 409: Conflict.
             */
            // @ts-ignore
            readonly HTTP_CONFLICT: number /*int*/
            /**
             * HTTP Status-Code 410: Gone.
             */
            // @ts-ignore
            readonly HTTP_GONE: number /*int*/
            /**
             * HTTP Status-Code 411: Length Required.
             */
            // @ts-ignore
            readonly HTTP_LENGTH_REQUIRED: number /*int*/
            /**
             * HTTP Status-Code 412: Precondition Failed.
             */
            // @ts-ignore
            readonly HTTP_PRECON_FAILED: number /*int*/
            /**
             * HTTP Status-Code 413: Request Entity Too Large.
             */
            // @ts-ignore
            readonly HTTP_ENTITY_TOO_LARGE: number /*int*/
            /**
             * HTTP Status-Code 414: Request-URI Too Large.
             */
            // @ts-ignore
            readonly HTTP_REQ_TOO_LONG: number /*int*/
            /**
             * HTTP Status-Code 415: Unsupported Media Type.
             */
            // @ts-ignore
            readonly HTTP_UNSUPPORTED_TYPE: number /*int*/
            /**
             * HTTP Status-Code 500: Internal Server Error.
             * @deprecated it is misplaced and shouldn't have existed.
             */
            // @ts-ignore
            readonly HTTP_SERVER_ERROR: number /*int*/
            /**
             * HTTP Status-Code 500: Internal Server Error.
             */
            // @ts-ignore
            readonly HTTP_INTERNAL_ERROR: number /*int*/
            /**
             * HTTP Status-Code 501: Not Implemented.
             */
            // @ts-ignore
            readonly HTTP_NOT_IMPLEMENTED: number /*int*/
            /**
             * HTTP Status-Code 502: Bad Gateway.
             */
            // @ts-ignore
            readonly HTTP_BAD_GATEWAY: number /*int*/
            /**
             * HTTP Status-Code 503: Service Unavailable.
             */
            // @ts-ignore
            readonly HTTP_UNAVAILABLE: number /*int*/
            /**
             * HTTP Status-Code 504: Gateway Timeout.
             */
            // @ts-ignore
            readonly HTTP_GATEWAY_TIMEOUT: number /*int*/
            /**
             * HTTP Status-Code 505: HTTP Version Not Supported.
             */
            // @ts-ignore
            readonly HTTP_VERSION: number /*int*/
            /**
             * Returns the key for the {@code n}<sup>th</sup> header field.
             * Some implementations may treat the {@code 0}<sup>th</sup>
             * header field as special, i.e. as the status line returned by the HTTP
             * server. In this case, {@link #getHeaderField(int) getHeaderField(0)} returns the status
             * line, but {@code getHeaderFieldKey(0)} returns null.
             * @param n   an index, where {#code n >=0}.
             * @return the key for the {#code n}<sup>th</sup> header field,
             *           or {@code null} if the key does not exist.
             */
            // @ts-ignore
            getHeaderFieldKey(n: number /*int*/): java.lang.String
            /**
             * This method is used to enable streaming of a HTTP request body
             * without internal buffering, when the content length is known in
             * advance.
             * <p>
             * An exception will be thrown if the application
             * attempts to write more data than the indicated
             * content-length, or if the application closes the OutputStream
             * before writing the indicated amount.
             * <p>
             * When output streaming is enabled, authentication
             * and redirection cannot be handled automatically.
             * A HttpRetryException will be thrown when reading
             * the response if authentication or redirection are required.
             * This exception can be queried for the details of the error.
             * <p>
             * This method must be called before the URLConnection is connected.
             * <p>
             * <B>NOTE:</B> {@link #setFixedLengthStreamingMode(long)} is recommended
             * instead of this method as it allows larger content lengths to be set.
             * @param contentLength The number of bytes which will be written
             *           to the OutputStream.
             * @throws IllegalStateException if URLConnection is already connected
             *           or if a different streaming mode is already enabled.
             * @throws IllegalArgumentException if a content length less than
             *           zero is specified.
             * @see #setChunkedStreamingMode(int)
             * @since 1.5
             */
            // @ts-ignore
            setFixedLengthStreamingMode(contentLength: number /*int*/): void
            /**
             * This method is used to enable streaming of a HTTP request body
             * without internal buffering, when the content length is known in
             * advance.
             * <P> An exception will be thrown if the application attempts to write
             * more data than the indicated content-length, or if the application
             * closes the OutputStream before writing the indicated amount.
             * <P> When output streaming is enabled, authentication and redirection
             * cannot be handled automatically. A {@linkplain HttpRetryException} will
             * be thrown when reading the response if authentication or redirection
             * are required. This exception can be queried for the details of the
             * error.
             * <P> This method must be called before the URLConnection is connected.
             * <P> The content length set by invoking this method takes precedence
             * over any value set by {@link #setFixedLengthStreamingMode(int)}.
             * @param contentLength
             *          The number of bytes which will be written to the OutputStream.
             * @throws IllegalStateException
             *           if URLConnection is already connected or if a different
             *           streaming mode is already enabled.
             * @throws IllegalArgumentException
             *           if a content length less than zero is specified.
             * @since 1.7
             */
            // @ts-ignore
            setFixedLengthStreamingMode(contentLength: number /*long*/): void
            /**
             * This method is used to enable streaming of a HTTP request body
             * without internal buffering, when the content length is <b>not</b>
             * known in advance. In this mode, chunked transfer encoding
             * is used to send the request body. Note, not all HTTP servers
             * support this mode.
             * <p>
             * When output streaming is enabled, authentication
             * and redirection cannot be handled automatically.
             * A HttpRetryException will be thrown when reading
             * the response if authentication or redirection are required.
             * This exception can be queried for the details of the error.
             * <p>
             * This method must be called before the URLConnection is connected.
             * @param chunklen The number of bytes to write in each chunk.
             *           If chunklen is less than or equal to zero, a default
             *           value will be used.
             * @throws IllegalStateException if URLConnection is already connected
             *           or if a different streaming mode is already enabled.
             * @see #setFixedLengthStreamingMode(int)
             * @since 1.5
             */
            // @ts-ignore
            setChunkedStreamingMode(chunklen: number /*int*/): void
            /**
             * Returns the value for the {@code n}<sup>th</sup> header field.
             * Some implementations may treat the {@code 0}<sup>th</sup>
             * header field as special, i.e. as the status line returned by the HTTP
             * server.
             * <p>
             * This method can be used in conjunction with the
             * {@link #getHeaderFieldKey getHeaderFieldKey} method to iterate through all
             * the headers in the message.
             * @param n   an index, where {#code n>=0}.
             * @return the value of the {#code n}<sup>th</sup> header field,
             *           or {@code null} if the value does not exist.
             * @see java.net.HttpURLConnection#getHeaderFieldKey(int)
             */
            // @ts-ignore
            getHeaderField(n: number /*int*/): java.lang.String
            /**
             * Sets whether HTTP redirects  (requests with response code 3xx) should
             * be automatically followed by this class.  True by default.  Applets
             * cannot change this variable.
             * <p>
             * If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             * @param set a {#code boolean} indicating whether or not
             *  to follow HTTP redirects.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkSetFactory} method doesn't
             *              allow the operation.
             * @see SecurityManager#checkSetFactory
             * @see #getFollowRedirects()
             */
            // @ts-ignore
            setFollowRedirects(set: boolean): void
            /**
             * Returns a {@code boolean} indicating
             * whether or not HTTP redirects (3xx) should
             * be automatically followed.
             * @return {#code true} if HTTP redirects should
             *  be automatically followed, {@code false} if not.
             * @see #setFollowRedirects(boolean)
             */
            // @ts-ignore
            getFollowRedirects(): boolean
            /**
             * Sets whether HTTP redirects (requests with response code 3xx) should
             * be automatically followed by this {@code HttpURLConnection}
             * instance.
             * <p>
             * The default value comes from followRedirects, which defaults to
             * true.
             * @param followRedirects a {#code boolean} indicating
             *  whether or not to follow HTTP redirects.
             * @see java.net.HttpURLConnection#instanceFollowRedirects
             * @see #getInstanceFollowRedirects
             * @since 1.3
             */
            // @ts-ignore
            setInstanceFollowRedirects(followRedirects: boolean): void
            /**
             * Returns the value of this {@code HttpURLConnection}'s
             * {@code instanceFollowRedirects} field.
             * @return the value of this {#code HttpURLConnection}'s
             *           {@code instanceFollowRedirects} field.
             * @see java.net.HttpURLConnection#instanceFollowRedirects
             * @see #setInstanceFollowRedirects(boolean)
             * @since 1.3
             */
            // @ts-ignore
            getInstanceFollowRedirects(): boolean
            /**
             * Set the method for the URL request, one of:
             * <UL>
             * <LI>GET
             * <LI>POST
             * <LI>HEAD
             * <LI>OPTIONS
             * <LI>PUT
             * <LI>DELETE
             * <LI>TRACE
             * </UL> are legal, subject to protocol restrictions.  The default
             * method is GET.
             * @param method the HTTP method
             * @exception ProtocolException if the method cannot be reset or if
             *               the requested method isn't valid for HTTP.
             * @exception SecurityException if a security manager is set and the
             *               method is "TRACE", but the "allowHttpTrace"
             *               NetPermission is not granted.
             * @see #getRequestMethod()
             */
            // @ts-ignore
            setRequestMethod(method: string): void
            /**
             * Get the request method.
             * @return the HTTP request method
             * @see #setRequestMethod(java.lang.String)
             */
            // @ts-ignore
            getRequestMethod(): java.lang.String
            /**
             * Gets the status code from an HTTP response message.
             * For example, in the case of the following status lines:
             * <PRE>
             * HTTP/1.0 200 OK
             * HTTP/1.0 401 Unauthorized
             * </PRE>
             * It will return 200 and 401 respectively.
             * Returns -1 if no code can be discerned
             * from the response (i.e., the response is not valid HTTP).
             * @throws IOException if an error occurred connecting to the server.
             * @return the HTTP Status-Code, or -1
             */
            // @ts-ignore
            getResponseCode(): int
            /**
             * Gets the HTTP response message, if any, returned along with the
             * response code from a server.  From responses like:
             * <PRE>
             * HTTP/1.0 200 OK
             * HTTP/1.0 404 Not Found
             * </PRE>
             * Extracts the Strings "OK" and "Not Found" respectively.
             * Returns null if none could be discerned from the responses
             * (the result was not valid HTTP).
             * @throws IOException if an error occurred connecting to the server.
             * @return the HTTP response message, or {#code null}
             */
            // @ts-ignore
            getResponseMessage(): java.lang.String
            // @ts-ignore
            getHeaderFieldDate(name: string, Default: number /*long*/): long
            /**
             * Indicates that other requests to the server
             * are unlikely in the near future. Calling disconnect()
             * should not imply that this HttpURLConnection
             * instance can be reused for other requests.
             */
            // @ts-ignore
            abstract disconnect(): void
            /**
             * Indicates if the connection is going through a proxy.
             * @return a boolean indicating if the connection is
             *  using a proxy.
             */
            // @ts-ignore
            abstract usingProxy(): boolean
            /**
             * Returns a {@link SocketPermission} object representing the
             * permission necessary to connect to the destination host and port.
             * @exception IOException if an error occurs while computing
             *             the permission.
             * @return a {#code SocketPermission} object representing the
             *          permission necessary to connect to the destination
             *          host and port.
             */
            // @ts-ignore
            getPermission(): java.security.Permission
            /**
             * Returns the error stream if the connection failed
             * but the server sent useful data nonetheless. The
             * typical example is when an HTTP server responds
             * with a 404, which will cause a FileNotFoundException
             * to be thrown in connect, but the server sent an HTML
             * help page with suggestions as to what to do.
             * <p>This method will not cause a connection to be initiated.  If
             * the connection was not connected, or if the server did not have
             * an error while connecting or if the server had an error but
             * no error data was sent, this method will return null. This is
             * the default.
             * @return an error stream if any, null if there have been no
             *  errors, the connection is not connected or the server sent no
             *  useful data.
             */
            // @ts-ignore
            getErrorStream(): java.io.InputStream
        }
    }
}
