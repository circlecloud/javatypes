declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * {@code UriBuilderFactory} that relies on {@link UriComponentsBuilder} for
                 * the actual building of the URI.
                 * <p>Provides options to create {@link UriBuilder} instances with a common
                 * base URI, alternative encoding mode strategies, among others.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see UriComponentsBuilder
                 */
                // @ts-ignore
                class DefaultUriBuilderFactory extends java.lang.Object implements org.springframework.web.util.UriBuilderFactory {
                    /**
                     * Default constructor without a base URI.
                     * <p>The target address must be specified on each UriBuilder.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructor with a base URI.
                     * <p>The given URI template is parsed via
                     * {@link UriComponentsBuilder#fromUriString} and then applied as a base URI
                     * to every UriBuilder via {@link UriComponentsBuilder#uriComponents} unless
                     * the UriBuilder itself was created with a URI template that already has a
                     * target address.
                     * @param baseUriTemplate the URI template to use a base URL
                     */
                    // @ts-ignore
                    constructor(baseUriTemplate: string)
                    /**
                     * Variant of {@link #DefaultUriBuilderFactory(String)} with a
                     * {@code UriComponentsBuilder}.
                     */
                    // @ts-ignore
                    constructor(baseUri: org.springframework.web.util.UriComponentsBuilder)
                    /**
                     * Set the encoding mode to use.
                     * <p>By default this is set to {@link EncodingMode#TEMPLATE_AND_VALUES
                     * EncodingMode.TEMPLATE_AND_VALUES}.
                     * <p><strong>Note:</strong> In 5.1 the default was changed from
                     * {@link EncodingMode#URI_COMPONENT EncodingMode.URI_COMPONENT}.
                     * Consequently the {@code WebClient}, which relies on the built-in default
                     * has also been switched to the new default. The {@code RestTemplate}
                     * however sets this explicitly to {@link EncodingMode#URI_COMPONENT
                     * EncodingMode.URI_COMPONENT} explicitly for historic and backwards
                     * compatibility reasons.
                     * @param encodingMode the encoding mode to use
                     */
                    // @ts-ignore
                    setEncodingMode(encodingMode: org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode): void
                    /**
                     * Return the configured encoding mode.
                     */
                    // @ts-ignore
                    getEncodingMode(): org.springframework.web.util.DefaultUriBuilderFactory.EncodingMode
                    /**
                     * Provide default URI variable values to use when expanding URI templates
                     * with a Map of variables.
                     * @param defaultUriVariables default URI variable values
                     */
                    // @ts-ignore
                    setDefaultUriVariables(defaultUriVariables: java.util.Map<java.lang.String, any>): void
                    /**
                     * Return the configured default URI variable values.
                     */
                    // @ts-ignore
                    getDefaultUriVariables(): java.util.Map<java.lang.String, ?>
                    /**
                     * Whether to parse the input path into path segments if the encoding mode
                     * is set to {@link EncodingMode#URI_COMPONENT EncodingMode.URI_COMPONENT},
                     * which ensures that URI variables in the path are encoded according to
                     * path segment rules and for example a '/' is encoded.
                     * <p>By default this is set to {@code true}.
                     * @param parsePath whether to parse the path into path segments
                     */
                    // @ts-ignore
                    setParsePath(parsePath: boolean): void
                    /**
                     * Whether to parse the path into path segments if the encoding mode is set
                     * to {@link EncodingMode#URI_COMPONENT EncodingMode.URI_COMPONENT}.
                     */
                    // @ts-ignore
                    shouldParsePath(): boolean
                    // @ts-ignore
                    expand(uriTemplate: string, uriVars: java.util.Map<java.lang.String, any>): java.net.URI
                    // @ts-ignore
                    expand(uriTemplate: string, ...uriVars: any[]): java.net.URI
                    // @ts-ignore
                    uriString(uriTemplate: string): org.springframework.web.util.UriBuilder
                    // @ts-ignore
                    builder(): org.springframework.web.util.UriBuilder
                }
            }
        }
    }
}
