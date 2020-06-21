declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                /**
                 * A container for CORS configuration along with methods to check against the
                 * actual origin, HTTP methods, and headers of a given request.
                 * <p>By default a newly created {@code CorsConfiguration} does not permit any
                 * cross-origin requests and must be configured explicitly to indicate what
                 * should be allowed. Use {@link #applyPermitDefaultValues()} to flip the
                 * initialization model to start with open defaults that permit all cross-origin
                 * requests for GET, HEAD, and POST requests.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 4.2
                 * @see <a href="https://www.w3.org/TR/cors/">CORS spec</a>
                 */
                // @ts-ignore
                class CorsConfiguration extends java.lang.Object {
                    /**
                     * Construct a new {@code CorsConfiguration} instance with no cross-origin
                     * requests allowed for any origin by default.
                     * @see #applyPermitDefaultValues()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new {@code CorsConfiguration} instance by copying all
                     * values from the supplied {@code CorsConfiguration}.
                     */
                    // @ts-ignore
                    constructor(other: org.springframework.web.cors.CorsConfiguration)
                    /**
                     * Wildcard representing <em>all</em> origins, methods, or headers.
                     */
                    // @ts-ignore
                    public static readonly ALL: java.lang.String | string
                    /**
                     * Set the origins to allow, e.g. {@code "https://domain1.com"}.
                     * <p>The special value {@code "*"} allows all domains.
                     * <p>By default this is not set.
                     */
                    // @ts-ignore
                    public setAllowedOrigins(allowedOrigins: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                    /**
                     * Return the configured origins to allow, or {@code null} if none.
                     * @see #addAllowedOrigin(String)
                     * @see #setAllowedOrigins(List)
                     */
                    // @ts-ignore
                    public getAllowedOrigins(): Array<java.lang.String | string>
                    /**
                     * Add an origin to allow.
                     */
                    // @ts-ignore
                    public addAllowedOrigin(origin: java.lang.String | string): void
                    /**
                     * Set the HTTP methods to allow, e.g. {@code "GET"}, {@code "POST"},
                     * {@code "PUT"}, etc.
                     * <p>The special value {@code "*"} allows all methods.
                     * <p>If not set, only {@code "GET"} and {@code "HEAD"} are allowed.
                     * <p>By default this is not set.
                     * <p><strong>Note:</strong> CORS checks use values from "Forwarded"
                     * (<a href="https://tools.ietf.org/html/rfc7239">RFC 7239</a>),
                     * "X-Forwarded-Host", "X-Forwarded-Port", and "X-Forwarded-Proto" headers,
                     * if present, in order to reflect the client-originated address.
                     * Consider using the {@code ForwardedHeaderFilter} in order to choose from a
                     * central place whether to extract and use, or to discard such headers.
                     * See the Spring Framework reference for more on this filter.
                     */
                    // @ts-ignore
                    public setAllowedMethods(allowedMethods: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                    /**
                     * Return the allowed HTTP methods, or {@code null} in which case
                     * only {@code "GET"} and {@code "HEAD"} allowed.
                     * @see #addAllowedMethod(HttpMethod)
                     * @see #addAllowedMethod(String)
                     * @see #setAllowedMethods(List)
                     */
                    // @ts-ignore
                    public getAllowedMethods(): Array<java.lang.String | string>
                    /**
                     * Add an HTTP method to allow.
                     */
                    // @ts-ignore
                    public addAllowedMethod(method: org.springframework.http.HttpMethod): void
                    /**
                     * Add an HTTP method to allow.
                     */
                    // @ts-ignore
                    public addAllowedMethod(method: java.lang.String | string): void
                    /**
                     * Set the list of headers that a pre-flight request can list as allowed
                     * for use during an actual request.
                     * <p>The special value {@code "*"} allows actual requests to send any
                     * header.
                     * <p>A header name is not required to be listed if it is one of:
                     * {@code Cache-Control}, {@code Content-Language}, {@code Expires},
                     * {@code Last-Modified}, or {@code Pragma}.
                     * <p>By default this is not set.
                     */
                    // @ts-ignore
                    public setAllowedHeaders(allowedHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                    /**
                     * Return the allowed actual request headers, or {@code null} if none.
                     * @see #addAllowedHeader(String)
                     * @see #setAllowedHeaders(List)
                     */
                    // @ts-ignore
                    public getAllowedHeaders(): Array<java.lang.String | string>
                    /**
                     * Add an actual request header to allow.
                     */
                    // @ts-ignore
                    public addAllowedHeader(allowedHeader: java.lang.String | string): void
                    /**
                     * Set the list of response headers other than simple headers (i.e.
                     * {@code Cache-Control}, {@code Content-Language}, {@code Content-Type},
                     * {@code Expires}, {@code Last-Modified}, or {@code Pragma}) that an
                     * actual response might have and can be exposed.
                     * <p>Note that {@code "*"} is not a valid exposed header value.
                     * <p>By default this is not set.
                     */
                    // @ts-ignore
                    public setExposedHeaders(exposedHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                    /**
                     * Return the configured response headers to expose, or {@code null} if none.
                     * @see #addExposedHeader(String)
                     * @see #setExposedHeaders(List)
                     */
                    // @ts-ignore
                    public getExposedHeaders(): Array<java.lang.String | string>
                    /**
                     * Add a response header to expose.
                     * <p>Note that {@code "*"} is not a valid exposed header value.
                     */
                    // @ts-ignore
                    public addExposedHeader(exposedHeader: java.lang.String | string): void
                    /**
                     * Whether user credentials are supported.
                     * <p>By default this is not set (i.e. user credentials are not supported).
                     */
                    // @ts-ignore
                    public setAllowCredentials(allowCredentials: java.lang.Boolean): void
                    /**
                     * Return the configured {@code allowCredentials} flag, or {@code null} if none.
                     * @see #setAllowCredentials(Boolean)
                     */
                    // @ts-ignore
                    public getAllowCredentials(): java.lang.Boolean
                    /**
                     * Configure how long, as a duration, the response from a pre-flight request
                     * can be cached by clients.
                     * @since 5.2
                     * @see #setMaxAge(Long)
                     */
                    // @ts-ignore
                    public setMaxAge(maxAge: java.time.Duration): void
                    /**
                     * Configure how long, in seconds, the response from a pre-flight request
                     * can be cached by clients.
                     * <p>By default this is not set.
                     */
                    // @ts-ignore
                    public setMaxAge(maxAge: java.lang.Long | number): void
                    /**
                     * Return the configured {@code maxAge} value, or {@code null} if none.
                     * @see #setMaxAge(Long)
                     */
                    // @ts-ignore
                    public getMaxAge(): number
                    /**
                     * By default a newly created {@code CorsConfiguration} does not permit any
                     * cross-origin requests and must be configured explicitly to indicate what
                     * should be allowed.
                     * <p>Use this method to flip the initialization model to start with open
                     * defaults that permit all cross-origin requests for GET, HEAD, and POST
                     * requests. Note however that this method will not override any existing
                     * values already set.
                     * <p>The following defaults are applied if not already set:
                     * <ul>
                     * <li>Allow all origins.</li>
                     * <li>Allow "simple" methods {@code GET}, {@code HEAD} and {@code POST}.</li>
                     * <li>Allow all headers.</li>
                     * <li>Set max age to 1800 seconds (30 minutes).</li>
                     * </ul>
                     */
                    // @ts-ignore
                    public applyPermitDefaultValues(): org.springframework.web.cors.CorsConfiguration
                    /**
                     * Combine the non-null properties of the supplied
                     * {@code CorsConfiguration} with this one.
                     * <p>When combining single values like {@code allowCredentials} or
                     * {@code maxAge}, {@code this} properties are overridden by non-null
                     * {@code other} properties if any.
                     * <p>Combining lists like {@code allowedOrigins}, {@code allowedMethods},
                     * {@code allowedHeaders} or {@code exposedHeaders} is done in an additive
                     * way. For example, combining {@code ["GET", "POST"]} with
                     * {@code ["PATCH"]} results in {@code ["GET", "POST", "PATCH"]}, but keep
                     * in mind that combining {@code ["GET", "POST"]} with {@code ["*"]}
                     * results in {@code ["*"]}.
                     * <p>Notice that default permit values set by
                     * {@link CorsConfiguration#applyPermitDefaultValues()} are overridden by
                     * any value explicitly defined.
                     * @return the combined {#code CorsConfiguration}, or {@code this}
                     *  configuration if the supplied configuration is {@code null}
                     */
                    // @ts-ignore
                    public combine(other: org.springframework.web.cors.CorsConfiguration): org.springframework.web.cors.CorsConfiguration
                    /**
                     * Check the origin of the request against the configured allowed origins.
                     * @param requestOrigin the origin to check
                     * @return the origin to use for the response, or {#code null} which
                     *  means the request origin is not allowed
                     */
                    // @ts-ignore
                    public checkOrigin(requestOrigin: java.lang.String | string): string
                    /**
                     * Check the HTTP request method (or the method from the
                     * {@code Access-Control-Request-Method} header on a pre-flight request)
                     * against the configured allowed methods.
                     * @param requestMethod the HTTP request method to check
                     * @return the list of HTTP methods to list in the response of a pre-flight
                     *  request, or {#code null} if the supplied {@code requestMethod} is not allowed
                     */
                    // @ts-ignore
                    public checkHttpMethod(requestMethod: org.springframework.http.HttpMethod): Array<org.springframework.http.HttpMethod>
                    /**
                     * Check the supplied request headers (or the headers listed in the
                     * {@code Access-Control-Request-Headers} of a pre-flight request) against
                     * the configured allowed headers.
                     * @param requestHeaders the request headers to check
                     * @return the list of allowed headers to list in the response of a pre-flight
                     *  request, or {#code null} if none of the supplied request headers is allowed
                     */
                    // @ts-ignore
                    public checkHeaders(requestHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): Array<java.lang.String | string>
                }
            }
        }
    }
}
