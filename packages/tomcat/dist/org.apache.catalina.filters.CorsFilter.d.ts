declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * <p>
                 * A {@link javax.servlet.Filter} that enable client-side cross-origin requests
                 * by implementing W3C's CORS (<b>C</b>ross-<b>O</b>rigin <b>R</b>esource
                 * <b>S</b>haring) specification for resources. Each {@link HttpServletRequest}
                 * request is inspected as per specification, and appropriate response headers
                 * are added to {@link HttpServletResponse}.
                 * </p>
                 * <p>
                 * By default, it also sets following request attributes, that help to
                 * determine the nature of the request downstream.
                 * </p>
                 * <ul>
                 * <li><b>cors.isCorsRequest:</b> Flag to determine if the request is a CORS
                 * request. Set to <code>true</code> if a CORS request; <code>false</code>
                 * otherwise.</li>
                 * <li><b>cors.request.origin:</b> The Origin URL, i.e. the URL of the page from
                 * where the request is originated.</li>
                 * <li>
                 * <b>cors.request.type:</b> Type of request. Possible values:
                 * <ul>
                 * <li>SIMPLE: A request which is not preceded by a pre-flight request.</li>
                 * <li>ACTUAL: A request which is preceded by a pre-flight request.</li>
                 * <li>PRE_FLIGHT: A pre-flight request.</li>
                 * <li>NOT_CORS: A normal same-origin request.</li>
                 * <li>INVALID_CORS: A cross-origin request which is invalid.</li>
                 * </ul>
                 * </li>
                 * <li><b>cors.request.headers:</b> Request headers sent as
                 * 'Access-Control-Request-Headers' header, for pre-flight request.</li>
                 * </ul>
                 * @see <a href="http://www.w3.org/TR/cors/">CORS specification</a>
                 */
                // @ts-ignore
                class CorsFilter extends javax.servlet.GenericFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * The Access-Control-Allow-Origin header indicates whether a resource can
                     * be shared based by returning the value of the Origin request header in
                     * the response.
                     */
                    // @ts-ignore
                    public static readonly RESPONSE_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: java.lang.String | string
                    /**
                     * The Access-Control-Allow-Credentials header indicates whether the
                     * response to request can be exposed when the omit credentials flag is
                     * unset. When part of the response to a preflight request it indicates that
                     * the actual request can include user credentials.
                     */
                    // @ts-ignore
                    public static readonly RESPONSE_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS: java.lang.String | string
                    /**
                     * The Access-Control-Expose-Headers header indicates which headers are safe
                     * to expose to the API of a CORS API specification
                     */
                    // @ts-ignore
                    public static readonly RESPONSE_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS: java.lang.String | string
                    /**
                     * The Access-Control-Max-Age header indicates how long the results of a
                     * preflight request can be cached in a preflight result cache.
                     */
                    // @ts-ignore
                    public static readonly RESPONSE_HEADER_ACCESS_CONTROL_MAX_AGE: java.lang.String | string
                    /**
                     * The Access-Control-Allow-Methods header indicates, as part of the
                     * response to a preflight request, which methods can be used during the
                     * actual request.
                     */
                    // @ts-ignore
                    public static readonly RESPONSE_HEADER_ACCESS_CONTROL_ALLOW_METHODS: java.lang.String | string
                    /**
                     * The Access-Control-Allow-Headers header indicates, as part of the
                     * response to a preflight request, which header field names can be used
                     * during the actual request.
                     */
                    // @ts-ignore
                    public static readonly RESPONSE_HEADER_ACCESS_CONTROL_ALLOW_HEADERS: java.lang.String | string
                    /**
                     * The Vary header indicates allows disabling proxy caching by indicating
                     * the the response depends on the origin.
                     * @deprecated Unused. Will be removed in Tomcat 10
                     */
                    // @ts-ignore
                    public static readonly REQUEST_HEADER_VARY: java.lang.String | string
                    /**
                     * The Origin header indicates where the cross-origin request or preflight
                     * request originates from.
                     */
                    // @ts-ignore
                    public static readonly REQUEST_HEADER_ORIGIN: java.lang.String | string
                    /**
                     * The Access-Control-Request-Method header indicates which method will be
                     * used in the actual request as part of the preflight request.
                     */
                    // @ts-ignore
                    public static readonly REQUEST_HEADER_ACCESS_CONTROL_REQUEST_METHOD: java.lang.String | string
                    /**
                     * The Access-Control-Request-Headers header indicates which headers will be
                     * used in the actual request as part of the preflight request.
                     */
                    // @ts-ignore
                    public static readonly REQUEST_HEADER_ACCESS_CONTROL_REQUEST_HEADERS: java.lang.String | string
                    /**
                     * The prefix to a CORS request attribute.
                     */
                    // @ts-ignore
                    public static readonly HTTP_REQUEST_ATTRIBUTE_PREFIX: java.lang.String | string
                    /**
                     * Attribute that contains the origin of the request.
                     */
                    // @ts-ignore
                    public static readonly HTTP_REQUEST_ATTRIBUTE_ORIGIN: java.lang.String | string
                    /**
                     * Boolean value, suggesting if the request is a CORS request or not.
                     */
                    // @ts-ignore
                    public static readonly HTTP_REQUEST_ATTRIBUTE_IS_CORS_REQUEST: java.lang.String | string
                    /**
                     * Type of CORS request, of type {@link CORSRequestType}.
                     */
                    // @ts-ignore
                    public static readonly HTTP_REQUEST_ATTRIBUTE_REQUEST_TYPE: java.lang.String | string
                    /**
                     * Request headers sent as 'Access-Control-Request-Headers' header, for
                     * pre-flight request.
                     */
                    // @ts-ignore
                    public static readonly HTTP_REQUEST_ATTRIBUTE_REQUEST_HEADERS: java.lang.String | string
                    /**
                     * {@link Collection} of media type values for the Content-Type header that
                     * will be treated as 'simple'. Note media-type values are compared ignoring
                     * parameters and in a case-insensitive manner.
                     * @see <a href="http://www.w3.org/TR/cors/#terminology"
                     *        >http://www.w3.org/TR/cors/#terminology</a>
                     */
                    // @ts-ignore
                    public static readonly SIMPLE_HTTP_REQUEST_CONTENT_TYPE_VALUES: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>
                    /**
                     * By default, no origins are allowed to make requests.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_ALLOWED_ORIGINS: java.lang.String | string
                    /**
                     * By default, following methods are supported: GET, POST, HEAD and OPTIONS.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_ALLOWED_HTTP_METHODS: java.lang.String | string
                    /**
                     * By default, time duration to cache pre-flight response is 30 mins.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_PREFLIGHT_MAXAGE: java.lang.String | string
                    /**
                     * By default, support credentials is disabled.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_SUPPORTS_CREDENTIALS: java.lang.String | string
                    /**
                     * By default, following headers are supported:
                     * Origin,Accept,X-Requested-With, Content-Type,
                     * Access-Control-Request-Method, and Access-Control-Request-Headers.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_ALLOWED_HTTP_HEADERS: java.lang.String | string
                    /**
                     * By default, none of the headers are exposed in response.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_EXPOSED_HEADERS: java.lang.String | string
                    /**
                     * By default, request is decorated with CORS attributes.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_DECORATE_REQUEST: java.lang.String | string
                    /**
                     * Key to retrieve allowed origins from {@link javax.servlet.FilterConfig}.
                     */
                    // @ts-ignore
                    public static readonly PARAM_CORS_ALLOWED_ORIGINS: java.lang.String | string
                    /**
                     * Key to retrieve support credentials from
                     * {@link javax.servlet.FilterConfig}.
                     */
                    // @ts-ignore
                    public static readonly PARAM_CORS_SUPPORT_CREDENTIALS: java.lang.String | string
                    /**
                     * Key to retrieve exposed headers from {@link javax.servlet.FilterConfig}.
                     */
                    // @ts-ignore
                    public static readonly PARAM_CORS_EXPOSED_HEADERS: java.lang.String | string
                    /**
                     * Key to retrieve allowed headers from {@link javax.servlet.FilterConfig}.
                     */
                    // @ts-ignore
                    public static readonly PARAM_CORS_ALLOWED_HEADERS: java.lang.String | string
                    /**
                     * Key to retrieve allowed methods from {@link javax.servlet.FilterConfig}.
                     */
                    // @ts-ignore
                    public static readonly PARAM_CORS_ALLOWED_METHODS: java.lang.String | string
                    /**
                     * Key to retrieve preflight max age from
                     * {@link javax.servlet.FilterConfig}.
                     */
                    // @ts-ignore
                    public static readonly PARAM_CORS_PREFLIGHT_MAXAGE: java.lang.String | string
                    /**
                     * Key to determine if request should be decorated.
                     */
                    // @ts-ignore
                    public static readonly PARAM_CORS_REQUEST_DECORATE: java.lang.String | string
                    // @ts-ignore
                    public doFilter(servletRequest: javax.servlet.ServletRequest, servletResponse: javax.servlet.ServletResponse, filterChain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    public init(): void
                    /**
                     * Handles a CORS request of type {@link CORSRequestType}.SIMPLE.
                     * @param request The {#link HttpServletRequest} object.
                     * @param response The {#link HttpServletResponse} object.
                     * @param filterChain The {#link FilterChain} object.
                     * @throws IOException an IO error occurred
                     * @throws ServletException Servlet error propagation
                     * @see <a href="http://www.w3.org/TR/cors/#resource-requests">Simple
                     *       Cross-Origin Request, Actual Request, and Redirects</a>
                     */
                    // @ts-ignore
                    handleSimpleCORS(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, filterChain: javax.servlet.FilterChain): void
                    /**
                     * Handles CORS pre-flight request.
                     * @param request The {#link HttpServletRequest} object.
                     * @param response The {#link HttpServletResponse} object.
                     * @param filterChain The {#link FilterChain} object.
                     * @throws IOException an IO error occurred
                     * @throws ServletException Servlet error propagation
                     */
                    // @ts-ignore
                    handlePreflightCORS(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, filterChain: javax.servlet.FilterChain): void
                    /**
                     * Decorates the {@link HttpServletRequest}, with CORS attributes.
                     * <ul>
                     * <li><b>cors.isCorsRequest:</b> Flag to determine if request is a CORS
                     * request. Set to <code>true</code> if CORS request; <code>false</code>
                     * otherwise.</li>
                     * <li><b>cors.request.origin:</b> The Origin URL.</li>
                     * <li><b>cors.request.type:</b> Type of request. Values:
                     * <code>simple</code> or <code>preflight</code> or <code>not_cors</code> or
                     * <code>invalid_cors</code></li>
                     * <li><b>cors.request.headers:</b> Request headers sent as
                     * 'Access-Control-Request-Headers' header, for pre-flight request.</li>
                     * </ul>
                     * @param request The {#link HttpServletRequest} object.
                     * @param corsRequestType The {#link CORSRequestType} object.
                     */
                    // @ts-ignore
                    static decorateCORSProperties(request: javax.servlet.http.HttpServletRequest, corsRequestType: org.apache.catalina.filters.CorsFilter.CORSRequestType): void
                    /**
                     * Joins elements of {@link Set} into a string, where each element is
                     * separated by the provided separator.
                     * @param elements The {#link Set} containing elements to join together.
                     * @param joinSeparator The character to be used for separating elements.
                     * @return The joined {#link String}; <code>null</code> if elements
                     *          {@link Set} is null.
                     */
                    // @ts-ignore
                    static join(elements: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>, joinSeparator: java.lang.String | string): string
                    /**
                     * Determines the request type.
                     * @param request The HTTP Servlet request
                     * @return the CORS type
                     */
                    // @ts-ignore
                    checkRequestType(request: javax.servlet.http.HttpServletRequest): org.apache.catalina.filters.CorsFilter.CORSRequestType
                    /**
                     * Checks if a given origin is valid or not. Criteria:
                     * <ul>
                     * <li>If an encoded character is present in origin, it's not valid.</li>
                     * <li>If origin is "null", it's valid.</li>
                     * <li>Origin should be a valid {@link URI}</li>
                     * </ul>
                     * @param origin The origin URI
                     * @return <code>true</code> if the origin was valid
                     * @see <a href="http://tools.ietf.org/html/rfc952">RFC952</a>
                     */
                    // @ts-ignore
                    static isValidOrigin(origin: java.lang.String | string): boolean
                    /**
                     * Determines if any origin is allowed to make CORS request.
                     * @return <code>true</code> if it's enabled; false otherwise.
                     */
                    // @ts-ignore
                    public isAnyOriginAllowed(): boolean
                    /**
                     * Obtain the headers to expose.
                     * @return the headers that should be exposed by browser.
                     */
                    // @ts-ignore
                    public getExposedHeaders(): Array<java.lang.String | string>
                    /**
                     * Determines is supports credentials is enabled.
                     * @return <code>true</code> if the use of credentials is supported
                     *          otherwise <code>false</code>
                     */
                    // @ts-ignore
                    public isSupportsCredentials(): boolean
                    /**
                     * Returns the preflight response cache time in seconds.
                     * @return Time to cache in seconds.
                     */
                    // @ts-ignore
                    public getPreflightMaxAge(): number /*long*/
                    /**
                     * Returns the {@link Set} of allowed origins that are allowed to make
                     * requests.
                     * @return {#link Set}
                     */
                    // @ts-ignore
                    public getAllowedOrigins(): Array<java.lang.String | string>
                    /**
                     * Returns a {@link Set} of HTTP methods that are allowed to make requests.
                     * @return {#link Set}
                     */
                    // @ts-ignore
                    public getAllowedHttpMethods(): Array<java.lang.String | string>
                    /**
                     * Returns a {@link Set} of headers support by resource.
                     * @return {#link Set}
                     */
                    // @ts-ignore
                    public getAllowedHttpHeaders(): Array<java.lang.String | string>
                }
            }
        }
    }
}
