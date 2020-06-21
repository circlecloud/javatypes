declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Builder-style methods to prepare and expand a URI template with variables.
                 * <p>Effectively a generalization of {@link UriComponentsBuilder} but with
                 * shortcuts to expand directly into {@link URI} rather than
                 * {@link UriComponents} and also leaving common concerns such as encoding
                 * preferences, a base URI, and others as implementation concerns.
                 * <p>Typically obtained via {@link UriBuilderFactory} which serves as a central
                 * component configured once and used to create many URLs.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see UriBuilderFactory
                 * @see UriComponentsBuilder
                 */
                // @ts-ignore
                interface UriBuilder {
                    /**
                     * Set the URI scheme which may contain URI template variables,
                     * and may also be {@code null} to clear the scheme of this builder.
                     * @param scheme the URI scheme
                     */
                    // @ts-ignore
                    scheme(scheme: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Set the URI user info which may contain URI template variables, and
                     * may also be {@code null} to clear the user info of this builder.
                     * @param userInfo the URI user info
                     */
                    // @ts-ignore
                    userInfo(userInfo: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Set the URI host which may contain URI template variables, and may also
                     * be {@code null} to clear the host of this builder.
                     * @param host the URI host
                     */
                    // @ts-ignore
                    host(host: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Set the URI port. Passing {@code -1} will clear the port of this builder.
                     * @param port the URI port
                     */
                    // @ts-ignore
                    port(port: number /*int*/): org.springframework.web.util.UriBuilder
                    /**
                     * Set the URI port . Use this method only when the port needs to be
                     * parameterized with a URI variable. Otherwise use {@link #port(int)}.
                     * Passing {@code null} will clear the port of this builder.
                     * @param port the URI port
                     */
                    // @ts-ignore
                    port(port: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Append the given path to the existing path of this builder.
                     * The given path may contain URI template variables.
                     * @param path the URI path
                     */
                    // @ts-ignore
                    path(path: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Set the path of this builder overriding the existing path values.
                     * @param path the URI path, or {#code null} for an empty path
                     */
                    // @ts-ignore
                    replacePath(path: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Append path segments to the existing path. Each path segment may contain
                     * URI template variables and should not contain any slashes.
                     * Use {@code path("/")} subsequently to ensure a trailing slash.
                     * @param pathSegments the URI path segments
                     */
                    // @ts-ignore
                    pathSegment(...pathSegments: java.lang.String[] | string[]): org.springframework.web.util.UriBuilder
                    /**
                     * Parse the given query string into query parameters where parameters are
                     * separated with {@code '&'} and their values, if any, with {@code '='}.
                     * The query may contain URI template variables.
                     * <p><strong>Note: </strong> please, review the Javadoc of
                     * {@link #queryParam(String, Object...)} for further notes on the treatment
                     * and encoding of individual query parameters.
                     * @param query the query string
                     */
                    // @ts-ignore
                    query(query: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Clear existing query parameters and then delegate to {@link #query(String)}.
                     * <p><strong>Note: </strong> please, review the Javadoc of
                     * {@link #queryParam(String, Object...)} for further notes on the treatment
                     * and encoding of individual query parameters.
                     * @param query the query string; a {#code null} value removes all query parameters.
                     */
                    // @ts-ignore
                    replaceQuery(query: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Append the given query parameter. Both the parameter name and values may
                     * contain URI template variables to be expanded later from values. If no
                     * values are given, the resulting URI will contain the query parameter name
                     * only, e.g. {@code "?foo"} instead of {@code "?foo=bar"}.
                     * <p><strong>Note:</strong> encoding, if applied, will only encode characters
                     * that are illegal in a query parameter name or value such as {@code "="}
                     * or {@code "&"}. All others that are legal as per syntax rules in
                     * <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a> are not
                     * encoded. This includes {@code "+"} which sometimes needs to be encoded
                     * to avoid its interpretation as an encoded space. Stricter encoding may
                     * be applied by using a URI template variable along with stricter encoding
                     * on variable values. For more details please read the
                     * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#web-uri-encoding">"URI Encoding"</a>
                     * section of the Spring Framework reference.
                     * @param name the query parameter name
                     * @param values the query parameter values
                     * @see #queryParam(String, Collection)
                     */
                    // @ts-ignore
                    queryParam(name: java.lang.String | string, ...values: java.lang.Object[] | any[]): org.springframework.web.util.UriBuilder
                    /**
                     * Variant of {@link #queryParam(String, Object...)} with a Collection.
                     * <p><strong>Note: </strong> please, review the Javadoc of
                     * {@link #queryParam(String, Object...)} for further notes on the treatment
                     * and encoding of individual query parameters.
                     * @param name the query parameter name
                     * @param values the query parameter values
                     * @since 5.2
                     * @see #queryParam(String, Object...)
                     */
                    // @ts-ignore
                    queryParam(name: java.lang.String | string, values: java.util.Collection<any> | Array<any>): org.springframework.web.util.UriBuilder
                    /**
                     * Add multiple query parameters and values.
                     * <p><strong>Note: </strong> please, review the Javadoc of
                     * {@link #queryParam(String, Object...)} for further notes on the treatment
                     * and encoding of individual query parameters.
                     * @param params the params
                     */
                    // @ts-ignore
                    queryParams(params: object): org.springframework.web.util.UriBuilder
                    /**
                     * Set the query parameter values replacing existing values, or if no
                     * values are given, the query parameter is removed.
                     * <p><strong>Note: </strong> please, review the Javadoc of
                     * {@link #queryParam(String, Object...)} for further notes on the treatment
                     * and encoding of individual query parameters.
                     * @param name the query parameter name
                     * @param values the query parameter values
                     * @see #replaceQueryParam(String, Collection)
                     */
                    // @ts-ignore
                    replaceQueryParam(name: java.lang.String | string, ...values: java.lang.Object[] | any[]): org.springframework.web.util.UriBuilder
                    /**
                     * Variant of {@link #replaceQueryParam(String, Object...)} with a Collection.
                     * <p><strong>Note: </strong> please, review the Javadoc of
                     * {@link #queryParam(String, Object...)} for further notes on the treatment
                     * and encoding of individual query parameters.
                     * @param name the query parameter name
                     * @param values the query parameter values
                     * @since 5.2
                     * @see #replaceQueryParam(String, Object...)
                     */
                    // @ts-ignore
                    replaceQueryParam(name: java.lang.String | string, values: java.util.Collection<any> | Array<any>): org.springframework.web.util.UriBuilder
                    /**
                     * Set the query parameter values after removing all existing ones.
                     * <p><strong>Note: </strong> please, review the Javadoc of
                     * {@link #queryParam(String, Object...)} for further notes on the treatment
                     * and encoding of individual query parameters.
                     * @param params the query parameter name
                     */
                    // @ts-ignore
                    replaceQueryParams(params: object): org.springframework.web.util.UriBuilder
                    /**
                     * Set the URI fragment. The given fragment may contain URI template variables,
                     * and may also be {@code null} to clear the fragment of this builder.
                     * @param fragment the URI fragment
                     */
                    // @ts-ignore
                    fragment(fragment: java.lang.String | string): org.springframework.web.util.UriBuilder
                    /**
                     * Build a {@link URI} instance and replaces URI template variables
                     * with the values from an array.
                     * @param uriVariables the map of URI variables
                     * @return the URI
                     */
                    // @ts-ignore
                    build(...uriVariables: java.lang.Object[] | any[]): java.net.URI
                    /**
                     * Build a {@link URI} instance and replaces URI template variables
                     * with the values from a map.
                     * @param uriVariables the map of URI variables
                     * @return the URI
                     */
                    // @ts-ignore
                    build(uriVariables: java.util.Map<java.lang.String | string, any>): java.net.URI
                }
            }
        }
    }
}
