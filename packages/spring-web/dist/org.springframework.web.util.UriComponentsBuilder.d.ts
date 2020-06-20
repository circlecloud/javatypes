declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Builder for {@link UriComponents}.
                 * <p>Typical usage involves:
                 * <ol>
                 * <li>Create a {@code UriComponentsBuilder} with one of the static factory methods
                 * (such as {@link #fromPath(String)} or {@link #fromUri(URI)})</li>
                 * <li>Set the various URI components through the respective methods ({@link #scheme(String)},
                 * {@link #userInfo(String)}, {@link #host(String)}, {@link #port(int)}, {@link #path(String)},
                 * {@link #pathSegment(String...)}, {@link #queryParam(String, Object...)}, and
                 * {@link #fragment(String)}.</li>
                 * <li>Build the {@link UriComponents} instance with the {@link #build()} method.</li>
                 * </ol>
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @author Phillip Webb
                 * @author Oliver Gierke
                 * @author Brian Clozel
                 * @author Sebastien Deleuze
                 * @since 3.1
                 * @see #newInstance()
                 * @see #fromPath(String)
                 * @see #fromUri(URI)
                 */
                // @ts-ignore
                class UriComponentsBuilder extends java.lang.Object implements org.springframework.web.util.UriBuilder, java.lang.Cloneable {
                    /**
                     * Default constructor. Protected to prevent direct instantiation.
                     * @see #newInstance()
                     * @see #fromPath(String)
                     * @see #fromUri(URI)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a deep copy of the given UriComponentsBuilder.
                     * @param other the other builder to copy from
                     * @since 4.1.3
                     */
                    // @ts-ignore
                    constructor(other: org.springframework.web.util.UriComponentsBuilder)
                    /**
                     * Create a new, empty builder.
                     * @return the new {#code UriComponentsBuilder}
                     */
                    // @ts-ignore
                    newInstance(): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Create a builder that is initialized with the given path.
                     * @param path the path to initialize with
                     * @return the new {#code UriComponentsBuilder}
                     */
                    // @ts-ignore
                    fromPath(path: string): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Create a builder that is initialized with the given {@code URI}.
                     * @param uri the URI to initialize with
                     * @return the new {#code UriComponentsBuilder}
                     */
                    // @ts-ignore
                    fromUri(uri: java.net.URI): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Create a builder that is initialized with the given URI string.
                     * <p><strong>Note:</strong> The presence of reserved characters can prevent
                     * correct parsing of the URI string. For example if a query parameter
                     * contains {@code '='} or {@code '&'} characters, the query string cannot
                     * be parsed unambiguously. Such values should be substituted for URI
                     * variables to enable correct parsing:
                     * <pre class="code">
                     * String uriString = &quot;/hotels/42?filter={value}&quot;;
                     * UriComponentsBuilder.fromUriString(uriString).buildAndExpand(&quot;hot&amp;cold&quot;);
                     * </pre>
                     * @param uri the URI string to initialize with
                     * @return the new {#code UriComponentsBuilder}
                     */
                    // @ts-ignore
                    fromUriString(uri: string): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Create a URI components builder from the given HTTP URL String.
                     * <p><strong>Note:</strong> The presence of reserved characters can prevent
                     * correct parsing of the URI string. For example if a query parameter
                     * contains {@code '='} or {@code '&'} characters, the query string cannot
                     * be parsed unambiguously. Such values should be substituted for URI
                     * variables to enable correct parsing:
                     * <pre class="code">
                     * String urlString = &quot;https://example.com/hotels/42?filter={value}&quot;;
                     * UriComponentsBuilder.fromHttpUrl(urlString).buildAndExpand(&quot;hot&amp;cold&quot;);
                     * </pre>
                     * @param httpUrl the source URI
                     * @return the URI components of the URI
                     */
                    // @ts-ignore
                    fromHttpUrl(httpUrl: string): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Create a new {@code UriComponents} object from the URI associated with
                     * the given HttpRequest while also overlaying with values from the headers
                     * "Forwarded" (<a href="https://tools.ietf.org/html/rfc7239">RFC 7239</a>),
                     * or "X-Forwarded-Host", "X-Forwarded-Port", and "X-Forwarded-Proto" if
                     * "Forwarded" is not found.
                     * @param request the source request
                     * @return the URI components of the URI
                     * @since 4.1.5
                     */
                    // @ts-ignore
                    fromHttpRequest(request: org.springframework.http.HttpRequest): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Create an instance by parsing the "Origin" header of an HTTP request.
                     * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454</a>
                     */
                    // @ts-ignore
                    fromOriginHeader(origin: string): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Request to have the URI template pre-encoded at build time, and
                     * URI variables encoded separately when expanded.
                     * <p>In comparison to {@link UriComponents#encode()}, this method has the
                     * same effect on the URI template, i.e. each URI component is encoded by
                     * replacing non-ASCII and illegal (within the URI component type) characters
                     * with escaped octets. However URI variables are encoded more strictly, by
                     * also escaping characters with reserved meaning.
                     * <p>For most cases, this method is more likely to give the expected result
                     * because in treats URI variables as opaque data to be fully encoded, while
                     * {@link UriComponents#encode()} is useful only if intentionally expanding
                     * URI variables that contain reserved characters.
                     * <p>For example ';' is legal in a path but has reserved meaning. This
                     * method replaces ";" with "%3B" in URI variables but not in the URI
                     * template. By contrast, {@link UriComponents#encode()} never replaces ";"
                     * since it is a legal character in a path.
                     * @since 5.0.8
                     */
                    // @ts-ignore
                    encode(): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * A variant of {@link #encode()} with a charset other than "UTF-8".
                     * @param charset the charset to use for encoding
                     * @since 5.0.8
                     */
                    // @ts-ignore
                    encode(charset: java.nio.charset.Charset): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Build a {@code UriComponents} instance from the various components contained in this builder.
                     * @return the URI components
                     */
                    // @ts-ignore
                    build(): org.springframework.web.util.UriComponents
                    /**
                     * Build a {@code UriComponents} instance from the various components
                     * contained in this builder.
                     * @param encoded whether all the components set in this builder are
                     *  encoded ({#code true}) or not ({@code false})
                     * @return the URI components
                     */
                    // @ts-ignore
                    build(encoded: boolean): org.springframework.web.util.UriComponents
                    /**
                     * Build a {@code UriComponents} instance and replaces URI template variables
                     * with the values from a map. This is a shortcut method which combines
                     * calls to {@link #build()} and then {@link UriComponents#expand(Map)}.
                     * @param uriVariables the map of URI variables
                     * @return the URI components with expanded values
                     */
                    // @ts-ignore
                    buildAndExpand(uriVariables: java.util.Map<java.lang.String, any>): org.springframework.web.util.UriComponents
                    /**
                     * Build a {@code UriComponents} instance and replaces URI template variables
                     * with the values from an array. This is a shortcut method which combines
                     * calls to {@link #build()} and then {@link UriComponents#expand(Object...)}.
                     * @param uriVariableValues the URI variable values
                     * @return the URI components with expanded values
                     */
                    // @ts-ignore
                    buildAndExpand(...uriVariableValues: any[]): org.springframework.web.util.UriComponents
                    // @ts-ignore
                    build(...uriVariables: any[]): java.net.URI
                    // @ts-ignore
                    build(uriVariables: java.util.Map<java.lang.String, any>): java.net.URI
                    /**
                     * Build a URI String.
                     * <p>Effectively, a shortcut for building, encoding, and returning the
                     * String representation:
                     * <pre class="code">
                     * String uri = builder.build().encode().toUriString()
                     * </pre>
                     * <p>However if {@link #uriVariables(Map) URI variables} have been provided
                     * then the URI template is pre-encoded separately from URI variables (see
                     * {@link #encode()} for details), i.e. equivalent to:
                     * <pre>
                     * String uri = builder.encode().build().toUriString()
                     * </pre>
                     * @since 4.1
                     * @see UriComponents#toUriString()
                     */
                    // @ts-ignore
                    toUriString(): java.lang.String
                    /**
                     * Initialize components of this builder from components of the given URI.
                     * @param uri the URI
                     * @return this UriComponentsBuilder
                     */
                    // @ts-ignore
                    uri(uri: java.net.URI): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Set or append individual URI components of this builder from the values
                     * of the given {@link UriComponents} instance.
                     * <p>For the semantics of each component (i.e. set vs append) check the
                     * builder methods on this class. For example {@link #host(String)} sets
                     * while {@link #path(String)} appends.
                     * @param uriComponents the UriComponents to copy from
                     * @return this UriComponentsBuilder
                     */
                    // @ts-ignore
                    uriComponents(uriComponents: org.springframework.web.util.UriComponents): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    scheme(scheme: string): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Set the URI scheme-specific-part. When invoked, this method overwrites
                     * {@linkplain #userInfo(String) user-info}, {@linkplain #host(String) host},
                     * {@linkplain #port(int) port}, {@linkplain #path(String) path}, and
                     * {@link #query(String) query}.
                     * @param ssp the URI scheme-specific-part, may contain URI template parameters
                     * @return this UriComponentsBuilder
                     */
                    // @ts-ignore
                    schemeSpecificPart(ssp: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    userInfo(userInfo: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    host(host: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    port(port: number /*int*/): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    port(port: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    path(path: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    pathSegment(...pathSegments: string[]): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    replacePath(path: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    query(query: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    replaceQuery(query: string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    queryParam(name: string, ...values: any[]): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    queryParam(name: string, values: Array<any>): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * {@inheritDoc}
                     * @since 4.0
                     */
                    // @ts-ignore
                    queryParams(params: object): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    replaceQueryParam(name: string, ...values: any[]): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    replaceQueryParam(name: string, values: Array<any>): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * {@inheritDoc}
                     * @since 4.2
                     */
                    // @ts-ignore
                    replaceQueryParams(params: object): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    fragment(fragment: string): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Configure URI variables to be expanded at build time.
                     * <p>The provided variables may be a subset of all required ones. At build
                     * time, the available ones are expanded, while unresolved URI placeholders
                     * are left in place and can still be expanded later.
                     * <p>In contrast to {@link UriComponents#expand(Map)} or
                     * {@link #buildAndExpand(Map)}, this method is useful when you need to
                     * supply URI variables without building the {@link UriComponents} instance
                     * just yet, or perhaps pre-expand some shared default values such as host
                     * and port.
                     * @param uriVariables the URI variables to use
                     * @return this UriComponentsBuilder
                     * @since 5.0.8
                     */
                    // @ts-ignore
                    uriVariables(uriVariables: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.web.util.UriComponentsBuilder
                    /**
                     * Public declaration of Object's {@code clone()} method.
                     * Delegates to {@link #cloneBuilder()}.
                     */
                    // @ts-ignore
                    clone(): java.lang.Object
                    /**
                     * Clone this {@code UriComponentsBuilder}.
                     * @return the cloned {#code UriComponentsBuilder} object
                     * @since 4.2.7
                     */
                    // @ts-ignore
                    cloneBuilder(): org.springframework.web.util.UriComponentsBuilder
                }
            }
        }
    }
}
