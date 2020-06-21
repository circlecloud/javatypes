declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Builds a push request based on the {@link HttpServletRequest} from which this
             * builder was obtained. The push request will be constructed on the following
             * basis:
             * <ul>
             * <li>The request method is set to <code>GET</code>.</li>
             * <li>The path will not be set. This must be set explicitly via a call to
             * {@link #path(String)}.</li>
             * <li>Conditional, range, expectation, authorization and referer headers will
             * be removed.</li>
             * <li>Cookies added to the associated response will be added to the push
             * request unless maxAge &lt;= 0 in which case any request cookie with the
             * same name will be removed.</li>
             * <li>The referer header will be set to
             * {@link HttpServletRequest#getRequestURL()} plus, if present, the query
             * string from {@link HttpServletRequest#getQueryString()}.
             * </ul>
             * @since Servlet 4.0
             */
            // @ts-ignore
            interface PushBuilder {
                /**
                 * Specify the HTTP method to use for the push request.
                 * @param method The method to use for the push request
                 * @return This builder instance
                 * @throws IllegalArgumentException if an HTTP method is specified that is
                 *          known not to be <a
                 *          href="https://tools.ietf.org/html/rfc7540#section-8.2">cacheable
                 *          and safe</a>. POST, PUT, DELETE, CONNECT, OPTIONS and TRACE will
                 *          trigger the exception.
                 */
                // @ts-ignore
                method(method: java.lang.String | string): javax.servlet.http.PushBuilder
                /**
                 * Specifies the query string to use in subsequent push requests generated
                 * by a call to {@link #push()}. This will be appended to any query string
                 * specified in the call to {@link #path(String)}.
                 * @param queryString The query string to use to generate push requests
                 * @return This builder instance
                 */
                // @ts-ignore
                queryString(queryString: java.lang.String | string): javax.servlet.http.PushBuilder
                /**
                 * Specifies the session ID to use in subsequent push requests generated
                 * by a call to {@link #push()}. The session ID will be presented the same
                 * way as it is on the original request (cookie or URL parameter). The
                 * default is determined in the following order:
                 * <ul>
                 * <li>the requested session ID for the originating request</li>
                 * <li>the session ID generated in the originated request</li>
                 * <li>{@code null}</li>
                 * </ul>
                 * @param sessionId The session ID to use to generate push requests
                 * @return This builder instance
                 */
                // @ts-ignore
                sessionId(sessionId: java.lang.String | string): javax.servlet.http.PushBuilder
                /**
                 * Sets a HTTP header on the request. Any existing headers of the same name
                 * are first remove.
                 * @param name  The name of the header to set
                 * @param value The value of the header to set
                 * @return This builder instance
                 */
                // @ts-ignore
                setHeader(name: java.lang.String | string, value: java.lang.String | string): javax.servlet.http.PushBuilder
                /**
                 * Adds a HTTP header to the request.
                 * @param name  The name of the header to add
                 * @param value The value of the header to add
                 * @return This builder instance
                 */
                // @ts-ignore
                addHeader(name: java.lang.String | string, value: java.lang.String | string): javax.servlet.http.PushBuilder
                /**
                 * Removes an HTTP header from the request.
                 * @param name  The name of the header to remove
                 * @return This builder instance
                 */
                // @ts-ignore
                removeHeader(name: java.lang.String | string): javax.servlet.http.PushBuilder
                /**
                 * Sets the URI path to be used for the push request. This must be called
                 * before every call to {@link #push()}. If the path includes a query
                 * string, the query string will be appended to the existing query string
                 * (if any) and no de-duplication will occur.
                 * @param path Paths beginning with '/' are treated as absolute paths. All
                 *              other paths are treated as relative to the context path of
                 *              the request used to create this builder instance. The path
                 *              may include a query string.
                 * @return This builder instance
                 */
                // @ts-ignore
                path(path: java.lang.String | string): javax.servlet.http.PushBuilder
                /**
                 * Generates the push request and sends it to the client unless pushes are
                 * not available for some reason. After calling this method the following
                 * fields are set to {@code null}:
                 * <ul>
                 * <li>{@code path}</li>
                 * <li>{@code etag}</li>
                 * <li>{@code lastModified}</li>
                 * </ul>
                 * @throws IllegalStateException If this method is called when {#code path}
                 *          is {@code null}
                 * @throws IllegalArgumentException If the request to push requires a body
                 */
                // @ts-ignore
                push(): void
                /**
                 * Obtain the name of the HTTP method that will be used for push requests
                 * generated by future calls to {@code push()}.
                 * @return The HTTP method to be used for future push requests
                 */
                // @ts-ignore
                getMethod(): string
                /**
                 * Obtain the query string that will be used for push requests generated by
                 * future calls to {@code push()}.
                 * @return The query string that will be appended to push requests.
                 */
                // @ts-ignore
                getQueryString(): string
                /**
                 * Obtain the session ID that will be used for push requests generated by
                 * future calls to {@code push()}.
                 * @return The session that will be used for push requests.
                 */
                // @ts-ignore
                getSessionId(): string
                /**
                 * @return The current set of names of HTTP headers to be used the next time
                 *          {#code push()} is called.
                 */
                // @ts-ignore
                getHeaderNames(): Array<java.lang.String | string>
                /**
                 * Obtain a value for the given HTTP header.
                 * TODO Servlet 4.0
                 * Clarify the behaviour of this method
                 * @param name  The name of the header whose value is to be returned
                 * @return The value of the given header. If multiple values are defined
                 *          then any may be returned
                 */
                // @ts-ignore
                getHeader(name: java.lang.String | string): string
                /**
                 * Obtain the path that will be used for the push request that will be
                 * generated by the next call to {@code push()}.
                 * @return The path value that will be associated with the next push request
                 */
                // @ts-ignore
                getPath(): string
            }
        }
    }
}
