declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Base class for {@code Filter}s that perform logging operations before and after a request
                 * is processed.
                 * <p>Subclasses should override the {@code beforeRequest(HttpServletRequest, String)} and
                 * {@code afterRequest(HttpServletRequest, String)} methods to perform the actual logging
                 * around the request.
                 * <p>Subclasses are passed the message to write to the log in the {@code beforeRequest} and
                 * {@code afterRequest} methods. By default, only the URI of the request is logged. However,
                 * setting the {@code includeQueryString} property to {@code true} will cause the query string of
                 * the request to be included also; this can be further extended through {@code includeClientInfo}
                 * and {@code includeHeaders}. The payload (body content) of the request can be logged via the
                 * {@code includePayload} flag: Note that this will only log the part of the payload which has
                 * actually been read, not necessarily the entire body of the request.
                 * <p>Prefixes and suffixes for the before and after messages can be configured using the
                 * {@code beforeMessagePrefix}, {@code afterMessagePrefix}, {@code beforeMessageSuffix} and
                 * {@code afterMessageSuffix} properties.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Rossen Stoyanchev
                 * @since 1.2.5
                 * @see #beforeRequest
                 * @see #afterRequest
                 */
                // @ts-ignore
                abstract class AbstractRequestLoggingFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default value prepended to the log message written <i>before</i> a request is
                     * processed.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_BEFORE_MESSAGE_PREFIX: java.lang.String | string
                    /**
                     * The default value appended to the log message written <i>before</i> a request is
                     * processed.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_BEFORE_MESSAGE_SUFFIX: java.lang.String | string
                    /**
                     * The default value prepended to the log message written <i>after</i> a request is
                     * processed.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_AFTER_MESSAGE_PREFIX: java.lang.String | string
                    /**
                     * The default value appended to the log message written <i>after</i> a request is
                     * processed.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_AFTER_MESSAGE_SUFFIX: java.lang.String | string
                    /**
                     * Set whether the query string should be included in the log message.
                     * <p>Should be configured using an {@code <init-param>} for parameter name
                     * "includeQueryString" in the filter definition in {@code web.xml}.
                     */
                    // @ts-ignore
                    public setIncludeQueryString(includeQueryString: boolean): void
                    /**
                     * Return whether the query string should be included in the log message.
                     */
                    // @ts-ignore
                    isIncludeQueryString(): boolean
                    /**
                     * Set whether the client address and session id should be included in the
                     * log message.
                     * <p>Should be configured using an {@code <init-param>} for parameter name
                     * "includeClientInfo" in the filter definition in {@code web.xml}.
                     */
                    // @ts-ignore
                    public setIncludeClientInfo(includeClientInfo: boolean): void
                    /**
                     * Return whether the client address and session id should be included in the
                     * log message.
                     */
                    // @ts-ignore
                    isIncludeClientInfo(): boolean
                    /**
                     * Set whether the request headers should be included in the log message.
                     * <p>Should be configured using an {@code <init-param>} for parameter name
                     * "includeHeaders" in the filter definition in {@code web.xml}.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setIncludeHeaders(includeHeaders: boolean): void
                    /**
                     * Return whether the request headers should be included in the log message.
                     * @since 4.3
                     */
                    // @ts-ignore
                    isIncludeHeaders(): boolean
                    /**
                     * Set whether the request payload (body) should be included in the log message.
                     * <p>Should be configured using an {@code <init-param>} for parameter name
                     * "includePayload" in the filter definition in {@code web.xml}.
                     * @since 3.0
                     */
                    // @ts-ignore
                    public setIncludePayload(includePayload: boolean): void
                    /**
                     * Return whether the request payload (body) should be included in the log message.
                     * @since 3.0
                     */
                    // @ts-ignore
                    isIncludePayload(): boolean
                    /**
                     * Configure a predicate for selecting which headers should be logged if
                     * {@link #setIncludeHeaders(boolean)} is set to {@code true}.
                     * <p>By default this is not set in which case all headers are logged.
                     * @param headerPredicate the predicate to use
                     * @since 5.2
                     */
                    // @ts-ignore
                    public setHeaderPredicate(headerPredicate: java.util.function$.Predicate<java.lang.String | string>): void
                    /**
                     * The configured {@link #setHeaderPredicate(Predicate) headerPredicate}.
                     * @since 5.2
                     */
                    // @ts-ignore
                    getHeaderPredicate(): java.util.function$.Predicate<java.lang.String | string>
                    /**
                     * Set the maximum length of the payload body to be included in the log message.
                     * Default is 50 characters.
                     * @since 3.0
                     */
                    // @ts-ignore
                    public setMaxPayloadLength(maxPayloadLength: number /*int*/): void
                    /**
                     * Return the maximum length of the payload body to be included in the log message.
                     * @since 3.0
                     */
                    // @ts-ignore
                    getMaxPayloadLength(): number /*int*/
                    /**
                     * Set the value that should be prepended to the log message written
                     * <i>before</i> a request is processed.
                     */
                    // @ts-ignore
                    public setBeforeMessagePrefix(beforeMessagePrefix: java.lang.String | string): void
                    /**
                     * Set the value that should be appended to the log message written
                     * <i>before</i> a request is processed.
                     */
                    // @ts-ignore
                    public setBeforeMessageSuffix(beforeMessageSuffix: java.lang.String | string): void
                    /**
                     * Set the value that should be prepended to the log message written
                     * <i>after</i> a request is processed.
                     */
                    // @ts-ignore
                    public setAfterMessagePrefix(afterMessagePrefix: java.lang.String | string): void
                    /**
                     * Set the value that should be appended to the log message written
                     * <i>after</i> a request is processed.
                     */
                    // @ts-ignore
                    public setAfterMessageSuffix(afterMessageSuffix: java.lang.String | string): void
                    /**
                     * The default value is "false" so that the filter may log a "before" message
                     * at the start of request processing and an "after" message at the end from
                     * when the last asynchronously dispatched thread is exiting.
                     */
                    // @ts-ignore
                    shouldNotFilterAsyncDispatch(): boolean
                    /**
                     * Forwards the request to the next filter in the chain and delegates down to the subclasses
                     * to perform the actual request logging both before and after the request is processed.
                     * @see #beforeRequest
                     * @see #afterRequest
                     */
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                    /**
                     * Create a log message for the given request, prefix and suffix.
                     * <p>If {@code includeQueryString} is {@code true}, then the inner part
                     * of the log message will take the form {@code request_uri?query_string};
                     * otherwise the message will simply be of the form {@code request_uri}.
                     * <p>The final message is composed of the inner part as described and
                     * the supplied prefix and suffix.
                     */
                    // @ts-ignore
                    createMessage(request: HttpServletRequest, prefix: java.lang.String | string, suffix: java.lang.String | string): string
                    /**
                     * Extracts the message payload portion of the message created by
                     * {@link #createMessage(HttpServletRequest, String, String)} when
                     * {@link #isIncludePayload()} returns true.
                     * @since 5.0.3
                     */
                    // @ts-ignore
                    getMessagePayload(request: HttpServletRequest): string
                    /**
                     * Determine whether to call the {@link #beforeRequest}/{@link #afterRequest}
                     * methods for the current request, i.e. whether logging is currently active
                     * (and the log message is worth building).
                     * <p>The default implementation always returns {@code true}. Subclasses may
                     * override this with a log level check.
                     * @param request current HTTP request
                     * @return {#code true} if the before/after method should get called;
                     *  {@code false} otherwise
                     * @since 4.1.5
                     */
                    // @ts-ignore
                    shouldLog(request: HttpServletRequest): boolean
                    /**
                     * Concrete subclasses should implement this method to write a log message
                     * <i>before</i> the request is processed.
                     * @param request current HTTP request
                     * @param message the message to log
                     */
                    // @ts-ignore
                    abstract beforeRequest(request: HttpServletRequest, message: java.lang.String | string): void
                    /**
                     * Concrete subclasses should implement this method to write a log message
                     * <i>after</i> the request is processed.
                     * @param request current HTTP request
                     * @param message the message to log
                     */
                    // @ts-ignore
                    abstract afterRequest(request: HttpServletRequest, message: java.lang.String | string): void
                }
            }
        }
    }
}
