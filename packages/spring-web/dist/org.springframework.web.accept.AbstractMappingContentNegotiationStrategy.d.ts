declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * Base class for {@code ContentNegotiationStrategy} implementations with the
                 * steps to resolve a request to media types.
                 * <p>First a key (e.g. "json", "pdf") must be extracted from the request (e.g.
                 * file extension, query param). The key must then be resolved to media type(s)
                 * through the base class {@link MappingMediaTypeFileExtensionResolver} which
                 * stores such mappings.
                 * <p>The method {@link #handleNoMatch} allow sub-classes to plug in additional
                 * ways of looking up media types (e.g. through the Java Activation framework,
                 * or {@link javax.servlet.ServletContext#getMimeType}. Media types resolved
                 * via base classes are then added to the base class
                 * {@link MappingMediaTypeFileExtensionResolver}, i.e. cached for new lookups.
                 * @author Rossen Stoyanchev
                 * @since 3.2
                 */
                // @ts-ignore
                class AbstractMappingContentNegotiationStrategy extends org.springframework.web.accept.MappingMediaTypeFileExtensionResolver implements org.springframework.web.accept.ContentNegotiationStrategy {
                    /**
                     * Create an instance with the given map of file extensions and media types.
                     */
                    // @ts-ignore
                    constructor(mediaTypes: java.util.Map<java.lang.String, org.springframework.http.MediaType>)
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Whether to only use the registered mappings to look up file extensions,
                     * or also to use dynamic resolution (e.g. via {@link MediaTypeFactory}.
                     * <p>By default this is set to {@code false}.
                     */
                    // @ts-ignore
                    setUseRegisteredExtensionsOnly(useRegisteredExtensionsOnly: boolean): void
                    // @ts-ignore
                    isUseRegisteredExtensionsOnly(): boolean
                    /**
                     * Whether to ignore requests with unknown file extension. Setting this to
                     * {@code false} results in {@code HttpMediaTypeNotAcceptableException}.
                     * <p>By default this is set to {@literal false} but is overridden in
                     * {@link PathExtensionContentNegotiationStrategy} to {@literal true}.
                     */
                    // @ts-ignore
                    setIgnoreUnknownExtensions(ignoreUnknownExtensions: boolean): void
                    // @ts-ignore
                    isIgnoreUnknownExtensions(): boolean
                    // @ts-ignore
                    resolveMediaTypes(webRequest: org.springframework.web.context.request.NativeWebRequest): java.util.List<org.springframework.http.MediaType>
                    /**
                     * An alternative to {@link #resolveMediaTypes(NativeWebRequest)} that accepts
                     * an already extracted key.
                     * @since 3.2.16
                     */
                    // @ts-ignore
                    resolveMediaTypeKey(webRequest: org.springframework.web.context.request.NativeWebRequest, key: string): java.util.List<org.springframework.http.MediaType>
                    /**
                     * Extract a key from the request to use to look up media types.
                     * @return the lookup key, or {#code null} if none
                     */
                    // @ts-ignore
                    abstract getMediaTypeKey(request: org.springframework.web.context.request.NativeWebRequest): java.lang.String
                    /**
                     * Override to provide handling when a key is successfully resolved via
                     * {@link #lookupMediaType}.
                     */
                    // @ts-ignore
                    handleMatch(key: string, mediaType: org.springframework.http.MediaType): void
                    /**
                     * Override to provide handling when a key is not resolved via.
                     * {@link #lookupMediaType}. Sub-classes can take further steps to
                     * determine the media type(s). If a MediaType is returned from
                     * this method it will be added to the cache in the base class.
                     */
                    // @ts-ignore
                    handleNoMatch(request: org.springframework.web.context.request.NativeWebRequest, key: string): org.springframework.http.MediaType
                }
            }
        }
    }
}
