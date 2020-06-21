declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Default implementation of {@link UriTemplateHandler} based on the use of
                 * {@link UriComponentsBuilder} for expanding and encoding variables.
                 * <p>There are also several properties to customize how URI template handling
                 * is performed, including a {@link #setBaseUrl baseUrl} to be used as a prefix
                 * for all URI templates and a couple of encoding related options &mdash;
                 * {@link #setParsePath parsePath} and {@link #setStrictEncoding strictEncoding}
                 * respectively.
                 * @author Rossen Stoyanchev
                 * @since 4.2
                 * @deprecated as of 5.0 in favor of {#link DefaultUriBuilderFactory}.
                 *  <p><strong>Note:</strong> {@link DefaultUriBuilderFactory} has a different
                 *  default for the {@link #setParsePath(boolean) parsePath} property (from
                 *  false to true).
                 */
                // @ts-ignore
                class DefaultUriTemplateHandler extends org.springframework.web.util.AbstractUriTemplateHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Whether to parse the path of a URI template string into path segments.
                     * <p>If set to {@code true} the URI template path is immediately decomposed
                     * into path segments any URI variables expanded into it are then subject to
                     * path segment encoding rules. In effect URI variables in the path have any
                     * "/" characters percent encoded.
                     * <p>By default this is set to {@code false} in which case the path is kept
                     * as a full path and expanded URI variables will preserve "/" characters.
                     * @param parsePath whether to parse the path into path segments
                     */
                    // @ts-ignore
                    public setParsePath(parsePath: boolean): void
                    /**
                     * Whether the handler is configured to parse the path into path segments.
                     */
                    // @ts-ignore
                    public shouldParsePath(): boolean
                    /**
                     * Whether to encode characters outside the unreserved set as defined in
                     * <a href="https://tools.ietf.org/html/rfc3986#section-2">RFC 3986 Section 2</a>.
                     * This ensures a URI variable value will not contain any characters with a
                     * reserved purpose.
                     * <p>By default this is set to {@code false} in which case only characters
                     * illegal for the given URI component are encoded. For example when expanding
                     * a URI variable into a path segment the "/" character is illegal and
                     * encoded. The ";" character however is legal and not encoded even though
                     * it has a reserved purpose.
                     * <p><strong>Note:</strong> this property supersedes the need to also set
                     * the {@link #setParsePath parsePath} property.
                     * @param strictEncoding whether to perform strict encoding
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setStrictEncoding(strictEncoding: boolean): void
                    /**
                     * Whether to strictly encode any character outside the unreserved set.
                     */
                    // @ts-ignore
                    public isStrictEncoding(): boolean
                    // @ts-ignore
                    expandInternal(uriTemplate: java.lang.String | string, uriVariables: java.util.Map<java.lang.String | string, any>): java.net.URI
                    // @ts-ignore
                    expandInternal(uriTemplate: java.lang.String | string, ...uriVariables: java.lang.Object[] | any[]): java.net.URI
                    /**
                     * Create a {@code UriComponentsBuilder} from the URI template string.
                     * This implementation also breaks up the path into path segments depending
                     * on whether {@link #setParsePath parsePath} is enabled.
                     */
                    // @ts-ignore
                    initUriComponentsBuilder(uriTemplate: java.lang.String | string): org.springframework.web.util.UriComponentsBuilder
                    // @ts-ignore
                    expandAndEncode(builder: org.springframework.web.util.UriComponentsBuilder, uriVariables: java.util.Map<java.lang.String | string, any>): org.springframework.web.util.UriComponents
                    // @ts-ignore
                    expandAndEncode(builder: org.springframework.web.util.UriComponentsBuilder, uriVariables: java.lang.Object[] | any[]): org.springframework.web.util.UriComponents
                }
            }
        }
    }
}
