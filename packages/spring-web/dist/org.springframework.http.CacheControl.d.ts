declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * A builder for creating "Cache-Control" HTTP response headers.
             * <p>Adding Cache-Control directives to HTTP responses can significantly improve the client
             * experience when interacting with a web application. This builder creates opinionated
             * "Cache-Control" headers with response directives only, with several use cases in mind.
             * <ul>
             * <li>Caching HTTP responses with {@code CacheControl cc = CacheControl.maxAge(1, TimeUnit.HOURS)}
             * will result in {@code Cache-Control: "max-age=3600"}</li>
             * <li>Preventing cache with {@code CacheControl cc = CacheControl.noStore()}
             * will result in {@code Cache-Control: "no-store"}</li>
             * <li>Advanced cases like {@code CacheControl cc = CacheControl.maxAge(1, TimeUnit.HOURS).noTransform().cachePublic()}
             * will result in {@code Cache-Control: "max-age=3600, no-transform, public"}</li>
             * </ul>
             * <p>Note that to be efficient, Cache-Control headers should be written along HTTP validators
             * such as "Last-Modified" or "ETag" headers.
             * @author Brian Clozel
             * @author Juergen Hoeller
             * @since 4.2
             * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2">rfc7234 section 5.2.2</a>
             * @see <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching">
             *  HTTP caching - Google developers reference</a>
             * @see <a href="https://www.mnot.net/cache_docs/">Mark Nottingham's cache documentation</a>
             */
            // @ts-ignore
            class CacheControl extends java.lang.Object {
                /**
                 * Create an empty CacheControl instance.
                 * @see #empty()
                 */
                // @ts-ignore
                constructor()
                /**
                 * Return an empty directive.
                 * <p>This is well suited for using other optional directives without "max-age",
                 * "no-cache" or "no-store".
                 * @return {#code this}, to facilitate method chaining
                 */
                // @ts-ignore
                public static empty(): org.springframework.http.CacheControl
                /**
                 * Add a "max-age=" directive.
                 * <p>This directive is well suited for publicly caching resources, knowing that
                 * they won't change within the configured amount of time. Additional directives
                 * can be also used, in case resources shouldn't be cached ({@link #cachePrivate()})
                 * or transformed ({@link #noTransform()}) by shared caches.
                 * <p>In order to prevent caches to reuse the cached response even when it has
                 * become stale (i.e. the "max-age" delay is passed), the "must-revalidate"
                 * directive should be set ({@link #mustRevalidate()}
                 * @param maxAge the maximum time the response should be cached
                 * @param unit the time unit of the {#code maxAge} argument
                 * @return {#code this}, to facilitate method chaining
                 * @see #maxAge(Duration)
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.8">rfc7234 section 5.2.2.8</a>
                 */
                // @ts-ignore
                public static maxAge(maxAge: number /*long*/, unit: java.util.concurrent.TimeUnit): org.springframework.http.CacheControl
                /**
                 * Add a "max-age=" directive.
                 * <p>This directive is well suited for publicly caching resources, knowing that
                 * they won't change within the configured amount of time. Additional directives
                 * can be also used, in case resources shouldn't be cached ({@link #cachePrivate()})
                 * or transformed ({@link #noTransform()}) by shared caches.
                 * <p>In order to prevent caches to reuse the cached response even when it has
                 * become stale (i.e. the "max-age" delay is passed), the "must-revalidate"
                 * directive should be set ({@link #mustRevalidate()}
                 * @param maxAge the maximum time the response should be cached
                 * @return {#code this}, to facilitate method chaining
                 * @since 5.2
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.8">rfc7234 section 5.2.2.8</a>
                 */
                // @ts-ignore
                public static maxAge(maxAge: java.time.Duration): org.springframework.http.CacheControl
                /**
                 * Add a "no-cache" directive.
                 * <p>This directive is well suited for telling caches that the response
                 * can be reused only if the client revalidates it with the server.
                 * This directive won't disable cache altogether and may result with clients
                 * sending conditional requests (with "ETag", "If-Modified-Since" headers)
                 * and the server responding with "304 - Not Modified" status.
                 * <p>In order to disable caching and minimize requests/responses exchanges,
                 * the {@link #noStore()} directive should be used instead of {@code #noCache()}.
                 * @return {#code this}, to facilitate method chaining
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.2">rfc7234 section 5.2.2.2</a>
                 */
                // @ts-ignore
                public static noCache(): org.springframework.http.CacheControl
                /**
                 * Add a "no-store" directive.
                 * <p>This directive is well suited for preventing caches (browsers and proxies)
                 * to cache the content of responses.
                 * @return {#code this}, to facilitate method chaining
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.3">rfc7234 section 5.2.2.3</a>
                 */
                // @ts-ignore
                public static noStore(): org.springframework.http.CacheControl
                /**
                 * Add a "must-revalidate" directive.
                 * <p>This directive indicates that once it has become stale, a cache MUST NOT
                 * use the response to satisfy subsequent requests without successful validation
                 * on the origin server.
                 * @return {#code this}, to facilitate method chaining
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.1">rfc7234 section 5.2.2.1</a>
                 */
                // @ts-ignore
                public mustRevalidate(): org.springframework.http.CacheControl
                /**
                 * Add a "no-transform" directive.
                 * <p>This directive indicates that intermediaries (caches and others) should
                 * not transform the response content. This can be useful to force caches and
                 * CDNs not to automatically gzip or optimize the response content.
                 * @return {#code this}, to facilitate method chaining
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.4">rfc7234 section 5.2.2.4</a>
                 */
                // @ts-ignore
                public noTransform(): org.springframework.http.CacheControl
                /**
                 * Add a "public" directive.
                 * <p>This directive indicates that any cache MAY store the response,
                 * even if the response would normally be non-cacheable or cacheable
                 * only within a private cache.
                 * @return {#code this}, to facilitate method chaining
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.5">rfc7234 section 5.2.2.5</a>
                 */
                // @ts-ignore
                public cachePublic(): org.springframework.http.CacheControl
                /**
                 * Add a "private" directive.
                 * <p>This directive indicates that the response message is intended
                 * for a single user and MUST NOT be stored by a shared cache.
                 * @return {#code this}, to facilitate method chaining
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.6">rfc7234 section 5.2.2.6</a>
                 */
                // @ts-ignore
                public cachePrivate(): org.springframework.http.CacheControl
                /**
                 * Add a "proxy-revalidate" directive.
                 * <p>This directive has the same meaning as the "must-revalidate" directive,
                 * except that it does not apply to private caches (i.e. browsers, HTTP clients).
                 * @return {#code this}, to facilitate method chaining
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.7">rfc7234 section 5.2.2.7</a>
                 */
                // @ts-ignore
                public proxyRevalidate(): org.springframework.http.CacheControl
                /**
                 * Add an "s-maxage" directive.
                 * <p>This directive indicates that, in shared caches, the maximum age specified
                 * by this directive overrides the maximum age specified by other directives.
                 * @param sMaxAge the maximum time the response should be cached
                 * @param unit the time unit of the {#code sMaxAge} argument
                 * @return {#code this}, to facilitate method chaining
                 * @see #sMaxAge(Duration)
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.9">rfc7234 section 5.2.2.9</a>
                 */
                // @ts-ignore
                public sMaxAge(sMaxAge: number /*long*/, unit: java.util.concurrent.TimeUnit): org.springframework.http.CacheControl
                /**
                 * Add an "s-maxage" directive.
                 * <p>This directive indicates that, in shared caches, the maximum age specified
                 * by this directive overrides the maximum age specified by other directives.
                 * @param sMaxAge the maximum time the response should be cached
                 * @return {#code this}, to facilitate method chaining
                 * @since 5.2
                 * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2.2.9">rfc7234 section 5.2.2.9</a>
                 */
                // @ts-ignore
                public sMaxAge(sMaxAge: java.time.Duration): org.springframework.http.CacheControl
                /**
                 * Add a "stale-while-revalidate" directive.
                 * <p>This directive indicates that caches MAY serve the response in which it
                 * appears after it becomes stale, up to the indicated number of seconds.
                 * If a cached response is served stale due to the presence of this extension,
                 * the cache SHOULD attempt to revalidate it while still serving stale responses
                 * (i.e. without blocking).
                 * @param staleWhileRevalidate the maximum time the response should be used while being revalidated
                 * @param unit the time unit of the {#code staleWhileRevalidate} argument
                 * @return {#code this}, to facilitate method chaining
                 * @see #staleWhileRevalidate(Duration)
                 * @see <a href="https://tools.ietf.org/html/rfc5861#section-3">rfc5861 section 3</a>
                 */
                // @ts-ignore
                public staleWhileRevalidate(staleWhileRevalidate: number /*long*/, unit: java.util.concurrent.TimeUnit): org.springframework.http.CacheControl
                /**
                 * Add a "stale-while-revalidate" directive.
                 * <p>This directive indicates that caches MAY serve the response in which it
                 * appears after it becomes stale, up to the indicated number of seconds.
                 * If a cached response is served stale due to the presence of this extension,
                 * the cache SHOULD attempt to revalidate it while still serving stale responses
                 * (i.e. without blocking).
                 * @param staleWhileRevalidate the maximum time the response should be used while being revalidated
                 * @return {#code this}, to facilitate method chaining
                 * @since 5.2
                 * @see <a href="https://tools.ietf.org/html/rfc5861#section-3">rfc5861 section 3</a>
                 */
                // @ts-ignore
                public staleWhileRevalidate(staleWhileRevalidate: java.time.Duration): org.springframework.http.CacheControl
                /**
                 * Add a "stale-if-error" directive.
                 * <p>This directive indicates that when an error is encountered, a cached stale response
                 * MAY be used to satisfy the request, regardless of other freshness information.
                 * @param staleIfError the maximum time the response should be used when errors are encountered
                 * @param unit the time unit of the {#code staleIfError} argument
                 * @return {#code this}, to facilitate method chaining
                 * @see #staleIfError(Duration)
                 * @see <a href="https://tools.ietf.org/html/rfc5861#section-4">rfc5861 section 4</a>
                 */
                // @ts-ignore
                public staleIfError(staleIfError: number /*long*/, unit: java.util.concurrent.TimeUnit): org.springframework.http.CacheControl
                /**
                 * Add a "stale-if-error" directive.
                 * <p>This directive indicates that when an error is encountered, a cached stale response
                 * MAY be used to satisfy the request, regardless of other freshness information.
                 * @param staleIfError the maximum time the response should be used when errors are encountered
                 * @return {#code this}, to facilitate method chaining
                 * @since 5.2
                 * @see <a href="https://tools.ietf.org/html/rfc5861#section-4">rfc5861 section 4</a>
                 */
                // @ts-ignore
                public staleIfError(staleIfError: java.time.Duration): org.springframework.http.CacheControl
                /**
                 * Return the "Cache-Control" header value, if any.
                 * @return the header value, or {#code null} if no directive was added
                 */
                // @ts-ignore
                public getHeaderValue(): string
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
