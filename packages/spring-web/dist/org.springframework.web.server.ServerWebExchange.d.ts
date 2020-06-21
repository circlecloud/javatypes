declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Contract for an HTTP request-response interaction. Provides access to the HTTP
                 * request and response and also exposes additional server-side processing
                 * related properties and features such as request attributes.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface ServerWebExchange {
                    /**
                     * Name of {@link #getAttributes() attribute} whose value can be used to
                     * correlate log messages for this exchange. Use {@link #getLogPrefix()} to
                     * obtain a consistently formatted prefix based on this attribute.
                     * @since 5.1
                     * @see #getLogPrefix()
                     */
                    // @ts-ignore
                    readonly LOG_ID_ATTRIBUTE: java.lang.String | string
                    /**
                     * Return the current HTTP request.
                     */
                    // @ts-ignore
                    getRequest(): org.springframework.http.server.reactive.ServerHttpRequest
                    /**
                     * Return the current HTTP response.
                     */
                    // @ts-ignore
                    getResponse(): org.springframework.http.server.reactive.ServerHttpResponse
                    /**
                     * Return a mutable map of request attributes for the current exchange.
                     */
                    // @ts-ignore
                    getAttributes(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Return the request attribute value if present.
                     * @param name the attribute name
                     * @param <T> the attribute type
                     * @return the attribute value
                     */
                    // @ts-ignore
                    getAttribute<T>(name: java.lang.String | string): T
                    /**
                     * Return the request attribute value or if not present raise an
                     * {@link IllegalArgumentException}.
                     * @param name the attribute name
                     * @param <T> the attribute type
                     * @return the attribute value
                     */
                    // @ts-ignore
                    getRequiredAttribute<T>(name: java.lang.String | string): T
                    /**
                     * Return the request attribute value, or a default, fallback value.
                     * @param name the attribute name
                     * @param defaultValue a default value to return instead
                     * @param <T> the attribute type
                     * @return the attribute value
                     */
                    // @ts-ignore
                    getAttributeOrDefault<T>(name: java.lang.String | string, defaultValue: T): T
                    /**
                     * Return the web session for the current request. Always guaranteed  to
                     * return an instance either matching to the session id requested by the
                     * client, or with a new session id either because the client did not
                     * specify one or because the underlying session had expired. Use of this
                     * method does not automatically create a session. See {@link WebSession}
                     * for more details.
                     */
                    // @ts-ignore
                    getSession(): object
                    /**
                     * Return the authenticated user for the request, if any.
                     */
                    // @ts-ignore
                    getPrincipal<T extends java.security.Principal>(): object
                    /**
                     * Return the form data from the body of the request if the Content-Type is
                     * {@code "application/x-www-form-urlencoded"} or an empty map otherwise.
                     * <p><strong>Note:</strong> calling this method causes the request body to
                     * be read and parsed in full and the resulting {@code MultiValueMap} is
                     * cached so that this method is safe to call more than once.
                     */
                    // @ts-ignore
                    getFormData(): object
                    /**
                     * Return the parts of a multipart request if the Content-Type is
                     * {@code "multipart/form-data"} or an empty map otherwise.
                     * <p><strong>Note:</strong> calling this method causes the request body to
                     * be read and parsed in full and the resulting {@code MultiValueMap} is
                     * cached so that this method is safe to call more than once.
                     * <p><strong>Note:</strong>the {@linkplain Part#content() contents} of each
                     * part is not cached, and can only be read once.
                     */
                    // @ts-ignore
                    getMultipartData(): object
                    /**
                     * Return the {@link LocaleContext} using the configured
                     * {@link org.springframework.web.server.i18n.LocaleContextResolver}.
                     */
                    // @ts-ignore
                    getLocaleContext(): LocaleContext
                    /**
                     * Return the {@link ApplicationContext} associated with the web application,
                     * if it was initialized with one via
                     * {@link org.springframework.web.server.adapter.WebHttpHandlerBuilder#applicationContext(ApplicationContext)}.
                     * @since 5.0.3
                     * @see org.springframework.web.server.adapter.WebHttpHandlerBuilder#applicationContext(ApplicationContext)
                     */
                    // @ts-ignore
                    getApplicationContext(): ApplicationContext
                    /**
                     * Returns {@code true} if the one of the {@code checkNotModified} methods
                     * in this contract were used and they returned true.
                     */
                    // @ts-ignore
                    isNotModified(): boolean
                    /**
                     * An overloaded variant of {@link #checkNotModified(String, Instant)} with
                     * a last-modified timestamp only.
                     * @param lastModified the last-modified time
                     * @return whether the request qualifies as not modified
                     */
                    // @ts-ignore
                    checkNotModified(lastModified: java.time.Instant): boolean
                    /**
                     * An overloaded variant of {@link #checkNotModified(String, Instant)} with
                     * an {@code ETag} (entity tag) value only.
                     * @param etag the entity tag for the underlying resource.
                     * @return true if the request does not require further processing.
                     */
                    // @ts-ignore
                    checkNotModified(etag: java.lang.String | string): boolean
                    /**
                     * Check whether the requested resource has been modified given the supplied
                     * {@code ETag} (entity tag) and last-modified timestamp as determined by
                     * the application. Also transparently prepares the response, setting HTTP
                     * status, and adding "ETag" and "Last-Modified" headers when applicable.
                     * This method works with conditional GET/HEAD requests as well as with
                     * conditional POST/PUT/DELETE requests.
                     * <p><strong>Note:</strong> The HTTP specification recommends setting both
                     * ETag and Last-Modified values, but you can also use
                     * {@code #checkNotModified(String)} or
                     * {@link #checkNotModified(Instant)}.
                     * @param etag the entity tag that the application determined for the
                     *  underlying resource. This parameter will be padded with quotes (")
                     *  if necessary.
                     * @param lastModified the last-modified timestamp that the application
                     *  determined for the underlying resource
                     * @return true if the request does not require further processing.
                     */
                    // @ts-ignore
                    checkNotModified(etag: java.lang.String | string, lastModified: java.time.Instant): boolean
                    /**
                     * Transform the given url according to the registered transformation function(s).
                     * By default, this method returns the given {@code url}, though additional
                     * transformation functions can by registered with {@link #addUrlTransformer}
                     * @param url the URL to transform
                     * @return the transformed URL
                     */
                    // @ts-ignore
                    transformUrl(url: java.lang.String | string): string
                    /**
                     * Register an additional URL transformation function for use with {@link #transformUrl}.
                     * The given function can be used to insert an id for authentication, a nonce for CSRF
                     * protection, etc.
                     * <p>Note that the given function is applied after any previously registered functions.
                     * @param transformer a URL transformation function to add
                     */
                    // @ts-ignore
                    addUrlTransformer(transformer: java.util.function$.Function<java.lang.String | string, java.lang.String | string>): void
                    /**
                     * Return a log message prefix to use to correlate messages for this exchange.
                     * The prefix is based on the value of the attribute {@link #LOG_ID_ATTRIBUTE}
                     * along with some extra formatting so that the prefix can be conveniently
                     * prepended with no further formatting no separators required.
                     * @return the log message prefix or an empty String if the
                     *  {#link #LOG_ID_ATTRIBUTE} is not set.
                     * @since 5.1
                     */
                    // @ts-ignore
                    getLogPrefix(): string
                    /**
                     * Return a builder to mutate properties of this exchange by wrapping it
                     * with {@link ServerWebExchangeDecorator} and returning either mutated
                     * values or delegating back to this instance.
                     */
                    // @ts-ignore
                    mutate(): org.springframework.web.server.ServerWebExchange.Builder
                }
            }
        }
    }
}
