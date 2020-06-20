declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Represents an immutable collection of URI components, mapping component type to
                 * String values. Contains convenience getters for all components. Effectively similar
                 * to {@link java.net.URI}, but with more powerful encoding options and support for
                 * URI template variables.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @author Rossen Stoyanchev
                 * @since 3.1
                 * @see UriComponentsBuilder
                 */
                // @ts-ignore
                class UriComponents extends java.lang.Object implements java.io.Serializable {
                    // @ts-ignore
                    constructor(scheme: string, fragment: string)
                    /**
                     * Return the scheme. Can be {@code null}.
                     */
                    // @ts-ignore
                    getScheme(): java.lang.String
                    /**
                     * Return the fragment. Can be {@code null}.
                     */
                    // @ts-ignore
                    getFragment(): java.lang.String
                    /**
                     * Return the scheme specific part. Can be {@code null}.
                     */
                    // @ts-ignore
                    abstract getSchemeSpecificPart(): java.lang.String
                    /**
                     * Return the user info. Can be {@code null}.
                     */
                    // @ts-ignore
                    abstract getUserInfo(): java.lang.String
                    /**
                     * Return the host. Can be {@code null}.
                     */
                    // @ts-ignore
                    abstract getHost(): java.lang.String
                    /**
                     * Return the port. {@code -1} if no port has been set.
                     */
                    // @ts-ignore
                    abstract getPort(): int
                    /**
                     * Return the path. Can be {@code null}.
                     */
                    // @ts-ignore
                    abstract getPath(): java.lang.String
                    /**
                     * Return the list of path segments. Empty if no path has been set.
                     */
                    // @ts-ignore
                    abstract getPathSegments(): java.util.List<java.lang.String>
                    /**
                     * Return the query. Can be {@code null}.
                     */
                    // @ts-ignore
                    abstract getQuery(): java.lang.String
                    /**
                     * Return the map of query parameters. Empty if no query has been set.
                     */
                    // @ts-ignore
                    abstract getQueryParams(): <any>
                    /**
                     * Invoke this <em>after</em> expanding URI variables to encode the
                     * resulting URI component values.
                     * <p>In comparison to {@link UriComponentsBuilder#encode()}, this method
                     * <em>only</em> replaces non-ASCII and illegal (within a given URI
                     * component type) characters, but not characters with reserved meaning.
                     * For most cases, {@link UriComponentsBuilder#encode()} is more likely
                     * to give the expected result.
                     * @see UriComponentsBuilder#encode()
                     */
                    // @ts-ignore
                    encode(): org.springframework.web.util.UriComponents
                    /**
                     * A variant of {@link #encode()} with a charset other than "UTF-8".
                     * @param charset the charset to use for encoding
                     * @see UriComponentsBuilder#encode(Charset)
                     */
                    // @ts-ignore
                    abstract encode(charset: java.nio.charset.Charset): org.springframework.web.util.UriComponents
                    /**
                     * Replace all URI template variables with the values from a given map.
                     * <p>The given map keys represent variable names; the corresponding values
                     * represent variable values. The order of variables is not significant.
                     * @param uriVariables the map of URI variables
                     * @return the expanded URI components
                     */
                    // @ts-ignore
                    expand(uriVariables: java.util.Map<java.lang.String, any>): org.springframework.web.util.UriComponents
                    /**
                     * Replace all URI template variables with the values from a given array.
                     * <p>The given array represents variable values. The order of variables is significant.
                     * @param uriVariableValues the URI variable values
                     * @return the expanded URI components
                     */
                    // @ts-ignore
                    expand(...uriVariableValues: any[]): org.springframework.web.util.UriComponents
                    /**
                     * Replace all URI template variables with the values from the given
                     * {@link UriTemplateVariables}.
                     * @param uriVariables the URI template values
                     * @return the expanded URI components
                     */
                    // @ts-ignore
                    expand(uriVariables: org.springframework.web.util.UriComponents.UriTemplateVariables): org.springframework.web.util.UriComponents
                    /**
                     * Normalize the path removing sequences like "path/..". Note that
                     * normalization is applied to the full path, and not to individual path
                     * segments.
                     * @see org.springframework.util.StringUtils#cleanPath(String)
                     */
                    // @ts-ignore
                    abstract normalize(): org.springframework.web.util.UriComponents
                    /**
                     * Concatenate all URI components to return the fully formed URI String.
                     * <p>This method does nothing more than a simple concatenation based on
                     * current values. That means it could produce different results if invoked
                     * before vs after methods that can change individual values such as
                     * {@code encode}, {@code expand}, or {@code normalize}.
                     */
                    // @ts-ignore
                    abstract toUriString(): java.lang.String
                    /**
                     * Create a {@link URI} from this instance as follows:
                     * <p>If the current instance is {@link #encode() encoded}, form the full
                     * URI String via {@link #toUriString()}, and then pass it to the single
                     * argument {@link URI} constructor which preserves percent encoding.
                     * <p>If not yet encoded, pass individual URI component values to the
                     * multi-argument {@link URI} constructor which quotes illegal characters
                     * that cannot appear in their respective URI component.
                     */
                    // @ts-ignore
                    abstract toUri(): java.net.URI
                    /**
                     * A simple pass-through to {@link #toUriString()}.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Set all components of the given UriComponentsBuilder.
                     * @since 4.2
                     */
                    // @ts-ignore
                    abstract copyToUriComponentsBuilder(builder: org.springframework.web.util.UriComponentsBuilder): void
                }
            }
        }
    }
}
