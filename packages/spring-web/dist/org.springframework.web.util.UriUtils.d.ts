declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Utility methods for URI encoding and decoding based on RFC 3986.
                 * <p>There are two types of encode methods:
                 * <ul>
                 * <li>{@code "encodeXyz"} -- these encode a specific URI component (e.g. path,
                 * query) by percent encoding illegal characters, which includes non-US-ASCII
                 * characters, and also characters that are otherwise illegal within the given
                 * URI component type, as defined in RFC 3986. The effect of this method, with
                 * regards to encoding, is comparable to using the multi-argument constructor
                 * of {@link URI}.
                 * <li>{@code "encode"} and {@code "encodeUriVariables"} -- these can be used
                 * to encode URI variable values by percent encoding all characters that are
                 * either illegal, or have any reserved meaning, anywhere within a URI.
                 * </ul>
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @author Rossen Stoyanchev
                 * @since 3.0
                 * @see <a href="https://www.ietf.org/rfc/rfc3986.txt">RFC 3986</a>
                 */
                // @ts-ignore
                abstract class UriUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Encode the given URI scheme with the given encoding.
                     * @param scheme the scheme to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded scheme
                     */
                    // @ts-ignore
                    public static encodeScheme(scheme: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI scheme with the given encoding.
                     * @param scheme the scheme to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded scheme
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeScheme(scheme: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI authority with the given encoding.
                     * @param authority the authority to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded authority
                     */
                    // @ts-ignore
                    public static encodeAuthority(authority: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI authority with the given encoding.
                     * @param authority the authority to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded authority
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeAuthority(authority: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI user info with the given encoding.
                     * @param userInfo the user info to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded user info
                     */
                    // @ts-ignore
                    public static encodeUserInfo(userInfo: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI user info with the given encoding.
                     * @param userInfo the user info to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded user info
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeUserInfo(userInfo: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI host with the given encoding.
                     * @param host the host to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded host
                     */
                    // @ts-ignore
                    public static encodeHost(host: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI host with the given encoding.
                     * @param host the host to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded host
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeHost(host: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI port with the given encoding.
                     * @param port the port to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded port
                     */
                    // @ts-ignore
                    public static encodePort(port: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI port with the given encoding.
                     * @param port the port to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded port
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodePort(port: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI path with the given encoding.
                     * @param path the path to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded path
                     */
                    // @ts-ignore
                    public static encodePath(path: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI path with the given encoding.
                     * @param path the path to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded path
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodePath(path: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI path segment with the given encoding.
                     * @param segment the segment to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded segment
                     */
                    // @ts-ignore
                    public static encodePathSegment(segment: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI path segment with the given encoding.
                     * @param segment the segment to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded segment
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodePathSegment(segment: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI query with the given encoding.
                     * @param query the query to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded query
                     */
                    // @ts-ignore
                    public static encodeQuery(query: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI query with the given encoding.
                     * @param query the query to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded query
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeQuery(query: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the given URI query parameter with the given encoding.
                     * @param queryParam the query parameter to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded query parameter
                     */
                    // @ts-ignore
                    public static encodeQueryParam(queryParam: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI query parameter with the given encoding.
                     * @param queryParam the query parameter to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded query parameter
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeQueryParam(queryParam: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Encode the query parameters from the given {@code MultiValueMap} with UTF-8.
                     * <p>This can be used with {@link UriComponentsBuilder#queryParams(MultiValueMap)}
                     * when building a URI from an already encoded template.
                     * <pre class="code">
                     * MultiValueMap&lt;String, String&gt; params = new LinkedMultiValueMap<>(2);
                     * // add to params...
                     * ServletUriComponentsBuilder.fromCurrentRequest()
                     * .queryParams(UriUtils.encodeQueryParams(params))
                     * .build(true)
                     * .toUriString();
                     * </pre>
                     * @param params the parameters to encode
                     * @return a new {#code MultiValueMap} with the encoded names and values
                     * @since 5.2.3
                     */
                    // @ts-ignore
                    public static encodeQueryParams(params: object): object
                    /**
                     * Encode the given URI fragment with the given encoding.
                     * @param fragment the fragment to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded fragment
                     */
                    // @ts-ignore
                    public static encodeFragment(fragment: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode the given URI fragment with the given encoding.
                     * @param fragment the fragment to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded fragment
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeFragment(fragment: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Variant of {@link #encode(String, Charset)} with a String charset.
                     * @param source the String to be encoded
                     * @param encoding the character encoding to encode to
                     * @return the encoded String
                     */
                    // @ts-ignore
                    public static encode(source: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Encode all characters that are either illegal, or have any reserved
                     * meaning, anywhere within a URI, as defined in
                     * <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>.
                     * This is useful to ensure that the given String will be preserved as-is
                     * and will not have any o impact on the structure or meaning of the URI.
                     * @param source the String to be encoded
                     * @param charset the character encoding to encode to
                     * @return the encoded String
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encode(source: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Convenience method to apply {@link #encode(String, Charset)} to all
                     * given URI variable values.
                     * @param uriVariables the URI variable values to be encoded
                     * @return the encoded String
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeUriVariables(uriVariables: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, java.lang.String | string>
                    /**
                     * Convenience method to apply {@link #encode(String, Charset)} to all
                     * given URI variable values.
                     * @param uriVariables the URI variable values to be encoded
                     * @return the encoded String
                     * @since 5.0
                     */
                    // @ts-ignore
                    public static encodeUriVariables(...uriVariables: java.lang.Object[] | any[]): any[]
                    /**
                     * Decode the given encoded URI component.
                     * <p>See {@link StringUtils#uriDecode(String, Charset)} for the decoding rules.
                     * @param source the encoded String
                     * @param encoding the character encoding to use
                     * @return the decoded value
                     * @throws IllegalArgumentException when the given source contains invalid encoded sequences
                     * @see StringUtils#uriDecode(String, Charset)
                     * @see java.net.URLDecoder#decode(String, String)
                     */
                    // @ts-ignore
                    public static decode(source: java.lang.String | string, encoding: java.lang.String | string): string
                    /**
                     * Decode the given encoded URI component.
                     * <p>See {@link StringUtils#uriDecode(String, Charset)} for the decoding rules.
                     * @param source the encoded String
                     * @param charset the character encoding to use
                     * @return the decoded value
                     * @throws IllegalArgumentException when the given source contains invalid encoded sequences
                     * @since 5.0
                     * @see StringUtils#uriDecode(String, Charset)
                     * @see java.net.URLDecoder#decode(String, String)
                     */
                    // @ts-ignore
                    public static decode(source: java.lang.String | string, charset: java.nio.charset.Charset): string
                    /**
                     * Extract the file extension from the given URI path.
                     * @param path the URI path (e.g. "/products/index.html")
                     * @return the extracted file extension (e.g. "html")
                     * @since 4.3.2
                     */
                    // @ts-ignore
                    public static extractFileExtension(path: java.lang.String | string): string
                }
            }
        }
    }
}
